const Contact = () =>{
    return(

        <div className="font-bold text-center m-10 p-10">
        
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
            <form>
                <input type="text"
                       className="border border-black p-2 m-2"
                       placeholder="name" />
                 <input type="email"
                       className="border border-black p-2 m-2"
                       placeholder="Email" />
                <button className="border p-2 m-2 bg-green-100 rounded-lg">
                    Submit</button>
            </form>
        </div>
    );
};


export default Contact;


 