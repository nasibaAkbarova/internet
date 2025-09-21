import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="">
      <h1 >Sahifasi topilmadi</h1>
   <div className="relative h-screen flex items-center justify-center">
  <Link
    to="/login"
    className="absolute top-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
  >
    Asosiy sahifaga qaytish
  </Link>
</div>


    </div>
  )
}

export default NotFound
