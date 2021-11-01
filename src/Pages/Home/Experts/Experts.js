import React from 'react';

import doctor1 from '../../../images/banner/download1.jpg';
import doctor2 from '../../../images/banner/download2.jpg'
import doctor3 from '../../../images/banner/download3.jpg'
import Expert from '../Expert/Expert';

const experts = [
  {
    img: doctor1,
    name: "Travel Resort Of America",
    expertize: "America",
  },
  {
    img: doctor2,
    name: "Travel Resort",
    expertize: "Austrolia",
  },
  {
    img: doctor3,
    name: "Sycamore Lodge",
    expertize: "London",
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