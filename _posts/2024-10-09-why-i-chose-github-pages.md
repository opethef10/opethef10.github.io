---
author: Onur Arıkan
title: "Why I Chose GitHub Pages for My Blog"
date: 2024-10-09
tags: blog markdown
---

When I decided to start writing a blog, I wanted a platform that felt natural for a programmer to use. That’s why I chose **GitHub Pages**. As a developer, I already use GitHub every day to manage and share code, so hosting my blog there makes perfect sense.

### The Power of GitHub Pages

GitHub Pages allows you to host static websites (like blogs) directly from your GitHub repository. It's free and incredibly easy to maintain. What I love about it is how seamless it is to update: you simply write your content, push it to your repository, and GitHub takes care of publishing the website for you.

The workflow is simple:
1. Write your blog post in a file (using Markdown).
2. Commit your changes to the repository.
3. Push the new commit to GitHub, and your blog post is live!

No extra steps or deployment configurations needed—just push and publish.

### Writing in Markdown

One of the things I appreciate most about GitHub Pages is that it supports **Markdown** for writing blog posts. Markdown is a lightweight markup language that's easy to learn and use. It lets you format text without all the clutter of HTML, making it much faster to write blog posts.

For example, here’s how you can create a header and a list in Markdown:

```markdown
- Easy to write
- Simple to read
- Fast to format
```

The same content written in HTML would be:

```html
<ul>
  <li>Easy to write</li>
  <li>Simple to read</li>
  <li>Fast to format</li>
</ul>
```

Both of these snippets would be rendered as:

- Easy to write
- Simple to read
- Fast to format

With Markdown, I don't have to write a lot of repetitive tags. It simplifies writing and keeps the content more focused on the message than on the markup.

### Syntax Highlighting with Minima

While GitHub Pages handles the hosting and Markdown allows me to write posts effortlessly, I chose the **Minima** theme for its built-in **syntax highlighting** feature. Since I often share code examples in my posts, syntax highlighting helps make the code clearer and easier to read.

Here’s a more varied example of Python code using functions, numbers, loops, and other standard keywords:

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

for i in range(5):
    print(f"Factorial of {i} is {factorial(i)}")

# Using a list comprehension and lambda
squares = list(map(lambda x: x**2, range(10)))
print(squares)

# Handling exceptions
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Oops, division by zero!")
```

The **Minima** theme will highlight keywords like `def`, `return`, `if`, `else`, `for`, and `try` in different colors, making the logic flow clearer.

And it’s not just limited to Python! Here's a JavaScript example to show the versatility of syntax highlighting on GitHub Pages:

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);

console.log(greet("World"));
console.log(doubled);
```

And an example in C++:

```cpp
#include <iostream>
using namespace std;

int main() {
    int x = 5;
    cout << "The value of x is: " << x << endl;
    return 0;
}
```

With GitHub Pages, these code examples will automatically get the proper syntax highlighting, making it easier for readers to follow along with the examples, regardless of the language.

### Why GitHub Pages is Ideal for Programmers

GitHub Pages is perfect for developers who want a quick, efficient way to create and publish content. It integrates with the GitHub platform, supports Markdown, and makes deployment as simple as pushing a commit. If you're comfortable with Git and want a no-fuss way to maintain a blog, **GitHub Pages** is an excellent choice.

For those who love sharing code, features like syntax highlighting (thanks to themes like Minima) add extra polish to your technical posts. Whether you're documenting your projects, writing tutorials, or just sharing thoughts, GitHub Pages is the platform that fits right into the workflow of any developer.

