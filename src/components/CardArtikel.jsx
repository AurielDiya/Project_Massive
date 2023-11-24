
const CardArtikel = (props) => {
  return (
    <>
      <div>
        <h3 className="text-center bold my-4 ms-5">{props.title}</h3>
      </div>
      <div className="d-flex mb-4">
        <div>
          <img src={props.imgCard} alt="" width={"180px"} className="ms-5" />
        </div>
        <div className="ms-2 px-2 detail-card">
          <p className="bold pt-3 mb-2">{props.titleCard}</p>
          {props.children[0]}
        </div>
      </div>
    </>
  );
};

export default CardArtikel;
