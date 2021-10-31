import React from 'react';

import doctor1 from '../../../images/banner/Dr. Nighat IMG_4760.jpg';
import doctor2 from '../../../images/banner/Brig Gen Nazmul Ahsan.jpg'
import doctor3 from '../../../images/banner/doctor3.jpg'
import Expert from '../Expert/Expert';

const experts = [
  {
    img: doctor1,
    name: "DR. NIGHAT ARA",
    expertize: "CORDIOLOGY",
  },
  {
    img: doctor2,
    name: "PROF. DR. BRIG GEN (RTD) MD NAZMUL AHSAN",
    expertize: "ANESTHESIOLOGY",
  },
  {
    img: doctor3,
    name: "PROF. DR. MD. SALIM SHAKUR PHD",
    expertize: "PAEDIATRICS",
  },
];

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary mt-5">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;