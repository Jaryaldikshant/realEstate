import React from 'react';

const About = () => {
  const divStyle = {
    width: '100%',
    height: '100vh',
    // backgroundImage: url("p(2).jpg"),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    color: 'green',
    overflowY: 'auto'
  };



  
  const imageStyle = {
    width: '100%',
    height: '300px', // Adjust the height of the image as needed
    objectFit: 'cover',
  };

  // const textStyle = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   zIndex: '1',
  //   color: 'white',
  //   textAlign: 'center',
  // };


  // import React from 'react';
  // import bannerImage from './p(2).jpg';  // Adjust the path if necessary

  // const About = () => {
  //   const bannerStyle = {
  //     width: '100%',
  //     height: '400px',  // Adjust the height as needed for the banner
  //     backgroundImage: `url(${bannerImage})`,
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center',
  //     color: 'blue',
  //   };

  //   const contentStyle = {
  //     padding: '20px',
  //     color: 'black',  // Adjust the color for readability against the content background
  //   };



  return (

    <div style={divStyle}>
      {/* <img src="https://images.unsplash.com/photo-1444525222362-d88990a2027e?q=80&w=2120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="home_banner" height="400px"/>
       <div>
        <h2>About us</h2>
       </div> */}

<img src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="home_banner" style={imageStyle} />
      {/* <div style={textStyle}>
        <h2 style={{ margin: '0', fontSize: '36px' }}>About Us</h2>
      </div> */}
      {/* <div className="py-20 px-4 max-w-6xl mx-auto" style={{ zIndex: '2' }}> */}



      <div className="py-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-green-600">
          Welcome to HomeHaven
        </h1>
        <p className="mb-4 text-slate-700">
          At HomeHaven, we are passionate about helping you find your perfect property. Established in 2020, Home Haven has grown to become one of India's leading real estate platforms, renowned for its comprehensive listings, exceptional customer service, and commitment to excellence. Our mission is to simplify the real estate journey, making it easy and enjoyable for everyone involved.
        </p>
        <br />
        <h1 style={{color: 'blue'}}>
          <strong>Our Vision</strong>
         </h1>
        <p className="mb-4 text-slate-700">
          To revolutionize the real estate industry by providing a seamless, transparent, and efficient platform where buyers, sellers, and renters can connect effortlessly.
        </p>
        <br />
        <h1 style={{color: 'blue'}}>
          <strong>Our Mission</strong>
         </h1>
        <p className="mb-4 text-slate-700">
          Customer-Centric Approach: We put our customers at the heart of everything we do, offering personalized services to meet their unique needs.
          Transparency: We believe in maintaining transparency in all our dealings, ensuring that our clients have all the information they need to make informed decisions.
          Innovation: We continuously innovate and leverage the latest technology to provide an unmatched real estate experience.
        </p>
        <br />
        <h1 style={{color: 'blue'}}>
          <strong>What We offer ?</strong>
         </h1>
        <br />
        <h2>Comprehensive Listings</h2>
        <p className="mb-4 text-slate-700">
          Explore a diverse range of properties across India, including:
          <br />
          Residential Properties: Apartments, villas, independent houses, and more.
          Commercial Properties: Office spaces, retail outlets, and industrial properties.
          Land: Plots for residential, commercial, and agricultural use.
        </p>
        <br />
        <h2>Detailed Property Information</h2>
        <p className="mb-4 text-slate-700">
          We provide in-depth details for every listing, including high-quality images, accurate descriptions, and neighborhood insights to help you make the best choice.
          Advanced Search Tools
        </p>
        {/* <br /> */}
        <p className="mb-4 text-slate-700">
          Our intuitive search tools allow you to filter properties based on location, price, property type, and features, ensuring you find exactly what you're looking for.
        </p>
        <br />
        <h2>Expert Guidance</h2>
        <p className="mb-4 text-slate-700">
          From property selection to finalizing the deal, our experienced advisors are here to guide you through every step of the process.
        </p>
        <br />
        <h1 style={{color: 'blue'}}>
          <strong>Our Values</strong>
         </h1>
        <p className="mb-4 text-slate-700">
          Integrity: We uphold the highest standards of integrity in all our actions.
          Excellence: We strive for excellence in everything we do, delivering outstanding service and results.
          Respect: We respect our customers, partners, and employees, fostering a collaborative and supportive environment.
        </p>
        <br />
    
        <h1 style={{color: 'blue'}}>
          <strong>Why Choose Us?</strong></h1>
        <p className="mb-4 text-slate-700">
          Trusted by Thousands: With a growing community of satisfied clients, we have built a reputation for reliability and trust.
          End-to-End Services: From property search to legal assistance and mortgage support, we offer comprehensive services to make your real estate journey hassle-free.
        </p>
        <p className="mb-4 text-slate-700">
          Customer Satisfaction: Your satisfaction is our top priority. We work tirelessly to ensure you have a positive experience with us.
        </p>
      </div>
    </div>
  );
};

export default About;
