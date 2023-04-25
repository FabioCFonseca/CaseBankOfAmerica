import { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import { Routes, Route, BrowserRouter, Link  } from 'react-router-dom';


import io from "socket.io-client";
import Card from "./components/Card";
import Table from "./components/Table";

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

  if (!client) {
    return <Typography>There's no one client connected at moment</Typography>;
  }

  // return <Typography>Client Connected: {client?.first_name}</Typography>;

  return (
    <>
    <div>
    <Typography>Client Connected: {client?.first_name}</Typography>
    </div>
    <BrowserRouter>
      <div>
      <Link to="/card">Card</Link>
      <Link to="/table">Table</Link>
      <Link to="/">Home</Link>
    </div>
      <Routes>
        <Route path="/card" element={<Card client={client} />} />
        <Route path="/table" element={<Table data={marketData} />} />
      </Routes>
    </BrowserRouter>
    </>
  );

};

export default App;
