const imgContainer = document.querySelector("#image-container");
const urlAPI = "https://picsum.photos/v2/list";
const getPicture = () =>
  fetch(urlAPI)
    .then((data) => data.json())
    .then((items) => {
      //   console.log(items);
      items.forEach(function (photObject) {
        const newContainer = document.createElement("div");
        newContainer.classList.add("image-container-item");
        const newImg = document.createElement("img");
        newImg.src = photObject.download_url;
        newContainer.appendChild(newImg);

        const newAuthor = document.createElement("p");
        newAuthor.textContent = photObject.author;
        newContainer.appendChild(newAuthor);
      });
    });
getPicture();
