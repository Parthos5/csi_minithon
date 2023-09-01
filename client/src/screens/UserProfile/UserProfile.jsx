import React, { useState } from 'react'
import './UserProfile.css';
import VerticalTabs from '../../Components/VerticalTabPanel/TabPanel';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const UserProfile = () => {
  //create user as json object
  const [data, setData] = useState({
    _id: "user123",
    username: "John Doe",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    phone: "123-456-7890",
    email: "john@example.com",
    city: "Sample City",
    country: "Sample Country",
  })

  return (
    <>
      <Navbar />
      <div className="verticalTabPanel">
        <div className='TabHeading'>
          <h4>Account</h4>
          <span>UG User</span>
        </div>
        <VerticalTabs user={data} />
      </div>
      <Footer />
    </>
  )
}

export default UserProfile