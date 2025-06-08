import ServiceDetails from "@/components/ServiceDetails";

const OthersPage = () => {
  const title = "Others";
  const images = [
    "/others1.png", "/others2.png", "/others3.png", "/others4.png",
    "/others6.png", "/others7.png", "/others8.png", "others4.png",
  ];
  const priceList = [
    { size: "Fridge Magnet", price: "599/-" },
    { size: "Logos", price: "799/-" },
    { size: "Badges", price: "199/-" },
  ];

  return <ServiceDetails title={title} images={images} priceList={priceList}/>;
};

export default OthersPage;
