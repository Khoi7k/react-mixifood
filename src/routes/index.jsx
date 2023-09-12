import Homepage from "../components/Homepage";
import Product from "../components/Products";
import Register from "../components/Register";
import DefaultLayout from "../layout/DefaultLayout";
import RegisterLayout from "../layout/RegisterLayout";
import IndexAdmin from "../admin";
import AdminLayout from '../layout/AdminLayout'
import Categories from "../admin/components/Categories";
import Products from "../admin/components/Products";
import Users from "../admin/components/Users";

const publicRoutes = [
  {
    path: "/",
    component: Homepage,
    layout: DefaultLayout
  },
  {
    path: "/products/*",
    component: Product,
    layout: DefaultLayout
  },
  {
    path: "/products/:id_cate",
    component: Product,
    layout: DefaultLayout
  },
  {
    path: "/register",
    component: Register,
    layout: RegisterLayout
  },

];
const privateRoutes = [
  {
    path: "/admin/*",
    component: IndexAdmin,
    layout: AdminLayout
  },
  {
    path: "/admin/categories",
    component: Categories,
    layout: AdminLayout
  },
  {
    path: "/admin/products",
    component: Products,
    layout: AdminLayout
  },
  {
    path: "/admin/users",
    component: Users,
    layout: AdminLayout
  },
];

export { publicRoutes, privateRoutes };