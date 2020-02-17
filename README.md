# Image gallery demo project

Fast show case project for one pretty cool company.
Uses JSON placeholder images and SpaceX mission badges.

Contains just landing, imagegrid and single imageviewer visual containers that are binding few components.

...to be continued

## Stack

Webpack 4, React, Redux and few other libries - check package.json
Build without npx create-react-app

High level structure:

    .
    ├── ...
    ├── src
    │ ├── components        # Visual components and lyaout wrappers
    │ ├── containers        # Stateful components
    │ ├── sass              # Styles
    │ ├── store             # Simply state
    │ ├── utils             # Static defaults and helper functions
    └── ...

## Demo @Firebase

Check: [https://gallerydemo-1bcf1.web.app/](https://gallerydemo-1bcf1.web.app/).

## Todos

Improve ImageViewer and ImageGrid containers - simplify the render logics

Add linter [https://github.com/typicode/husky/](https://github.com/typicode/husky/).

Add few tests e.g. with Jest

Clean state usage and getImages file/logic

..

## Run

    node > 12.0
    npm > 6

    # install dependencies
    npm install

    # serve on localhost:9000
    npm start

    # build for production
    npm run build

## Author

    Marko Melko
