import {FaGripfire} from "react-icons/fa";
import {FaGithubAlt} from "react-icons/fa";
import {FaEmpire} from "react-icons/fa";
import {FaAvianex} from "react-icons/fa";
import {FaJediOrder} from "react-icons/fa";


export const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16
    flex flex-col bg-primary text-secondary shadow-lg">
      <SidebarIcon icon={<FaGripfire size="28"/>}/>
      <SidebarIcon icon={<FaGithubAlt size="28"/>}/>
      <SidebarIcon icon={<FaEmpire size="28"/>}/>
      <SidebarIcon icon={<FaAvianex size="28"/>}/>
      <SidebarIcon icon={<FaJediOrder size="28"/>}/>
    </div>
  )
}

export const SidebarIcon = ({icon, text = 'tooltip'}: any, ) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">
      {text}&#128161;
    </span>
  </div>
)
