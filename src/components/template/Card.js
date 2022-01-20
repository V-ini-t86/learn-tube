import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Chip from "@mui/material/Chip";

function QCard({ que }) {
  const card = (
    <>
      <CardContent>
        <Typography
          sx={{ color: "white", margin: "4px 0px" }}
          variant="p"
          component="p"
          fontSize={18}
        >
          {que.name}
        </Typography>
        <Chip color="info" label={que.difficulty} />
      </CardContent>
    </>
  );

  return (
    <Box width="auto">
      <Card
        sx={{
          display: "flex",
          justifyContent: "left",
          background: "#74cfa5de",
        }}
        variant="outlined"
      >
        {card}
      </Card>
    </Box>
  );
}

export default QCard;
