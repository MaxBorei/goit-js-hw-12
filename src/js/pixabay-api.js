import axios from "axios";

const myApiKey = "49674407-1d122c5bfd0965d51e6fbc3dd";

export async function getImagesByQuery(query, page = 1) {
  const response = await axios("https://pixabay.com/api/", {
    params: {
      key: myApiKey,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });

  return response.data;
}