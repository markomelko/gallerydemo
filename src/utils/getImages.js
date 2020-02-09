import axios from "axios";

/**
 * Init version, can be much cleaner
 * Add another image source e.g. SpaceX launches
 * Update own first demo https://my-react-test-project-d70d6.firebaseapp.com/
 * Get second images from https://docs.spacexdata.com/?version=latest
 */

// Main getImages functions - uses helpers functions below
export const getImages = () => {
  return new Promise((resolve, reject) => {
    checkStorage()
      .then(images => {
        const imageArr = createImageArray(images);
        resolve(imageArr);
      })
      .catch(() => {
        fetchImages("https://jsonplaceholder.typicode.com/photos").then(
          resp => {
            const imageArr = createImageArray(resp.data);
            resolve(imageArr);
            sessionStorage.setItem(
              "demo-gallery-images",
              JSON.stringify(resp.data)
            );
          }
        );
      });
  });
};

// Check images from session storage
const checkStorage = () => {
  const images = JSON.parse(sessionStorage.getItem("demo-gallery-images"));
  return new Promise((resolve, reject) => {
    if (images === null) {
      reject();
    } else {
      resolve(images);
    }
  });
};

// Get images from pointed url
const fetchImages = url => {
  return new Promise((resolve, reject) => {
    axios.get(url).then(resp => {
      resolve(resp);
    });
  });
};

// Create usefull imageArray for state
const createImageArray = originalData => {
  let imagesArr = [];
  let index = 0;
  let page = 0;

  originalData.forEach(image => {
    // new page for every sixth image
    if (index % 6 == 0) {
      page += 1;
    }
    // push object to array
    imagesArr.push({
      id: image.id,
      title: image.title,
      thump: image.thumbnailUrl,
      image: image.url,
      page: page
    });

    // increase image count
    index += 1;
  });

  return imagesArr;
};
