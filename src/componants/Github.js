import React from "react";
import Button from "@mui/material/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Github.css";

const Github = () => {
  const link = "https://github.com/mtanner161/msmwebapp";

  return (
    <div className="background-color">
      <br></br>
      <div>
        <h1>This is the MSM Web Application GitHub Page</h1>
      </div>
      <br></br>
      <Button
        variant="contained"
        color="success"
        startIcon={<GitHubIcon />}
        size="large"
        onClick={() => window.open(link, "_blank")}
      >
        Visit GitHub Page
      </Button>
    </div>
  );
};

export default Github;
