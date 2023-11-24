import Header from "../components/Header";
import { Row } from "react-bootstrap";
import { CardItem } from "../components/CardItem";
import { dataVegan } from "../data/dataVegan";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

const DietVegan = () => {
  return (
    <>
      <NavbarComponent />
      <Header
        titleSpan="Diet "
        titleH="Khusus"
        desk="Temukan resep yang sesuai kebutuhan mu!."
      />
      <h2 className="bold text-center mb-3">Vegan</h2>
      <section className="content-card-utama">
        <Row className="d-flex justify-content-center">
          {dataVegan.map((data, index) => (
            <CardItem
              key={index}
              imgCard={data.imgCard}
              title={data.title}
              jenis={data.jenis}
            ></CardItem>
          ))}

          {/* <CardItem
            imgCard="img/diet/vegan/1.png"
            title="Sup Kubis"
            jenis="Makanan Utama"
          />
          <CardItem
            imgCard="img/diet/vegan/2.png"
            title="Cinnamon-Roll"
            jenis="Hidangan Penutup"
          />
          <CardItem
            imgCard="img/diet/vegan/3.png"
            title="Chickpea Curry"
            jenis="Makanan Utama"
          />
          <CardItem
            imgCard="img/diet/vegan/4.png"
            title="Salad Alpukat"
            jenis="Hidangan Pembuka"
          />
          <CardItem
            imgCard="img/diet/vegan/5.png"
            title="Sup Jamur"
            jenis="Makanan Utama"
          />
          <CardItem
            imgCard="img/diet/vegan/6.png"
            title="Sup Cream Labu"
            jenis="Hidangan Pembuka"
          /> */}
        </Row>
      </section>
      <Footer />
    </>
  );
};

export default DietVegan;
