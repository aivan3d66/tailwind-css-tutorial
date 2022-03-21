import {AiOutlineSearch} from "react-icons/ai";

export const Search = () => {
  return (
    <div className="flax relative items-center w-1/2 px-4 py-2 ml-2 bg-gray-200 rounded-full">
      <AiOutlineSearch className='absolute left-2 bottom-2.5 text-lg text-gray-600'/>
      <input
        type="text"
        placeholder="Search Facebook"
        className="w-auto px-2 ml-2 bg-gray-200"
      />
    </div>
  )
}
