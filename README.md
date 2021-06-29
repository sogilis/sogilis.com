* [sogilis.com](#sogiliscom)
    * [Quick start dev](#quick-start-dev)
    * [Stylesheet](#stylesheet)
        * [Compile stylesheet](#compile-stylesheet)

# sogilis.com

We serve `docs` on GitHub Pages. It's the only solution available (see also [this link](https://stackoverflow.com/questions/42469817/host-github-pages-from-dist-folder-in-master-branch))

Currently (2021/06) [./old_english_website](./old_english_website) is deprecated. We serve only French Website.

## Quick start dev

```sh
yarn dev
```

You will have hot reload when any files under [./docs](./docs) will be changed.


## Stylesheet

Style of header and footer could not be changed easy. They are compiled from
https://github.com/sogilis/Blog/tree/master/site/themes/sogilis/assets/css

All stylesheets should be write again.

### Compile stylesheet

Run

```sh
yarn sass:compile
```

