import ServiceDetails from "@/components/ServiceDetails";

const SketchPortraitPage = () => {
  const title = "Embroidery On Clothes";
  const images = [
    "/ec1.png", "/ec2.png", "/ec3.png", "/ec4.png",
  ];
  const priceList = [
    { size: "Kurta/Kurti", price: "2,499/-" },
    { size: "Shirts", price: "2,399/-" },
    { size: "T-Shirts", price: "2,099/-" },
  ];

  return <ServiceDetails title={title} images={images} priceList={priceList}/>;
};

export default SketchPortraitPage;
