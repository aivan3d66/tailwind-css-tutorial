import {Menu} from "./Menu";
import {Search} from "./Search";
import {Profile} from "./Profile";

export const Header = () => {
  return (
    <section className="p-3 flex items-center justify-between">
      <div className="w-1/4">
        <div className='logo'>
          <img
            className="h-7 rounded-full"
            src="https://cdn.svgporn.com/logos/facebook.svg"
            alt='logo'
          />
        </div>
        <Search/>
      </div>
      <div className='w-1/2'>
        <Menu/>
      </div>
      <div className='w-1/4'>
        <Profile/>
      </div>
    </section>
  )
}
