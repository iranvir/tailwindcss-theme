---
title: Servers and Whatnot
date: 2019-09-13
tags: ["meta"]
feature_image: "/images/servers-and-whatnot.jpg"
summary: "A note for my future-self when he feels a bit lost in the weeds. To
think clearly, to read and write clearly, and when time comes...to act out the
truth!"
---

I started my new job, a few months ago as a server operator. This has been a
really positive change in my life. The firm I work at is a VPS provider and my
job has all the things that excite me about server-side computing.  

There's no more illusions being made about 'cloud computing' I can see the
virtualization (we use both KVM and containers) happening right in front of me.
And this has been something I wanted to dissect for a while, but never had the
chance to do so (at least not in production). To work with the bare metal and to
see the underlying complexity is both exciting and humbling, to say the least.
However, there's a long road ahead for me to walk and this post is meant to be a
note to my future self, so he doesn't get too carried away.

## It's always about the problem, not the tools or solutions.
There are a lot of tools for configuration management like Ansible, Chef,
Puppet, etc. These have their own special place in the industry. To my own
surprise, I found myself shying away from them.  

The reason was not because I don't want my life to be easy, but quite the
opposite. I started scripting my tasks in Bash and Python because I wanted to
know what's happening under the hood. My lack of experience can only be
compensated by extra visibility into what's happening inside the system. It may
be tedious and time-consuming, in the beginning, but over the long run it will
lead to better understanding of the system.  

Only then can I allow myself to use Ansible, (or go crazy editing config files
using sed and living in the woods somewhere :P ). To quote Ian Malcolm:  

"Whatever it is you seek, you have to put in the time, the practice, the effort.
You must give up a lot to get it. It has to be very important to you. And once
you have attained it, it is your power. It can't be given away : it resides in
you. It is literally the result of your discipline."  

The above line, to me, is the resolution for the age old debates like
dependencies vs vanilla software, or libraries vs frameworks. And it helped me
choose vanilla scripts over config management. If I understand the system
intimately enough, I can then use a higher level abstraction easily, but if my
underlying assumptions are wrong then things will go catastrophically wrong, as
well. There will come a time when I can use config management, but it is not
today. There's no magic tool that can substitute lack of understanding. And what
I need to understand, is the problem that ails my precious servers. The more
articulate I am about the issue, the easier it will be to find the solution.

## Documentation over Stack-overflow/Forums
Reading documentation is healthy. I learned this by observing one of my friends,
who benefited from it tremendously, and I decided to give it a shot. A lot of
things happen when you stick to documentation:  

You learn what the developer's had in mind when they wrote the
tools/library/API.You understand better what you are doing.Just the act of
reading and trying comprehend inculcates a little more patience into your
personality, and that's not nothing.  

Not to pick on Stack-overflow or any other community. It just so happens that if
people ask obvious questions, which someone has already answered in the
documentation, community members are bound to get frustrated by it. This is a
good example:
[https://ubuntuforums.org/showthread.php?t=2328152](https://ubuntuforums.org/showthread.php?t=2328152)
I have made this mistake before, I will try my best to avoid it in the future.
Besides the whole point of the community is to focus on the human aspect of
technology -- to show the path and not to hold my hand every step of the way.

## Question the Authority
Always question the authority. In my short venture into the design and
implementation of mainstream virtualization stack I came across some horrible
design decisions and naming conventions. The fact that some of this is part of
"enterprise" grade software like RHEL made me second guess myself.  

For example, the library libvirt is not just a library. It is also a set of
tools, a background daemon, an API, and virtual device drivers as well. I
thought I knew what a library means but seeing libvirtd in my list of processes
confused me mightily.

The plain fact is that, a lot of software - most notoriously, the GNU/Linux
ethos is just not designed. It tries to evolve. That's something software can't
do very well, unless it is well thought out in the first place. And if I act
like a fanatic and blindly accept something because it is mainstream, I will
miss out on a lot of cool things. I can be wrong in thinking something is
broken, but unless I question them, I will never know. Now, this is something in
which community interaction is actually valuable. With a little bit of
confidence and little bit of humility maybe I will be able to learn more.

## Doing what is Right, not what is Easy
Not what is easy. Not what is convenient. But what's challenging. I hope to
learn a bit more about the operations aspect of cloud computing and find
problems to solve. I won't mind write software for any unsolved problem I
encounter.  Technologies like SmartOS, dTrace and containerization are something
that I am yet to conquer. It won't be easy. It is truly esoteric stuff, people
will call me out for it. Maybe, it will all actually be a bad investment of my
time. I can't know that beforehand without doing it.  

The end result, or at least a part of my goal, is to create a stabler platform
for people to deploy their software on top of. A platform that is designed with
security and observability in mind, not just convenience. Not just hype without
substance.  

Again, I can't know it without trying it out in the first place. That's my next
milestone. Hopefully, looking back at this post I would have made some forward
progress.
