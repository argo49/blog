---
pageTitle: Making this blog work offline
pageDescription: A blog post that describes how to turn your eleventy 11ty static generated site into a Progressive Web App (PWA).
date: "2020-05-22"
---

A [Progressive Web App (PWA)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) is a website that uses service workers to intercept network requests and cache results. If the user's device goes offline, then we can serve these cached results to the user in order to make sure that they can still access the content even when offline.

If you put your device in airplane mode right now and refresh this page, it should still work. That's because it's using [
eleventy-plugin-pwa](https://github.com/okitavera/eleventy-plugin-pwa#readme). It took me around half an hour to set everything up the way I wanted it to. 

1. `npm install --save eleventy-plugin-pwa` and follow the instructions in [the readme](https://github.com/okitavera/eleventy-plugin-pwa#readme).
2. Create a `manifest.json` file in the root of the eleventy project, following the guidelines [here](https://web.dev/add-manifest/).
3. Add the following to your `.eleventy.js` file:

```javascript
config.addPassthroughCopy("manifest.json");
```

Now you will be able to retrieve the file from `<your domain>/manifest.json`. You can test that it's working by opening chrome dev tools and running a lighthouse audit. That's it!

