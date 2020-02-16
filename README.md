# Image gallery demo project

Pretty fast show case project for one pretty cool company.
Uses JSON placeholder images for now.
There are landing, imagegrid and single image viewer containers.

Will continue evolving when have time for this

# Notice

Just added a mockup from SpaceX images, initial version, not clean code :)
TODO: clean and simple version, check all again with time!

## Stack

Webpack, React, Redux and few other libries, check package.json

High level structure:

    .
    ├── ...
    ├── src
    │ ├── components    # Visual components and lyaout wrappers
    │ ├── containers    # Stateful components
    │ ├── sass          # Styles
    │ ├── store         # Simply state
    │ ├── utils         # Static defaults, used texts (i18next) and getImages() function
    └── ...

## Demo

Check: [https://gallerydemo-1bcf1.web.app/](https://gallerydemo-1bcf1.web.app/).

## Todos

Improve ImageViewer and ImageGrid containers - simplify the render logics

Add some linter [https://github.com/typicode/husky/](https://github.com/typicode/husky/).

Add few tests e.g. with Jest

Use async await calls on getImages.js to make it more cleaner

Use some other public "image storage" to make it more visual like [https://api.spacexdata.com/v3/launches](https://api.spacexdata.com)

..

## run

    node > 12.0
    npm > 6

    # install dependencies
    npm install

    # serve on localhost:9000
    npm start

    # build for production
    npm run build

    use own hosting platform e.g. Firebase, if need help just ask :)

## author

    Marko Melko
