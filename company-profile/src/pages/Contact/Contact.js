import React from 'react'

import { InputText } from 'primereact/inputtext';

import "./styles.css"

const Contact = () => {
  return (

    <div className="layout-wrapper">
      <div className="layout-main">
        <div className="layout-content">
          <div className="content-top">
            <h1 className="titleHeader">Contact Us</h1>
            <h4 className="p-text-bold">Question not answered yet? We are here to help!</h4>
          </div>
        </div>
      </div>
    </div>

    // <div className="layout-wrapper">
    //   <div className="layout-main" style={{ marginLeft: 'auto' }}>
    //     <div className="layout-content">
    //       <div className="content-top">
    //         <h1 className="titleHeader">Ada yang bisa kami bantu?</h1>
    //         <span className="p-text-bold">CONSULTANT CONSTRUCTOR</span>
    //       </div>
    //       <div className="p-mt-3 container">
    //         <div className="p-grid p-justify-between">
    //           <div className="p-col-4">
    //             <div className="box">
    //               <p>BCA Digital</p>
    //               <p>Terima kasih sudah mampir! Jika kamu memiliki pertanyaan seputar BCA Digital, hubungi kami melalui kontak di laman ini.</p>
    //             </div>
    //           </div>
    //           <div className="p-col-4">
    //             <div className="box">
    //               <p>Kantor Pusat BCA Digital</p>
    //               <p>The City Tower Lantai 11,
    //                 Jl. M.H. Thamrin No.81,
    //                 Jakarta Pusat, Indonesia 10310</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Contact;
