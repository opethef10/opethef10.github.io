---
layout: post
title: "My Python Coding Habits #2: Using `if __name__ == '__main__'`"
date: 2024-10-16
tags:
  - python
  - python-habits
author: Onur Arıkan
---

>Welcome back to my Python coding habits series! This is the second post in of the series, you can reach all the posts from this series from the [#python-habits](/tags/python-habits) tag. 

In this post, I want to talk about one of the most common and essential idioms in Python: the `if __name__ == '__main__'` construct. This small piece of code serves a crucial role when writing Python scripts and modules, and understanding it is vital for any Python programmer.

### What is `__name__`?

In Python, every module (a `.py` file) has a special built-in variable called `__name__`. The value of `__name__` changes depending on how the file is being used.

- When a Python file is **run as a script**, the value of `__name__` is set to `"__main__"`.
- When a file is **imported as a module** in another script, the `__name__` variable is set to the module’s name (usually the name of the file without the `.py` extension).

### The `if __name__ == '__main__'` Construct

The `if __name__ == '__main__'` construct checks whether the current file is being executed as a standalone program. If it is, the code inside this block runs. If the file is being imported as a module, the block of code inside this condition is skipped.

Here’s a simple example:

```python
def greet():
    print("Hello from the greet function!")

if __name__ == "__main__":
    print("This script is being run directly!")
    greet()
```

If you run this file directly, the output will be:

```
This script is being run directly!
Hello from the greet function!
```

But if you import this script into another file, for example:

```python
import my_script

my_script.greet()
```

The output will be:

```
Hello from the greet function!
```

Notice that the line `"This script is being run directly!"` is not printed because the `if __name__ == "__main__"` block was skipped.

### Why Is It Important?

This construct is critical for writing reusable code. It allows you to separate **executable code** from **importable code**. For example, if you’re writing a utility library, you might want to include a test or demonstration of how the functions work when the script is run directly. However, when someone imports your module, they wouldn’t want the test code to execute automatically.

Also, if you have print statements or other executable code in your file, they will **run automatically** when the module is imported, possibly causing unwanted behavior. For instance, printing messages or running tests when you just want to use a function from the module could be quite frustrating.

#### Context 1: Running the Script Directly

When you run a Python script directly from the command line:

```
$ python my_script.py
```

The file is executed, and the `__name__` variable is set to `"__main__"`, allowing any code inside the `if __name__ == "__main__"` block to run. This is useful for scripts that are meant to be executed as standalone programs.

#### Context 2: Importing as a Module

If the same file is imported into another Python file:

```python
import my_script
```

The value of `__name__` in `my_script.py` will be `"my_script"` (or the name of the module), meaning that any code inside the `if __name__ == "__main__"` block will **not** run. This is essential for writing modules that can be both **run directly** and **imported** without side effects.

### Context 3: Running as a Module with the `-m` Option

Another use case is when you run a Python module using the `-m` option:

```
$ python -m my_module
```

In this case, Python executes the `__main__.py` file inside the module. The value of `__name__` is still set to `"__main__"`, allowing you to use the same `if __name__ == "__main__"` block. This is incredibly useful for making **command-line interfaces (CLI)** from your Python modules.

Let’s say you have a folder structure like this:

```
my_module/
    __init__.py
    __main__.py
    utils.py
```

If you include the `if __name__ == "__main__"` block inside the `__main__.py` file, you can make your module behave like an executable program:

```python
# __main__.py
from utils import greet

if __name__ == "__main__":
    greet()
```

Then, you can run it like this:

```
$ python -m my_module
```

And the output will be:

```
Hello from the greet function!
```

### Useful for Command-Line Programs

The `if __name__ == "__main__"` construct is particularly useful when you’re developing Python scripts that can be run from the command line. It allows you to keep your script executable while still making it easy to import the same functions into another program without running the main code unintentionally.

For example, a Python script that parses command-line arguments might look like this:

```python
import argparse

def parse_args():
    parser = argparse.ArgumentParser(description="A simple CLI tool.")
    parser.add_argument("name", help="Name of the person to greet")
    return parser.parse_args()

def greet(name):
    print(f"Hello, {name}!")

if __name__ == "__main__":
    args = parse_args()
    greet(args.name)
```

Now you can use this script as a command-line tool:

```
$ python my_script.py John
Hello, John!
```

Or you can import the `greet` function into another script without worrying about the argument parsing code running unintentionally.

### More on the `-m` Option

One of the great things about Python is that many modules can be run directly from the command line using the `-m` option. This allows you to run the module as a script, which can be incredibly useful for built-in tools or custom scripts.

Let’s look at a few examples:

- **`python -m http.server`**: This command spins up a basic HTTP server in your current directory. It’s a handy way to share files or test web applications locally without needing to install any additional software.

```bash
$ python -m http.server 8000
Serving HTTP on :: port 8000 (http://[::]:8000/) ...
```

- **`python -m json.tool`**: This module is often used to format (or "pretty-print") JSON, making it more readable. But did you know that `json.tool` also acts as a **JSON validator**? If the input JSON is invalid, it will return an error.

Let’s take a look at an example of valid JSON:

```bash
$ echo '{"name": "Onur", "age": 25}' | python -m json.tool
{
    "name": "Onur",
    "age": 25
}
```

Now, let’s see what happens with invalid JSON:

```bash
$ echo '{"name": "Onur", "age": 25,' | python -m json.tool
Expecting property name enclosed in double quotes: line 1 column 24 (char 23)
```

The missing closing bracket causes `json.tool` to throw an error, helping you quickly catch formatting mistakes!

- **`python -m rich.markdown`**: If you have the `rich` library installed, you can use it to render Markdown beautifully right from the command line:

```bash
$ echo "# Hello, World!" | python -m rich.markdown
```

This displays formatted Markdown in the terminal, with colors and styling, making it much easier to visualize.

#### Did you know that `pip` can also be run with the `-m` option?

When you install packages using `pip`, you’re technically running a module via Python’s `-m` flag! For example:

```bash
$ python -m pip install requests
```

This command runs the `pip` module, which handles installing packages and managing dependencies. The `-m` option for `pip` works exactly the same as it does for other modules, and it can be a handy way to ensure you're running `pip` with the correct version of Python, especially if you have multiple versions installed.

### Why I Don’t Like Using a `main()` Function

I’ve noticed that some programmers, especially those coming from languages like C, tend to wrap their Python code inside a `main()` function and then call it within the `if __name__ == '__main__'` block, like this:

```python
def main():
    print("This is the main function.")

if __name__ == "__main__":
    main()
```

In C, writing a `main()` function is essential because that’s where the execution starts. The `main()` function acts as the entry point for any C program. However, in Python, **there’s no such necessity**. Python is an interpreted language, meaning the interpreter starts reading and executing the code **line by line** from the top of the file. So, any imports and function definitions are processed before the interpreter reaches the executable part of the code.

To separate the executable portion of the code from function definitions, you don’t need a `main()` function. The `if __name__ == '__main__'` construct already serves this purpose by ensuring that the executable part of the code only runs when the script is executed directly, not when it’s imported as a module.

Here’s why I personally don’t like the `main()` function approach in Python:

- **It feels too much like C-style programming**, where you’re forcing a structure that’s necessary in C but redundant in Python.
- Python's flexibility and simplicity allow for a more direct and readable approach, where you can just place the executable code within the `if __name__ == '__main__'` block, without wrapping everything in a separate function.
- **It prevents you from running the script interactively and inspecting variables**. One of Python’s strengths is that after executing a script, you can drop into an interactive session and inspect the variables and objects created. When all the code is wrapped inside a `main()` function, those variables stay local to the function and are not accessible in the global scope.

To me, using the `main()` function feels unnecessary and unpythonic. By keeping the executable code under `if __name__ == "__main__"`, you already achieve the desired behavior without losing the interactive nature of Python.

But of course, this is just **a personal preference** of mine. I don’t enforce this, and I know some people like to structure their code in this way for readability or consistency with other languages. It’s up to you!

This way, the point is clear that while it's your preference, you're not suggesting that it's wrong to use a `main()` function in Python.

### Final Thoughts

The `if __name__ == "__main__"` construct is a simple yet powerful feature in Python that gives you control over how your script behaves when run directly or imported as a module. It enables you to write reusable, modular code that’s easy to test and maintain, while still allowing you to add functionality for standalone execution. 

Next time you write a Python script, consider adding this construct if you think it might be imported elsewhere or run as part of a larger project.
