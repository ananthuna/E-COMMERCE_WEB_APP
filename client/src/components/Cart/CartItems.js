import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import List from "./List/List";
import Address from "./Address/Address";
import TotalPrice from "./TotalPrice/TotalPrice";
import axios from "axios";
import { baseUrl } from "../../url";
import { UserContext } from "../../Context/Context";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useNavigate } from "react-router-dom";

function CartItems() {
  const [cart, setCart] = React.useState(false);
  const { cartitems, setCartitems } = useContext(UserContext);
  const { address, setAddress } = useContext(UserContext);
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [addressError, setAddressError] = React.useState(false);
  const pageTopRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    pageTopRef.current.scrollIntoView({ behavior: "smooth" });
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    const customConfig = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    if (user.token) {
      axios.get(`${baseUrl}/api/cart/cartitems`, customConfig).then((res) => {
        setCart(true);
        setCartitems(res.data);
      });

      axios.get(`${baseUrl}/api/user/address`, customConfig).then((res) => {
        setAddress(res.data.address[0]);
        setName(res.data.firstName);
        setNumber(res.data.number);
      });
    }
  }, []);

  return (
    <Box
      ref={pageTopRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        pb: "9rem",
        pt: "5.6rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#f7f7f7",
          p: 2,
        }}
      >
        <Typography>
          <b>Your Shopping Cart</b>
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            pr: 3,
          }}
        >
          <HomeOutlinedIcon
            sx={{ fontSize: 18, cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
          <KeyboardArrowRightIcon sx={{ fontSize: 18 }} />
          <Typography sx={{ fontSize: 13 }}>Mobile</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            mt: "1rem",
            width: "69%",
          }}
        >
          <Address
            address={address}
            name={name}
            number={number}
            addressError={addressError}
            setAddressError={setAddressError}
          />

          <List items={cartitems.items} />
        </Box>
        <Box
          sx={{
            width: "30%",
          }}
        >
          {cart && (
            <TotalPrice
              address={address}
              cartitems={cartitems}
              setAddressError={setAddressError}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default CartItems;
