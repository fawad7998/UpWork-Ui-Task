export const ROOT_ROUTE = "/";
export const ORGANIZER_ROOT = "/organizer";
export const SPONSOR_ROOT = "/sponsor";

const path = (root, path) => `${root}${path}`;

export const AUTH_ROUTES = {
  login: "/login",
  signup: "/signup",
  forgotpassword: "/forgotpassword",
};

export const SPONSOR_ROUTES = {
  home: "/home",
};
export const ORGANIZER_ROUTES = {
  home: "/home",
};
