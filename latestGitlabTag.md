# [Latest Gitlab Tag][lgt]
I was programming a cli for my dorm and looked around npm for helpful packages and found [update-notifier](https://www.npmjs.com/package/update-notifier),
I then sadly realized, that it would not work for my usecase, since i do not publish said cli an npm, instead it will lay in a private repo on the gitlab server of my university.\
That made things a little more complicated, but I found [update-notifier-plus](https://www.npmjs.com/package/update-notifier-plus), which solves this problem for repos that are committed in a private github repo, so I looked into that and saw, that it relies on a packed by the same author called [latest-github-tag](https://github.com/mhkeller/latest-github-tag).\
So i decided that it is time for me to publish my first packages and so i forked the [latest-github-tag](https://github.com/mhkeller/latest-github-tag) repo, used the [gitlab](https://www.npmjs.com/package/gitlab) package and replicated the package for gitlab, also updating it to use async/await.\
Maybe I will write something a litte more detailed with some questions and problems I had soon.
You can check out the package [here][lgt]. I am sure it is far from perfect (e.g. has no testing) and I am open for suggestions and critique, just mail me or open an issue.
Tests will be added soon hopefully since I'm looking into [AVA](https://github.com/avajs/ava) atm.


[lgt][https://www.npmjs.com/package/latest-gitlab-tag]