import {AiOutlineSetting} from "react-icons/ai";

export const Profile = () => {
  return (
    <div className="flex items-center justify-end">
      <div className="p-1 bg-gray-200 rounded-full">
        <AiOutlineSetting className="text-3xl cursor-pointer hover:text-gray-500"/>
      </div>
    </div>
  )
}
