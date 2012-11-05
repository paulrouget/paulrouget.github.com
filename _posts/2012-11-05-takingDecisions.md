---
layout: post2
title: "Firefox developers don't listen to users"
permalink: e/featuredesign
mozilla: true
standalone: true
---

# "Firefox developers don't listen to users"

Haaa, how many time did we hear that? Every time we ship a new feature I guess :)

This kind of comment reveals how much some people misunderstand how we build things
at Mozilla. In this article, I'd like to clarify this process. If you work in this
industry, this won't be news to you: it's not as simple as
*"Developer listens to users, builds according to what he hears"*.

# Shaping a Firefox feature - how does it work?

Let me try to summarize that. We have several teams, with distinctive roles:

* Metric team: **measure and gather data**;
* Market Insight team: **predict the future**;
* Product team: **draw conclusions, define plan**;
* UX team: **user studies & design**;
* Engineering team: **implement**;
* Support/QA: **post-analyse**;

All these teams work all together. Below, I'm describing a linear process.
It is not that linear. All these teams spend their time talking to each other.
Also, this process might sound "heavy". It is not. There's room for personal
initiative too.

----

With [Mozilla's core principles](https://www.mozilla.org/about/manifesto.html) in mind:

## Metric

**The Metric team** gathers data. How many downloads, from where,
what do users use (and how), how the product performs.
For example, they will be able to tell **with actual numbers**,
if Firefox tends to be faster or slower over the different releases.

<!--[![Understanding DNT Adoption within Firefox](https://blog.mozilla.org/metrics/files/2011/09/mozilla-dnt-user-adoption-1024x436.png)](https://blog.mozilla.org/metrics/2011/09/08/understanding-dnt-adoption-within-firefox/)-->
<!--*Understanding DNT Adoption within Firefox*, [Mozilla Metric Blog](https://blog.mozilla.org/metrics/).-->

## Market Insight

**The Market Insight** works with numbers too. Crossing Firefox-related numbers, (how many users,
what country has a growing number of users,…), with other relevant data, from the competition
(how Chrome's market share is changing) and from different markets (how the smart-phone market is
evolving in South-America). They cross all these data, and compile them into competitive analyses.
These analyses are useful to define priorities.

## Product

Based on the work of the Metric and Market Insight team, **the Product Team** try to understand what
needs to be done in the product (we have one product team by product: Firefox Desktop,
Firefox OS, Firefox Sync, Firefox on Android, MDN, …) to ensure that
it stays competitive and fits user's needs.

Innovation can emerge from Mozilla Labs or from any team, from any community.
Product is in charge of spotting and transforming these innovative ideas
into actual plans that can be executed.

Product also ensure that all the different projects are synced-up (you don't
ship Firefox OS without the Market Place).

## UX

**The UX Team** transforms ideas into concrete scenarios. This is not just
about pixels. It's a lot about making the user happy. Ensuring we won't
disturb users. Aiming the most effective and enjoyable experience.
This is a complex topic (especially when you have
half of billion of users). The UX Team use their creative mind to design
a product, but they also use **numbers** a lot. User Studies are a big part
of the process.

[![Test Pilot New Tab Study Results](https://blog.mozilla.org/ux/files/2011/08/navigation_methods.png)](https://blog.mozilla.org/ux/2011/08/test-pilot-new-tab-study-results/)
*New Tab Study*, [Mozilla UX Blog](https://blog.mozilla.org/ux/).

## Engineering

**The Engineering Team** will execute. Iterating with the other team, they
transform the plan into an actual piece of software. Make sure it matches
UX's recommendations, doesn't regress the performance (thanks to Metric's tools),
and is shipped in time according to Product's roadmap.

## Support and QA

**The Support Team** and **QA Team** gather post-implementation data. Trying
to understand how these changes affect the end-users by spotting the flaws and
by gathering feedback.

[![Live Feedback From input.mozilla.org](https://farm8.staticflickr.com/7135/8157514312_4b7ca672a5_b.jpg)](http://input.mozilla.org/en-US/)
*Live Feedback From input.mozilla.org*, [input.mozilla.org](http://input.mozilla.org/en-US/).

# An example: "Save For Later"

[![Save For Later](https://blog.mozilla.org/ux/files/2012/10/15.jpg)](https://blog.mozilla.org/ux/2012/10/save-for-later/)

I strongly encourage you to read [Brian Groudan's article](https://blog.mozilla.org/ux/2012/10/save-for-later/).
Brian shares his work on a "Save For Later" feature for Firefox.
I'd like to highlight some elements:

"Save For Later" project timeline:

1. Planning
2. Competitive analysis
3. Develop & Pilot Study
4. Screen Participants & Begin Study
5. Interview Participants
6. Synthesize research
7. Design Ideation
8. Present Finding and Recommandations

Studies:

> "Research phase: Out of 60 profiles, I carefully selected ten people to participate in this study. These participants represented a wide demographic of users."

Surveys:

> "Survey of over 5,000 Firefox users"


And then, if the product team thinks this is something we need to have in Firefox by the next quarter,
they will work on a plan and work with engineering team to integrate that into Firefox.

----

So yeah, when we build a feature in Firefox, it's not as simple a "developer decide to", it's lot more serious than that.
We put some brilliant mind into a room for weeks/months, they do studies, gather data, come to conclusions, prototype, confront results
with other data and other teams, iterate.

So next you see a comment like "Firefox developers don't listen to users", please, point them to this article ;)

<style>
blockquote {
  margin-left: 10px;
  padding-left: 10px;
  border-left: 1px dotted grey;
}
article > img {
  border: 1px dashed grey;
  padding: 5px;
}
</style>
