import React from 'react'

const Card = ({ client }) => {
    return (
      <div className="card">
        <h2>{client.first_name}</h2>
        <p>{client.job}</p>
        <p>{client.job_descriptor}</p>
      </div>
    );
  };

export default Card
