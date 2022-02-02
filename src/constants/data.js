import images from "./images";

const wines = [
  {
    title: "number one",
    price: "Rs1200",
    tags: "Bottle"
  }
];
const limes = [
  {
    title: "number two",
    price: "Rs 700",
    tags: "Bottle"
  }
];

const cocktails = [
  {
    title: "number three",
    price: "Rs 200",
    tags: "Tube"
  }
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur."
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur."
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur."
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur."
  }
];

export default { wines, limes, cocktails, awards };
