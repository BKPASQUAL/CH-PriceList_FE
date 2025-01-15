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
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  useAddItemMutation,
  useGetAllItemsQuery,
  useGetItemByIdQuery,
  useUpdateItemMutation,
} from "../../store/api/itemApi";

function AddItemsModel({ open, handleClose, title, itemId }) {
  const [itemCode, setItemCode] = React.useState("");
  const [itemName, setItemName] = React.useState("");
  const [sellingPrice, setSellingPrice] = React.useState("");
  const [category, setCategory] = React.useState("");

  const [addItem, { isLoading: isAdding, isSuccess, isError, error }] =
    useAddItemMutation();

  const {
    data: fetchProductDataById,
    isFetching,
    isError: fetchError,
    refetch: refetchItemById,
  } = useGetItemByIdQuery(itemId, {
    skip: !itemId,
  });

  const [
    updateItem,
    { isLoading: isUpdating, isError: isUpdateError, error: updateError },
  ] = useUpdateItemMutation();

  const { refetch: refetchAllItems } = useGetAllItemsQuery();

  useEffect(() => {
    if (itemId && open) {
      // Refetch item details when dialog opens or itemId changes
      refetchItemById();
    }
  }, [itemId, open, refetchItemById]);

  useEffect(() => {
    if (fetchProductDataById && itemId) {
      const fetchedItem = fetchProductDataById.item || {};
      setItemCode(fetchedItem.itemCode || "");
      setItemName(fetchedItem.itemName || "");
      setSellingPrice(fetchedItem.sellingPrice?.toString() || "");
      setCategory(fetchedItem.category || "");
    }
  }, [fetchProductDataById, itemId]);

  const handleSubmit = async () => {
    try {
      const itemData = {
        itemCode,
        itemName,
        sellingPrice: parseFloat(sellingPrice),
        category,
      };

      if (itemId) {
        await updateItem({ id: itemId, ...itemData }).unwrap();
        console.log("Item successfully updated:", itemData);
      } else {
        await addItem(itemData).unwrap();
        console.log("Item successfully added:", itemData);
      }

      handleClose();
      refetchAllItems();
      setItemCode("");
      setItemName("");
      setSellingPrice("");
      setCategory("");
    } catch (err) {
      console.error(
        itemId ? "Failed to update item:" : "Failed to add item:",
        err
      );
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
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth size="small">
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    label="Category"
                  >
                    <MenuItem value="Electronics">Electronics</MenuItem>
                    <MenuItem value="Clothing">Clothing</MenuItem>
                    <MenuItem value="Accessories">Accessories</MenuItem>
                    <MenuItem value="Books">Books</MenuItem>
                  </Select>
                </FormControl>
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
          className="w-1/2"
          disabled={isAdding || isUpdating}
        >
          {isAdding || isUpdating ? "Processing..." : itemId ? "Update" : "Add"}
        </Button>
      </div>
      {(isError || isUpdateError) && (
        <Typography color="error" variant="body2" align="center">
          {error?.data?.message ||
            updateError?.data?.message ||
            "An error occurred."}
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
