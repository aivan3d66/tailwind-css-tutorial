import {Avatar} from "../Header/Menu";
import {AiOutlineMenu} from "react-icons/ai";

export const Post = () => {
  return (
    <div className="shadow-lg p-2 rounded bg-white">
      <div className="p-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center p-3">
            <Avatar/>
            <div className="ml-3">
              <div className="text-gray-800 text-sm font-medium">
                Tom Russo
              </div>
              <div className="text-xs">
                5 min
              </div>
            </div>
          </div>
          <AiOutlineMenu className="text-gray-600"/>
        </div>
        <div>
          Not having fun at all &#128561;
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1647730324438-c05a20183ed7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="post img"/>
    </div>
  )
}
