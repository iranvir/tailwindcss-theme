---
title: Web APIs and integrations
date: 2019-11-17
tags: ["cloud computing", "design", "meta"]
feature_image: "/images/webapis-and-integration.jpg"
summary: "I always keep running into issues with various web services and how
they integrate with one another. There is always some edge cases that they have
missed, or something that I have been stupid about."
---

One of my frustrations with technology, and life in general, is how difficult it
is to keep track of things. Recently, I decided to sign up for Netlify and build
a simple static site for myself.

Upon signing up, I realized that I can't link my GitHub account with it because
I had already signed up for the service earlier, and I don't recollect when or
why. 

No way to know when or where it was done, I signed up with an old email, and
reset the password, and checked if it had my GitHub account linked. It didn't.
So I deleted this new 'old' account. I had no way to know if this was my old
account, because Netlify will send you a reset password email for any bogous
email you enter, regardless of whether or not you signed up with that email
before.

I have done everything at this point. Revoked older Netlify tokens from my
GitHub account, deleted my old and new accounts several times and banged my head
against the docs for good measure. I have no solution to offer here, except
maybe, design your APIs with the thought in your mind that services like GitHub,
Google, etc might change underneath you at any time.
