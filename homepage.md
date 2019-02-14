# Homepage
So this is about this homepage. 

## Why?

While researching new and better ways for documentation I found [docsify][doc] and thought it sounds very interesting.

- I like writing markdown, for reasons I believe are obvious to you, if you are reading this
- setup process looks super easy
- search functionality
- no static html files
- running on gh pages
- themes and plugins
- hooks for custom plugin programming

So let's give it a try.

[Docsify][doc] mentions hosting on github pages, which made me remember that I had a pretty basic placeholder page hosted on github pages and my domain pointing to it.\
So to get started with [docsify][doc] and finally filling the landing page of my domain with some content I wiped the repo clean and started setting up [docsify][doc].

So now I'm "misusing" [docsify][doc] for generating/loading my landing page.

## Customizations
> you can find everything you need in the [docsify documentation][doc]. I will only list a few customizations I made and problems I ran into, if there where some.

> the source code to this can all be found [here](https://github.com/mmoehrlein/mmoehrlein.github.io) on github

### Coverpage
Basic coverpage, nothing fancy. Decided not to use the only coverpage option, since it requires additional clicks instead of scrolling.

### Sidebar
Sidebar group headlines and then links to different pages.

Setting ``subMaxLevel: 2`` for auto expand of pages.

### Offline mode
Adding sw.js (service worker) exactly as described [here](https://docsify.js.org/#/pwa)

### 404 page
Custom Error Page ([here](_404.md)) with generated stegosaurus from [cowsay](https://github.com/piuccio/cowsay).\
Using the command below you can generate one.
```shell
npx cowsay -f stegosaurus 'Custom error stegosaurus'
```

### custom plugin
I also wrote a custom plugin, because I wanted to tag the packages listed on my [awsome list](awesome.md).
```javascript
function(hook, vm){
    hook.afterEach(function(html, next){
        var regex = /<p><img.*?data-origin="(.*?)"[^a]+alt="tags">([^<]*?)<\/p>/g;
        var match;
        while (match = regex.exec(html)) {
            inject = '<div class="tags"><small><b>Tags: </b><em>' + match[1].split(',').join(' ') + '</em></small></div>';
            html = html.replace(match[0], inject)
        }
        next(html);
    });
}
```
This allows you to use ``![tags](comma,seperated,list,with,no,spaces)`` in your markdown and it will be rendered nicely to this:

![tags](comma,seperated,list,with,no,spaces)

Has to be used in its own paragraph.





[doc]: https://docsify.js.org/#/