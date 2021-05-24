---
title: Back to the Basics
date: 2019-10-25
tags: ["meta"]
feature_image: "/images/back-to-basics.jpg"
summary: "Rambling about the state of software. The lack of organization and
discipline that the industry shows at large. Even I am guilty of these crimes,
but I wanted to take a step back and think about the overall landscape at
large."
---

A project that I was recently working on was asked me to automate the creation
of a LAMP stack and WordPress. Having worked with a ton of Cloud services, my
mind immediately snapped onto tools like Ansible, Cloud-Init, etc.

All of them are really convienent to setup, but have a Rube Goldberg like
quality to them. I wanted something that was truly stand-alone. So I decided to
use shell script instead.

## Learning Curve
A lot of tools that I used to automate this very simple, and common place task,
were forgein to me.  I learned a lot about tools like sed, ed and printf, awk,
etc but it was surprisingly quick and easy to learn most of what I needed to
learn from Google, and heck, even man pages.  

All of this is now making me question the current efforts that are being put
into stuff like configuration management, cloud-init, automation, etc.

## Betraying your roots
Most of the tools that are OS specific, like apt-get, have become hilariously
interactive. They are a command-line tool only for the sake of it. The fancy
progress bar, the repeated prompts about restarting services, the ineffective
quiet mode all make me think that the folks at Ubuntu were better off designing
a UI for this.

` DEBIAN_FRONTEND=noninteractive apt-get update -q=2 ` should not be the command
one should use in their script, and yet here I was doing just that. It's funny
how we violate the basic Unix philosophies, like writing program that are meant
to work with other programs, writing programs which have a text interface, and
writing programs that are simple.

Instead, we duplicate our efforts on multiple package managers, invent semantics
that break things (I am looking at you epoll!) and then pretend that we are
making progress because we replaced rc.local with a cloud-config.yaml and a
simple sh interpreter with some unknow version of Python (2/3 who knows!). And
it isn't even portable!!
