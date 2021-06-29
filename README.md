* [sogilis.com](#sogiliscom)
    * [Quick start dev](#quick-start-dev)
    * [Stylesheet](#stylesheet)
        * [compass](#compass)
            * [Install compass](#install-compass)
        * [Run compass:](#run-compass)

# sogilis.com

We serve `docs` on GitHub Pages. It's the only solution available (see also [this link](https://stackoverflow.com/questions/42469817/host-github-pages-from-dist-folder-in-master-branch))

Currently (2021/06) [./en](./en) is deprecated. We serve only French Website.

## Quick start dev

If `compass` is correctly installed and in the `PATH`, run

```sh
yarn start
```

You will have hot reload when any files under [./docs](./docs) will be changed.

## Stylesheet

- Sass files: [./docs/fr/sass](./docs/fr/sass)
- Compiled css files: [./docs/fr/stylesheets](./docs/fr/stylesheets)

### compass

For now, the sass files are compiled via `compass`. We will change this soon.

#### Install compass

```sh
sudo gem update --system && sudo gem install compass
```

(add `-n /usr/local/bin` on MacOS)

### Run compass:

- Compile Sass stylesheets to CSS

  ```sh
  cd ./docs/fr && compass compile
  ```

- Compile Sass stylesheets to CSS when they change
  ```sh
  cd ./docs/fr && compass watch
  ```
