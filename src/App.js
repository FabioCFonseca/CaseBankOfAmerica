import { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import { Box, Container } from '@mui/material';
import { Routes, Route, BrowserRouter, Link as RouterLink  } from 'react-router-dom';
import io from "socket.io-client";
import Card from "./components/Card";
import Table from "./components/Table";
import NavBar from "./components/Appbar";

const ENDPOINT = `http://${window.location.hostname}:3003`;

const App = () => {
  const socketIo = useRef(null);
  const [client, setClient] = useState(null);
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    socketIo.current = io(ENDPOINT);

    socketIo.current.on(
      "client-connected",
      (client) => client && setClient(client)
    );

    socketIo.current.on("market-data", (data) => {
      console.log({ data })
      setMarketData((prevMarketData) => [...prevMarketData, data]);
  });
  
    return () => socketIo.current.disconnect();
  }, []);

  return (
    <Container maxWidth="lg">
    <NavBar />
    <div>
      {client ? (
        <Typography>Client Connected: {client?.first_name}</Typography>
      ) : (
        <Typography>There's no one client connected at moment</Typography>)}
    </div>
      <BrowserRouter>
      <Box sx={{ display: 'flex', gap: '15px', marginBottom: '1rem' }}>
        <RouterLink to="/"><Typography sx={{ textDecoration: 'none' }}>Home</Typography></RouterLink>
        <RouterLink to="/card"><Typography sx={{ textDecoration: 'none' }}>Personal info</Typography></RouterLink>
        <RouterLink to="/table"><Typography sx={{ textDecoration: 'none' }}>Transações financeiras</Typography></RouterLink>
      </Box>
      <Routes>
        <Route path="/card" element={<Card client={client} />} />
        <Route path="/table" element={<Table data={marketData} />} />
      </Routes>
    </BrowserRouter>
    </Container >
  );

};

export default App;
