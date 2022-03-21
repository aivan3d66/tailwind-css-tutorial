import {Menu} from "./Menu";
import {Search} from "./Search";
import {Profile} from "./Profile";

export const Header = () => {
  return (
    <section className="flex px-4 py-2 items-center justify-between shadow">
      <div className="flex w-1/3">
        <div className='logo'>
          <img
            className="h-9 rounded-full"
            src="https://cdn.svgporn.com/logos/facebook.svg"
            alt='logo'
          />
        </div>
        <Search/>
      </div>
      <div className='w-1/3'>
        <Menu/>
      </div>
      <div className='w-1/3'>
        <Profile/>
      </div>
    </section>
  )
}
