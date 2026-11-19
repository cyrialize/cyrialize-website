---
title: Themes
layout: default
---

## README

This page contains info on the themes used in this website. Each section contains relevant snippets of `css` for the theme.

The font of this website is [Verdana](https://en.wikipedia.org/wiki/Verdana). The font for the `code` is [JetBrains Mono](https://www.jetbrains.com/lp/mono/).

The favicon is from [this favicon generator](https://favicon.io/favicon-generator/). It's also JetBrains Mono with a square background and a 110 font size.

Code snippets use the `Monokai` theme from [Pygments CSS Themes](https://jwarby.github.io/jekyll-pygments-themes/languages/ruby.html).

## Color Themes

Each theme here has links to their [contrast checker score for accessibility from WebAIM](https://webaim.org/resources/contrastchecker/) and colors - like [colorhexa](https://www.colorhexa.com/) or [encycolorpedia](https://encycolorpedia.com/).

Color themes attempt to have high contrast ratios to meet WCAG Level AAA standards.

### None

A classic.

```css
body hr {
  border-top: 1px solid black;
  border-radius: 1px;
}

body a {
  color: #0000ff;
  font-weight: bold;
}
```

Here is a sample:
<div class="theme-sample" style="color: black; background-color: white">
Hello world!

This is a <span class="theme-sample-link" style="color: #0000ff; font-weight: bold;">link</span>.
</div>

### High Contrast

No need to do any checks on contrast ratios here!

```css
body.high-contrast {
  background-color: black;
  color: white;
}

body.high-contrast hr {
  border-top: 1px solid white;
}

body.high-contrast a {
  color: white;
}

body.high-contrast #content {
  outline: 1px solid white;
}
```

Here is a sample:
<div class="theme-sample" style="color: white; background-color: black">
Hello world!

This is a <span class="theme-sample-link" style="color: white; font-weight: bold;">link</span>.
</div>

### Night

Inspired by colors from [water.css-dark](https://www.cssbed.com/water.css-dark/).

This has a contrast ratio of [10.35:1](https://webaim.org/resources/contrastchecker/?fcolor=DBDBDB&bcolor=202B38) for the text and [7.35:1](https://webaim.org/resources/contrastchecker/?fcolor=70C1FF&bcolor=202B38) for the links.

```css
body.night {
  background-color: #202b38;
  color: #dbdbdb;
}

body.night hr {
  border-top: 1px solid #dbdbdb;
}

body.night a {
  color: #70C1FF;
}
```

Here is a sample:
<div class="theme-sample" style="color: #dbdbdb; background-color: #202b38">
Hello world!

This is a <span class="theme-sample-link" style="color: #70C1FF">link</span>.
</div>

### Day

The `background-color` is known as ["wheat"](https://www.colorhexa.com/f5deb3).

This has a contrast ratio of [8.31:1](https://webaim.org/resources/contrastchecker/?fcolor=50380B&bcolor=F5DEB3) for the text and [7.31:1](https://webaim.org/resources/contrastchecker/?fcolor=294765&bcolor=F5DEB3) for the links.

```css
body.day {
  background-color: #f5deb3;
  color: #50380B;
}

body.day hr {
  border-top: 1px solid #2D2006;
}

body.day a {
  color: #294765;
}
```

Here is a sample:
<div class="theme-sample" style="color: #50380D; background-color: #f5deb3">
Hello world!

This is a <span class="theme-sample-link" style="color: #294765">link</span>.
</div>

### Carrot Cake

My favorite cake! The `background-color` is known as ["Porter Paints Carrot Cake"](https://encycolorpedia.com/e08d59).

This has a contrast ratio of [7.11:1](https://webaim.org/resources/contrastchecker/?fcolor=1C120D&bcolor=E08D59) for the text and [7.08:1](https://webaim.org/resources/contrastchecker/?fcolor=06084C&bcolor=E08D59) for the links.

```css
body.carrot_cake {
  background-color: #e08d59;
  color: #1C120D;
}

body.carrot_cake hr {
  border-top: 1px solid #290A0B;
}

body.carrot_cake a {
  color: #06084C;
}
```

Here is a sample:
<div class="theme-sample" style="color: #1C120D; background-color: #e08d59">
Hello world!

This is a <span class="theme-sample-link" style="color: #06084C">link</span>.
</div>

# Style Themes

These are themes that are attempting to fit a specific aesthetic.

Any accessibility standards are only met if the source style met those same standards.

### Windows 98

Styles were pulled from the [Windows 98 design system](https://jdan.github.io/98.css/) by [Jordan Scales](https://jordanscales.com/).

```css
body.windows_98 {
  background-color: #c0c0c0;
}

body.windows_98 #main-hr {
  display: block;
  border-top: none;
  background: linear-gradient(90deg, navy, #1084d0);
  height: 15px;
  padding: 3px 2px 3px 3px;
  margin: 3px 3px 0 3px;
}

body.windows_98 #content {
  box-shadow:
    inset -1px -1px #0a0a0a,
    inset 1px 1px #dfdfdf,
    inset -2px -2px grey,
    inset 2px 2px #fff;
}
```

### Windows XP

Styles were pulled from the [Windows XP design system](https://botoxparty.github.io/XP.css/) by [botoxparty](https://github.com/botoxparty).

```css
body.windows_xp {
  background-color: #ece9d8;
}

body.windows_xp #main-hr {
  display: block;
  background: linear-gradient(
    180deg,
    #0997ff,
    #0053ee 8%,
    #0050ee 40%,
    #06f 88%,
    #06f 93%,
    #005bff 95%,
    #003dd7 96%,
    #003dd7
  );
  padding: 3px 5px 3px 3px;
  border-top: 1px solid #0831d9;
  border-left: 1px solid #0831d9;
  border-right: 1px solid #001ea0;
  border-top-left-radius: 8px;
  border-top-right-radius: 7px;
  height: 21px;
}

body.windows_xp #content {
  box-shadow:
    inset -1px -1px #00138c,
    inset 1px 1px #0831d9,
    inset -2px -2px #001ea0,
    inset 2px 2px #166aee,
    inset -3px -3px #003bda,
    inset 3px 3px #0855dd;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
```

## FAQ

### Why are there no visited link styles?

I used to have these for color themes:
```css
/* None */
body a:visited {
  color: #800080;
}

/* Night */
body.night a:visited {
  color: #D9A3FF;
}

/* Day */
body.day a:visited {
  color: #6A0DAD;
}

/* Carrot Cake */
body.carrot_cake a:visited {
  color: #29052E;
}
```

Visited link styling is useful for helping a user know where they have been. My site isn't complicated enough to require that!

### Which theme is your favorite?

Windows XP! I grew up using it on my family's home computer.
