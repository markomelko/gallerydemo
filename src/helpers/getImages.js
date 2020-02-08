import axios from "axios";

export const getImages = () => {
  return new Promise((resolve, reject) => {
    checkStorage()
      .then(images => {
        resolve(images);
      })
      .catch(() => {
        fetchImages().then(resp => {
          resolve(resp.data);
          sessionStorage.setItem(
            "demo-gallery-images",
            JSON.stringify(resp.data)
          );
        });
      });
  });
};

const checkStorage = () => {
  console.log("checkStorage()");
  const images = JSON.parse(sessionStorage.getItem("demo-gallery-images"));
  return new Promise((resolve, reject) => {
    if (images === null) {
      reject();
    } else {
      resolve(images);
    }
  });
};

const fetchImages = () => {
  console.log("fetchImages()");
  return new Promise((resolve, reject) => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(resp => {
      resolve(resp);
    });
  });
};
