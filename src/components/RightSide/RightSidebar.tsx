import {motion} from "framer-motion";
import {AiOutlineMenu} from "react-icons/ai";
import {contacts} from "../../data/users/users";

const container = {
  hidden: {opacity: 0, x: 1000},
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 1,
      delay: 0.7
    }
  }
}

export const RightSidebar = () => {
  return (
    <section className="mobile:hidden tablet:hidden laptop:block border-2 h-full  p-4 sm:w-64 laptop:w-1/4 h-screen">
      <div className="fixed h-full">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Contacts</h2>
          <AiOutlineMenu className="text-gray-600"/>
        </div>
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="list-none"
        >
          {
            contacts.map((item, index) => (
              <li key={index} className="right-sidebar__list">
                <a className="flex items-center py-2" href="/">
                  <div className="h-9 w-9 rounded-full overflow-hidden">
                    <img src={item.avatar} alt="user avatar"/>
                  </div>
                  <span className="pl-3"> {item.name}</span>
                </a>
              </li>
            ))
          }
        </motion.ul>
      </div>
    </section>
  )
}
