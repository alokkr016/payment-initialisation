import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  Link,
  Box,
} from "@mui/material";

const LoginModal = ({ open, onClose, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onLogin(username, password);
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="login-dialog-title">
      <DialogTitle id="login-dialog-title">User Login</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <TextField
            label="Username"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            type="password"
            label="Password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Box display="flex" justifyContent="center" width="100%">
          <Button onClick={handleLogin} variant="contained" color="primary">
            Sign In
          </Button>
        </Box>
      </DialogActions>
      <DialogContentText sx={{ textAlign: "center", marginY: 2 }}>
        <Link href="#">Forgot Username/Password?</Link>
      </DialogContentText>
    </Dialog>
  );
};

export default LoginModal;
