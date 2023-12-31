import { AiFillStar } from "react-icons/ai";

// const data = [
//   {
//     img: "https://wp.technologyreview.com/wp-content/uploads/2022/12/E8G1GY.jpeg?fit=944,1262",
//     title: "Industrial Robot ",
//     star: <AiFillStar className="rating-star" />,
//     reviews: "(10 reviews)",
//     prevPrice: "Rs. 1000",
//     newPrice: "899",
//     company: "RoboTech",
//     color: "silver",
//     category: "Industrial Robot",
//   },
//   {
//     img: "https://wp.technologyreview.com/wp-content/uploads/2022/12/E8G1GY.jpeg?fit=944,1262",
//     title: "Medical Robot",
//     star: <AiFillStar className="rating-star" />,
//     reviews: "(8 reviews)",
//     prevPrice: "Rs. 1200",
//     newPrice: "999",
//     company: "RoboInnovations",
//     color: "blue",
//     category: "Medical Robot",
//   },
//   {
//     img: "https://wp.technologyreview.com/wp-content/uploads/2022/12/E8G1GY.jpeg?fit=944,1262",
//     title: "Educational Robot",
//     star: <AiFillStar className="rating-star" />,
//     reviews: "(12 reviews)",
//     prevPrice: "Rs. 900",
//     newPrice: "799",
//     company: "RoboSolutions",
//     color: "red",
//     category: "Educational Robot",
//   },
//   {
//     img: "https://wp.technologyreview.com/wp-content/uploads/2022/12/E8G1GY.jpeg?fit=944,1262",
//     title: "Service Robot",
//     star: <AiFillStar className="rating-star" />,
//     reviews: "(10 reviews)",
//     prevPrice: "Rs. 1000",
//     newPrice: "899",
//     company: "RoboTech",
//     color: "silver",
//     category: "Service Robot",
//   },
//   {
//     img: "https://wp.technologyreview.com/wp-content/uploads/2022/12/E8G1GY.jpeg?fit=944,1262",
//     title: "Domestic Robot",
//     star: <AiFillStar className="rating-star" />,
//     reviews: "(8 reviews)",
//     prevPrice: "Rs. 1200",
//     newPrice: "999",
//     company: "RoboInnovations",
//     color: "blue",
//     category: "Domestic Robot",
//   },
//   {
//     img: "https://wp.technologyreview.com/wp-content/uploads/2022/12/E8G1GY.jpeg?fit=944,1262",
//     title: "Sensors & Detectors",
//     star: <AiFillStar className="rating-star" />,
//     reviews: "(12 reviews)",
//     prevPrice: "Rs. 900",
//     newPrice: "799",
//     company: "RoboSolutions",
//     color: "red",
//     category: "Sensors & Detectors",
//   }
  
//   // Add more robotic products here
// ];

const data = [
  {
    img: "https://e7.pngegg.com/pngimages/691/525/png-clipart-ultrasonic-transducer-proximity-sensor-arduino-range-finders-measure-the-ultrasonic-distance-electronics-measurement.png",
    title: "Ultrasonic Distance Sensor",
    star: <AiFillStar className="rating-star" />,
    reviews: "(45 reviews)",
    prevPrice: "Rs. 150",
    newPrice: "99",
    company: "SensorTech",
    color: "blue",
    category: "Sensors & Detectors",
  },
  {
    img: "https://w7.pngwing.com/pngs/24/50/png-transparent-passive-infrared-sensor-motion-detection-arduino-captan-electronics-passive-infrared-sensor-microcontroller.png",
    title: "Infrared Motion Detector",
    star: <AiFillStar className="rating-star" />,
    reviews: "(36 reviews)",
    prevPrice: "Rs. 120",
    newPrice: "89",
    company: "Detectron",
    color: "white",
    category: "Sensors & Detectors",
  },
  {
    img: "https://e7.pngegg.com/pngimages/289/257/png-clipart-makeblock-mbot-stem-kit-makeblock-ultimate-2-10-in-1-robot-kit-robot-makeblock-mbot-stem-kit-makeblock.png",
    title: "STEM Learning Robot Kit",
    star: <AiFillStar className="rating-star" />,
    reviews: "(67 reviews)",
    prevPrice: "Rs. 550",
    newPrice: "449",
    company: "EduRobo",
    color: "red",
    category: "Educational Robot",
  },
  {
    img: "https://e7.pngegg.com/pngimages/625/482/png-clipart-kubo-robotics-technology-educational-robotics-tech-robot-university-computer-programming.png",
    title: "Programming Robot for Kids",
    star: <AiFillStar className="rating-star" />,
    reviews: "(58 reviews)",
    prevPrice: "Rs. 490",
    newPrice: "399",
    company: "LearnTech",
    color: "yellow",
    category: "Educational Robot",
  },
  {
    img: "https://e7.pngegg.com/pngimages/375/717/png-clipart-da-vinci-surgical-system-robot-assisted-surgery-surgeon-robot-electronics-medicine.png",
    title: "Surgical Robot System",
    star: <AiFillStar className="rating-star" />,
    reviews: "(24 reviews)",
    prevPrice: "Rs. 25000",
    newPrice: "19999",
    company: "MediBotics",
    color: "white",
    category: "Medical Robot",
  },
  {
    img: "https://w7.pngwing.com/pngs/629/952/png-transparent-tyromotion-arm-robot-upper-limb-physical-medicine-and-rehabilitation-rehabilitation-light-fixture-angle-furniture.png",
    title: "Rehabilitation Robot",
    star: <AiFillStar className="rating-star" />,
    reviews: "(18 reviews)",
    prevPrice: "Rs. 18000",
    newPrice: "14999",
    company: "RehabSys",
    color: "blue",
    category: "Medical Robot",
  },
  {
    img: "https://e7.pngegg.com/pngimages/638/838/png-clipart-gray-robotic-arm-illustration-robotic-arm-robotics-robot-welding-industrial-robot-robot-arm-angle-electronics.png",
    title: "Robotic Arm for Manufacturing",
    star: <AiFillStar className="rating-star" />,
    reviews: "(38 reviews)",
    prevPrice: "Rs. 35000",
    newPrice: "29999",
    company: "InduRobo",
    color: "yellow",
    category: "Industrial Robot",
  },
  {
    img: "https://www.automate.org/userAssets/riaUploads/image/robot-welding-609935512_1381x763.jpeg",
    title: "Automated Welding Robot",
    star: <AiFillStar className="rating-star" />,
    reviews: "(42 reviews)",
    prevPrice: "Rs. 42000",
    newPrice: "35999",
    company: "WeldBot",
    color: "silver",
    category: "Domestic Robot",
  },
  {
    img: "https://compote.slate.com/images/54fd861f-d7ef-41a5-86f2-1be5856a103b.jpeg?crop=7018%2C4679%2Cx0%2Cy0",
    title: "Delivery Robot",
    star: <AiFillStar className="rating-star" />,
    reviews: "(30 reviews)",
    prevPrice: "Rs. 9000",
    newPrice: "7999",
    company: "ServiBot",
    color: "green",
    category: "Service Robot",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLSItSbZLdXkTywirI18f3U-Byngo43HF8Jw&usqp=CAU",
    title: "Customer Service Robot",
    star: <AiFillStar className="rating-star" />,
    reviews: "(28 reviews)",
    prevPrice: "Rs. 9500",
    newPrice: "8499",
    company: "CustoBot",
    color: "blue",
    category: "Service Robot",
  },
  {
    img: "https://duve.com/wp-content/uploads/2022/09/Smart-Robot-Assistant-On-Futuristic-Hotel-Room.jpg",
    title: "Hotel Assistant Robot",
    star: <AiFillStar className="rating-star" />,
    reviews: "(20 reviews)",
    prevPrice: "Rs. 8500",
    newPrice: "7499",
    company: "HotelTech",
    color: "white",
    category: "Service Robot",
  }
  // Add more products as needed...
];

export default data;