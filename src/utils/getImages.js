import axios from "axios";

// (1) default images
export const getImages = () => {
  let imageArr;
  // todo add error handling
  return new Promise(async (resolve, reject) => {
    try {
      imageArr = await checkStorage("placeholder-images");
    } catch {
      imageArr = await fetchImages(
        "https://jsonplaceholder.typicode.com/photos",
        "placeholder-images"
      );
    }
    resolve(imageArr);
  });
};
// (2) spacex images
export const getSpaceXData = () => {
  let imageArr;
  return new Promise(async (resolve, reject) => {
    try {
      imageArr = await checkStorage("spacex-images");
    } catch {
      imageArr = await fetchImages(
        "https://api.spacexdata.com/v3/launches",
        "spacex-images"
      );
    }
    resolve(imageArr);
  });
};

//////// HELPERS /////////
const checkStorage = storage => {
  const images = JSON.parse(localStorage.getItem(storage));
  return new Promise((resolve, reject) => {
    if (images === null) {
      reject();
    } else {
      resolve(images);
    }
  });
};

const fetchImages = (url, storage) => {
  return new Promise((resolve, reject) => {
    axios.get(url).then(resp => {
      let imageArr;
      if (storage === "placeholder-images") {
        imageArr = createImageArray(resp.data);
      } else {
        // "spacex-images"
        imageArr = parseSpaceXdata(resp.data);
      }
      localStorage.setItem(storage, JSON.stringify(imageArr));
      resolve(imageArr);
    });
  });
};

// Create easy to use image data for state
// todo make merge with parseSpaceXdata()
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

//// merge with above function
const parseSpaceXdata = flightData => {
  let imagesArr = [];
  let index = 0;
  let page = 0;

  flightData.forEach(flight => {
    // new page for every sixth image
    if (index % 6 == 0) {
      page += 1;
    }

    let title2 = [];

    title2.push(flight.mission_name);
    title2.push(flight.launch_year);

    var all = title2.join("-");

    let url = "https://via.placeholder.com/600/92c952";

    // default image if not set
    if (flight.links.mission_patch !== null) {
      url = flight.links.mission_patch;
    }

    imagesArr.push({
      id: flight.flight_number,
      title: all,
      thump: url,
      image: url,
      page: page
    });

    index += 1;
  });

  return imagesArr;
};
