---
layout: post
title: "My Python Coding Habits #3: Embracing `pathlib` Over `os.path`"
date: 2026-07-29
tags:
  - python
  - python-habits
author: Onur Arıkan
---

> Welcome back to my Python coding habits series! This is the third post in the series, you can reach all the posts from this series from the [#python-habits](/tags/python-habits) tag.

In this post, I want to talk about one of my favorite modern Python features: the `pathlib` module. Introduced in Python 3.4 and significantly improved in later versions, `pathlib` replaces the old string-based path juggling with a clean, object-oriented approach. If you're still using `os.path.join()` everywhere, this post is for you.

### The Problem with String Paths

For years, Python developers handled file system paths as plain strings. This meant constantly calling `os.path.join()`, `os.path.dirname()`, `os.path.exists()`, and so on. It works, but it's verbose, error-prone, and feels disconnected from the actual concept of a *path*.

`pathlib` changes this by treating paths as **objects** that know how to behave like paths. A `Path` object carries its own methods, handles separators automatically, and makes your code more readable and less buggy.

### The Basics: Creating and Manipulating Paths

At the heart of `pathlib` is the `Path` class:

```python
from pathlib import Path

# Common ways to create paths
home = Path.home()           # /home/onur or C:\Users\onur
cwd = Path.cwd()             # Current working directory
config = Path('/etc/nginx/nginx.conf')
```

The most beautiful feature is the `/` operator for joining paths:

```python
file = Path.home() / 'projects' / 'myapp' / 'config.yaml'
# Path('/home/onur/projects/myapp/config.yaml')
```

Compare that to the old way:

```python
import os
file = os.path.join('/home/onur/projects', 'myapp', 'config.yaml')
```

The `pathlib` version is not just shorter - it's visually clearer. You read it left-to-right as a path, not as a function call.

`Path` objects also give you easy access to common properties:

```python
p = Path('/home/onur/projects/myapp/config.yaml')

p.name        # 'config.yaml'
p.stem        # 'config'
p.suffix      # '.yaml'
p.parent      # Path('/home/onur/projects/myapp')
p.parents[0]  # Same as parent
p.parents[1]  # Path('/home/onur/projects')
p.parts       # ('/', 'home', 'onur', 'projects', 'myapp', 'config.yaml')
```

### Why `Path(__file__)` Is Essential

One of the most important habits I developed is using `Path(__file__)` to make my scripts **directory-agnostic**.

When you need to load a configuration file, a data file, or a template that lives next to your script, your first instinct might be to use a relative path:

```python
# May fail if the script is run in another directory
with open('config.yaml', 'r') as f:
    config = yaml.safe_load(f)
```

This works only if your current working directory happens to be the same directory as your script. But what if you run your script like this?

```bash
$ python path/to/dir/script.py
```

In this case, the current working directory (`cwd`) is wherever you ran the command from - *not* the script's directory. Your relative `config.yaml` lookup will fail because Python will look for `config.yaml` in your shell's current directory, not in `path/to/dir/`.

This is a classic bug that bites you when you least expect it, especially in CI/CD pipelines or when colleagues run your scripts from different locations.

The fix is simple and robust:

```python
from pathlib import Path

# Resolve to an absolute path, eliminating any symlinks
script_dir = Path(__file__).resolve().parent
config_path = script_dir / 'config.yaml'

with open(config_path, 'r') as f:
    config = yaml.safe_load(f)
```

Now, no matter where you invoke the script from, it will always find `config.yaml` in the same directory as the script itself. I use this pattern so often that I almost never rely on `cwd` for loading project assets.

If you need to go up a directory or two, `parent` makes it trivial:

```python
project_root = Path(__file__).resolve().parent.parent
data_dir = project_root / 'data' / 'raw'
```

### Built-in File I/O

Another reason I love `pathlib` is that `Path` objects can read and write files directly:

```python
config = Path('config.yaml')

# Read the entire file as text
content = config.read_text()

# Read as bytes
binary_data = Path('image.png').read_bytes()

# Write text in one line
Path('output.txt').write_text('Hello, pathlib!')
```

These are not just shorthand - they handle opening and closing the file for you, making them perfect for quick scripts. When you need a real file handle (for example, to pass to `csv.reader` or `json.load`), you can still use `.open()`:

```python
with config.open('r', encoding='utf-8') as f:
    for line in f:
        process(line)
```

### Discovering Files and Directories

`pathlib` makes iterating over directories feel natural:

```python
p = Path('/home/onur/projects')

# List immediate children
for item in p.iterdir():
    if item.is_file():
        print(item.name)

# Find all Python files in this directory
for py_file in p.glob('*.py'):
    print(py_file)

# Recursively find all Python files (replaces os.walk + fnmatch)
for py_file in p.rglob('**/*.py'):
    print(py_file)
```

`rglob` is particularly powerful. I used to write `os.walk()` loops with string matching; now, a single `rglob('**/*.py')` does the same job more readably.

### Cross-Platform by Design

One of the hidden benefits of `pathlib` is cross-platform normalization. When you write:

```python
p = Path('data') / 'raw' / 'input.csv'
```

Python automatically uses the correct separator for the operating system. On Windows, it's `data\raw\input.csv`; on Linux and macOS, it's `data/raw/input.csv`. You don't have to think about it.

Other useful checks and operations:

```python
p.exists()       # True if the path exists
p.is_file()      # True if it's a file
p.is_dir()       # True if it's a directory
p.mkdir(parents=True, exist_ok=True)  # Create dirs, no error if exists
```

The `exist_ok=True` flag is a small detail, but it saves you from writing boilerplate `if not p.exists():` checks.

### Did You Know? `Path` Is PathLike

Since Python 3.6, `Path` objects implement the `os.PathLike` interface. This means you can pass a `Path` object to almost any function that expects a path string:

```python
import json

config_path = Path('config.json')

# Works seamlessly with standard library and most third-party libraries
with open(config_path, 'r') as f:
    data = json.load(f)
```

Most modern libraries - including `pandas`, `Pillow`, and `requests` (when writing to files) - accept `Path` objects natively. If you encounter an older library that strictly expects strings, you can always fall back to `str(config_path)`.

### Goodbye, `shutil` - Starting with Python 3.14

For years, `shutil` was the necessary companion for file operations `pathlib` couldn't do. Starting with Python 3.14, `pathlib.Path` gained `copy()`, `copy_into()`, `move()`, and `move_into()` - eliminating the need for `shutil.copy()`, `shutil.copytree()`, and `shutil.move()` entirely:

```python
# Copy a single file
Path('data.csv').copy('backups/data.csv')

# Recursively copy an entire directory tree
Path('project/').copy('project_backup/')

# Move a file or directory
Path('old_location.txt').move('new_location.txt')

# Copy/move into an existing directory
Path('config.yaml').copy_into('/etc/myapp/')
Path('temp.log').move_into('/var/log/')
```

These methods handle cross-filesystem moves, preserve metadata when requested, and use copy-on-write where the OS supports it. Combined with `Path.walk()` (added in Python 3.12), there's almost nothing left that requires importing `shutil`.

### A Practical Example

Here's a real example from a project working with GTFS transit data. At the top of the script I define `BASE_DIR` from `Path(__file__).parent`, then lay out all directory and file paths as constants:

```python
# Directory paths
BASE_DIR = Path(__file__).parent
GTFS_DATA_DIR = BASE_DIR / "gtfs_data"
INPUT_DIR = BASE_DIR / "input"
OUTPUT_DIR = BASE_DIR / "output"

# File paths
STOPS_PATH = GTFS_DATA_DIR / "stops.txt"
GEOJSON_INPUT_PATH = INPUT_DIR / "input.geojson"
GEOJSON_OUTPUT_PATH = OUTPUT_DIR / "output.geojson"
```

The exact constants change with every script, but the idea stays the same - every path is relative to the script's own location, no assumptions about the working directory.

```python
import csv
import json

# Read stops from a GTFS file
with STOPS_PATH.open(newline='') as f:
    for row in csv.DictReader(f):
        print(row['stop_name'], row['stop_lat'], row['stop_lon'])

# Read input GeoJSON
with GEOJSON_INPUT_PATH.open() as f:
    geojson_data = json.load(f)

# Write processed output
with GEOJSON_OUTPUT_PATH.open('w') as f:
    json.dump(geojson_data, f)
```

### Final Thoughts

The `pathlib` module is one of those Python features that, once you adopt it, you wonder how you ever lived without it. It encourages you to **think in paths, not strings**, which leads to fewer bugs - especially the subtle ones caused by wrong working directories or platform-specific separators.

Next time you reach for `os.path.join()`, pause for a second and consider whether a `Path` object might make your code cleaner, safer, and more readable.
