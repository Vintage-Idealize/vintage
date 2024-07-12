import * as React from 'react';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const AddProductButton = styled(IconButton)({
  position: 'fixed',
  bottom: 16,
  right: 16,
  backgroundColor: '#B8860B',
  color: 'white',
  '&:hover': {
    backgroundColor: '#d39e00',
  },
});

const UploadImageButton = styled(Button)({
  backgroundColor: '#B8860B',
  color: 'white',
  '&:hover': {
    backgroundColor: '#d39e00',
  },
});

const CancelButton = styled(Button)({
  color: 'grey',
});

const AddButton = styled(Button)({
  color: 'black',
});

const AddProductDialog = () => {
  const [open, setOpen] = useState(false);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddProduct = () => {
    // Logic for adding product
    console.log({
      productName,
      price,
      description,
      category,
      image,
    });
    setOpen(false);
  };

  return (
    <div>
      <AddProductButton onClick={handleClickOpen}>
        <AddIcon />
      </AddProductButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Add Product
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Product Name"
            type="text"
            fullWidth
            variant="standard"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Price"
            type="number"
            fullWidth
            variant="standard"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <FormControl variant="standard" fullWidth margin="dense">
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
            >
              <MenuItem value="batik">Batik</MenuItem>
              <MenuItem value="beeralu">Beeralu</MenuItem>
              <MenuItem value="beeralu">Other</MenuItem>
            </Select>
          </FormControl>
          <UploadImageButton
            variant="contained"
            component="label"
            sx={{ mt: 2 }}
          >
            Upload Image
            <input
              type="file"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </UploadImageButton>
        </DialogContent>
        <DialogActions>
          <CancelButton onClick={handleClose}>Cancel</CancelButton>
          <AddButton onClick={handleAddProduct}>Add</AddButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddProductDialog;
