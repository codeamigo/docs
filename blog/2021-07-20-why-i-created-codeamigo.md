---
slug: why-codeamigo
title: Why I Created Codeamigo
author: Philip London
author_title: Founder @ codeamigo.dev
author_url: https://github.com/plondon
author_image_url: https://avatars.githubusercontent.com/u/5640772?v=4
tags: [codeamigo, about, education]
---

I've applied to work at [Codecademy](https://www.codecademy.com/) three times, once in 2014, again in 2015, and most recently in 2020. I've been rejected all three times. I wanted to prove to myself I was capable of building something like it, so I decided to build my own version. I was living in Spain so I thought [codeamigo.dev](https://codeamigo.dev) would be a good name. Here's why I created it and what I've learned so far.

## Why

I love the interactive learning experience of Codecademy. Of all the mediums I've used to learn how to code, YouTube, blog posts, tutorials, etc., Codecademy always stood out. I loved feeling a sense of accomplishment after finishing a step or lesson, or reaching my streak goal for the week. When I was first learning to code, I visited Codecademy everyday. I wouldn't be a developer without it.

What _bothered_ me about the platform was that I didn't know or connect with my teachers. I wanted to connect with members of my community and learn from them, instead of just digesting information from a black box. Watching [MKBHD](https://www.youtube.com/user/marquesbrownlee) on YouTube made this clear. I don't watch everyone of his videos because I'm interested in each piece of tech he reviews, I'm interested in him, and how he presents the material.

I thought if I could bring that concept to coding lessons and tutorials people would be able to learn from and follow peers whose material they enjoyed. Building the platform was a lot of fun and quite challenging.

## Compiling Code on The Fly

Without a doubt the most challenging aspect of building codeamigo.dev was the code compilation. There are not a ton of examples out in the wild. In fact, [Amjad Masad](https://twitter.com/amasad), who built repl.it, also wrote the original code for Codecademy. Anyway, I decided to start with just languages the browser can understand natively, so HTML, CSS, and JS. [Ives Van Hoorne](https://twitter.com/compuives) and the [codesandbox](https://codesandbox.io) team were a great inspiration.

### Attempt 1: babel-standalone

Based on talks given by Ives I figued that [babel-standalone](https://babeljs.io/docs/en/babel-standalone) would be a good first step. Everytime a file changed I would post a message to an iframe that was listening for files, transpile them with babel, and then append the generated output to a script tag. I had special logic for if the file was HTML or CSS. It was very primitive, messy, and slow. I was happy it worked but it would sometimes take 5-6 seconds to render a change.

### Attempt 2: parcel

After scouring the internet for other solutions I came across [parcel](https://github.com/parcel-bundler/parcel/issues/1253) and thought this might be a good approach. In fact, they even had their own [REPL project](https://parcel-repl.vercel.app/) that mirrored the functionality I wanted. This worked well for awhile and was what the project was using when I posted it to [Hacker News originally](https://news.ycombinator.com/item?id=26464998). However, it would often use too many webworkers and cause the site to crash. Plus, I knew it wouldn't be able to scale past browser based languages.

### Attempt 3: repl.it approach

Next up I tried [recreating repl.it's approach](https://cloud.google.com/customers/repl-it). But thought it would be too complex of an endeavor considering I have yet to find product-market-fit.

### Attempt 4: Codesandbox To the Rescue!

A few months ago, codesandbox released [sandpack](https://github.com/codesandbox/sandpack), which is exactly what I was looking for. A super fast, super scalable browser bundler. I would still like to dive deeper into Attempt 3, but only once I have more users and interest.

## Learning New Tools

I've loved the process of recreating Codecademy. I've loved owning all aspects of the project, the backend, frontend, and design, I've been able to implement features quickly and deploy them easily and automatically through [vercel](https://vercel.com). I've gotten to use and love [linear](https://linear.app) for issue management and [plausible](https://plausible.io/) for analytics.

### Backend

codeamigo.dev's backend uses NodeJS to serve an Apollo Server GraphQL API. Everytime you take a lesson, the backend creates codeModules specific to your user, so that it can save your progress. Of course it also tracks what step you are on and which checkpoints you've completed. When and if you decide to create a lesson, codeamigo will provide you with templates to get you started on React.js, Angular, or VanillaJS/TS projects.

### Frontend

The frontend is a NextJS app using apollo-client to manage state and tailwindcss for styling. 

## How It Works

codeamigo.dev provides you with a platform to create Codecademy style lessons. Each lesson is made up of Steps, and each Step is made up of Checkpoints. A Step can have many or no Checkpoints, but must have instructions. Each Checkpoint points to a test you must write that a user must pass. You can read more about testing [here](https://docs.codeamigo.dev/).

## What's Next

I hope that this project helps people learn new topics, either through teaching them or taking lessons! There's still a ton of work to do and features I want to implement. But if you have any feedback or want to contribute, please email me at [philip@codeamigo.dev](mailto:philip@codeamigo.dev).