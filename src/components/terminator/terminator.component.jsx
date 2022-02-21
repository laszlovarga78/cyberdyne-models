//import React from 'react';

const Terminator = ({ id, name, serialNumber }) => {
  return (
    <div className="bg-light-blue dib br3 pa3 ma2 grow tc">
      <img src={`https://robohash.org/${id}?size=180x180`} alt="terminator" />
      <div>
        <h2>{name}</h2>
        <p>SN: {serialNumber}</p>
      </div>
    </div>
  );
};

export default Terminator;
