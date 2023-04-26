import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Container } from '@mui/material';
import Input from '@mui/material/Input';

const FinancData = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter((item) => {
    const searchableFields = Object.keys(item);
    return searchableFields.some((field) =>
      item[field].toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <div>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
      <Input
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginRight: 1 }}
      />  
    </Box>
        <TableContainer
          component={Paper}
          sx={{ width: "inherit", maxHeight: 640, overflowY: 'scroll' }}
        >
          <Table >
            <TableHead sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', position: 'sticky', top: 0 }}>
              <TableRow>
                <TableCell>Account Name</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>CVV</TableCell>
                <TableCell>Issuer</TableCell>
                <TableCell>Credit Card Number</TableCell>
                <TableCell>Currency Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.account_name}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.credit_card_cvv}</TableCell>
                  <TableCell>{item.credit_card_issuer}</TableCell>
                  <TableCell>{item.credit_card_number}</TableCell>
                  <TableCell>{item.currency_name}</TableCell>
                  <TableCell>{item.transaction_description}</TableCell>
                  <TableCell>{item.transaction_type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
    </Container>
  );
};

export default FinancData;