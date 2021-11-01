import React from 'react';
import { Card } from 'react-bootstrap';
import img from "../../../images/banner/banner4.jpg";

const Careers = () => {
    return (
      <Card className="bg-dark text-white">
        <Card.Img src={img} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="text-success">
            Your Service is Our Strength.
          </Card.Title>
          <Card.Text className="text-danger">
            <strong className="text-primary">ONLINE BOOKING PLATFORM</strong>
            <hr />A resort (Bangladesh) is a self-contained
            commercial establishment that tries to provide most of a
            vacationer's wants, such as food, drink, lodging, sports,
            entertainment, and shopping, on the premises. The term resort may be
            used for a hotel property that provides an array of amenities,
            typically including entertainment and recreational activities. A
            hotel is frequently a central feature of a resort, such as the Grand
            Hotel at Mackinac Island, Michigan. Some resorts are also
            condominium complexes that are timeshares or owned fractionally or
            wholly owned condominium. A resort is not always a commercial
            establishment operated by a single company, but in the late 20th
            century, that sort of facility became more common.
          </Card.Text>
          <Card.Text>Last updated 2 days ago</Card.Text>
          <button>
            <a className=" text-info p-5" href="https://www.ets.org/careers">
              Learn More
            </a>
          </button>
          <button>
            <a href="https://etscareers.pereless.com/index.cfm?cid=83080">
              Wiew Job Opportunities
            </a>
          </button>
        </Card.ImgOverlay>
      </Card>
    );
};

export default Careers;