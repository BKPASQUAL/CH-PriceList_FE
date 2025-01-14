import React, { useEffect } from "react";
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
import { useAddItemMutation, useGetItemByIdQuery, useUpdateItemMutation } from "../../store/api/itemApi";

function AddItemsModel({ open, handleClose, title, itemId }) {
  const [itemCode, setItemCode] = React.useState("");
  const [itemName, setItemName] = React.useState("");
  const [sellingPrice, setSellingPrice] = React.useState("");

  const [addItem, { isLoading: isAdding, isSuccess, isError, error }] = useAddItemMutation();

  const {
    data: fetchProductDataById,
    isLoading: isFetching,
    isError: fetchError,
  } = useGetItemByIdQuery(itemId, {
    skip: !itemId, 
  });

  const [
    updateItem,
    { isLoading: isUpdating, isError: isUpdateError, error: updateError },
  ] = useUpdateItemMutation();


  const getItemsById = fetchProductDataById?.item || [];
  console.log("getItemsById",getItemsById)
  useEffect(() => {
    if (getItemsById && itemId) {
      setItemCode(getItemsById.itemCode || "");
      setItemName(getItemsById.itemName || "");
      setSellingPrice(getItemsById.sellingPrice?.toString() || "");
    }
  }, [getItemsById, itemId]);

const handleSubmit = async () => {
  try {
    const itemData = {
      itemCode,
      itemName,
      sellingPrice: parseFloat(sellingPrice),
    };

    if (itemId) {
      // Update existing item
      await updateItem({ id: itemId, ...itemData }).unwrap();
      console.log("Item successfully updated:", itemData);
    } else {
      // Add new item
      await addItem(itemData).unwrap();
      console.log("Item successfully added:", itemData);
    }

    handleClose();

    // Clear fields after successful operation
    setItemCode("");
    setItemName("");
    setSellingPrice("");
  } catch (err) {
    console.error(itemId ? "Failed to update item:" : "Failed to add item:", err);
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
        <div className="text-xl font-bold">{title}</div>
      </DialogTitle>

      <DialogContent className="pt-2">
        {isFetching ? (
          <Typography variant="body1" align="center">
            Loading item details...
          </Typography>
        ) : fetchError ? (
          <Typography color="error" variant="body2" align="center">
            Failed to load item details.
          </Typography>
        ) : (
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
                  onChange={(e) => setSellingPrice(e.target.value)}
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
        )}
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
          disabled={isAdding}
        >
          {isAdding ? "Adding..." : itemId ? "Update " : "Add Item"}
        </Button>
      </div>
      {isError && (
        <Typography color="error" variant="body2" align="center">
          {error?.data?.message || "Failed to add item."}
        </Typography>
      )}
      {isSuccess && (
        <Typography color="primary" variant="body2" align="center">
          Item {itemId ? "updated" : "added"} successfully!
        </Typography>
      )}
    </Dialog>
  );
}

export default AddItemsModel;
