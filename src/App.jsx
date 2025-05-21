import Aboutpage from "./Components/AboutPage/Aboutpage";
import BannerImage from "./Components/BannerImg/BannerImage";
import ProductSlider from "./Components/CameraSections/ProductSlider";
import ClientSection from "./Components/ClientSection/ClientSection";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import NavBar from "./Components/NavBar/NavBar";
import PopularProduct from "./Components/PopularProduct/PopularProduct";
import ProductsList from "./Components/ProductSection/ProductList";
import SalesItems from "./Components/SalesItem/SalesItems";
import TopHeader from "./Components/TopHeader/TopHeader";

function App() {
  return (
    <>
      <div className="overflow-hidden ">
        <TopHeader></TopHeader>
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <ProductsList />
        <ProductSlider />
        <PopularProduct />
        <BannerImage />
        <SalesItems />
        <ClientSection />
        <Aboutpage />
        <Footer />
      </div>
    </>
  );
}

export default App;
