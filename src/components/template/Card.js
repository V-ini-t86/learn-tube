import React from "react";
import _ from "lodash";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Chip from "@mui/material/Chip";
import { useNavigate } from "react-router-dom";

function QCard({ que }) {
  const navigate = useNavigate();
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
    <Box width="auto" onClick={() => navigate(`/dsa/${_.kebabCase(que.id)}`)}>
      <Card
        sx={{
          display: "flex",
          justifyContent: "left",
          background: "#74cfa5de",
          ":hover": {
            background: "green",
            cursor: "pointer",
          },
        }}
        variant="outlined"
      >
        {card}
      </Card>
    </Box>
  );
}

export default QCard;
