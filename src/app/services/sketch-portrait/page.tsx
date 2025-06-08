import ServiceDetails from "@/components/ServiceDetails";

const SketchPortraitPage = () => {
  const title = "Handmade Sketch Potrait";
  const images = [
    "/sp1.png", "/sp2.png", "/sp3.png", "/sp4.png",
    "/sp5.png", "/sp6.png", "/sp7.png", "/sp8.png"
  ];
  const priceList = [
    { size: "A4 size single person", price: "899/-" },
    { size: "A4 size two person", price: "1,799/-" },
    { size: "A3 size single person", price: "1,999/-" },
    { size: "A3 size two person", price: "3,999/-" },
    { size: "A2 size single person", price: "2,999/-" },
    { size: "A2 size two person", price: "5,999/-" },
    { size: "A1 size single person", price: "4,999/-" },
    { size: "A1 size two person", price: "9,999/-" },
  ];

  return <ServiceDetails title={title} images={images} priceList={priceList} />;
};

export default SketchPortraitPage;
