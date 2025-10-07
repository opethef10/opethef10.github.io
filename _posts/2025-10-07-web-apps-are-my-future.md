---
author: Onur Arıkan
title: "Web Apps are My Future"
date: 2025-10-07
tags:
  - python
  - pwa
  - webapp
  - github-pages
---

The title could have been **Web Apps are the Future**, but that would sound like I'm trying to predict the direction of the entire tech industry. I'm not here to make grand statements about where web or mobile development is headed. I also don't want to use a clickbait title that promises something far beyond my own influence. What I _can_ say is that, for the foreseeable future, I see myself deeply involved in the world of web apps, especially progressive web apps.

## What is a Web App?
In the simplest terms, a web app is an application that runs inside a web browser. Unlike a desktop or mobile app, which requires you to install the application, you type a URL and the app is there. This doesn't mean, however, every web site is a web application. Some web sites include static content, such as informational pages, a blog page like this one or a restaurant's menu. The interaction is minimal, usually limited to a few clicks or some scrolling.

A web app, on the other hand, is about *doing* something. It could be something as big as Google Docs or as small as a to-do app. You're not just reading, clicking or scrolling. You're interacting with the page, manipulating it with your own input to get something useful out of it.

## My History as a Developer
I started programming as a Python developer. At the beginning, I spent a lot of time in front of the terminal, creating small programs that take input from standard input and print to standard output. After spending time with <abbr title="Command Line Interface">CLI</abbr> applications, I realized that this newbie-like approach to programming doesn't really apply in the real world. No one prompts you using `input()` function and returns a value with a `print()`.

Then I came across <abbr title="Command Line Interface">CLI</abbr> arguments. To make it less abstract, let me go along with an example: A small idea that started from curiosity and turned into a practical tool I still use. It's an Elo rating calculator. The Elo rating system, which is most famously used in chess, gives each player a numerical score that represents their skill. After every match, the winner gains points and the loser loses some, depending on how far apart their ratings were. If a lower-rated player beats a much higher-rated one, they gain more points and that's the essence of it.

Although it's a very simple calculation to make an app - whether it's a <abbr title="Command Line Interface">CLI</abbr> app or a web app - out of it, I need this calculation every once in a while playing [Spendee](https://spendee.mattle.online), a clone of the popular board game Splendor. Elo rating system is used in this online multiplayer game and I was curious about my score after the game regardless of the result of the game, whether it's a loss or a win.

I could easily search for Elo rating calculator in Google but the pages are too cluttered with SEO oriented text, cookie banners and so on. They are surely nothing but minimalistic, which is something that I always go for in my life, especially while creating applications. I want something, I give what is needed and it returns me what I need.

## CLI App for Elo Rating
For this part, the full source code can be seen in my [Github](https://github.com/opethef10/elo_calculator/blob/main/elo_calculator.py). The code is well commented and the documentation is self-explanatory. Elo calculation function takes arguments from command line, not from the standard input, uses the simple formula for the rating calculation and prints it to the screen.

Let's run this code in command line:
```bash
python elo_calculator.py 1500 1400 1 40
```
Here, `1500` and `1400` are the players' ratings, `1` means the first player won, and `40` is the K-factor, which controls how big the rating change is.

It returns:
```
Initial ratings: 1500, 1400
Gain: 14
New ratings: 1514, 1386
```

The basic idea here is that you give the necessary data and you get what you need. Think about the `elo` function in the Python script:

```python
def elo(rating1, rating2, score=1, K=DEFAULT_K):
```

In the command line, however, they are separated by spaces and back in the day it made so much sense as it was close to how humans speak while giving an order.

```bash
copy file1 file2
```
Let's look at this command: `copy` here is a program that copies a file from one place to another and file1 and file2 are arguments that show the source and the destination. It's for sure more human readable and easily machine parsable compared to this syntax:
```python
copy(file1, file2)
```

## Distribution Problem for CLI Apps
Writing <abbr title="Command Line Interface">CLI</abbr> apps in Python is very simple and portable, especially for such small apps that has no dependency except Python. You push your <abbr title="Command Line Interface">CLI</abbr> app to Github, give instructions for people to use, they pull the code from Github to their machines and they run the app, it's simple for people who are in the IT world.

However, not everyone is in the IT world and people are used to download an .exe and install them with double click, speedclicking the Next button, selecting the "I have read this aggreement" box for the 20 page document in a second.
![](/assets/img/github_where_exe.png)

Honestly, that was the problem when I wanted to share my earliest projects, I shipped them in [Repl.it](https://repl.it) back in the day, but command line imitation on this website was buggy and was not the best when it comes to take an input, especially if it was a mobile device. That's why I used cxFreeze to wrap my [Flagsweeper](https://github.com/opethef10/Flagsweeper) game to create an installable exe.

## Web Apps Don't Need Distribution
That's where web apps shine. You don't have to tell anyone to install Python, open a terminal, or run a command. You just give them a link. The browser takes care of everything.

Instead of sharing a `.exe` or project folder, you deploy your app once and anyone can use it instantly. Whether it's built with heavy web frameworks or just static HTML and JavaScript, it's accessible from anywhere without any setup.

It's the same idea as before: your program is still there, just running on the web instead of your local machine.

## Elo Calculator Web App
Let's look at the [Elo Calculator Web App](https://elo.onurarikan.dev) that I created recently. The code is open source in my [Github](https://github.com/opethef10/elo_calculator/tree/gh-pages) and I published this page using Github Pages without using any hosting or any server.

The idea is simple: the four arguments of the Elo rating function are presented as HTML inputs, and the results are calculated automatically whenever any of the inputs change.

It is quite minimalistic, no distractions and everything fits nicely on a desktop browser screen. The app is also responsive and mobile-friendly, which is a big advantage now that most web browsing happens on mobile devices.

One neat thing about this app is that it's installable. You can click the **“Install as Web App”** button in the bottom-right corner of the browser and add it to your device just like a native app.

Thanks to being a Progressive Web App (<abbr title="Progressive Web App">PWA</abbr>), it also works offline. Once installed, you can open it anywhere, even without an internet connection, and the calculator will still function exactly the same.

Another advantage of a web app like this is how easy it is to share and use compared to traditional mobile apps. You don't need to go through the Play Store or App Store, wait for approval, or ask users to download and install a large package. One link is enough for anyone to open it on their phone, tablet, or computer.

With just a few clicks, it can even be installed on a device like a native app, and thanks to <abbr title="Progressive Web App">PWA</abbr> support, it works offline as well. This makes web apps a lightweight, frictionless alternative for small tools and utilities, without sacrificing accessibility or convenience.

## Why Web Apps Are My Future
For me, web apps represent the perfect balance between simplicity and accessibility. They let me take ideas, like my Elo calculator, and make them instantly usable for anyone, without worrying about installations or platform limitations. This immediacy, combined with the ability to make apps installable and offline-capable with <abbr title="Progressive Web App">PWA</abbr>, is exactly the kind of environment where I want to build tools. That's why, for the foreseeable future, I see myself deeply involved in creating web apps: they let me focus on ideas and interaction rather than distribution headaches.
