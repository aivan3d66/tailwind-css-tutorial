import calendar from "../../img/calendar.png";
import drive from "../../img/drive.png";
import discord from "../../img/discord.png";
import exchange from "../../img/exchange.png";
import app from "../../img/app.png";
import health from "../../img/health.png";
import settings from "../../img/settings.png";

type MenuItemType = {
  name: string,
  image: string
}

export const menuList = [
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
