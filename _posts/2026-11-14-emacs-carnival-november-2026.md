---
layout: post
title: Emacs Carnival - Discovery of Emacs Features
date: 2026-11-14
tags: emacs
---

The topic for this month's Emacs Carnival is ["Discovery of Emacs Features"](https://www.emacswiki.org/emacs/CarnivalNovember2026).

### How often do you discover an Emacs feature?

I'd say about once a week! I check [Planet Emacs](https://planet.emacslife.com/) quite often and [/r/emacs](https://old.reddit.com/r/emacs/) periodically.

I recently subscribed to [EmacsNews](https://www.emacsnews.com/) in my feed reader.

### What was the most recent feature that you adopted?

#### Some small things

I started introducing some small things in my workflow - namely `project.el` and `ibuffer.el`.

I use [dashboard.el](https://github.com/emacs-dashboard/dashboard) and I wanted to see projects I go back to often in my Emacs startup. (I also have a billion side projects on my computer, so I wanted a way to cut through the noise).

To add to the `projects` file you use `M-x project-remember-projects-under`. This command only works if the given directory has version control.

`M-x project-list-buffers` and `M-x consult-project-buffer` are pretty helpful - especially since I usually have _many_ buffers open.

Speaking of buffers, I've been using `ibuffer.el` just for `M-x ibuffer-filter-by-modified`.

I use [beorg](https://www.beorgapp.com/) quite heavily, so I'm often dealing with files that were modified on my phone and modified differently on my laptop. I'll use `ibuffer.el` to quickly check which buffers I need to resolve. That being said, beorg handles conflicts quite well.

I also have `global-auto-revert-mode` on all the time, which has largely solved this problem.

#### A big thing!

I organized my `init.el` around using `package-selected-packages` as the source of truth for what is installed for Emacs.

On start up, my Emacs will install anything in the list, and uninstall anything not in the list.

I don't use `:ensure` in my `use-package` statements at all. `use-package.el` is used strictly for configuration, leaving `package.el` only for installing/uninstalling.

My approach is based off of these posts:
- [Notes on package.el](https://olivertaylor.net/emacs/notes-on-package-el) from Oliver Taylor
  - With this [discussion](https://www.reddit.com/r/emacs/comments/np6ey4/how_packageel_works_with_use_package/) on /r/emacs
- This page on [package.el](https://www.wikemacs.org/wiki/Package.el), specifically the section ["Install packages automatically on startup"](https://www.wikemacs.org/wiki/Package.el#Install_packages_automatically_on_startup)

I switched to this approach because I liked having a clear separation of responsibilities between `package.el` and `use-package.el`, and because I don't use any of the extra features that other package management packages offer.

You can check the top of my `init.el`. The general gist of it is:
```elisp
(require 'package)
(setq package-selected-packages
      ;; Listed packages are on new lines so it is easier to call sort-lines
      '(
      ;; List of packages here
      ))
```

Once you have the above, you're all set! You can keep your Emacs up to date with the list by calling `package-install-selected-packages` and `package-autoremove` yourself, or you can do what I do and call them automatically on startup.

### Are you a “Set it and forget it” type of user?

It varies! I use Emacs for Org-mode the majority of the time. As long as that is working, I won't modify my config.

I will go through phases where I audit my setup. Whenever I do this I primarily focus on removing cruft, like any packages I installed but no longer use, and making things easier for myself. That usually means writing a custom function to do something I repeat often.

For example, I created `cyr-org-agenda-day-view`, which at this moment is:
```elisp
(defun cyr-org-agenda-day-view ()
  "`org-agenda` day view for today."
  (interactive)
  (org-agenda nil "a")
  (org-agenda-day-view))
```

### What’s the next feature that you’d like to try?

I have [embark.el](https://github.com/oantolin/embark) installed, but I don't use it nearly enough. I've skimmed this [article](https://karthinks.com/software/fifteen-ways-to-use-embark/) by Karthinks a couple of times, so I have a good idea of what I'm missing.

This [article](https://emacsredux.com/blog/2026/07/14/all-aboard-embark/) on Emacs Redux is a great introduction as well!
