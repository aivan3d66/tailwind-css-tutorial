import {Copyright} from "./Copyright";
import {menuList} from "../../data/menu/menu";
import {motion} from "framer-motion";

const container = {
  hidden: {opacity: 0, x: -1000},
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 1,
      delay: 0.7
    }
  }
}

export const LeftSidebar = () => {
  return (
    <section className="fixed left-0 mobile:hidden tablet:hidden laptop:block border-2 h-full tablet:w-fit py-4 laptop:w-1/4 h-screen">
      <div className="h-full w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold px-4">Home</h2>
          <a href="/" className='text-blue-400'>Create</a>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-between h-5/6 opacity-0"
        >
          <ul>
            {
              menuList.map((item, index) => (
                <li key={index} className="left-sidebar__list">
                  <a className="flex items-center py-2" href="/">
                    <img src={item.image} alt="" className="h-9 w-9"/>
                    <span className="pl-3">{item.name}</span>
                  </a>
                </li>
              ))
            }
          </ul>
          <Copyright/>
        </motion.div>
      </div>
    </section>
  )
}
