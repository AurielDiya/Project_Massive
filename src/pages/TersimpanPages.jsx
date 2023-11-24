import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardTersimpan from "../components/CardTersimpan";
import NavbarAkun from "../components/NavbarAkun";
import Footer from "../components/Footer";

const TersimpanPages = () => {
  return (
    <>
      <NavbarAkun />
      <div className="container" style={{ marginTop: "90px" }}>
        <div className="row">
          <div className="profil col-lg-3 border-2 px-lg-4 py-lg-3 border rounded rounded-2">
            <h4 className="fw-bold">Informasi Akun</h4>
            <div className="link-profil">
              <li>
                <Link to="/editprofil">Edit Profil</Link>
              </li>
              <li>
                <Link to="/password">kata Sandi</Link>
              </li>
              <li>
                <Link to="#">Tersimpan</Link>
              </li>
              <li>
                <Link to="/" className="text-danger">
                  Keluar
                </Link>
              </li>
            </div>
          </div>
          <div className="col-lg-8 ms-lg-4 border-2 px-lg-4 py-4 py-lg-3 border rounded rounded-2">
            <h5 className="fw-bold">Tersimpan</h5>
            <div className="row">
              <CardTersimpan />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default TersimpanPages;
