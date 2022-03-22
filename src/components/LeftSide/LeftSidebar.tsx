import {Copyright} from "./Copyright";
import {menuList} from "../../data/menu/menu";

export const LeftSidebar = () => {
  return (
    <section className="shadow-lg p-4 w-1/4 h-screen">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Home</h2>
        <a href="/" className='text-blue-400'>Create</a>
      </div>
      <div className="flex flex-col justify-between">
        <ul className="list-none mb-20">
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
      </div>
    </section>
  )
}
