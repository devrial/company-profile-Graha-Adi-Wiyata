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
                <div className="box">2</div>
              </div>
              <div className="p-col-4">
                <div className="box">4</div>
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
