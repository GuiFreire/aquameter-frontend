import React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

function LinearProgressWithLabel({ value = 0 }) {
  
  const percentual = ((value / 5000) * 100).toFixed(2);
  
  return (
    <div>
      <LinearProgress variant="determinate" value={percentual} />
      <Typography variant="body2" color="text.secondary">{percentual}%</Typography>
    </div>
  );
}

export default LinearProgressWithLabel;
