import axios from "axios";

/**
 * Init version, optimization should be made
 * + add another image sources e.g. SpaceX launches
 * + images/spaceX badges from https://docs.spacexdata.com/?version=latest
 */

/**
 * Simply object to arrange image to app state:
 *
 * imageObj{
 * id: uniq id
 * title: title text
 * thump: thump url, can be same as image url
 * image: original image url - large version
 * page: images are arranged to pages automatically
 */

/**
 * TODO: error handling overally!
 */

/**
 * TODO: replace localStorge with sessionStorage :)
 * When using real images!
 */

// Main function that uses below helpers
export const getImages = () => {
  return new Promise((resolve, reject) => {
    checkStorage()
      .then(images => {
        const imageArr = createImageArray(images);
        resolve(imageArr);
      })
      .catch(() => {
        fetchImages("https://jsonplaceholder.typicode.com/photos")
          .then(resp => {
            const imageArr = createImageArray(resp.data);
            resolve(imageArr);
            // store fetched items to session storage to avoid useless api calls
            localStorage.setItem(
              "demo-gallery-images",
              JSON.stringify(resp.data)
            );
          })
          .catch(err => {
            console.log("failed to fetch image from jsonplaceholder..");
            reject(err);
          });
      });
  });
};

// Check images from session storage
const checkStorage = () => {
  const images = JSON.parse(localStorage.getItem("demo-gallery-images"));
  return new Promise((resolve, reject) => {
    if (images === null) {
      reject();
    } else {
      resolve(images);
    }
  });
};

// Get images from wanted location url
const fetchImages = url => {
  return new Promise((resolve, reject) => {
    axios.get(url).then(resp => {
      resolve(resp);
    });
  });
};

// Create easy to use image data for state
const createImageArray = originalData => {
  let imagesArr = [];
  let index = 0;
  let page = 0;

  originalData.forEach(image => {
    // new page for every sixth image
    if (index % 6 == 0) {
      page += 1;
    }

    imagesArr.push({
      id: image.id,
      title: image.title,
      thump: image.thumbnailUrl,
      image: image.url,
      page: page
    });

    index += 1;
  });

  return imagesArr;
};
