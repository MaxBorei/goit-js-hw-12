import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import "../css/ball-pulse.css";

const catCard = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const lightbox = new SimpleLightbox(".gallery a", {
  captions: false, 
});

export function createGallery(images) {
  const markup = images.map(
    ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="card">
        <a href="${largeImageURL}" class="gallery-item">
          <img src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="card-info">
          <p>👍 Likes: ${likes}</p>
          <p>👁 Views: ${views}</p>
          <p>💬 Comments: ${comments}</p>
          <p>⬇ Downloads: ${downloads}</p>
        </div>
      </li>
    `
  ).join("");

  catCard.innerHTML = markup;
  lightbox.refresh();
}

export function appendToGallery(images) {
  const markup = images.map(
    ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="card">
        <a href="${largeImageURL}" class="gallery-item">
          <img src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="card-info">
          <p>👍 Likes: ${likes}</p>
          <p>👁 Views: ${views}</p>
          <p>💬 Comments: ${comments}</p>
          <p>⬇ Downloads: ${downloads}</p>
        </div>
      </li>
    `
  ).join("");

  catCard.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh();
  scrollToNewContent();
}

function scrollToNewContent() {
  const firstCard = document.querySelector(".gallery .card");
  if (firstCard) {
    const cardHeight = firstCard.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth",
    });
  }
}

export function clearGallery() {
  catCard.innerHTML = "";
}

export function showLoader() {
  loader.style.display = "flex";
}

export function hideLoader() {
  loader.style.display = "none";
}

export function hideLoadMoreButton() {
  const loadMoreBtn = document.querySelector(".load-more");
  if (loadMoreBtn) {
    loadMoreBtn.classList.remove("is-visible");
  }
}

export function showLoadMoreButton() {
  const loadMoreBtn = document.querySelector(".load-more");
  if (loadMoreBtn) {
    loadMoreBtn.classList.add("is-visible");
  }
}
