import { Alert, AlertTitle, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../url";

function TotalPrice({ address, cartitems, setAddressError }) {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);

  const handlePlaceOrder = () => {
    if (!address) {

      return setAddressError(true)
    }
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    const customConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };
    const Data = {
      amount: cartitems.bill + 40,
      address: address ? address._id : "",
      items: cartitems.items,
    };

    if (cartitems.items) {
      axios.post(`${baseUrl}/api/order/placeOrder`, Data, customConfig)
        .then((res) => {
          navigate("/order");
        });
    } else {
      // alert('cart is empty')
      setAlert(true);
      const timeId = setTimeout(() => {
        // After 3 seconds set the show value to false
        setAlert(false);
      }, 3000);
      return () => {
        clearTimeout(timeId);
      };
    }
  };
  return (
    <Box
      sx={{
        // position: 'fixed',
        mt: "2rem",
        width: "100%",
        ml: 0,
      }}
    >
      {alert && (
        <Alert
          severity="warning"
          sx={{
            m: 1,
          }}
        >
          <AlertTitle>Warning</AlertTitle>
          The cart is empty — <strong>add products to cart!</strong>
        </Alert>
      )}
      <Box
        sx={{
          // position: 'fixed',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: 1,
          borderColor: "#ededed",
          // top: '12rem',
          // width: '25rem',
          p: 4,
        }}
      >
        <Typography sx={{ fontSize: "1.3rem" }}>
          <b>Cart Total</b>
        </Typography>
        <Typography mt={2}>
          <b>₹{cartitems.bill ? cartitems.bill.toFixed(2) : 0} INR</b>
        </Typography>
        <Typography
          align="center"
          sx={{
            mt: 1,
            fontSize: "0.9rem",
            color: "#c0bfc2",
            maxWidth: "21rem",
          }}
        >
          Shipping, taxes, and discounts will be calculated at checkout.
        </Typography>
        <Button
          onClick={handlePlaceOrder}
          variant="contained"
          sx={{
            boxShadow: 0,
            borderRadius: 0,
            bgcolor: "#1c2a5e",
            width: "90%",
            "&:hover": {
              backgroundColor: "#fdd700",
              color: "black",
              boxShadow: 0,
            },
            height: "2.5rem",
            mt: 1,
          }}
          startIcon={<LocalMallIcon />}
        >
          <b>CHECK OUT</b>
        </Button>
      </Box>

      <Box
        sx={{
          // position: 'fixed',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: 1,
          borderColor: "#ededed",
          gap: 1.5,
          // top: '12rem',
          // width: '25rem',
          mt: 2,
          p: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <LockOutlinedIcon sx={{ fontSize: "2rem", color: "#666666" }} />
          <Box>
            <Typography sx={{ fontSize: "1rem" }}>
              <b>Security policy</b>
            </Typography>
            <Typography sx={{ fontSize: "0.8rem", color: "#c0bfc2" }}>
              (edit with the Customer Reassurance module)
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <LocalShippingOutlinedIcon
            sx={{ fontSize: "2rem", color: "#666666" }}
          />
          <Box>
            <Typography sx={{ fontSize: "1rem" }}>
              <b>Delivery policy</b>
            </Typography>
            <Typography sx={{ fontSize: "0.8rem", color: "#c0bfc2" }}>
              (edit with the Customer Reassurance module)
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <LocalShippingOutlinedIcon
            sx={{ fontSize: "2rem", color: "#666666" }}
          />
          <Box>
            <Typography sx={{ fontSize: "1rem" }}>
              <b>Return policy</b>
            </Typography>
            <Typography sx={{ fontSize: "0.8rem", color: "#c0bfc2" }}>
              (edit with the Customer Reassurance module)
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TotalPrice;
