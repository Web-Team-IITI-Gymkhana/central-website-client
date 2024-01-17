import React from 'react'

const Form1 = () => {
  return (
    <div>
      <body className="bg-gray-200 p-8">

<div className="max-w- mx-auto bg-white p-8 rounded shadow">

    <h1 className="text-2xl font-bold mb-6 text-center">General Details</h1>

   
    
<form action="https://fabform.io/f/xxxxx" method="post">
      
        <div className="mb-6">
            
           
            
                <div>
                    <label className="block mb-2" >Club Name:</label>
                    <input type="text" id="firstName" name="firstName" className="w-full p-2 border rounded"/>
                </div>
                <div>
                    <label className="block mb-2" >Email:</label>
                    <input type="text" id="lastName" name="lastName" className="w-full p-2 border rounded"/>
                </div>
                <div>
                    <label className="block mb-2" >Contact No:</label>
                    <input type="text" id="lastName" name="lastName" className="w-full p-2 border rounded"/>
                </div>
            
            
           

        </div>

       
        <div className="mb-6">
            <h2 className="text-lg  mb-4">Social Media Links:</h2>
           
            <div className="ml-0 mr-0 sm:ml-10 mr-10">
                <div className="grid grid-cols-2 gap-4">
                    <div ><label className="block mb-2" >LinkedIn:</label>
                        <input type="email" id="email" name="email" className="w-full p-2 border rounded"/></div>
                        <div  ><label className="block mb-2">Facebook:</label>
                            <input type="email" id="email" name="email" className="w-full p-2 border rounded"/></div>
                   
                
                
</div>
            </div>
            <div className="ml-0 mr-0 sm:ml-10 mr-10">
            <div className="grid grid-cols-2 gap-4">
                <div ><label className="block mb-2" >Instagram:</label>
                    <input type="email" id="email" name="email" className="w-full p-2 border rounded"/></div>
                    <div ><label className="block mb-2" >Discord:</label>
                        <input type="email" id="email" name="email" className="w-full p-2 border rounded"/></div>
               
            
            </div>

        </div>
            </div>
            
    <div>
        <label className="block mb-2" >Theme:</label>
        <input type="text" id="firstName" name="firstName" className="w-full p-2 border rounded"/>
    </div>
    <div>
        <label className="block mb-2" >Poster Caption:</label>
        <input type="text" id="lastName" name="lastName" className="w-full p-2 border rounded"/>
    </div>

        
        <div className="text-center mb-6 mt-6">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
        </div>
      
       
    </form>

</div>

</body>
    </div>
  )
}

export default Form1;
