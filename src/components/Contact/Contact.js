// import React, { useState } from 'react';
// import axios from 'axios';

// import '../../styles/Contact/Contact.scss';
// const Contact = () => {
//   const [input, setInput] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setInput((prevInput) => {
//       return {
//         ...prevInput,
//         [name]: value,
//       };
//     });
//   }

//   function handleClick(event) {
//     event.preventDefault();
//     const newUserInfo = {
//       name: input.name,
//       email: input.email,
//       message: input.message,
//     };
//     axios.post('http://localhost:3001/', newUserInfo);
//   }

//   return (
//     <>
//       <div className="contact">
//         <div className="contact__container">
//           <div className="contact__header">
//             <h1>
//               <span
//                 data-aos="fade-down"
//                 data-aos-delay="0"
//                 data-aos-offset="200"
//               >
//                 C
//               </span>
//               <span
//                 data-aos="fade-down"
//                 data-aos-delay="200"
//                 data-aos-offset="200"
//               >
//                 O
//               </span>
//               <span
//                 data-aos="fade-down"
//                 data-aos-delay="400"
//                 data-aos-offset="200"
//               >
//                 N
//               </span>
//               <span
//                 data-aos="fade-down"
//                 data-aos-delay="600"
//                 data-aos-offset="200"
//               >
//                 T
//               </span>
//               <span
//                 data-aos="fade-down"
//                 data-aos-delay="800"
//                 data-aos-offset="200"
//               >
//                 A
//               </span>
//               <span
//                 data-aos="fade-down"
//                 data-aos-delay="1000"
//                 data-aos-offset="200"
//               >
//                 C
//               </span>
//               <span
//                 data-aos="fade-down"
//                 data-aos-delay="1200"
//                 data-aos-offset="200"
//               >
//                 T
//               </span>
//               <span
//                 data-aos="fade-down"
//                 data-aos-delay="1400"
//                 data-aos-offset="200"
//               >
//                 .
//               </span>
//             </h1>
//           </div>

//           <div className="contact__details">
//             <div className="contact__form">
//               <form>
//                 <div className="contact__form-group">
//                   <label htmlFor="name">Name: </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={input.name}
//                     autoComplete="off"
//                     placeholder="Enter name"
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="contact__form-group">
//                   <label htmlFor="email">Email: </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={input.email}
//                     autoComplete="off"
//                     placeholder="Enter email"
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="contact__form-group">
//                   <label htmlFor="message">Concern: </label>
//                   <textarea
//                     name="message"
//                     value={input.message}
//                     id="contact__message"
//                     cols="20"
//                     rows="5"
//                     onChange={handleChange}
//                     placeholder="Type your messsage"
//                   ></textarea>
//                 </div>
//                 <button className="contact__send-btn" onClick={handleClick}>
//                   Send
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;
