import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import PaymentReceipt from "./components/PaymentReceipt";
import LoginModal from "./components/LoginModal";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Replace with actual authentication logic
    if (username === "root" && password === "root") {
      setLoggedIn(true);
      setModalOpen(false);
    } else {
      console.log("Login failed");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Standard_Chartered_%282021%29.svg/2560px-Standard_Chartered_%282021%29.svg.png"
            alt="Company Logo"
            style={{ width: 150, marginRight: 20 }}
          />
          <Box flexGrow={1} />
          {isLoggedIn ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={() => setModalOpen(true)}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {isLoggedIn ? <PaymentReceipt /> : null}
      <LoginModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default App;
