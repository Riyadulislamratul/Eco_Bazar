// Product Images
import GreenApple from "../assets/products/green-apple.png";
import ChineseCabbage from "../assets/products/chinese-cabbage.png";
import Corn from "../assets/products/corn.png";
import Eggplant from "../assets/products/eggplant.png";
import Cauliflower from "../assets/products/cauliflower.png";
import GreenCapsicum from "../assets/products/green-capsicum.png";
import GreenChili from "../assets/products/green-chili.png";
import Cucumber from "../assets/products/cucumber.png";
import Lettuce from "../assets/products/lettuce.png";
import Tomato from "../assets/products/tomato.png";
import Mango from "../assets/products/mango.png";

const products = [
  {
    id: 1,
    slug: "green-apple",
    name: "Green Apple",
    category: "Fresh Fruit",
    image: GreenApple,
    gallery: [GreenApple],
    price: 14.99,
    oldPrice: 20.99,
    discount: 50,
    rating: 4,
    reviews: 128,
    stock: 50,
    featured: false,
    popular: true,
    latest: true,
    sale: true,
    tags: ["Healthy", "Fruit"],
    brand: "Fresh Farm",

    sku: "FF-001", // Make it unique for each product

    description:
      "Fresh organic product sourced directly from local farms. Rich in nutrients and carefully selected for the best quality.",

    features: [
      "100% Organic",
      "Farm Fresh",
      "Premium Quality",
      "No Artificial Chemicals",
    ],

    weight: "1 kg",

    unit: "kg",

    color: "Green",

    origin: "Bangladesh",

    storage: "Keep Refrigerated",

    shelfLife: "7 Days",

    reviewsList: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        date: "20 June 2026",
        comment: "Excellent quality. Highly recommended.",
      },
      {
        id: 2,
        user: "Sarah",
        rating: 4,
        date: "22 June 2026",
        comment: "Fresh and delicious.",
      },
    ],
  },

  {
    id: 2,
    slug: "chinese-cabbage",
    name: "Chinese Cabbage",
    category: "Fresh Vegetables",
    image: ChineseCabbage,
    gallery: [ChineseCabbage],
    price: 14.99,
    oldPrice: null,
    discount: null,
    rating: 4,
    reviews: 87,
    stock: 30,
    featured: true,
    popular: true,
    latest: false,
    sale: false,
    tags: ["Vegetables"],
    brand: "Fresh Farm",
    sku: "FF-002",
    description:
      "Fresh organic product sourced directly from local farms. Rich in nutrients and carefully selected for the best quality.",
    features: [
      "100% Organic",
      "Farm Fresh",
      "Premium Quality",
      "No Artificial Chemicals",
    ],
    weight: "1 kg",
    unit: "kg",
    color: "Green",
    origin: "Bangladesh",
    storage: "Keep Refrigerated",
    shelfLife: "7 Days",
    reviewsList: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        date: "20 June 2026",
        comment: "Excellent quality. Highly recommended.",
      },
      {
        id: 2,
        user: "Sarah",
        rating: 4,
        date: "22 June 2026",
        comment: "Fresh and delicious.",
      },
    ],
  },

  {
    id: 3,
    slug: "corn",
    name: "Ladies Finger Corn",
    category: "Fresh Vegetables",
    image: Corn,
    gallery: [Corn],
    price: 14.99,
    oldPrice: 20.99,
    discount: null,
    rating: 4,
    reviews: 55,
    stock: 0,
    featured: false,
    popular: true,
    latest: false,
    sale: false,
    tags: ["Vegetables"],
    brand: "Fresh Farm",
    sku: "FF-003",
    description:
      "Fresh organic product sourced directly from local farms. Rich in nutrients and carefully selected for the best quality.",
    features: [
      "100% Organic",
      "Farm Fresh",
      "Premium Quality",
      "No Artificial Chemicals",
    ],
    weight: "1 kg",
    unit: "kg",
    color: "Green",
    origin: "Bangladesh",
    storage: "Keep Refrigerated",
    shelfLife: "7 Days",
    reviewsList: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        date: "20 June 2026",
        comment: "Excellent quality. Highly recommended.",
      },
      {
        id: 2,
        user: "Sarah",
        rating: 4,
        date: "22 June 2026",
        comment: "Fresh and delicious.",
      },
    ],
  },

  {
    id: 4,
    slug: "eggplant",
    name: "Eggplant",
    category: "Fresh Vegetables",
    image: Eggplant,
    gallery: [Eggplant],
    price: 14.99,
    oldPrice: null,
    discount: null,
    rating: 4,
    reviews: 98,
    stock: 45,
    featured: false,
    popular: false,
    latest: true,
    sale: false,
    tags: ["Vegetables"],
    brand: "Fresh Farm",

    sku: "FF-001", // Make it unique for each product

    description:
      "Fresh organic product sourced directly from local farms. Rich in nutrients and carefully selected for the best quality.",

    features: [
      "100% Organic",
      "Farm Fresh",
      "Premium Quality",
      "No Artificial Chemicals",
    ],

    weight: "1 kg",

    unit: "kg",

    color: "Green",

    origin: "Bangladesh",

    storage: "Keep Refrigerated",

    shelfLife: "7 Days",

    reviewsList: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        date: "20 June 2026",
        comment: "Excellent quality. Highly recommended.",
      },
      {
        id: 2,
        user: "Sarah",
        rating: 4,
        date: "22 June 2026",
        comment: "Fresh and delicious.",
      },
    ],
  },

  {
    id: 5,
    slug: "cauliflower",
    name: "Fresh Cauliflower",
    category: "Fresh Vegetables",
    image: Cauliflower,
    gallery: [Cauliflower],
    price: 14.99,
    oldPrice: null,
    discount: null,
    rating: 4,
    reviews: 100,
    stock: 60,
    featured: false,
    popular: true,
    latest: true,
    sale: false,
    tags: ["Vegetables"],
    brand: "Fresh Farm",
    sku: "FF-004",
    description:
      "Fresh organic product sourced directly from local farms. Rich in nutrients and carefully selected for the best quality.",
    features: [
      "100% Organic",
      "Farm Fresh",
      "Premium Quality",
      "No Artificial Chemicals",
    ],
    weight: "1 kg",
    unit: "kg",
    color: "Green",
    origin: "Bangladesh",
    storage: "Keep Refrigerated",
    shelfLife: "7 Days",
    reviewsList: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        date: "20 June 2026",
        comment: "Excellent quality. Highly recommended.",
      },
      {
        id: 2,
        user: "Sarah",
        rating: 4,
        date: "22 June 2026",
        comment: "Fresh and delicious.",
      },
    ],
  },

  {
    id: 6,
    slug: "green-capsicum",
    name: "Green Capsicum",
    category: "Fresh Vegetables",
    image: GreenCapsicum,
    gallery: [GreenCapsicum],
    price: 14.99,
    oldPrice: 20.99,
    discount: 50,
    rating: 4,
    reviews: 35,
    stock: 20,
    featured: false,
    popular: false,
    latest: true,
    sale: true,
    tags: ["Vegetables"],
    brand: "Fresh Farm",

    sku: "FF-001", // Make it unique for each product

    description:
      "Fresh organic product sourced directly from local farms. Rich in nutrients and carefully selected for the best quality.",

    features: [
      "100% Organic",
      "Farm Fresh",
      "Premium Quality",
      "No Artificial Chemicals",
    ],

    weight: "1 kg",

    unit: "kg",

    color: "Green",

    origin: "Bangladesh",

    storage: "Keep Refrigerated",

    shelfLife: "7 Days",

    reviewsList: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        date: "20 June 2026",
        comment: "Excellent quality. Highly recommended.",
      },
      {
        id: 2,
        user: "Sarah",
        rating: 4,
        date: "22 June 2026",
        comment: "Fresh and delicious.",
      },
    ],
  },

  {
    id: 7,
    slug: "green-chili",
    name: "Green Chili",
    category: "Fresh Vegetables",
    image: GreenChili,
    gallery: [GreenChili],
    price: 14.99,
    oldPrice: null,
    discount: null,
    rating: 4,
    reviews: 65,
    stock: 15,
    featured: false,
    popular: true,
    latest: false,
    sale: false,
    tags: ["Vegetables"],
    brand: "Fresh Farm",

    sku: "FF-001", // Make it unique for each product

    description:
      "Fresh organic product sourced directly from local farms. Rich in nutrients and carefully selected for the best quality.",

    features: [
      "100% Organic",
      "Farm Fresh",
      "Premium Quality",
      "No Artificial Chemicals",
    ],

    weight: "1 kg",

    unit: "kg",

    color: "Green",

    origin: "Bangladesh",

    storage: "Keep Refrigerated",

    shelfLife: "7 Days",

    reviewsList: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        date: "20 June 2026",
        comment: "Excellent quality. Highly recommended.",
      },
      {
        id: 2,
        user: "Sarah",
        rating: 4,
        date: "22 June 2026",
        comment: "Fresh and delicious.",
      },
    ],
  },

  {
    id: 8,
    slug: "green-cucumber",
    name: "Green Cucumber",
    category: "Fresh Vegetables",
    image: Cucumber,
    gallery: [Cucumber],
    price: 14.99,
    oldPrice: 20.99,
    discount: 50,
    rating: 4,
    reviews: 44,
    stock: 18,
    featured: false,
    popular: true,
    latest: true,
    sale: true,
    tags: ["Vegetables"],
    brand: "Fresh Farm",

    sku: "FF-001", // Make it unique for each product

    description:
      "Fresh organic product sourced directly from local farms. Rich in nutrients and carefully selected for the best quality.",

    features: [
      "100% Organic",
      "Farm Fresh",
      "Premium Quality",
      "No Artificial Chemicals",
    ],

    weight: "1 kg",

    unit: "kg",

    color: "Green",

    origin: "Bangladesh",

    storage: "Keep Refrigerated",

    shelfLife: "7 Days",

    reviewsList: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        date: "20 June 2026",
        comment: "Excellent quality. Highly recommended.",
      },
      {
        id: 2,
        user: "Sarah",
        rating: 4,
        date: "22 June 2026",
        comment: "Fresh and delicious.",
      },
    ],
  },

  {
    id: 9,
    slug: "green-lettuce",
    name: "Green Lettuce",
    category: "Fresh Vegetables",
    image: Lettuce,
    gallery: [Lettuce],
    price: 14.99,
    oldPrice: null,
    discount: null,
    rating: 4,
    reviews: 76,
    stock: 40,
    featured: false,
    popular: true,
    latest: false,
    sale: false,
    tags: ["Vegetables"],
    brand: "Fresh Farm",

    sku: "FF-001", // Make it unique for each product

    description:
      "Fresh organic product sourced directly from local farms. Rich in nutrients and carefully selected for the best quality.",

    features: [
      "100% Organic",
      "Farm Fresh",
      "Premium Quality",
      "No Artificial Chemicals",
    ],

    weight: "1 kg",

    unit: "kg",

    color: "Green",

    origin: "Bangladesh",

    storage: "Keep Refrigerated",

    shelfLife: "7 Days",

    reviewsList: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        date: "20 June 2026",
        comment: "Excellent quality. Highly recommended.",
      },
      {
        id: 2,
        user: "Sarah",
        rating: 4,
        date: "22 June 2026",
        comment: "Fresh and delicious.",
      },
    ],
  },

  {
    id: 10,
    slug: "red-tomato",
    name: "Fresh Tomato",
    category: "Fresh Vegetables",
    image: Tomato,
    gallery: [Tomato],
    price: 14.99,
    oldPrice: null,
    discount: null,
    rating: 4,
    reviews: 120,
    stock: 70,
    featured: false,
    popular: true,
    latest: true,
    sale: false,
    tags: ["Vegetables"],
    brand: "Fresh Farm",

    sku: "FF-001", // Make it unique for each product

    description:
      "Fresh organic product sourced directly from local farms. Rich in nutrients and carefully selected for the best quality.",

    features: [
      "100% Organic",
      "Farm Fresh",
      "Premium Quality",
      "No Artificial Chemicals",
    ],

    weight: "1 kg",

    unit: "kg",

    color: "Green",

    origin: "Bangladesh",

    storage: "Keep Refrigerated",

    shelfLife: "7 Days",

    reviewsList: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        date: "20 June 2026",
        comment: "Excellent quality. Highly recommended.",
      },
      {
        id: 2,
        user: "Sarah",
        rating: 4,
        date: "22 June 2026",
        comment: "Fresh and delicious.",
      },
    ],
  },

  {
    id: 11,
    slug: "fresh-mango",
    name: "Fresh Mango",
    category: "Fresh Fruit",
    image: Mango,
    gallery: [Mango],
    price: 14.99,
    oldPrice: null,
    discount: null,
    rating: 4,
    reviews: 58,
    stock: 80,
    featured: false,
    popular: true,
    latest: true,
    sale: false,
    tags: ["Fruit"],
    brand: "Fresh Farm",

    sku: "FF-001", // Make it unique for each product

    description:
      "Fresh organic product sourced directly from local farms. Rich in nutrients and carefully selected for the best quality.",

    features: [
      "100% Organic",
      "Farm Fresh",
      "Premium Quality",
      "No Artificial Chemicals",
    ],

    weight: "1 kg",

    unit: "kg",

    color: "Green",

    origin: "Bangladesh",

    storage: "Keep Refrigerated",

    shelfLife: "7 Days",

    reviewsList: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        date: "20 June 2026",
        comment: "Excellent quality. Highly recommended.",
      },
      {
        id: 2,
        user: "Sarah",
        rating: 4,
        date: "22 June 2026",
        comment: "Fresh and delicious.",
      },
    ],
  },
];

export default products;
