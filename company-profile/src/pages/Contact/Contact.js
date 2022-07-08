import React from 'react'

import { Card } from 'primereact/card';

import "./styles.css"

const Contact = () => {
  return (

    <div className="layout-wrapper">
      <div className="layout-main">
        <div className="layout-content">
          <div className="content-top">
            <h1 className="titleHeader">Contact Us</h1>
            <h6 className="p-text-bold">Question not answered yet? We are here to help!</h6>
          </div>
          <div className="contact-section">
            <Card className="card-contact">
              <div class="grid" style={{ 'alignItems': 'center' }}>
                <div class="col-1">
                  <i className='pi pi-whatsapp' style={{'fontSize': '2em'}} />
                </div>
                <div class="col-8">
                  <h5>Whatsapp</h5>
                  <span>081904611971</span>
                </div>
                <div class="col-3">Chat sekarang</div>
              </div>
            </Card>
            <Card className="card-contact">
              <div class="grid" style={{ 'alignItems': 'center' }}>
                <div class="col-1">
                  <i className='pi pi-whatsapp' style={{'fontSize': '2em'}} />
                </div>
                <div class="col-8">
                  <h5>Telegram</h5>
                  <span>081904611971</span>
                </div>
                <div class="col-3">Chat sekarang</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
