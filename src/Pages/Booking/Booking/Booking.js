import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService ] = useState({})

    useEffect(() => {
        fetch(`https://wicked-barrow-03564.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))

    }, [])
    return (
        <div>
            <h2>Details of:{service}</h2>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;