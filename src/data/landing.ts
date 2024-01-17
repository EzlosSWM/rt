import about from "@landing/about.jpeg";
import contact from "@landing/contact.jpg";
import nature from "@landing/nature.jpg";
import service from "@landing/wedding.jpg";

const landings = [
    {
        img: about,
        alt: "About Us",
        link: "/about/",
        title: "About Us",
    },
    {
        img: service,
        alt: "List of services",
        link: "/service/",
        title: "Services",
    },
    {
        img: nature,
        alt: "Preview gallery of nature photography",
        link: "/gallery/nature/",
        title: "Nature",
    },
    {
        img: contact,
        alt: "Contact Us",
        link: "/contact/",
        title: "About Us",
    },
];

export default landings;
