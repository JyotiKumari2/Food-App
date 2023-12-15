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


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_78q54lq', 'template_uyxptlj', form.current, '1WvJLJG95gLJukucu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  
//   <div className='bg-orange-100 m-auto shadow-2xl w-4/12 px-36'>  
//    <div className="md:mt-10 lg:my-8 lg:mx-10 about-scroll w-4/12">
<div>
  
  <div className="flex lg:mx-[30%] font-bold text-3xl text-gray-400 my-10 px-32">
    Get in Touch !
  </div>

<div className="flex lg:mx-[30%] my-5 md:my-8 gap-7 justify-between flex-col md:flex-row bg-gray-200 shadow-2xl">
       
      <form ref={form} onSubmit={sendEmail}  className="flex gap-2 flex-col w-full p-10" >
     
      <input  className="border-orange-400 border-2 hover:shadow-md p-3 rounded-md focus:outline-none" type="text" name="user_name" placeholder='Your Full Name'/>
     
      <input className="border-orange-400 border-2 hover:shadow-md p-3 rounded-md focus:outline-none" type="email" name="user_email" placeholder='Your Email' />
      
      <textarea  className="border-orange-400 border-2 hover:shadow-md p-3 rounded-md focus:outline-none" name="message" placeholder='Your Message' />
  
      <button className='border-orange-600 bg-orange-600  hover:scale-105 my-4 p-2 font-bold text-white rounded-lg'><input  type="submit" value="Send Message" /></button>
     
      
    </form>
    </div>
 

</div>
 
 
     
  );
};

export default Contact;

 