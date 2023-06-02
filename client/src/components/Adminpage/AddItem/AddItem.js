import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import AddIcon from '@mui/icons-material/Add';
import { Box, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from '../../../axios'
import { baseUrl } from '../../../url';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
    const [open, setOpen] = React.useState(false);
    const { register, handleSubmit, reset } = useForm({ mode: "onBlur" }); //removed ', formState: { errors } '
    const [images, setImages] = React.useState();
    const [features, setFeatures] = React.useState([])
    const [feature, setFeature] = React.useState()
    const [colors, setColors] = React.useState([])
    const [color, setColor] = React.useState()
    const [itemData, setItemData] = React.useState()

    const upload = (event) => {
        setImages(event.target.files[0]);
    }

    const handleUpload = (data) => {

        if (!images) return console.log('imageis empty');
        const Data = JSON.stringify({ ...data, features, colors })
        const formData = new FormData()
        formData.append("file", images)
        formData.append("item", Data)

        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${user.token}`
            }
        }
        console.log('add item');
        console.log(formData);
        console.log(user.token);
        axios.post(`${baseUrl}/api/item/addItem`, formData, customConfig)
            .then((res) => {
                alert('item added')
                reset()
                setImages(null)
                setFeatures([])
                setColors([])
                console.log(res.data);
            })
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFeature = (e) => {
        // console.log(e.key);
        if (e.key === 'Enter') {
            setFeatures(pre => [...pre, feature])
            setFeature('')
        }
    }

    const handleColor = (e) => {
        // console.log(e.key);
        if (e.key === 'Enter') {
            setColors(pre => [...pre, color])
            setColor('')
        }
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Product<AddIcon />
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Add Product
                        </Typography>

                    </Toolbar>
                </AppBar>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                        pt: '2rem',
                        pl: '12rem'
                    }}
                    noValidate
                    onSubmit={handleSubmit(handleUpload)}
                >
                    <Box sx={{
                        display: 'flex',
                        gap: 5
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            width: '25rem'
                        }}>

                            {/* add product name */}
                            <TextField
                                style={{ width: 400 }}
                                label="Name"
                                id="name"
                                name='name'
                                size="small"
                                autoFocus
                                required
                                {...register('name', { required: true })}
                            />

                            {/* add discrption */}
                            <TextField
                                style={{ width: 400 }}
                                label="Discription"
                                id="description"
                                name='description'
                                size="small"
                                autoFocus
                                required
                                {...register('description', { required: true })}
                            />

                            {/* display added features */}
                            <Box sx={{ pl: 1 }}>
                                {features && features.length > 0 && features.map((item, index) =>
                                    <Box key={index} sx={{
                                        display: 'flex',
                                        bgcolor: 'lightgrey',
                                        borderRadius: 1,
                                        gap: 1,
                                        p: 1,
                                        mt: 1
                                    }}>
                                        <CloseIcon
                                            onClick={() => {
                                                const array = features
                                                array.splice(index, 1)
                                                setFeatures([...array])
                                            }}
                                        />
                                        <Typography sx={{
                                            maxWidth: '30rem',
                                            fontSize: '0.9rem'
                                        }}>{item}</Typography>
                                    </Box>
                                )}
                            </Box>

                            {/* add features */}
                            <TextField
                                style={{ width: 400 }}
                                label="add features"
                                id="features"
                                name='features'
                                size="small"
                                autoFocus
                                required
                                value={feature}
                                onChange={(e) => setFeature(e.target.value)}
                                onKeyDown={handleFeature}
                            />

                            {/* display added colors */}
                            <Box sx={{ pl: 1 }}>
                                {colors && colors.length > 0 && colors.map((item, index) =>
                                    <Box key={index} sx={{
                                        display: 'flex',
                                        bgcolor: 'lightgrey',
                                        borderRadius: 1,
                                        gap: 1,
                                        p: 1,
                                        mt: 1
                                    }}>
                                        <CloseIcon
                                            onClick={() => {
                                                const array = colors
                                                array.splice(index, 1)
                                                setColors([...array])
                                            }}
                                        />
                                        <Typography sx={{
                                            maxWidth: '30rem',
                                            fontSize: '0.9rem'
                                        }}>{item}</Typography>
                                    </Box>
                                )}
                            </Box>

                            {/* add colors */}
                            <TextField
                                style={{ width: 400 }}
                                label="add colors"
                                id="color"
                                name='color'
                                size="small"
                                autoFocus
                                required
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                onKeyDown={handleColor}
                            />

                            {/*add rating */}
                            <TextField
                                style={{ width: 400 }}
                                label="Add Rating"
                                id="rating"
                                name="rating"
                                size="small"
                                autoFocus
                                required
                                {...register('rating', { required: true })}
                            />

                            {/* add Brant */}
                            <TextField
                                style={{ width: 400 }}
                                label="Add Brant"
                                id="brant"
                                name="brant"
                                size="small"
                                autoFocus
                                required
                                {...register('brant', { required: true })}
                            />

                            {/* add category */}
                            <TextField
                                style={{ width: 400 }}
                                label="Category"
                                id="category"
                                name="category"
                                size="small"
                                autoFocus
                                required
                                {...register('category', { required: true })}
                            />

                            {/* add price */}
                            <TextField
                                style={{ width: 400 }}
                                label="Price"
                                id="price"
                                name="price"
                                size="small"
                                autoFocus
                                required
                                {...register('price', { required: true })}
                            />

                            {/* add stock quantity */}
                            <TextField
                                style={{ width: 400 }}
                                label="Quantity"
                                id="quantity"
                                name="quantity"
                                size="small"
                                autoFocus
                                required
                                {...register('quantity', { required: true })}
                            />

                            {/* add weight */}
                            <TextField
                                style={{ width: 400 }}
                                label="Weight"
                                id="weight"
                                name="weight"
                                size="small"
                                autoFocus
                                required
                                {...register('weight', { required: true })}
                            />

                            {/* add offer */}
                            <TextField
                                style={{ width: 400 }}
                                label="Offer"
                                id="offer"
                                name="offer"
                                size="small"
                                autoFocus
                                required
                                {...register('offer', { required: true })}
                            />
                        </Box>
                        <Box sx={{
                            width: '54%',

                        }}>
                            <Box sx={{
                                border: 1,
                                width: '24rem',
                                p: '2rem'
                            }}>

                                <Box sx={{
                                    height: '23rem'
                                }}>
                                    <Typography>Upload Image</Typography>
                                    {images ? (
                                        <Box>
                                            <img alt="not fount" width='300px' src={URL.createObjectURL(images)} />
                                        </Box>
                                    ) :
                                        (
                                            <Box>
                                                <img alt="not fount" width={"350px"} src={process.env.PUBLIC_URL + '/uploadImage.webp'} />
                                            </Box>
                                        )}
                                </Box>
                                <Box sx={{
                                    pt: '2rem'
                                }}>
                                    <input
                                        type="file"
                                        name="file"
                                        onChange={upload}

                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2, width: '80%' }}
                    >
                        Add item
                    </Button>
                </Box>
            </Dialog>

        </div>
    );
}