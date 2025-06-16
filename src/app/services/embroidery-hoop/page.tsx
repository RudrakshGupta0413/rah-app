import ServiceDetails from "@/components/ServiceDetails";

const EmbroideryHoopPage = () => {
  const title = "Handmade Embroidery Hoop";
  const images = [
    "/eh1.png", "/eh2.png", "/eh3.png", "/eh4.png",
    "/eh5.png", "/eh6.png", "/eh7.png", "/eh8.png"
  ];
  const priceList = [
    { size: "4” Embroidery Frame", price: "399/-" },
    { size: "6” Embroidery Frame", price: "599/-" },
    { size: "7” Embroidery Frame", price: "999/-" },
    { size: "8” Embroidery Frame", price: "1,299/-" },
    { size: "10” Embroidery Frame", price: "2,499/-" },
    { size: "12” Embroidery Frame", price: "2,999/-" },
    { size: "16” Embroidery Frame", price: "3,499/-" },
    { size: "18” Embroidery Frame", price: "4,999/-" },
  ];

  return <ServiceDetails title={title} images={images} priceList={priceList} />;
};

export default EmbroideryHoopPage;
