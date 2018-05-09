# React Lerna Monorepo

## Setup

```sh
npm install
lerna bootstrap
```

## Build

```sh
# from top-level
npm run build
```

## Run Locally

```sh
# from top-level
npm start
```

## Add a New Package

```sh
cd packages
create-react-app *name*
```

Then:
- Add `PORT=####` to npm `start` script (avoid multiple packages with the same port)
- Add `"homepage": "."` to package.json ([Docs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#building-for-relative-paths))
