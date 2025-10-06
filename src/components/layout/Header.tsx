import Rasm from "../../assets/image/rasm.png"
import Search from "../../assets/icons/search.png"
import Qongiroq from "../../assets/icons/qongiroq.png"
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosCalendar } from "react-icons/io";
import { BsUmbrella } from "react-icons/bs";
import { GoFile } from "react-icons/go";

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  // bu : isopam bosganda ishlash uchun usestate korinishida yoziladi ;

   const navigate = useNavigate();
  const logout = () => {
    navigate("/login");
  };

  return (

    <nav className="py-3 px-6 flex items-center sticky top-0 justify-between bg-white  rounded-bl-xl rounded-br-xl">
      <div className="flex items-center gap-6">

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-lg  transition"
        >
          <img src={Rasm} alt="" className="w-10 h-10 rounded-full border" />
          <h1 className="font-semibold text-gray-800">Dominique Ch.</h1>

          {/* tepada yozganim isopan dib yozganim agar 
          bosganimda pasga qarasin strelka  yan bossam 
          tepaga qarasin digani ozgaruchiga op qoydim   */}

          {
            isOpen ?
              <FaCaretDown className="text-gray-600" />
              :
              <FaCaretUp className="text-gray-600" />
          }
        </button>

        <div className="flex items-center gap-2 rounded-lg px-3 py-2 ">
          <img src={Search} alt="" className="w-5 h-5" />
          <input
            type="text"
            placeholder="Quick search"
            className="outline-none text-sm"
          />
        </div>

      </div>

      <img src={Qongiroq} alt="" 
      className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
      {/* is opan true bolsa  madal ishlasin ! */}
{
  isOpen && (
      <div className="w-52 min-h-52 bg-gray-100   rounded-2xl absolute top-24">
<ul>
  <li >
    <Link className="flex items-center gap-4 py-2 px-8 mt-2" to={"/myDetails"}>
    <FaCircleUser className="text-gray-800" />
   <span>My details</span>
    </Link>
  </li>

  <li >
    <Link className="flex items-center gap-4 py-2 px-8" to={"/calendar"}>
    <IoIosCalendar className="text-gray-800" />
   <span> My calendar</span>
    </Link>
  </li>

  <li >
    <Link className="flex items-center gap-4 py-2 px-8" to={"/calendar"}>
    <BsUmbrella className="text-gray-800" />
   <span> calendar</span>
    </Link>
  </li>

  <li >
    <Link className="flex items-center gap-4 py-2 px-8" to={"/sv"}>
    <GoFile className="text-gray-800" />
   <span>Corporate CV</span>
    </Link>
  </li>

 <li className="px-8">
              <button onClick={logout} className="bg-gray-500 text-white rounded-xl p-1.5 text-sm cursor-pointer px-8">
                Logout
              </button>
            </li>
  
</ul>
      </div>

  )
}
    </nav>
  )
}


export default Header
