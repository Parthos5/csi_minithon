import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UserAddressBox from '../UserAddressBox/UserAddressBox';
import { FaAddressBook, FaBoxOpen, FaShoppingBag } from 'react-icons/fa';
import './TabPanel.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs(props) {

  const user = props.user
  const [value, setValue] = useState(0);
  const [popup, setPop] = useState(false);
  const [inpVal, setInpVal] = useState({
    username: "",
    email: "",
    phone: "",
  })

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClickOpen = () => {
    setPop(!popup)
  }
  const closePopup = () => {
    setPop(false)
  }
  const getData = (e) => {
    const { value, name } = e.target;

    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value
      }
    })
  }
  const addData = async (e) => {
    const id = user._id
    e.preventDefault();
    const { username, email, phone } = inpVal;
    if (username === "") {
      alert("Please enter your name");
    }
    else if (email === "") {
      alert("Please enter your address");
    }
    else if (phone === "") {
      alert("Please enter your number");
    }
    else {
      closePopup()
    }
  };

  function calcTotal(x, y) {
    return x * y;
  }
  const arr = ['Cash On Delivery', 'Online Payment'];

  const ProductOrder = ({ product }) => {
    return (
      <div>
        <div className="orderproductcard">
          <span>{product.name}</span>
          <p>{product.description}</p>
          <p>Price: {product.price} <br /> Quantity: {product.quantity} <br /> TotalPrice: {product.totalPrice}</p>
        </div>
      </div>
    );
  };

  const PrevHistCarts = () => {
    const dummyOrders = [
      {
        _id: "order1",
        updatedAt: "2023-08-31",
        amount: 150,
        customerName: "John Doe",
        method: 0,
        products: [
          { productId: "product1", name: "Product 1", description: "Description 1", price: 50, quantity: 2, totalPrice: 100 },
          { productId: "product2", name: "Product 2", description: "Description 2", price: 25, quantity: 3, totalPrice: 75 }
        ],
      },
      {
        _id: "order2",
        updatedAt: "2023-08-31",
        amount: 150,
        customerName: "John Doe",
        method: 0,
        products: [
          { productId: "product1", name: "Product 1", description: "Description 1", price: 50, quantity: 2, totalPrice: 100 },
          { productId: "product2", name: "Product 2", description: "Description 2", price: 25, quantity: 3, totalPrice: 75 }
        ],
      },
      {
        _id: "order3",
        updatedAt: "2023-08-31",
        amount: 150,
        customerName: "John Doe",
        method: 0,
        products: [
          { productId: "product1", name: "Product 1", description: "Description 1", price: 50, quantity: 2, totalPrice: 100 },
          { productId: "product2", name: "Product 2", description: "Description 2", price: 25, quantity: 3, totalPrice: 75 }
        ],
      },
    ];
    return (
      <div>
        {dummyOrders.map((order) => (
          <div className="OrderHistory" key={order._id}>
            <div className="orderhistoryproduct">
              <h3>Delivered {order.updatedAt}</h3>
              {order.products.map((product) => (
                <ProductOrder key={product.productId} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '90%' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: '#ccc', height: '85%' }}
      >
        <Tab label="Overview" {...a11yProps(0)} sx={{ marginLeft: '-60px', marginTop: '20px', marginBottom: '20px', paddingBottom: '20px', borderBottom: 1, borderColor: 'divider' }} />
        <Tab label="Order History" {...a11yProps(1)} sx={{ marginLeft: '-16px', marginBottom: '20px', paddingBottom: '20px', borderBottom: 1, borderColor: 'divider' }} />
        <Tab label="Profile" {...a11yProps(4)} sx={{ marginLeft: '-75px', marginBottom: '20px', paddingBottom: '20px', borderBottom: 1, borderColor: 'divider' }} />

      </Tabs>

      <TabPanel value={value} index={0}>
        <div className='UserOverview'>
          <div className="UserInfo">
            <img src={user.img || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="" />
            <div>
              <h3>{user.username}</h3>
            </div>

            <div>
              {/* <button>Edit Profile</button> */}
            </div>
          </div>
        </div>
        <div className="UserOverviewGrid">
          <div className="OverviewGirdBox">
            <i><FaBoxOpen /></i>
            <h3>Orders</h3>
            <span>Check your order status</span>
          </div>
          <div className="OverviewGirdBox">
            <i><FaShoppingBag /></i>
            <h3>Wishlist</h3>
            <span>Check your order status</span>
          </div>
          <div className="OverviewGirdBox">
            <i><FaAddressBook /></i>
            <h3>Addresses</h3>
            <span>Check your order status</span>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <h1>Your Orders</h1>
          {PrevHistCarts()}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className='UserProfile'>
          <h1>Profile Details</h1>
          <div className="ProfileInfo" style={{ color: 'black' }}>
            <img src={user.img || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="" />
            <div className='Profile'>
              <h3>Name</h3>
              <span>{user.username}</span>
            </div>
            <div className='Profile'>
              <h3>Mobile No</h3>
              <span>{user.phone}</span>
            </div>
            <div className='Profile'>
              <h3>Email Id</h3>
              <span>{user.email}</span>
            </div>
            <div className='Profile'>
              <h3>Location</h3>
              <span>{user.city}, {user.country}</span>
            </div>

            <div>
              <button onClick={handleClickOpen}>Edit Profile</button>
              {popup ?
                <div className="addnewaddress-main">
                  <div className="addnewaddress">
                    <div className="addnewaddress-header editheader">
                      <img className='editheadderprofimg' src={user.img || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="" />
                      <h1>Edit Profile</h1>
                      <img className='closecircleXmarkprof' src="https://www.svgrepo.com/show/378998/circle-xmark.svg" onClick={closePopup} alt="" />
                    </div>
                    <div className='addnewaddress-content-container'>
                      <div className='addnewaddress-content'>
                        <div className="input-group">
                          <span className="label">Name</span>
                          <input autocomplete="off" name="username" className="input" type="text" onChange={getData} />
                          <div></div>
                        </div>
                      </div>
                      <div className='addnewaddress-content'>
                        <div className="input-group">
                          <span className="label">Email</span>
                          <input autocomplete="off" name="email" className="input" type="email" onChange={getData} />
                          <div></div>
                        </div>
                      </div>
                      <div className='addnewaddress-content'>
                        <div className="input-group">
                          <span className="label">Mobile No</span>
                          <input autocomplete="off" name="phone" className="input" type="number" onChange={getData} />
                          <div></div>
                        </div>
                      </div>
                    </div>
                    <button className='EditProfBtn' onClick={addData}>Submit</button>
                  </div>
                </div> : ""}
            </div>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
