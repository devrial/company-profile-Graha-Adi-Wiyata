import React, { Children } from 'react'

import { HelpContact } from '../../components';

import "./styles.css"

const Contact = () => {

  const dataContacs = [
    {
      header: "Whatsapp",
      subheader: "081904611971",
      labelAction: "Chat sekarang",
      icon: "pi-whatsapp"
    },
    {
      header: "Telegram",
      subheader: "081904611971",
      labelAction: "Chat sekarang",
      icon: "pi-telegram"
    },
  ]

  return (
    <div className="layout-wrapper">
      <div className="layout-main">
        <div className="layout-content">
          <div className="content-top">
            <h1 className="titleHeader">Contact Us</h1>
            <h6 className="p-text-bold">Question not answered yet? We are here to help!</h6>
          </div>
          <div className="contact-section">
            {
              Children.toArray(dataContacs.map((dataContac) => {
                return (
                  <>
                    <HelpContact header={dataContac.header} subheader={dataContac.subheader}
                      labelAction={dataContac.labelAction} icon={dataContac.icon} />
                  </>
                )
              }))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
