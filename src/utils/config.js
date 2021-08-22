const routes = [
  {
    path: "/",
    Component: Home,
    props: {
      exact: true
    }
  },
  {
    path: "/about",
    Component: About
  },
  {
    path: "/member",
    Component: Member,
    props: {
      auth: true,
      isLogin: isLogin
    }
  },
  {
    path: "/login",
    Component: Login,
    childProps: { setLogin }
  },
  {
    path: "/category",
    Component: Category
  },
  {
    path: "/post:id",
    Component: Post
  }
]