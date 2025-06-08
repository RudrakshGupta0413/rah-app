import ServiceDetails from "@/components/ServiceDetails";

const FacelessCanvasPage = () => {
  const title = "Faceless Canvas Illustration";
  const images = [
    "/fc1.png", "/fc2.png", "/fc3.png", "/fc4.png",
    "/fc5.png", "/fc6.png", "/fc7.png", "/fc8.png"
  ];
  const priceList = [
    { size: "4×4” canvas", price: "349/-" },
    { size: "4×6” canvas", price: "379/-" },
    { size: "5×5” canvas", price: "399/-" },
    { size: "5×7” canvas", price: "449/-" },
    { size: "6×6” canvas", price: "499/-" },
    { size: "6×8” canvas", price: "549/-" },
    { size: "8×10” canvas", price: "799/-" },
    { size: "10×12” canvas", price: "999/-" },
  ];

  return <ServiceDetails title={title} images={images} priceList={priceList} />;
};

export default FacelessCanvasPage;
