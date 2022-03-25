import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineBell} from "react-icons/ai";
import {AiOutlineMessage} from "react-icons/ai";
import {AiOutlineSearch} from "react-icons/ai";
import { Avatar } from "../../../common/Avatar/Avatar";

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
            <AiOutlineSearch className="nav-img"/>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <Avatar/>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <AiOutlineBell className="nav-img"/>
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
