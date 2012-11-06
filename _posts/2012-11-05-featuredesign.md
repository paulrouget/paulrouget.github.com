---
layout: post2
title: "\"Firefox developers don't listen to users\""
permalink: e/featuredesign
mozilla: true
---

## "Firefox developers don't listen to users"

----

Haaa, how many time did we hear that? Every time we ship a new feature I guess :)

So yes, we do listen to users, but this kind of comment reveals how much some people misunderstand how we build things
at Mozilla. In this article, I'd like to clarify this process. If you work in the Software
industry, this won't be news to you: it's not as simple as
*"Developers listen to users, build according to what they hear"*.

# Shaping a Firefox feature - how does it work?

So first, a little warning: *I'm delibarately simplifying the whole story.
Because a lot of people are involved in more than one team, because Mozilla
is a mix of employees and volunteers, because not all the teams work the
same way, because we have lot of different products…*

The general idea is:

1. Gather data (a.k.a "listen to users");
2. Define requirements;
3. Design;
4. Implement;
5. Ensure it works by gathering more data.

We have several teams, with distinctive roles:

* Metrics team: **measure and gather data**;
* Market Insights team: **predict the future**;
* Product team: **draw conclusions, define requirements**;
* UX team: **user studies & design**;
* Engineering team: **implement**;
* Support/QA: **post-analyse**;

All these teams work all together. Below, I'm describing a linear process.
It is not that linear. All these teams spend their time talking to each other.

----

With [Mozilla's core principles](https://www.mozilla.org/about/manifesto.html) in mind:

## Metrics

**The Metrics team** gathers data about how people use our tools
and about how our tools perform.
For example, they will be able to tell **with actual numbers**,
if Firefox tends to be faster or slower over the different releases.

[![Comparing the Bias in Telemetry Data vs The Typical Firefox User](https://farm9.staticflickr.com/8199/8160710134_9c5e94641f_z.jpg)](https://blog.mozilla.org/metrics/2011/12/13/comparing-the-bias-in-telemetry-data-vs-the-typical-firefox-user/)
*Comparing the Bias in Telemetry Data vs The Typical Firefox User*, from [Mozilla Metrics Blog](https://blog.mozilla.org/metrics/).

## Market Insights

**The Market Insights** works with numbers too.

Numbers about our products (how many users, which countries have a growing number of users,…).
Numbers about our competitors (how Chrome's market share is changing).
And number from other markets (how the smart-phone market is evolving).

They cross all these data, and compile them into competitive analyses.
These analyses are useful to define priorities.

For example, Market Insights will provide recommendations about where and how we should ship
Firefox OS first, or if we should care or not about ARMv6 devices (the answer is yes, we should).

## Product

Based on the work of Metrics and Market Insights teams (and as we'll see later, also based on
the UX-team work), **the Product Team** tries to understand what the user needs today, and what
he'll need tomorrow. **The Product team takes user needs and express them as "requirements"**.

It's not only about data.
Innovation can emerge from Mozilla Labs or from any team, from any community.
Product is also in charge of spotting and including these innovative ideas
into the product.

Product also ensures that all the different projects are synced-up (you don't
ship Firefox OS without the Market Place).

## UX

The UX Team use their creative mind to design a product, but they also use **numbers** a lot.

[![Firefox Heatmap Study](https://blog.mozilla.org/ux/files/2012/06/chrome_menus.png)](https://blog.mozilla.org/ux/2012/06/firefox-heatmap-study-2012-results-are-in/)
*Firefox Heatmap Study*, from [Mozilla UX Blog](https://blog.mozilla.org/ux/).

**The UX Team** works on both sides of the product team:

**User Studies**: Bringing UX-related recommendations to the product team.
Interviews, surveys and usage-metrics (Test Pilots)… the goal is to understand
how people interact with hardwares & softwares.
Interviews are pretty amazing. We film participants using a tool, and extract
information from that.

[![Tablet remote usability testing at Mozilla](https://blog.mozilla.org/ux/files/2012/04/photo-1-11-620x463.jpg)](https://blog.mozilla.org/ux/2012/04/tablet-remote-usability-testing-at-mozilla/)
*Tablet remote usability testing at Mozilla*, from [Mozilla UX Blog](https://blog.mozilla.org/ux/).

**Interaction designs and visual designs**: once the requirements of a features
have been outlined, the UX Team transforms these ideas into concrete scenarios. This is not just
about pixels. It's a lot about making the user happy. Ensuring we won't
disturb him. Aiming the most effective and enjoyable experience.
This is a complex topic (especially when you have half of billion of users).

[![UX Principles Behind Firefox for Windows 8](https://blog.mozilla.org/ux/files/2012/10/mozilla-mozcamp-firefox-os.010-600x353.jpg)](https://blog.mozilla.org/ux/2012/10/ux-principles-behind-firefox-for-windows-8-preview/)
*Content Layering*, [Mozilla UX Blog](https://blog.mozilla.org/ux/).

## Engineering

**The Engineering Team** will execute. Iterating with the other teams, they
write code that will answer the requirements defined by the product team.
They make sure it matches UX' recommendations, doesn't regress the performance (thanks to Metric's tools),
and is shipped in time according to Product's roadmap.

## Support and QA

**The Support Team** and **QA Team** gather post-implementation data. Trying
to understand how these changes affect the end-users by spotting the flaws and
by gathering feedback.

[![Live Feedback From input.mozilla.org](https://farm8.staticflickr.com/7135/8157514312_4b7ca672a5_b.jpg)](http://input.mozilla.org/en-US/)
*Live Feedback From input.mozilla.org*, [input.mozilla.org](http://input.mozilla.org/en-US/).

This is another way to "listen" to the user. Measuring the amount of crashes, finding
where regressions happened, extracting information from the support forums, analysing
the feedback shared by the beta users,…

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
they will work on defining the requirements and work with engineering team to integrate that into Firefox.

----

So yeah, when we build a feature in Firefox, it's not as simple a "developer decide to", it's a lot more serious than that.
We put some brilliant mind into a room for weeks/months, they do studies, gather data, come to conclusions, prototype, confront results
with other data and other teams, iterate.

So next you see a comment like "Firefox developers don't listen to users", please, point them to this article ;)

<style>
blockquote {
  margin-left: 10px;
  padding-left: 10px;
  border-left: 1px dotted grey;
}
article img {
  border: 1px dashed grey;
  padding: 5px;
}
article hr {
  border: 0;
  border-bottom: 1px dashed #AAA;
}
</style>
