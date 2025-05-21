import ProductCard from "./ProductCard";

function ProductsList() {
  const Products = [
    {
      imgid: 1,
      imgsrc: "",
      name: "Canon RF 50mm f/1.8 STM Lens",
      price: "120.00",
    },
    { imgid: 1, imgsrc: "", name: "test", price: "340.00" },
    {
      imgid: 1,
      imgsrc: "",
      name: "Rokinon Xeen 85mm T1.5 Lens Canon EF Mount",
      price: "210.00",
    },
    {
      imgid: 1,
      imgsrc: "",
      name: "Sigma AF 17-70mm f/2.8-4.5 DC Macro HSM Lens Sony/Minolta",
      price: "111.00",
    },
  ];
  return (
    <>
      <section className="Product-List grid grid-cols-1 x-720:grid-cols-3 x-480:grid-cols-2  xl:grid-cols-4 gap-6 px-5 xl:px-12 lg:mt-24 mt-8">
        {Products.map((Product) => {
          return <ProductCard Product={Product} />;
        })}
      </section>
    </>
  );
}
export default ProductsList;
