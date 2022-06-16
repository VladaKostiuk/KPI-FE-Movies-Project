export const API_DOMAIN = "https://api.themoviedb.org/3";
export const API_KEY = "a61e6e15f8aa4e533051cb627eaa2dd5";
export const REGISTRATION_HREF = "https://www.themoviedb.org/signup";

export const ACTION_SEND = "SEND";
export const ACTION_SUCCESS = "SUCCESS";
export const ACTION_ERROR = "ERROR";

export const PAGINATION_INCREASE = "INCREASE";
export const PAGINATION_DECREASE = "DECREASE";

export const IMAGE_DOMAIN = "https://image.tmdb.org/t/p/w500";
export const ERROR_IMAGE_URL = "https://i.imgur.com/GIeKF0n.png";

export const defaultFiltersState = {
  page: 1,
  sorting: "popularity.desc",
  year: 2022,
  genres: [],
};

export const ROUTES = {
  NOT_FOUND_PAGE: "*",
  HOME_PAGE: "/",
  FILM_PAGE: "/film",
};
