import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineNotification} from "react-icons/ai";
import {AiOutlinePlaySquare} from "react-icons/ai";
import {AiOutlineShopping} from "react-icons/ai";
import {AiOutlineTeam} from "react-icons/ai";
import {AiOutlineMessage} from "react-icons/ai";
import avatar from "./../../avatar.jpg";

export const Avatar = () => {
  return (
    <div>
      <img
        className='w-7 h-7 m-auto rounded-full overflow-hidden'
        src={avatar}
        width='30'
        alt="avatar"
      />
    </div>
  )
}

export const Menu = () => {
  return (
    <nav>
      <a className="menu-btn" href="/">Menu</a>
      <ul className="menu">
        <li className="nav-item nav-item__active">
          <a className="nav-link" href="#">
            <AiOutlineHome className="nav-img"/>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            <AiOutlineNotification className="nav-img"/>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <AiOutlinePlaySquare className="nav-img"/>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <Avatar/>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <AiOutlineShopping className="nav-img"/>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <AiOutlineTeam className="nav-img"/>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <AiOutlineMessage className="nav-img"/>
          </a>
        </li>
      </ul>
    </nav>
  )
}
