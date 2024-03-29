import React from 'react'

import "./styles.css"

const Testimonial = () => {
  return (
    <div className="container">
      <div className="p-mt-5 p-text-center">
        <h3 className="p-text-bold">Testimonial</h3>
        <h5 className="p-text-lowercase">Lorem ipsum dolor sit amet consectetur.</h5>
      </div>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center align-item-center testimonials">
          <div className="col-md-4">
            <div className="card ">
              <div className="content py-4 px-3 text-center">
                <p>I made bacck the purchase price in just 48 hours! Thank you for making it pain less, pleasant. The service was execellent. I will refer everyone I know</p>
              </div>
              <div className="about p-text-center p-4 text-white">
                <img alt="person-1" className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU" width="60" />
                <h4 className="mb-0 mt-3">Daxton Robby</h4>
                <span className='text-white'>Android Developer</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card ">
              <div className="content py-4 px-3 text-center">
                <p>"Really good, you have saved our business! I made bacck the purchase price in just 48 hours! man, this thing is getting better and better as I learn more about it." </p>
              </div>
              <div className="about text-center p-4 text-white">
                <img alt="person-2" className="rounded-circle" src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg" width="60" />
                <h4 className="mb-0 mt-3">Karson Darvin</h4>
                <span>Finance Director</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card ">
              <div className="content py-4 px-3 text-center">
                <p>"Account keeper is the most valuable business research we have EVER purchased. Without electrician, we would ahave gone bankrupt by now."</p>
              </div>
              <div className="about text-center p-4 text-white">
                <img alt="person-3" className="rounded-circle" src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg" width="60" />
                <h4 className="mb-0 mt-3">Willa Derrickson</h4>
                <span>Stock Broker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="p-grid">
        <div className="p-col-4">
          <p>test</p>
        </div>
        <div className="p-col-4">
          <p>test</p>
        </div>
        <div className="p-col-4">
          <p>test</p>
        </div>
      </div> */}
    </div>
  );
}

export default Testimonial;
