# personal-website

My own personal website.

## Dev Setup :coffee:

``` bash
# install dependencies
npm i

# start dev server with hot reload at localhost:8080
npm start
```

## Deployment :rocket:

My website is built as a single page application and hosted using [GitHub Pages](https://pages.github.com). A pre-commit hook is used to build a minified version of the sources for deployment in the `docs` directory and [spa-github-pages](https://github.com/rafrex/spa-github-pages) is used to redirect routes beyond the base route back to `index.html` to let the Vue Router handle them correctly.

So, in order to deploy changes simply commit them and push/merge into  `master` and the rest will happen automatically.

![pre-commit hook example](src/assets/pre-commit-example.png)