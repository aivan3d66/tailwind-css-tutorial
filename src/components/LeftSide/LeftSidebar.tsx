import {Copyright} from "./Copyright";
import app from "./../../img/app.png";
import exchange from "./../../img/exchange.png";
import calendar from "./../../img/calendar.png";
import discord from "./../../img/discord.png";
import drive from "./../../img/drive.png";
import health from "./../../img/health.png";
import settings from "./../../img/settings.png";

type MenuItemType = {
  name: string,
  image: any
}

const menuList = [
  {
    name: 'Events',
    image: calendar
  },
  {
    name: 'Saved',
    image: drive
  },
  {
    name: 'Gaming',
    image: discord
  },
  {
    name: 'Fundraisers',
    image: exchange
  },
  {
    name: 'Memories',
    image: app
  },
  {
    name: 'Help & Support',
    image: health
  },
  {
    name: 'Settings & Privacy',
    image: settings
  }
] as Array<MenuItemType>;

export const LeftSidebar = () => {
  return (
    <section className="shadow-lg p-4 w-1/4 ">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Home</h2>
        <a href="/" className='text-blue-400'>Create</a>
      </div>
      <ul className="list-none">
        {
          menuList.map(item => (
            <li>
              <a className="flex items-center py-2" href="/">
                <img src={item.image} alt="" className="h-9 w-9"/>
                <span className="pl-3">{item.name}</span>
              </a>
            </li>
          ))
        }
      </ul>
      <Copyright/>
    </section>
  )
}
