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
            <strong className="text-primary">UNITED HOSPITAL LIMITED</strong>
            <hr />
            Opening its doors in August 2006 and situated beside the picturesque
            Gulshan Lake, this hospital is one of the largest private sector
            healthcare facilities in Bangladesh. United Hospital has the
            capacity to house over 500 patients and has 12 state of the art
            operation theatres to cater to the needs of varied patient base.With
            more than 30 clinical sub specialties, our centres of Excellence
            like Cardiac, Cancer, Renal, Surgical, Neuroscience, Mother & Child
            Health and Critical Care Centres are staffed by the most esteemed
            doctors in their respective fields. Since inception till date (July
            2021) we have conducted 420,000 Cardiac Investigations, 55,000
            Cardiac Procedures, 14,000 Heart Surgeries with 98% success rate, 39
            Kidney Transplant, 295,000 Haemodialysis, 185,000 Radiation Therapy
            Sessions & 196,000 Health Checkups completed.United Hospital has
            pioneered in many endeavors and has achieved many breakthrough
            milestones. Transcatheter Aortic Valve Implant (TAVI) procedure for
            Aortic Stenosis patients, first of its kind in Bangladesh was
            conducted in United Hospital Cardiac Centre, which also prides
            itself with the lone & pioneer iGS 520 Hybrid Cardio-Neuro Cathlab
            of the country. The hospital Pathology Laboratory received ISO
            15189:2012 Accreditation, as the first hospital of the country. The
            comprehensive Cancer Care Centre of the hospital has the country’s
            only Medical Cyclotron to produce radioactive tracer isotope for all
            centres of the country; it also has the first & only TrueBeam Linear
            Accelerator providing accurate radiation to ensure less timed
            precise therapy with minimal side effect. United Hospital Renal
            Centre added Hemo Diafiltration & Bio impedance technology, first
            time in the country, for patients suffering from kidney diseases.
            The 3.0T Signa Pioneer Wide Bore MRI in its Radiology & Imaging
            Centre is also first of its kind in the country.At United Hospital,
            providing our patients with a trusted and compassionate environment
            for healthcare is central to our mission. We draw strength from our
            purpose, which is above all to help and to heal. Our physicians,
            nurses and other caregivers & supporting staff are passionate about
            providing the right care at the right time, bringing hope and
            healing to our patients and their families. Patients trust us with
            their most valuable possession – their lives - and all of our
            caregivers recognize the immense responsibility that comes with that
            trust.
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