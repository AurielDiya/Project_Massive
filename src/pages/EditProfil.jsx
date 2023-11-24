import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarAkun from "../components/NavbarAkun";
import Footer from "../components/Footer";

const EditableField = ({ label, value, onEdit }) => {
  const [newValue, setNewValue] = useState("");

  const handleInputChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleUbahClick = () => {
    setPopupVisible(true);
  };

  return (
    <div>
      <div className="form-profil d-flex justify-content-between">
        <h6>{label}</h6>
        <button onClick={handleUbahClick}>Ubah</button>
      </div>
      <input
        type="text"
        placeholder={value}
        value={newValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

const EditProfil = () => {
  // kode ubah gamb
  const [selectedImage, setSelectedImage] = useState(
    "/img/imgprofil/imgprofil.png"
  );

  const handleTextClick = () => {
    document.getElementById("image-input").click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);

      setSelectedImage(imageUrl);
    }
  };
  // kode ubah form
  const [email, setEmail] = useState("deaauriel@gmail.com");
  const [name, setName] = useState("Auriel Dhea");
  const [username, setUsername] = useState("deaauriel");

  const handleSimpanClick = () => {};
  return (
    <>
      <NavbarAkun />
      <div className="container" style={{ marginTop: "90px" }}>
        <div className="row">
          <div className="profil col-lg-3 border-2 px-lg-4 py-lg-3 border rounded rounded-2">
            <h4 className="fw-bold">Informasi Akun</h4>
            <div className="link-profil">
              <li>
                <Link to="#">Edit Profil</Link>
              </li>
              <li>
                <Link to="/password">kata Sandi</Link>
              </li>
              <li>
                <Link to="/tersimpan">Tersimpan</Link>
              </li>
              <li>
                <Link to="/" className="text-danger">
                  Keluar
                </Link>
              </li>
            </div>
          </div>
          <div className="col-lg-8 ms-lg-4 border-2 px-lg-4 py-4 py-lg-3 border rounded rounded-2">
            <h5 className="fw-bold">Edit Profil</h5>
            <div>
              <div className="profile-image mt-lg-4 d-flex gap-3">
                <img id="profile-img" src={selectedImage} alt="Profile Image" />
                <div className="my-auto select-img">
                  <h6 className="fw-bold">Auriel Dhea</h6>
                  <span className="ubah bg-danger">
                    <input
                      type="file"
                      id="image-input"
                      accept="image/*"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                    <p className="text-ubah" onClick={handleTextClick}>
                      Ubah foto profil
                    </p>
                  </span>
                </div>
              </div>
              <div>
                <form action="#" className="profil">
                  <div>
                    <EditableField
                      label="Email/No Telepon"
                      value={email}
                      onEdit={setEmail}
                    />
                    <EditableField label="Nama" value={name} onEdit={setName} />
                    <EditableField
                      label="Nama Pengguna"
                      value={username}
                      onEdit={setUsername}
                    />
                  </div>
                  <br />
                  <button className="simpan" onClick={handleSimpanClick}>
                    Simpan Perubahan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default EditProfil;
