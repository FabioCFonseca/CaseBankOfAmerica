import React from 'react'

const Table = ({ data }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Amount</th>
            <th>CVV</th>
            <th>Issuer</th>
            <th>Credit Card Number</th>
            <th>Currency Name</th>
            <th>Description</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.account_name}</td>
              <td>{item.amount}</td>
              <td>{item.credit_card_cvv}</td>
              <td>{item.credit_card_issuer}</td>
              <td>{item.credit_card_number}</td>
              <td>{item.currency_name}</td>
              <td>{item.transaction_description}</td>
              <td>{item.transaction_type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

export default Table
