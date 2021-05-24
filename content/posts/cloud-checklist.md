---
title: My Cloud Checklist
date: 2019-09-05
tags: ["cloud computing", "meta"]
feature_image: "/images/cloud-checklist.jpg"
summary: "Important aspects of cloud computing that every provider should work
hard on maintaining and every organization should expect from their vendors. It
is not so much about the technology but about the underlying guiding principles
and mindset that engineers should have while building a product."
---

I have blogged about Cloud Technologies for over a year now. Everything from VMs
to containers and storage stack to networking. Although my perception of
applications running on the cloud is still immature and, more dangerously,
incomplete. I believe its high time I make a checklist of things I desire for my
applications and of my applications.  

I want the architecture to be simple enough that a new comer to the team can
understand it as soon as humanely possible. Of course, depending on the scale of
application this time may vary wildly. Certain small scale websites can be
understood in a day, where as a ginormous enterprise scale business would
require an above average IQ and a couple of weeks to allow any kind of
comprehension.  

## 1. Organization and sanity
But let's take a step back and ask ourselves what do we mean by comprehension?
In the context of your application's architecture it might be something along
the lines of -- I understand what parts constitute the front-end and where the
back-end runs. The way the API calls are written and the way data is segregated
are important starting points of query. Understanding how things are arranged
might be grasped within a day or two, if done properly. Understanding why it is
so might take ages. For that question is answered not by words but by accidents,
errors and security breaches. However, the point remains -- Design simple to
understand applications.  

## 2. Reliable underlying technology
Here are a few options, you can start developing apps on a standard LAMP stack
or MEAN stack vanilla JS or any combination you deem fit. Most languages,
libraries and frameworks are constantly being updated, patched and improved
upon. Just pick the one that suits your skill set and use case. The age old
rules like "Right tool for the right job." and "If it ain't broken don't fix
it." can help you on your way. You don't necessarily have to adopt the newest
technology, although I don't say that you shouldn't either.  

Underlying technology is something people think about very little when deploying
their app. Want to run it on AWS? How about DigitalOcean? Or Azure? Are we going
to use FaaS, package things into a Docker container? These are real constraints
upon your applications. Docker was not a thing about a decade ago and it might
not be a thing a decade from now. AWS might be a good option if you want a
reliable cloud service provider. If something goes wrong you can blame them. But
do you want to hard code AWS specific design choices into your application? What
if you want to migrate away from Serverless, Stateless abstractions? What if AWS
changes their policies. Reliable technology is probably the hardest thing to
ascertain. It is a contract between you and the society in general. Trust is not
that easy to give away.  

## 3. Fairly Automated
If you find yourself doing mundane stuff over and over again, you probably need
to automate some part of your DevOps workflow. But the correct approach to
automation, in my humble opinion, is to gradually introduce more of it as the
need arises. You don't have to start with a CD/CI pipeline with Commit keys
distributed among all the team members.  

You don't even need a Git repo starting out. Just start with a simple folder,
there's no rush. A rule of thumb that I often remind myself is this, "The tools
are meant to serve you, not the other way other way around." Don't add more
strings, cogs and gears turning your workday into a Rube Goldberg spectacle.  

## 4. Avoid the "Scalability, Availability..." Trap
"But, I want to run my apps on Kubernetes deployed on top of OpenStack! And
what's the point of not using Hybrid cloud, what if one vendor goes down!!" I
hear you. People working on Kubernetes, Docker, OpenStack and other such
projects are some of the brightest people in the industry. Let's take Kuberbetes
(K8s) as an example. If you want to use it, use an out of the box solution.
Production is war, and you don't want technology that has been barely out of
Alpha to run your application. You want to see K8s grow? Fine, contribute to the
repo. Don't confuse adopting a technology as something responsible for growing
the technology. Personally, I am waiting for DigitalOcean's K8 stack to be
release so I can play with it on my own, but I won't consider it as my to go
option right now.  

You want true scalability and availability? Run tried and tested technologies
like OpenZFS for storage, dTrace for transparency and tried and tested CDNs like
CloudFlare. Simple UNIX tools and robust technology can get you a long way.  

## Hope this helps
I want to test my arguments against a few other OSes and systems like OmniOS.
The above checklist is a distillation of all the thoughts and opinions I
formulated over last year. Hopefully, there's more to learn.
