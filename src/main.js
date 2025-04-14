import iziToast from "izitoast"; 
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  appendToGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions.js";

const form = document.querySelector("#search-form");
const breedInput = document.querySelector("#breed-input");
const breedsList = document.querySelector("#breeds-list");
const loadMoreBtn = document.querySelector(".load-more");

let currentPage = 1;
let currentQuery = "";
let totalHits = 0;

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = breedInput.value.trim();
  if (!query) return;

  if (query !== currentQuery) {
    currentQuery = query;
    currentPage = 1;
    clearGallery();
  }

  hideLoadMoreButton(); 
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    const images = data.hits;
    totalHits = data.totalHits;

    if (images.length === 0) {
      iziToast.info({
        title: "No results",
        message: "No images found for your query.",
        position: "topRight",
      });
      return;
    }

    createGallery(images);
    currentPage++;

    if ((currentPage - 1) * 15 >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        title: "End of Results",
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
    } else {
      showLoadMoreButton();
    }

    const allTags = images.flatMap(image =>
      image.tags.split(',').map(tag => tag.trim().toLowerCase())
    );

    const uniqueTags = [...new Set(allTags)];
    const topTags = uniqueTags.slice(0, 10); 
    breedsList.innerHTML = topTags
      .map(tag => `<option value="${tag}"></option>`)
      .join("");
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: "Error",
      message: "Something went wrong!",
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener("click", async () => {
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    const images = data.hits;

    appendToGallery(images);
    currentPage++;

    if ((currentPage - 1) * 15 >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        title: "End of Results",
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
    }
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: "Error",
      message: "Something went wrong while loading more images!",
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
});

const scrollToTopBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

