import { FaShopify } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { products_categories } from "../utils/product";

const Navbar = () => {
  return (
    <nav className="w-full shadow-md shadow-fuchsia-300">
      <div className="w-3/4 mx-auto flex items-center justify-between  py-4 
      mt-2 px-4">

        <div className="flex items-center">
          <FaShopify 
            size={30} 
            className="text-fuchsia-400"
          />
          <h1 className="font-bold text-2xl">
            Tasty 
            <span className="text-fuchsia-500">Trolley</span>
          </h1>
        </div>

        <ul className="flex gap-12">

          {products_categories.map((category) => (
            <li key={category.value}>
              <NavLink to={`/${category.value}`}>{category.value}</NavLink>
            </li>
          ))}
      
        </ul>

        <div>
          <MdShoppingCart 
            size={30}
            className="text-fuchsia-500"
          />
        </div>


      </div>
    </nav>
  )
}

export default Navbar