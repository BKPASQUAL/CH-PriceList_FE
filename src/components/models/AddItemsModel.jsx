import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  TextField,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { useAddItemMutation } from "../../store/api/itemApi";

function AddItemsModel({ open, handleClose }) {
  const [itemCode, setItemCode] = React.useState("");
  const [itemName, setItemName] = React.useState("");
  const [sellingPrice, setsellingPrice] = React.useState("");

  const [addItem, { isLoading, isSuccess, isError, error }] = useAddItemMutation();

  const handleSubmit = async () => {
    try {
      const newItem = {
        itemCode,
        itemName,
        sellingPrice: parseFloat(sellingPrice), // Ensure price is a number
      };

      await addItem(newItem).unwrap();

      console.log("Item successfully added:", newItem);
      handleClose(); // Close the dialog after successful submission

      // Clear form inputs
      setItemCode("");
      setItemName("");
      setsellingPrice("");
    } catch (err) {
      console.error("Failed to add item:", err);
    }
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
          padding: "4px",
        },
      }}
    >
      <DialogTitle>
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
                value={sellingPrice}
                onChange={(e) => setsellingPrice(e.target.value)}
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
      <div className="pb-4 flex justify-end px-6 gap-2">
        <Button
          onClick={handleClose}
          variant="contained"
          color="error"
          className="w-1/2"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          className="w-1/2"
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? "Adding..." : "Add Item"}
        </Button>
      </div>
      {isError && (
        <Typography color="error" variant="body2" align="center">
          {error?.data?.message || "Failed to add item."}
        </Typography>
      )}
      {isSuccess && (
        <Typography color="primary" variant="body2" align="center">
          Item added successfully!
        </Typography>
      )}
    </Dialog>
  );
}

export default AddItemsModel;
