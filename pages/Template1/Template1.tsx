import React from 'react'
import './Template1.css'
const Template1 = () => {
  return (
    <div className="body">
      

      

      <h1 className="text-4xl font-bold mb-6 text-center ">EDIT SECTION</h1>

      
      <div className="flex flex-wrap -m-3">
        
        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
        <button className="custom-navy-blue px-2 py-1 rounded-md">
  Edit Events
</button>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col relative">
          
            <div
              className="bg-cover h-96"
              style={{ backgroundImage: 'url(https://th.bing.com/th/id/OIP.nB5G5prrOcUGZ0zJp3rDbAHaEX?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7)' }}
            ></div>
            
          </div>
        </div>

        {/* Repeat the above structure for other cards */}
        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
        <button className="custom-navy-blue px-2 py-1 rounded-md">
  Edit Projects
</button>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
            <div
              className="bg-cover h-96"
              style={{ backgroundImage: 'url(https://th.bing.com/th/id/OIP.aZ_ul_39Ehap-E7S_VD1YwHaE7?rs=1&pid=ImgDetMain)' }}
            ></div>
            
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
        <button className="custom-navy-blue px-2 py-1 rounded-md">
  Edit Memebers
</button>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden flex-1 flex flex-col">
            <div
              className="bg-cover h-96"
              style={{ backgroundImage: 'url(https://www.plum.io/hs-fs/hubfs/Blog%20Thumbnails/teampage3.jpg?width=3794&name=teampage3.jpg)' }}
            ></div>
            
            
          </div>
        </div>

      </div>

    

    </div>
  );
}

export default Template1;
