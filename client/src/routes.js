/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import TableList from "views/ListeUser.jsx";
import FormPage from "views/FormPage.jsx";
import Typography from "views/Typography.jsx";
// import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
// import Notifications from "views/Notifications.jsx";
import Upgrade from "views/Upgrade.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "ListeUser",
    icon: "pe-7s-users",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/FormPage",
    name: "STOCK",
    icon: "pe-7s-server",
    component: FormPage,
    layout: "/admin"
  },
  
  {
    path: "/typography",
    name: "PRODUITS",
    icon: "fa fa-product-hunt", 
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "CLIENTS",
    icon: "fa fa-product-hunt", 
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "FORNUSSEURS",
    icon: "fa fa-product-hunt", 
    component: Typography,
    layout: "/admin"
  }

  
];

export default dashboardRoutes;
