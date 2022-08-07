import Home from "../../public/images/sidebar/home";
import Plus from "../../public/images/sidebar/plus";
import Document from "../../public/images/sidebar/document";
import Billing from "../../public/images/sidebar/billing";
import User from "../../public/images/sidebar/user";

export const SideBarData = [
    {
        icon: (color) => <Home color={color}/>,
        heading: "Dashboard",
        path: "/",
    },
    {
        icon: (color) => <Plus color={color}/>,
        heading: "New Order",
        path: "/order",
    },
    {
        icon: (color) => <Document color={color}/>,
        heading: "My Orders",
        path: "/order-list",
    },
    {
        icon: (color) => <Billing color={color}/>,
        heading: "Billings",
        path: "/package",
    },
    {
        icon: (color) => <User color={color}/>,
        heading: "My Account",
        path: "/account",
    },
    {
        icon: (color) => <User color={color}/>,
        heading: "Order Management",
        path: "/orderManagement",
    },
    {
        icon: (color) => <User color={color}/>,
        heading: "Sign Out",
        path: "/login",
    },
];
