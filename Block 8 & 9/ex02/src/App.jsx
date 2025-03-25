import React, { useState } from "react";
import { Button, Typography, Container } from "@mui/material";
import ConfirmationDialog from "./ConfirmationDialog";

const app = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = (status) => {
    setMessage(status);
    setModalOpen(false);
  };

  return (
    <Container style={{ textAlign: "center", marginTop: "50px" }}>
      <Button variant="contained" onClick={() => setModalOpen(true)}>
        Confirmation Modal
      </Button>

      {message && (
        <Typography variant="h6" style={{ marginTop: "20px" }}>
          You have {message}
        </Typography>
      )}

      <ConfirmationDialog
        open={modalOpen}
        onClose={handleClose}
        onConfirm={() => handleClose("confirmed")}
      />
    </Container>
  );
};

export default App;
