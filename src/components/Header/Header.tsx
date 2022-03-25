import {Menu} from "./Menu/Menu";
import {Profile} from "./Profile";
import {motion} from "framer-motion";

const container = {
  hidden: {opacity: 0, y: 1000},
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7
    }
  }
}

export const Header = () => {
  return (
    <motion.section className="fixed -top-1 z-10 flex min-w-full px-4 py-2 items-center justify-between shadow bg-white">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex w-1/3">
        <div className='logo'>
          <img
            className="h-9 rounded-full"
            src="https://cdn.svgporn.com/logos/facebook.svg"
            alt='logo'
          />
        </div>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className='w-1/4'
      >
        <Menu/>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className='w-1/3'
      >
        <Profile/>
      </motion.div>
    </motion.section>
  )
}
