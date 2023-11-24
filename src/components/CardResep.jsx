import { Row, Col } from "react-bootstrap";
const resep = [
  {
    id: 1,
    images: "/img/imghome/buburmanado.png",
    title: "Bubur Manado",
    desc: "Bubur Manado, bubur dari beras, ubi labu kuning, jagung manis dan berbagai sayuran",
  },
  {
    id: 2,
    images: "/img/imghome/pepes.png",
    title: "Pepes Ikan Dori",
    desc: "Bubur Manado, bubur dari beras, ubi labu kuning, jagung manis dan berbagai sayuran",
  },

  {
    id: 3,
    images: "/img/imghome/kuahasam.png",
    title: "Ikan Kuah Asam",
    desc: "Bubur Manado, bubur dari beras, ubi labu kuning, jagung manis dan berbagai sayuran",
  },
  {
    id: 4,
    images: "/img/imghome/lemonteh.png",
    title: "Lemon Grass Tea",
    desc: "Bubur Manado, bubur dari beras, ubi labu kuning, jagung manis dan berbagai sayuran",
  },
];
const CardResep = () => {
  return (
    <>
      <div className="card-resep d-flex justify-content-center align-items-center ">
        <div className="card-resep2 row justify-content-center align-items-center ">
          {resep.map((card) => (
            <div
              key={card.id}
              className="col-6 col-lg-3"
              style={{ zIndex: 1000 }}
            >
              <div className="card-content  ">
                <img src={card.images} alt="Gambar Card" />
                <h5 className="fw-bold text-center">{card.title}</h5>
                <p className="text-center ">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
        ;
      </div>
    </>
  );
};
export default CardResep;
