---
author: Onur Arıkan
date: 2024-02-03
title: "I Extended the US Keyboard"
categories: keyboard
---

In Turkey, we use Q keyboard layout (mostly, let's say, almost. Maybe I will write one day about [Turkish F-keyboard layout](https://en.wikibooks.org/wiki/Turkish/Computing_in_Turkish) too.) but with some extensions. In Turkish we have letters `Ç, Ğ, Ş, Ö, Ü, İ/ı` and in some letters, the usage of the derivated letters excel the ones that are derived from. For example, ç is used more than c and so on. In Poland, they use **AltGr** (abbreviation for *Alternate Graphic*) to type letters `ć, ń, ó, ś, ź, ż, ł, ą, ę` When I checked and compared to Turkish, Polish letters with diacritics are less used than the ones they are derived from.

![](/assets/img/kbd_turkish_qwerty.png) 
<div align="center"><sup><sub>Turkish QWERTY layout</sub></sup></div>


In the original QWERTY layout, the rightmost keys are dedicated to punctuations. This comes handy in programming especially because I use square brackets, curly brackets, single and double quotation marks, comparison operators, forward and back slashes, colon and the almighty semicolon. (Although I'm a Pythonista, so I rarely use it 😃)

![](/assets/img/kbd_qwerty.png) 
<div align="center"><sup><sub>US QWERTY layout</sub></sup></div>
  

Pros and Cons of Each Layout
--

The forward slash is useful for me when I type paths in Bash. In my personal Google Drive path tree, I have sometimes depth of 8, 9 or even 10 so when I go that deep by typing these path each time, I spend a significant time to type it. Of course I mostly use tab completion, so I don't need the forward slash all the time. But in the Turkish QWERTY layout, the forward slash is at `+7` (`Shift+7` but I like the [AutoHotkey](https://www.autohotkey.com/docs/v2/Hotkeys.htm#Symbols) representation as it's built upon the old caret notation for Ctrl key and added its own one character representations for the modifier keys. I should also mention about it more in my possible AutoHotkey post.) And I haven't got used to use the `+7` so my hand often goes to the numpad and my right pinky stretches a lot and gets away from the home row of the keyboard, so it makes me lose all of time and momentum when I do it a lot. Although the tab completion in paths reduce this loss, I still need to type the first forward slash to type Unix paths.

So, while I'm typing something in Bash, I try to train myself to use US-QWERTY layout. However, it's still hard for me to use it and memorize all the differently positioned punctuation symbols. In Turkish QWERTY layout, there is a clutter of symbols in `AltGr` or the shift keys in the number row. We have a character for ½ even. I haven't used that character ever. We have the `£` symbol for pound. Also the letters `æ, é or ß`. We don't use them so they serve no purpose in the keyboard.

In total, we have all 94 printable ASCII characters in keyboards and additionally `çÇıİğĞöÖşŞüÜé£½€₺æß` That makes whopping 113 characters. While I agree that Turkish characters are essential and it's sensible to have time as standalone characters, the other ones (maybe other than the Turkish lira symbol ₺) is overkill in my opinion. I don't even say that `^` and `~` are dead keys, which will require them to be typed twice to show on screen.

Extending the US Keyboard Layout
--

When I spent my summer in Poland in 2023, my computer broke down and went to repair for a week and I had to use my girlfriend's laptop and this was my first test with an US-QWERTY layout (With Polish AltGr additions of course) It was nice to see the characters on the keyboard and it made me get used to US-QWERTY layout quicker. To talk with my Turkish friends I still needed the Turkish characters still. While I use the [WinCompose](https://github.com/samhocevar/wincompose) as a primary solution, I also wanted to integrate the Polish solution.

For that, I created a keyboard layout that will not touch the Polish layout but enrich it with Turkish characters instead. So that, when my girlfriend uses her laptop, she won't feel any difference. And in need she could also type the Turkish characters from the keyboard for good measure.

I downloaded [Microsoft Keyboard Layout Creator](https://msklc-guide.github.io/). Although this website isn't official website, it provides the link to the Microsoft official download page and provides an advanced guide. However, the program is straightforward. I determined to add which AltGr layer keys to add and this is the end result:

![](/assets/img/kbd_polish_turkish.png)
<div align="center"><sup><sub>Polish-Turkish QWERTY layout</sub></sup></div>  


You can also download the [.klc file](/assets/us-pl-tr.klc) that creates this keyboard in Microsoft Keyboard Layout Creator.

While I tried to match `ğ` with `g` because `ğ` is derived from `g`, some letters would collide with the Polish ones, such as `ö` vs `ó`, I decided to add the `ö` letter to the AltGr layer of , character because it's the original place of it in Turkish-QWERTY layout. Currently, however, I use a modified layout that prefers `ö` over `ó` and I rely on the [WinCompose](https://github.com/samhocevar/wincompose) solution in Polish.

Conclusion
---

I still think the Turkish-QWERTY has upper hand on these current solutions, they come handy when I write in Turkish and I got used to it so much that my right pinky finger is stretched a lot as a result of using the İ letter a lot. However, when I type English or code in Bash or in my favorite IDE (Integrated Development Environment), I switch to this layout and I still get the perks of Turkish occasionally, without switching any layouts.

Whether I will conquer the Turkish-F layout one day is another topic that keeps me excited. However, I couldn't get better than **20 WPM** so far while I can reach **70-75 WPM** in the traditional QWERTY layout.
