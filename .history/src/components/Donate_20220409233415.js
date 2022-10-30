import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
//import Item from '@mui/material/Item';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const loadScript = (src) =>{
  return new Promise((resolve=>{
    const script =document.createElement('script');
    script.src=src
    script.onload=()=>{
      resolve(true)
    }
    script.onerror=()=>{
      resolve(false)
    }

    document.body.appendChild(script)
  }))
}
const displayRazorpay=(amount)=>{
  const res=await loadScript('https://checkout.razorpay.com/v1/checkout.js')
  if(!res){
    alert('You are offline .. Failed to load Razorpay SDK')
    return 
  }
}
export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom sx={{padding:"100px 0px 10px" }}>
        Payment method
      </Typography>
      <Grid container spacing={3} sx={{padding:"100px" }}>
        <Grid item xs={12} md={6} sx={{padding:"100px" }}>
          <TextField
            required
            id="Name"
            label="Name "
            fullWidth
            autoComplete=""
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{padding:"100px" }}>
          <TextField
            required
            id="Phone Number"
            label="Phone Number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{padding:"0px 100px" }}>
          <TextField
            required
            id="Email-Id"
            label="Email-Id"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{padding:"100px" }}>
          <TextField
            required
            id="Amount"
            label="Amount"
            helperText=""
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Button variant="contained" flex="row" justify="center"
              type="submit"

              fullWidth
               
              // endIcon={<ArrowRightAltIcon fontSize="large"/>}
              style={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        padding: "18px 5px",
        fontSize: "20px"
    }}>Pay</Button>  
      </Grid>

    </React.Fragment>
  );
}