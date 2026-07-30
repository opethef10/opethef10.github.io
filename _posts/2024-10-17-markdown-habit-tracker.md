---
layout: post
title: "Tracking Habits with Ease: A Python Markdown Generator"
date: 2024-10-17
tags:
  - python
  - markdown
author: Onur Arıkan
---

In today's fast-paced world, the ability to manage our habits effectively is crucial for personal growth and well-being. Habits shape our daily lives and ultimately influence our long-term goals. Whether it's exercising regularly, reading more books, or developing a new skill, tracking our habits helps us maintain focus and accountability.

I started paying attention to habit management a few years ago when I realized how much having daily routines impacted my productivity and mental health.
Initially, I relied on traditional methods like journaling to jot down my habits, but I often struggled with some structural problems.

Over time, I explored various apps and digital solutions. I used many Android applications over the years, and even Google Sheets to create a custom tracker. Each solution had its strengths, but I often felt overwhelmed by the lack of a system.

An Android app can be great to track your habits, maybe they will remind you to mark your habits, they will send you a notification based on whether it's a daily or weekly or even a biweekly habit. But I didn't have a full control over my data. 

Well, I am not a guy who is obsessed over privacy of my data and such concerns that people usually have. I don't think I am that important especially in such small unimportant personal data. The problem is different. I can use the apps only in the way how an app creator wanted me to use. That is something that kills my flexibility. I would like to analyze my habit data in a way I want to. Maybe there is a specific metric I am curious about but I am bounded to the app's capabilities.

Similarly, keeping a Google Sheets by myself to track each habit wasn't sustainable. Yes I am more flexible and I can manage my own data and surely it's great to create visuals and make some calculations. But with the growing and shrinking set of my habits, i realized in no time that it was not that easy to handle it.

I am a programmer. Specifically one that is obsessed with data structures. With a structured data, I can manipulate it however I want and get the results in the way I want. I like using plain text data structures like JSON or YAML, which allow me to manipulate and analyze my data more freely. And for the documentation purposes I became the fond of Markdown.

Of course, it was a tough task to decide managing my own data, along with structuring this data by myself. But I see this as a journey. It's been 4-5 years since I first started to have habits in a systemical way to improve my life quality and I still have a long way to go. I don't say that I have found the perfect way but I am feeling glad that along with my habits, I am getting better each day perfecting my system about how I approach life.

> Over the years I became more of a plain text enthusiast. I would like to enhance this enthusiasm in a blog post on its own. But for now, I think I would like to mention [No Boilerplate's](https://www.youtube.com/@NoBoilerplate) video [The Unreasonable Effectiveness Of Plain Text](https://www.youtube.com/watch?v=WgV6M1LyfNY) that may help you understand the system I wanted to build.

Firstly I started to keep a Markdown table for each habit. These tables represented each day of a year divided by months and the days of a month. Having separate files for each habit and having a visual representation was good. After all, this idea was the extension of what I was trying to do in Google Sheets. But that was also hard to maintain after some time. After all, I was still managing my data visualization manually and lacked a standard.

Then came the next step. I started to keep my each habit in a YAML file, with only a list of dates. That was actually a huge drawback from using the Markdown tables, considering that visualization is the core of the tracking. But it was easier the type the data in this way at least. And I already had a plan my mind.

And today, I managed to create a Python script that generates a markdown table to track my daily habit completions. The idea is simple. The markdown tables are created dynamically by the changing data and it can be saved if I would like to share them with friends or community members who might be interested in joining me on my journey.

## How It Works

The script requires a YAML file containing the dates when you’ve completed your habits:

```yaml
# reading.yaml
- 2024-01-03
- 2024-10-24
- 2024-10-31
```

Here’s a brief overview of the main features:

- **Weekly View**: This format displays each week, with rows representing the days of the week starting from Monday. This layout allows for easy weekly reflections and planning.
- **Monthly View**: This format provides a broader perspective, with months as columns and days as rows, giving a clear picture of your habit consistency over time.
- **Custom Emojis**: You can mark your completed habits with any emoji you choose (the default is a checkmark ✅). This personalization adds a bit of fun and encouragement to the tracking.
- **Flexible Year Selection**: By specifying a year, you can focus on your habits for a particular timeframe. If you don’t specify, the current year is used by default.

### Monthly View Example:
```markdown
| 2024 | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1  |     |     |     |     |     |     |     |     |     |     |     |     |
| 2  |     |     |     |     |     |     |     |     |     |     |     |     |
| 3  | ✅  |     |     |     |     |     |     |     |     |     |     |     |
...
```

| 2024 | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1  |     |     |     |     |     |     |     |     |     |     |     |     |
| 2  |     |     |     |     |     |     |     |     |     |     |     |     |
| 3  | ✅  |     |     |     |     |     |     |     |     |     |     |     |


### Weekly View Example:
```markdown
| 2024 | Mon | Tue | Wed | Thu | Fri | Sat | Sun |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 01/01 |     |     | ✅  |     |     |     |     |
| 08/01 |     |     |     |     |     |     |     |
...
 
```

| 2024 | Mon | Tue | Wed | Thu | Fri | Sat | Sun |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 01/01 |     |     | ✅  |     |     |     |     |
| 08/01 |     |     |     |     |     |     |     |


For those interested in the technical details or looking to set up this script, check out the [README file on GitHub](https://github.com/opethef10/habit_tracker) Here you’ll find everything you need to install and run the script, along with examples to get you started.

## Conclusion

This habit tracker not only helps me visualize my progress but also encourages me to stay consistent. It’s a straightforward tool that can be tailored to individual needs, and I hope it resonates with others looking for a similar solution.

By transforming how we track our habits, I believe we can create a more positive, encouraging environment for self-improvement. Happy tracking!
