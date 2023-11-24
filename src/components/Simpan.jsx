import { Button} from "react-bootstrap";
const Simpan = () => {
  return (
    <div className="ms-5 mt-3">
      <Button variant="success btn-share bold">
        {" "}
        <img
          src="/img/share/save.png"
          alt=""
          width={"15px"}
          className="icon-save me-2"
        />{" "}
        Simpan Resep
      </Button>
    </div>
  );
};

export default Simpan;
