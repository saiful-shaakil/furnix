import { AiOutlineSearch } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { BiCart } from "react-icons/bi";

function Navbar() {
  return (
    <div className="grid grid-cols-3 m-auto w-[80%] py-10 items-center">
      <div>
        <h1 className="font-pacifico text-3xl cursor-pointer">Furnix</h1>
      </div>
      <div>
        <ul className="flex gap-5 justify-center font-rubik text-2xl">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">Collection</li>
          <li className="cursor-pointer">Blog</li>
        </ul>
      </div>
      <div className="flex justify-end text-3xl gap-5">
        <AiOutlineSearch className="cursor-pointer" />
        <MdManageAccounts className="cursor-pointer" />
        <BiCart className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
