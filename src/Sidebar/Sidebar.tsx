import {FaGripfire} from "react-icons/fa";
import {FaGithubAlt} from "react-icons/fa";
import {FaEmpire} from "react-icons/fa";
import {FaAvianex} from "react-icons/fa";
import {FaJediOrder} from "react-icons/fa";


export const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16
    flex flex-col bg-primary text-secondary shadow-lg">
      <i>1</i>
      <i>2</i>
      <i>3</i>
      <i>4</i>
      <i>5</i>

      <SidebarIcon icon={<FaGripfire size="28"/>}/>
      <SidebarIcon icon={<FaGithubAlt size="28"/>}/>
      <SidebarIcon icon={<FaEmpire size="28"/>}/>
      <SidebarIcon icon={<FaAvianex size="28"/>}/>
      <SidebarIcon icon={<FaJediOrder size="28"/>}/>
    </div>
  )
}

export const SidebarIcon = ({icon}: any) => (
  <div className="sidebar-icon">
    {icon}
  </div>
)
