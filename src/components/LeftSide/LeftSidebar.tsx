import {Copyright} from "./Copyright";
import app from "./../../img/app.png";
import exchange from "./../../img/exchange.png";
import calendar from "./../../img/calendar.png";
import discord from "./../../img/discord.png";
import drive from "./../../img/drive.png";
import health from "./../../img/health.png";
import settings from "./../../img/settings.png";

export const LeftSidebar = () => {
  return (
    <section className="shadow-lg p-4 w-1/4 ">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Home</h2>
        <a href="/" className='text-blue-400'>Create</a>
      </div>
      <ul className="list-none">
        <li>
          <a className="flex items-center py-2" href="/">
            <img src={calendar} alt="" className="h-9 w-9"/>
            <span className="pl-3"> Events</span>
          </a>
        </li>
        <li>
          <a className="flex items-center py-2" href="/">
            <img src={drive} alt="" className="h-9 w-9"/>
            <span className="pl-3">Saved</span>
          </a>
        </li>
        <li>
          <a className="flex items-center py-2" href="/">
            <img src={discord} alt="" className="h-9 w-9"/>
            <span className="pl-3">Gaming</span>
          </a>
        </li>
        <li>
          <a className="flex items-center py-2" href="/">
            <img src={exchange} alt="" className="h-9 w-9"/>
            <span className="pl-3">Fundraisers</span>
          </a>
        </li>
        <li>
          <a className="flex items-center py-2" href="/">
            <img src={app} alt="" className="h-9 w-9"/>
            <span className="pl-3">Memories</span>
          </a>
        </li>
        <li>
          <a className="flex items-center py-2" href="/">
            <img src={health} alt="health" className="h-9 w-9"/>
            <span className="pl-3">Help & Support</span>
          </a>
        </li>
        <li>
          <a className="flex items-center py-2" href="/">
            <img src={settings} alt="settings" className="h-9 w-9"/>
            <span className="pl-3">Settings & Privacy</span>
          </a>
        </li>
      </ul>
      <Copyright/>
    </section>
  )
}
