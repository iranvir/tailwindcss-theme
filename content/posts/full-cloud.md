---
title: Why you may not want to go "Full-Cloud"
date: 2019-08-14
tags: ["cloud computing", "meta"]
feature_image: "/images/full-cloud.jpg"
summary: "Thinking about going \"Full Cloud!\"? Think again! Organizations and
individuals alike need to think for themselves instead of scrambling to learn
and use whatever new shiny technology gets talked about the most. Maybe it is
time we take engineer for the discipline that it is..."
---

Over the last decade cloud computing has grown from a simple virtual machine to
containers, object store and Functions. Developers and software architects have
taken complete advantage of this shift. Rising tide has lifted quite a few boat.
Anyone can sign up for AWS, GCE or Azure and host their service on thier super
optimized cloud with low bills, reduced downtime and still lower latencies. 

But here I am, still insisting that the Industry is probably headed in a wrong
direction. Below are some of my concerns.

## Cost Effectiveness
With policies like pay-as-you-go and with per-second billing period we get an
illusion that the cost of computing has been going down. But if I look back at
2016 (its Nov, 2018 at the time of this writing), the price for the smallest
virtual machine then and now is essentially the same. Maybe the memory costs
have been cut to half. You used to get 1 vCPU and 512 MB for $5 per month and
now its 1 vCPU and 1GB of memory (if we follow pricing offered by mainstream
vendors like AWS, GCE and DigitalOcean). Seems like a good deal, right? The
internal cynic in me thinks otherwise.

Memory is easy to reclaim. Allocating more of it is an easy way to create an
illusion that you are getting more bang for your buck. While CPU prices have
essentially remained the same. Containers are even better at it, as the Docker
host doesn't even have to reclaim anything. Containers don't hog all the memory
you allocate them. While I am not saying that these cost saving techniques
shouldn't be used. I am concerned that the free market is not pushing hard
enough for faster, cheaper and more energy-efficient hardware. As our
applications get greedier, the slower hardware will punish us severely. The poop
will hit the fan. If instead of competition among cloud service vendors, we
incentivize competition among various hardware vendors we may actually
accelerate Moore's law and take it to its extreme. Fix and rewrite ancient AMD
64 architecture and do much more. Giant servers are huge chunk of the market
share, but since there are only a few buyers, the cloud providers, the
competition is not so fierce. We need a market where the competition
incentivizes faster, cheaper and more efficinet hardware. Not aggressively
priced VMs. Favor the creation of more pie rather than getting better at slicing
the preexisting pie. Zero sum games won't get us to Mars. Innovation will.

## 2. Buzzwords without substance
If I hear the words "scalability, availability and reliability" one more time, I
will lose my mind! cough...Sorry, I needed to get it off my chest... My online
catharsis aside, those words have been used and taken out of context way too
often. I, myself, am guilty of this so I think I ought to make matters clear.  

The Cloud can't write your code for you! If your service is not designed to run
on a distributed system, its better to run it on a traditional VM. Just stop for
a second and think, do you really need Kubernetes? Probably not. You can, in
fact, have your cake and get to eat your cake too. We have CDNs like Cloudflare
which will do the distributed content deliver for you at an exceptionally low
price and with great reliability. This [post](https://www.troyhunt.com/serverless-to-the-max-doing-big-things-for-small-dollars-with-cloudflare-workers-and-azure-functions/)
from TroyHunt is a great example of how to use it. He uses Azure Functions along
with Cloudflare, but if you can replace it with traditional VMs just as easily.
People often argue against it by saying that they need more control over their
infrastructure. Kubernetes is Open Source, so is DC/OS and Mesosphere.  

Fine. Use them then.  

Chances are you will be using EKS or Google's Kubernetes cluster when it comes
to Kubernetes. And if you go for FaaS like Amazon Lambda or container
orchestrators like ECS you have already given up all that control. If you use
AWS, you probably already use CloudWatch for monitoring and debugging. If your
code implicitly assumes it runs on AWS, or any other specific vendor. You have
lost the battle.  

For small businesses and startups working on their own application is their main
goal. They don't want to deal with distributed systems and CAP-theorem related
problems, if that's not what their product is about.  

## 3. Vendor Lock-ins and middlemen
Services offered by vendors, like AWS, are so integrated with each other that
you will soon find yourself relying on them for everything. From user management
using IAM, to source control and container registries. You will be consumed by
AWS bit by bit and what's more is that you will do it willingly.  The same group
which says things should be open source, free to use and modify will gleefully
adopt everything that the hype-train shoves down their throat. So much for
freedom. What's more is that, there's a cottage industry surrounding major cloud
provider. Third party vendors helps you get your business onto the cloud and/or
migrate from one to another.  

Things are so complex that you need consultants for understanding a product!
This is where I might be wrong. Maybe, I don't understand everything and am
being a naive. Maybe applications do tend to get messy and complicated. But
middlemen are often not a good sign. It means that you are getting more and more
detached from the reality. If cloud vendors want me to give up my freedom, at
least they should make is easy. But then again, I think that complexity is the
whole point, so no one can figure out how to migrate away, at least, not easily.
 

Solution? Use something that makes sense. DigitalOcean is a service that I like
a lot and have used in the past. And just for one reason. It is easy to
understand, manage and doesn't get in my way. If I want, I can migrate
everything from there to any other platform using tools like love and trust like
scp, rsync, git clone and zfs send.  

## Conclusion
To cut a long story short, I am a bit grumpy about the fact that everyone is
hyped up about cloud but consumer grade computers aren't getting all that
better.

> Cheaper faster Desktops

Yeah, cloud is kinda cool (I make a living off of it) but still it does not give
complete control and I worry that it will all end with the pop of a second Dot
com bubble.

## P.S: "Why not go Multicloud?"
Because using a single cloud is such a nice experience, right?
