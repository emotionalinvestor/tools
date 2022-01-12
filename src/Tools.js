import * as React from "react";
import ReactDOM from "react-dom";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Tools() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box m={5}>
          <h1>Hello, Emotional Investor!</h1>

          <p>How can I help you today?</p>

          <p>
            <Button
              size="large"
              variant="contained"
              color="error"
              href="https://emotionalinvestor.github.io/handling-fear-and-greed/"
            >
              Help, I am fearful
            </Button>
          </p>

          <p>
            <Button
              size="large"
              variant="contained"
              href="https://emotionalinvestor.github.io/measuring-risk-tolerance/"
            >
              I want to measure my risk tolerance
            </Button>
          </p>

          <h2>Note</h2>

          <p>
            Nothing on this website is financial advice. Do your own research.
          </p>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Tools;
