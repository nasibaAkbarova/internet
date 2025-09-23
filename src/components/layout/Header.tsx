import Rasm from "../../assets/image/rasm.png"
import Vector from "../../assets/icons/Vector.png"
import Search from "../../assets/icons/search.png"
import Qongiroq from "../../assets/icons/qongiroq.png"
function Header() {
  return (
    <nav className="py-5 px-5 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <img src={Rasm} alt="" />
        <h1>Dominique Ch.</h1>
        <div className="flex items-center gap-5">

          <img src={Vector} alt="" />


          <div className="flex items-center gap-2">

            <img src={Search} alt="" />
            <input
              type="text"
              placeholder="Quick search"

            />
          </div>

        </div>
      </div>


      <img src={Qongiroq} alt="" />


    </nav>
  )
}

export default Header
