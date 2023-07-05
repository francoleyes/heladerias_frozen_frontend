import Layout from "../layouts/Layout/Layout";
import Error404 from "../pages/Error404/Error404";
import Home from "../pages/Home/Home";
import { ItemDetailContainer } from "../pages/ItemDetailContainer";
import { ItemListContainer } from "../pages/ItemListContainer";
import Cart from "../pages/Cart";
import FormPay from "../components/FormPay/FormPay";

const routes = [
  {
    path: "/",
    layout: Layout,
    component: Home,
  },
  {
    path: "/cart",
    layout: Layout,
    component: Cart,
  },
  {
    path: "/detail",
    layout: Layout,
    component: ItemDetailContainer,
  },
  {
    path: "/catalogo",
    layout: Layout,
    component: ItemListContainer,
  },
  {
    path: "/pay",
    layout: Layout,
    component: FormPay,
  },
  {
    path: "/item/:id",
    layout: Layout,
    component: ItemDetailContainer,
  },
  {
    path: "*",
    layout: Layout,
    component: Error404,
  },
];

export default routes;
