import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const StyledCard = ({ client }) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)" }}>
      <CardContent>
      <Typography gutterBottom variant="h10" component="div">
          Id: {client?.client_id}
          </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {client?.first_name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>
          {client?.job}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>
          {client?.job_descriptor}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StyledCard;
