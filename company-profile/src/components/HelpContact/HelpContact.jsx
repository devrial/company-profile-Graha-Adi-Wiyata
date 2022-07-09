import React from 'react'

import { Card } from 'primereact/card';

const HelpContact = ({ header, subheader, labelAction, icon }) => {
    return (
        <div>
            <Card className="card-contact">
                <div class="grid" style={{ 'alignItems': 'center' }}>
                    <div class="col-1">
                        <i className={`pi ${icon}`} style={{ 'fontSize': '2em' }} />
                    </div>
                    <div class="col-8">
                        <h5>{header}</h5>
                        <span>{subheader}</span>
                    </div>
                    <div class="col-3">{labelAction}</div>
                </div>
            </Card>
        </div>
    )
}

export default HelpContact
