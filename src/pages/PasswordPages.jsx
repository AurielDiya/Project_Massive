import React from "react";
import { Link } from "react-router-dom";
import NavbarAkun from "../components/NavbarAkun";
import Footer from "../components/Footer";

const PasswordPages = () => {
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
                <Link to="#">kata Sandi</Link>
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
            <h5 className="fw-bold">Kata Sandi</h5>
            <div>
              <div className="profile-image mt-lg-4 d-flex gap-3"></div>
              <div>
                <form action="#" className="profil">
                  <div className="sandi">
                    <label htmlFor="">Kata Sandi Baru</label>
                    <input type="text" />
                    <label htmlFor="">Konfirmasi Sandi Baru</label>
                    <input type="text" />
                  </div>
                  <br />
                  <button className="simpan">Simpan Perubahan</button>
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
export default PasswordPages;
