// AddItemsModel.js
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Grid,
  Typography,
} from "@mui/material";

function AddItemsModel({ open, handleClose }) {
  const [itemCode, setItemCode] = React.useState("");
  const [itemName, setItemName] = React.useState("");
  const [itemPrice, setItemPrice] = React.useState("");

  const handleSubmit = () => {
    console.log("Item Code:", itemCode);
    console.log("Item Name:", itemName);
    console.log("Item Price:", itemPrice);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: "10px",
        },
      }}
    >
      <DialogTitle >
        <Typography variant="h6">Add New Item</Typography>
      </DialogTitle>

      <DialogContent className="pt-2">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                label="Item Code"
                variant="outlined"
                value={itemCode}
                onChange={(e) => setItemCode(e.target.value)}
                sx={{
                  fontSize: "16px",
                  "& input": {
                    fontSize: "16px",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                label="Item Name"
                variant="outlined"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                sx={{
                  fontSize: "16px",
                  "& input": {
                    fontSize: "16px",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                label="Item Price"
                variant="outlined"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
                type="number"
                sx={{
                  fontSize: "16px",
                  "& input": {
                    fontSize: "16px",
                  },
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Add Item
        </Button>
        <Button onClick={handleClose} variant="outlined" color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddItemsModel;
