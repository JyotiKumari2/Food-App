// const Contact = () =>{
//     return(

//         <div className="font-bold text-center m-10 p-10">
        
//             <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
//             <form>
//                 <input type="text"
//                        className="border border-black p-2 m-2"
//                        placeholder="name" />
//                  <input type="email"
//                        className="border border-black p-2 m-2"
//                        placeholder="Email" />
//                 <button className="border p-2 m-2 bg-green-100 rounded-lg">
//                     Submit</button>
//             </form>
//         </div>
//     );
// };


// export default Contact;


// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_78q54lq', 'template_uyxptlj', form.current, '1WvJLJG95gLJukucu')
//       .then((result) => {
          
          
//              alert("Message Sent Succesfully!");
          
          
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
  
 
// <div>
  
//   <div className="flex lg:mx-[30%] font-bold text-3xl text-gray-400 my-10 px-32">
//     Get in Touch !
//   </div>

// <div className="flex lg:mx-[30%] my-5 md:my-8 gap-7 justify-between flex-col md:flex-row bg-gray-200 shadow-2xl">
       
//       <form ref={form} onSubmit={sendEmail}  className="flex gap-2 flex-col w-full p-10" >
     
//       <input  className="border-orange-400 border-2 hover:shadow-md p-3 rounded-md focus:outline-none" type="text" name="user_name" placeholder='Your Full Name' required/>
     
//       <input className="border-orange-400 border-2 hover:shadow-md p-3 rounded-md focus:outline-none" type="email" name="user_email" placeholder='Your Email' required/>
      
//       <textarea  className="border-orange-400 border-2 hover:shadow-md p-3 rounded-md focus:outline-none" name="message" placeholder='Your Message' required/>
  
//       <button className='border-orange-600 bg-orange-600  hover:scale-105 my-4 p-2 font-bold text-white rounded-lg'><input  type="submit" value="Send Message" /></button>
     
      
//     </form>
//     </div>
 

// </div>
 
 
     
//   );
// };

// export default Contact;


import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_78q54lq",
        "template_uyxptlj",
        form.current,
        "1WvJLJG95gLJukucu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setFormError(true);
        }
      );
  };

  useEffect(() => {
    if (formSubmitted && form.current) {
      setTimeout(() => {
        form.current.reset();
        setFormSubmitted(false);
      }, 3000);
    }
  }, [formSubmitted]);

  return (
    <div id="form-container" className="lg:p-5 font-Encode-Sans">
      <div className="overflow-hidden">
        <motion.h3
          initial={{ y: "200%" }}
          transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 1 }}
          animate={{ y: 0 }}
          className="text-center lg:text-5xl text-3xl mt-10 pb-6 font-bold text-orange-600"
        >
          Get in Touch !
        </motion.h3>
      </div>
      {formError && (
        <motion.div
          transition={{ duration: 0.5, delay: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-center text-lg mt-5 text-rose-600">
            Something went wrong! Please try again later.
          </p>
        </motion.div>
      )}
      <motion.div
        transition={{ duration: 0.5, delay: 0.7 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-5"
      >
        {formSubmitted ? (
          <motion.div
            transition={{ duration: 0.5, delay: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-center text-green-500 text-xl lg:mt-40 mt-20 mb-20 ">
              Thank you for your message! We&apos;ll get back to you shortly!
            </p>
          </motion.div>
        ) : (
          <form method="POST" action="" ref={form} onSubmit={sendEmail}>
            <div className="mx-auto rounded-xl max-w-xl">
              <div className="grid grid-cols-1 gap-6 label">
                <div className="overflow-hidden">
                  <label htmlFor="name" className="block border-b py-2 ">
                    <input
                      id="name"
                      type="text"
                      name="user_name"
                      required="required"
                      placeholder="Name"
                      className="
                    appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-bold uppercase text-3xl"
                    />
                  </label>
                </div>
                <label htmlFor="email" className="block border-b">
                  <input
                    id="email"
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    required="required"
                    className="
                  appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-bold uppercase text-3xl"
                  />
                </label>
              
               

                <label className="block border-b">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required="required"
                    placeholder="Tell us a little more about your cool project!"
                    className="
                  appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-darker text-cool-beige text-2xl font-bold
                    "
                  ></textarea>
                </label>
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                    className="uppercase text-sm font-bold tracking-wide bg-orange-500 text-gray-100 hover:bg-orange-300 hover:text-neutral-800 p-3 rounded-lg w-full"
                  >
                    Send
                  </motion.button>
                </div>
              </div>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
 