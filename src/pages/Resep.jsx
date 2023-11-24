import Header from "../components/Header";
import { Row } from "react-bootstrap";
import { CardItem } from "../components/CardItem";
import { dataResep } from "../data/dataResep";
import { Link } from "react-router-dom";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

const Resep = () => {
  return (
    <>
      <NavbarComponent />
      <Header
        titleSpan="Resep "
        titleH="Sehat"
        desk='"Dapatkan inspirasi untuk mengolah makanan sehat yang bervariasi dengan
        resep masakan kesehatan yang simpel dan mudah"'
      />

      <section className="content-card-utama">
        <Row className="d-flex justify-content-center">
          {dataResep.map((data, index) => (
            <CardItem
              key={index}
              imgCard={data.imgCard}
              title={data.title}
            ></CardItem>
          ))}

          {/* <CardItem imgCard="img/resep/1.png" title="Bubur Manado" />
          <CardItem imgCard="img/resep/2.png" title="Pepes Ikan Dori" />
          <CardItem imgCard="img/resep/3.png" title="Ikan Kembung Kuah Asam" />
          <CardItem imgCard="img/resep/4.png" title="Lemon Grass" />
          <CardItem imgCard="img/resep/5.png" title="Nabeez Kurma" />
          <CardItem imgCard="img/resep/6.png" title="Infused Water" />
          <CardItem imgCard="img/resep/7.png" title="Sup Tahu Sawi Ijo" />
          <CardItem imgCard="img/resep/8.png" title="Oatmeal Pisang" />
          <CardItem imgCard="img/resep/9.png" title="Cream Soup Labu" /> */}
        </Row>
      </section>
      <Footer />
    </>
  );
};

export default Resep;
