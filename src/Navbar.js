import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { motion} from "framer-motion";

const Navbar = () => {
  const history = useNavigate();
 

  
  return (
    <div>
   
    <div class="top-0 z-40 w-full  border-b shadow-md border-gray-300 bg-white  fixed py-1 ">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div class="inline-flex items-center space-x-2 pt-2 md:pt-0 ">
          <span
            class="font-bold text-3xl cursor-pointer  tap-transparent"
            onClick={() => {
              history("/");
            }}
          >
           
          </span>
         
        </div>
        <div class="hidden grow items-start md:flex ">
          <ul class="ml-12 inline-flex space-x-10 my-[5px] ">
            <li >
              <Link
                className=" tap-transparent border-b-[2px] border-purple-700 inline-flex items-center text-sm font-bold text-gray-800 hover:text-gray-900 "
                to="/"
              >
               Profile
              </Link>
            </li>
            <li>
              <Link
                class=" tap-transparent  inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                to="/"
              >
                About
              </Link>
            </li>
            
          </ul>
        </div>
        
        <div class="hidden space-x-2 md:block">
            <div>
              <button className="pr-2">
              <motion.div whileHover={{ scale: 1.1  }}
                whileTap={{
                  scale: 1,
                  borderRadius: "100%"
                }}>
                <Link
                  class=" tap-transparent rounded-md bg-transparent px-3 py-2  text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  to="/"
                >
                  Sign In
                </Link>
                </motion.div>
              </button>
              <button>
              <motion.div whileHover={{ scale: 1.1  }}
                whileTap={{
                  scale: 1,
                  borderRadius: "100%"
                }}>
                <Link
                  class=" tap-transparent rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  to="/"
                >
                  Log In
                </Link>
          </motion.div>
              </button>
            </div>
        </div>
        <div class=" tap-transparent md:hidden absolute top-2 right-4 z-40">
          <FaBars size={18} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
