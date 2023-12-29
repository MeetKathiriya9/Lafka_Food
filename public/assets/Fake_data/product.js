import product_01_image_01 from "../images/1.jpg";
import product_01_image_02 from "../images/2.jpg";
import product_01_image_03 from "../images/3.jpg";

import product_02_image_01 from "../images/5.jpg";
import product_02_image_02 from "../images/6.jpg";
import product_02_image_03 from "../images/7.jpg";

import product_03_image_01 from "../images/8.jpg";
import product_03_image_02 from "../images/9.jpg";
import product_03_image_03 from "../images/7.jpg";

import product_04_image_01 from "../images/10.jpg";
import product_04_image_02 from "../images/11.jpg";
import product_04_image_03 from "../images/21.png";

import product_05_image_01 from "../images/3.jpg";
import product_05_image_02 from "../images/4.jpg";
import product_05_image_03 from "../images/1.jpg";

import product_06_image_01 from "../images/15.png";
import product_06_image_02 from "../images/16.png";
import product_06_image_03 from "../images/17.png";

import product_07_image_01 from "../images/12.png";
import product_07_image_02 from "../images/13.png";
import product_07_image_03 from "../images/14.png";

const products = [
    {
        id: "01",
        title: "Bacon Cheeseburger",
        price: 24.0,
        image01: product_01_image_01,
        image02: product_01_image_02,
        image03: product_01_image_03,
        category: "Burger",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad etest, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia.Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
        id: "02",
        title: "Margharita Pizza",
        price: 115.0,
        image01: product_02_image_01,
        image02: product_02_image_02,
        image03: product_02_image_03,
        category: "Pizza",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad etest, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia.Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
    {
        id: "03",
        title: "Santa Fe Pizza",
        price: 110.0,
        image01: product_03_image_01,
        image02: product_03_image_02,
        image03: product_03_image_03,
        category: "Pizza",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad etest, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia.Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
    {
        id: "04",
        title: "Chocolate Fudge Cake",
        price: 110.0,
        image01: product_04_image_01,
        image02: product_04_image_02,
        image03: product_04_image_03,
        category: "Dessert",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad etest, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia.Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
    {
        id: "05",
        title: "Big Brekkie BBQ Burger",
        price: 24.0,
        image01: product_05_image_01,
        image02: product_05_image_02,
        image03: product_05_image_03,
        category: "Burger",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad etest, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia.Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
    {
        id: "06",
        title: "Kahlua Milk",
        price: 24.0,
        image01: product_06_image_01,
        image02: product_06_image_02,
        image03: product_06_image_03,
        category: "Dessert",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad etest, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia.Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
    {
        id: "07",
        title: "Bacon Paradise Pizza",
        price: 115.0,
        image01: product_03_image_02,
        image02: product_02_image_01,
        image03: product_02_image_02,
        category: "Pizza",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad etest, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia.Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
    {
        id: "08",
        title: "Hand-Scooped Ice Cream",
        price: 110.0,
        image01: product_04_image_02,
        image02: product_06_image_03,
        image03: product_04_image_03,
        category: "Dessert",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad etest, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia.Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
    {
        id: "09",
        title: "Pepperoni Pizza",
        price: 110.0,
        image01: product_02_image_02,
        image02: product_02_image_03,
        image03: product_03_image_01,
        category: "Pizza",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad etest, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia.Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
    {
        id: "10",
        title: "Original Angus Burger",
        price: 24.0,
        image01: product_05_image_01,
        image02: product_05_image_02,   
        image03: product_01_image_01,
        category: "Burger",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad etest, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia.Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
    {
        id: "11",
        title: "Side Fresco Salad",
        price: 35.0,
        image01: product_07_image_01,
        image02: product_07_image_02,
        image03: product_07_image_03,
        category: "Salad",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad etest, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia.Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
    {
        id: "12",
        title: "Quesadilla Explosion Salad",
        price: 35.0,
        image01: product_07_image_02,
        image02: product_07_image_03,
        image03: product_07_image_01,
        category: "Salad",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad etest, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia.Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
    {
        id: "13",
        title: "Santa Fe Chicken Salad",
        price: 35.0,
        image01: product_07_image_03,
        image02: product_07_image_02,
        image03: product_07_image_01,
        category: "Salad",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad etest, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia.Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
];
export default products;