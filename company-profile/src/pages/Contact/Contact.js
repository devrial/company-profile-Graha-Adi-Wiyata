import React from 'react'

import { InputText } from 'primereact/inputtext';

import "./styles.css"

const Contact = () => {
  return (

    <div className="layout-wrapper">
      <div className="layout-main" style={{ marginLeft: 'auto' }}>
        <div className="layout-content">
          <div className="content-top">
            <h1 className="titleHeader">Ada yang bisa kami bantu?</h1>
            <span className="p-text-bold">CONSULTANT CONSTRUCTOR</span>
          </div>
          <div className="p-mt-3 container">
            <div className="p-grid p-justify-between">
              <div className="p-col-4">
                <div className="box">
                  <p>BCA Digital</p>
                  <p>Terima kasih sudah mampir! Jika kamu memiliki pertanyaan seputar BCA Digital, hubungi kami melalui kontak di laman ini.</p>
                </div>
              </div>
              <div className="p-col-4">
                <div className="box">
                  <p>Kantor Pusat BCA Digital</p>
                  <p>The City Tower Lantai 11,
                    Jl. M.H. Thamrin No.81,
                    Jakarta Pusat, Indonesia 10310</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="lp-container">
    //   <div className="lp-content-left">
    //     <div className="lp-cl-container">
    //       <div className="lp-cl-content p-mt-2">
    //         <h1 className="titleHeader">Ada yang bisa kami bantu?</h1>
    //         <span className="p-text-bold">CONSULTANT CONSTRUCTOR</span>
    //       </div>
    //     </div>
    //     <div className="container">
    //       <p>tes</p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Contact;
