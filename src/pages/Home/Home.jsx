import Banner from "../Banner/Banner";
import Clients from "../Clients/Clients";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* banner section  */}
      <div className="mt-16">
        <Banner></Banner>
      </div>
      {/* client section  */}
      <div className="my-16">
        <Clients></Clients>
      </div>
      {/* contact us  */}
      <div className="my-16">
        <ContactUs></ContactUs>
      </div>
      {/* footer section  */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
