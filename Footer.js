const Footer = () => {
    return (
      <div className="bg-green-700 text-white h-auto sm:h-96 shadow-lg">
        <div className="flex flex-col sm:flex-row justify-around pt-16 font-serif text-black text-lg">
          <ul className="space-y-6 text-white">
            <h1 className="">Contact Information</h1>
            <hr className="text-2xl text-white"/>
            <li className="">Email Adress: danish.jk.222@gmail.com</li>
            <li className="">mobile No: 7006863141</li>
            <hr className="text-2xl"/>
            <li className="">
              Physical Adress: Main-Market Gulmarg Road Kunzer <br />Tehsil:Kunzer
              , Dist: Baramulla{" "}
              <hr className="text-2xl"/>
            </li>
          </ul>
          <ul className="space-y-6 text-white">
            <li className="">CopyRight Information</li>
            <li className="">Privacy And Policy</li>
            <li className="">Refund Policy</li>
            <li className="">Terms and Conditions</li>
            <hr className="text-2xl"/>
          </ul>
          <ul className="space-y-6 text-white">
            <li className="">Home</li>
            <li className="">About Us</li>
            <li className="">Contact Us</li>
            <li className="">Blogs</li>
            <hr className="text-2xl"/>
          </ul>
        </div>
        <div className="flex justify-center items-center flex-col mt-8 sm:mt-16">
          <div className="flex w-6 items-center space-x-4 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png"
              alt="facebook icon"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
              alt="instagram icon"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  