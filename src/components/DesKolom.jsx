import { Button, Card, Row, Col, Container } from "react-bootstrap";

const DesKolom = (props) => {
  const paragraphs = props.paragraphs || [];
  const listItems = props.listItems || [];
  return (
    <>
      <Col xs={4} className="col-7">
        <div className="mb-5 ">
          <img
            src={props.imgDetail}
            alt=""
            width={"100%"}
            className="img-detail"
          />
        </div>
        <h3 className="bold">{props.titleDesk}</h3>

        <div className="fs-5 text-justify text-detail">
          {props.paragraphs.map((paragraph, index) => (
            <p key={index}> {paragraph} </p>
          ))}
        </div>

        <div className="fs-5 text-justify">
          <ul>
            {props.listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </Col>

    </>
  );
};

DesKolom.defaultProps = {
  paragraphs: [],
  listItems: [],
};

export default DesKolom;
