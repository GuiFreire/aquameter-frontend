import React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

function LinearProgressWithLabel({ value = 0, sensorName }) {
  const percentual = ((value / 15000) * 100).toFixed(2);

  return (
    <div>
      <p className="progressBoldText">{sensorName}</p>
      <p className="progressSmallText">(Meta: 15.000)</p>
      <LinearProgress
        variant="determinate"
        value={percentual}
        style={{ height: 15, borderRadius: 3 }}
      />
      <Typography variant="body2" color="text.secondary">
        {percentual}%
      </Typography>
    </div>
  );
}

export default LinearProgressWithLabel;
