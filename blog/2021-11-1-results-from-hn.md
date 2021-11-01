---
slug: results-from-hn
title: Results from HN
author: Philip London
author_title: Founder @ codeamigo.dev
author_url: https://github.com/plondon
author_image_url: https://avatars.githubusercontent.com/u/5640772?v=4
tags: [codeamigo, about, education, marketing]
---

Last week (10/28/2021) a post about Codeamigo was #1 on Hacker News for about 6 hours. We've always wondered what kind of traffic that would drive to applications. Maybe you have too.

## Raw Numbers

- **28,292** Unique visitors
- **44,855** Page views
- **4,662** Users btwn 9:00AM-10:00AM
- **37 secs** Avg. duration on site
- **69%** Bounce rate

![Plausible](/img/2021-11-1-results-from-hn/plausible.png)

> Note: Before 10/28 Codeamigo was averaging about 40 visitors a day, a 25% bounce rate, and a vistor duration of 98 secs.

## Product Numbers

|                           | Before HN | After HN |
|---------------------------|-----------|----------|
| Most Popular Lesson Views | 75        | 14,000   |
| Students (Signups)        | 316       | 415      |
| Lessons Created           | 83        | 116      |
| Active Teachers           | 1         | 3        |

> Signup is not required to take a lesson! This was a recent change prompted by feedback from a previous HN post and the community. We'd rather lower the barrier to entry to our app/brand then require signup and collect email addresses.

[Build Your Own Bitcoin Wallet](https://codeamigo.dev/lessons/start/53) was the most popular lesson and received the most number of views. 

## Vercel (Frontend)

Codeamigo's frontend is a Next.js application hosted on Vercel under the [Pro Plan](https://vercel.com/pricing).

At peak traffic, response time became very slow, sometimes taking ~10 seconds for the host to resolve. A [few](https://news.ycombinator.com/reply?id=29029668&goto=item%3Fid%3D29025401%2329029668) [users](https://news.ycombinator.com/reply?id=29038269&goto=item%3Fid%3D29025401%2329038269) complained about this. Investigating the Vercel response headers, we can see that the [X-Vercel-Cache Header](https://vercel.com/docs/concepts/edge-network/caching#x-vercel-cache) is 'MISS', meaning "The response was not found in the edge and thus fetched from an origin server."

![Vercel Response Header](/img/2021-11-1-results-from-hn/vercel-response-headers.png)

According to the [Vercel docs](https://vercel.com/docs/concepts/edge-network/caching#cacheable-responses), in order for responses to be cached the "Response must not contain the no-cache directive in the Cache-Control header."

## DigitalOcean (Backend Hosting)

Codeamigo's API is hosted on a single DigitalOcean droplet (4 GB Memory / 50 GB Disk).

Sadly, we had not enabled the [Metrics Agent](https://docs.digitalocean.com/products/monitoring/how-to/install-agent/) when we created the droplet, and it's not enabled by default. So we don't have insight into Memory Usage, Load Average, Disk Usage. However, **CPU Usage**, at the peak, was 50%:

![CPU Usage](/img/2021-11-1-results-from-hn/cpu-usage-DO.png)

## AWS (Execution Env)

The execution enviornment that powers non-browser executable languages and uses a Repl instead of Codesandbox (Rust, TypeScript, Python, etc.) is hosted on AWS. CPU usage hit 37% at the peak, and then tapered off throughout the day:

![CPU Usage AWS](/img/2021-11-1-results-from-hn/cpu-usage-aws.png)

Amazingly, AWS billing stayed very low/consistent with other non-active days:

![Billing AWS](/img/2021-11-1-results-from-hn/billing-aws.png)

## Social

Before HN, our [Twitter](https://twitter.com/codeamigo_dev) account had 11 followers. Following HN, we now have **30** followers. Our [Discord](https://discord.gg/n64Ann2zRc) channel we had 0 users, now we have **13**. Still quite a lot of work to do on that front!

## Takeaways

We should change the Cache-Control header from our Next.JS app so that it does not include the `no-cache` directive.

It's too bad we didn't have more in-depth metrics setup on DigitalOcean, we've now enabled Metrics Agent.