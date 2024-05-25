


import React from 'react'
import '../App.css'; 
      

 function Assignment1({obj}) {
  return (
    <div className='profile_card'>
      
      <h1>Name:{obj.name}</h1>
    
      <h4>Email: {obj.email}</h4>


    </div>
  )
}

export default Assignment1;









// import React from 'react';
// import '../App.css';
// import Assignment from './'
// // import data from '../App.js'

// const ProfileCard = (props) => (
//     <div className="profile_card">
//       <h1>Name: {props.name}</h1>
//       <p>Email: {props.email}</p>
//     </div>
//   );
// // App component using the ProfileCard component
// function App() {
//   const profiles = [
//     { name: 'GOPIKA MANOJ', email: 'gopika@gmail.com' },
//     { name: 'DHEERAJ MANOJ', email: 'dheeraj@gmail.com' }
//   ];

//   return (
//     <div className="App">
//       {profiles.map((profile, index) => (
//         <div className="profile_wrapper" key={index}> 
      
//           <ProfileCard {...profile} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;