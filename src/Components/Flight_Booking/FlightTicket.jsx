import React from 'react';

const flights = [
  {
    origin: 'CHE',
    destination: 'BLR',
    departureTime: '7:05 AM',
    arrivalTime: '8:05 PM',
    date: 'Dec 16th 2022',
    airline: 'Air Canada',
    price: '$1,400',
    selected: false
  },
  {
    origin: 'CHE',
    destination: 'BLR',
    departureTime: '9:05 AM',
    arrivalTime: '10:05 AM',
    duration: '1 hr',
    airline: 'Air India',
    price: '₹1,700',
    selected: false
  },
  {
    origin: 'CHE',
    destination: 'BLR',
    departureTime: '10:00 AM',
    arrivalTime: '4:55 PM',
    layover: '1 layover: YYZ (3:55)',
    airline: 'Scoot',
    price: '$1,300',
    selected: false
  },
  {
    origin: 'CHE',
    destination: 'BLR',
    departureTime: '7:05 AM',
    arrivalTime: '11:00 PM',
    airline: 'Air Canada',
    price: '$1,400',
    selected: false
  }
];

const buttonStyle = {
  backgroundColor: 'orange',
  border: 'none',
  color: 'white',
  padding: '10px 20px',
  margin: '0 5px',
  cursor: 'pointer'
};

const buttonHoverStyle = {
  backgroundColor: 'darkorange'
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  marginBottom: '20px'
};

const cardBodyStyle = {
  padding: '15px'
};

const FlightTicket = () => {
  const [selectedFlight, setSelectedFlight] = React.useState(null);

  const handleFlightSelection = (flight) => {
    setSelectedFlight(flight);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button style={buttonStyle} onMouseOver={e => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={e => e.target.style.backgroundColor = buttonStyle.backgroundColor}>Business</button>
        <button style={buttonStyle} onMouseOver={e => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={e => e.target.style.backgroundColor = buttonStyle.backgroundColor}>Economy</button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {flights.map((flight, index) => (
          <div key={index} style={{ flex: '1 1 calc(50% - 20px)', margin: '10px' }}>
            <div style={cardStyle}>
              <div style={cardBodyStyle}>
                <h5>{`${flight.origin} to ${flight.destination}`}</h5>
                <h6 style={{ color: 'gray' }}>{flight.date}</h6>
                <p>
                  <strong>Departure:</strong> {flight.departureTime}<br/>
                  <strong>Arrival:</strong> {flight.arrivalTime}<br/>
                  {flight.duration && <><strong>Duration:</strong> {flight.duration}<br/></>}
                  {flight.layover && <><strong>Layover:</strong> {flight.layover}<br/></>}
                  <strong>Airline:</strong> {flight.airline}<br/>
                  <strong>Price:</strong> {flight.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedFlight && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h3>Selected Flight:</h3>
          <p>
            <strong>Origin:</strong> {selectedFlight.origin}<br/>
            <strong>Destination:</strong> {selectedFlight.destination}<br/>
            <strong>Departure:</strong> {selectedFlight.departureTime}<br/>
            <strong>Arrival:</strong> {selectedFlight.arrivalTime}<br/>
            {selectedFlight.duration && <><strong>Duration:</strong> {selectedFlight.duration}<br/></>}
            {selectedFlight.layover && <><strong>Layover:</strong> {selectedFlight.layover}<br/></>}
            <strong>Airline:</strong> {selectedFlight.airline}<br/>
            <strong>Price:</strong> {selectedFlight.price}
          </p>
        </div>
      )}
    </div>
  );
};

export default FlightTicket;