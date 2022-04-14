import React from "react";
import Button from "@mui/material/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../Github.css";

const Github = () => {
  const link = "https://github.com/mtanner161/msmwebapp";
  const linkTwo = "https://github.com/mtanner161/minesmineralmodel";

  return (
    <div className="background-color">
      <br></br>
      <div>
        <h1>Use the links below to navigate to the source code</h1>
      </div>
      <br></br>
      <Button
        variant="contained"
        color="success"
        startIcon={<GitHubIcon />}
        size="large"
        onClick={() => window.open(link, "_blank")}
      >
        Visit Web App GitHub Page
      </Button>
      <br></br>
      <br></br>
      <br></br>
      <Button
        variant="contained"
        color="success"
        startIcon={<GitHubIcon />}
        size="large"
        onClick={() => window.open(linkTwo, "_blank")}
      >
        Visit Model GitHub Page
      </Button>
    </div>
  );
};

export default Github;
