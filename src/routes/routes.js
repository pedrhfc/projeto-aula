import Organization from "@/views/Organization";
import NotFound from "@/views/pages/NotFound";
// import Home from "@/views/Home";
import Axios from "@/views/Axios";
import Company from "@/views/Company";

const Home = () => import("@/views/Home");

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/organizations",
    component: Organization,
  },
  {
    path: "/organizations/:id",
    component: Organization,
  },
  {
    path: "/company",
    component: Company,
  },
  {
    path: "/axios",
    component: Axios,
  },
  {
    path: "*",
    component: NotFound,
  },
];
