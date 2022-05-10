import Home from "../../public/images/home";
import Plus from "../../public/images/plus";
import Document from "../../public/images/document";
import Billing from "../../public/images/billing";
import User from "../../public/images/user";
export const SideBarData = [
  {
    icon: (color) => <Home color={color} />,
    heading: "Dashboard",
    path: "/",
  },
  {
    icon: (color) => <Plus color={color} />,
    heading: "New Order",
    path: "/order",
  },
  {
    icon: (color) => <Document color={color} />,
    heading: "My Orders",
    path: "/order-list",
  },
  {
    icon: (color) => <Billing color={color} />,
    heading: "Billings",
    path: "/package",
  },
  {
    icon: (color) => <User color={color} />,
    heading: "My Account",
    path: "/account",
  },
];
