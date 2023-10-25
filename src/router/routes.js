const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      //{ path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "sign-in",
        component: () => import("pages/SignIn/Index.vue"),
        alias: "",
      },
      {
        path: "sign-up",
        component: () => import("pages/SignUp/Index.vue"),
      },
      { path: "main", component: () => import("pages/Main/Index.vue") },
      { path: "my-area", component: () => import("pages/MyArea/Index.vue") },
      { path: "profile", component: () => import("pages/Profile/Index.vue") },
      { path: "new-post", component: () => import("pages/NewPost/Index.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
