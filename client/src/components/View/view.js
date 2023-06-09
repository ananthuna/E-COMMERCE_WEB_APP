// import { , Rating, Typography } from "@mui/material";
import { Alert, AlertTitle, Box, Rating, Typography } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import axios from "axios";
import { baseUrl } from "../../url";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import DoneIcon from "@mui/icons-material/Done";
import SelectButton from "../SelectButton/SelectButton";
import "./view.css";
import QuantityBtn from "./QuantityButton/QuantityBtn";
import { UserContext } from "../../Context/Context";

function view() {
  const navigate = useNavigate();
  // const { details } = useContext(UserContext)
  const { setCartitems } = useContext(UserContext);
  const [alert, setAlert] = useState(false);
  const [product, setProduct] = useState({});
  const [features, setFeatures] = useState([]);
  const pageTopRef = useRef(null);
  const [colors, setColors] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    let item = localStorage.getItem("myObject");
    item = JSON.parse(item);
    setFeatures([...item.features]);
    setColors([...item.colors]);
    setProduct(item);
    setName(item.name + item.description);
    pageTopRef.current.scrollIntoView({ behavior: "smooth" });
    // console.log('product view');
    // console.log(item);
  }, []);

  const handleCart = () => {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    const customConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };
    // console.log(user.token);
    let data = {
      itemId: product._id,
      quantity: 1,
      price: product.price - (product.price * product.offer) / 100,
    };
    const Data = JSON.stringify(data);

    axios
      .post(`${baseUrl}/api/cart/cartitems`, Data, customConfig)
      .then((res) => {
        setCartitems(res.data);
        setAlert(true);
        const timeId = setTimeout(() => {
          // After 3 seconds set the show value to false
          setAlert(false);
        }, 3000);
        return () => {
          clearTimeout(timeId);
        };
      });
  };

  const handleOrder = () => {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    const customConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };
    // console.log(user.token);
    let data = {
      itemId: product._id,
      quantity: 1,
      price: product.price - (product.price * product.offer) / 100,
    };
    const Data = JSON.stringify(data);
    axios
      .post(`${baseUrl}/api/cart/cartitems`, Data, customConfig)
      .then((res) => {
        // console.log(res.data)
        navigate("/cart");
      });
  };

  return (
    <Box
      ref={pageTopRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        pt: "5.6rem",
        // width: '90%'
      }}
    >
      {alert && (
        <Alert
          sx={{
            position: "fixed",
            zIndex: 10000,
            top: "10rem",
            bgcolor: "#1c2a5e",
            color: "white",
          }}
          severity="success"
        >
          <AlertTitle>Just added to cart</AlertTitle>
          The product added to cart list— <strong>check it out!</strong>
        </Alert>
      )}
      {/* sub bar with nevigate */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#f7f7f7",
          p: 2,
        }}
      >
        <Box
          sx={{
            width: "50%",
          }}
        >
          <Typography
            sx={{
              // width: '100%',
              maxWidth: "100%",
              display: "block",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <b>{name}</b>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
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

      {/* product view */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          mt: "2rem",
          mb: "1rem",
          ml: "2rem",
        }}
      >
        {/* product image view */}
        <Box
          sx={{
            width: "40%",
            height: "87%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ml: 7,
          }}
        >
          <Box
            sx={{
              width: "30rem",
              height: "30rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: 1,
              borderRadius: 2,
              borderColor: "lightgrey",
            }}
          >
            <img
              src={product.url && baseUrl + "/" + product.url}
              alt="img"
              width={350}
              height={400}
            ></img>
          </Box>
        </Box>

        {/* product details */}
        <Box
          sx={{
            width: "43%",
            height: "87%",
            p: 1,
          }}
        >
          <Typography
            sx={{
              pl: "0rem",
              fontSize: "1.4rem",
              maxWidth: "100%",
            }}
          >
            <b>{name}</b>
          </Typography>
          <hr />
          {features.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: 1,
              }}
            >
              <FiberManualRecordIcon
                sx={{
                  fontSize: "0.5rem",
                  mt: 0.8,
                  // color: 'lightgrey'
                }}
              />
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "grey",
                  maxWidth: "35rem",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
          <hr />
          {product.rating && (
            <Rating
              name="read-only"
              value={product.rating}
              precision={0.1}
              max={5}
              size="small"
              readOnly
            />
          )}
          <hr />
          <Box>
            <Typography sx={{ color: "#ff0000" }}>
              <b>Save -{product.offer + "%"}</b>
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                // justifyContent: 'center'
              }}
            >
              <Typography sx={{ fontSize: "1.5rem", color: "#d62148" }}>
                <b>
                  Rs.
                  {(
                    product.price -
                    (product.price * product.offer) / 100
                  ).toFixed(2)}
                </b>
              </Typography>
              <Typography color="lightgrey">
                <s>{"Rs." + product.price}</s>
              </Typography>
            </Box>
          </Box>
          <hr />
          <Box
            sx={{
              display: "flex",
              gap: 4,
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "1rem" }}>
                <b>
                  <DoneIcon sx={{ fontSize: 20 }} /> Brant :
                </b>
              </Typography>
              <Typography sx={{ fontSize: "1rem" }}>
                <b>
                  <DoneIcon sx={{ fontSize: 20 }} /> Movement :
                </b>
              </Typography>
              <Typography>
                <b>
                  <DoneIcon sx={{ fontSize: 20 }} /> Availability :
                </b>
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 15, color: "#8b8b8b" }}>
                {product.brant}
              </Typography>
              <Typography sx={{ fontSize: 15, color: "#8b8b8b" }}>
                {product.category}
              </Typography>
              <Typography sx={{ fontSize: 15, color: "#34dd8d" }}>
                <b>{product.quantity > 0 ? "In Stock" : "Out Of Stock"} </b>
              </Typography>
            </Box>
          </Box>
          <hr />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "0.9rem" }}>
                <b>Color</b>
              </Typography>
              <Box
                sx={{
                  bgcolor: "#f5f5f5",
                  width: "10rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // height: '2rem'
                }}
              >
                <SelectButton categorys={colors} />
              </Box>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "0.9rem" }}>
                <b>Quantity</b>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 1,
                  width: "100%",
                  // mt: 1
                }}
              >
                <QuantityBtn item={product} />
                <Button
                  onClick={handleCart}
                  variant="contained"
                  sx={{
                    boxShadow: 0,
                    borderRadius: 0,
                    bgcolor: "#fdd700",
                    "&:hover": {
                      backgroundColor: "#1c2a5e",
                      boxShadow: 0,
                    },
                    height: "2.5rem",
                    mt: 2,
                  }}
                  startIcon={<ShoppingCartIcon />}
                >
                  ADD TO CART
                </Button>
                <Button
                  onClick={handleOrder}
                  variant="contained"
                  sx={{
                    boxShadow: 0,
                    borderRadius: 0,
                    bgcolor: "#1c2a5e",
                    "&:hover": { backgroundColor: "#fdd700", boxShadow: 0 },
                    height: "2.5rem",
                    mt: 2,
                  }}
                  startIcon={<LocalMallIcon />}
                >
                  BUY NOW
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 1,
            }}
          >
            <Typography
              sx={{
                color: "#ff274e",
              }}
            >
              <b>HURRY! ONLY {product.quantity} LEFT IN STOCK.</b>
            </Typography>
          </Box>
          <hr />
        </Box>
      </Box>
    </Box>
  );
}

export default view;
