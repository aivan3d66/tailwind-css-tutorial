import {users} from "../../../data/users/users";
import {Story} from "./Story/Story";

export const Stories = () => {
  return (
    <div className="p-4 border">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-bold">Stories</h2>
        <a href="/" className='text-blue-400'>See all</a>
      </div>
      <div className="flex justify-between tablet:justify-around items-center flex-row mb-5">
        {
          users.map((c, i) => {
            return <Story
              key={i}
              image={c.avatar}
              name={c.name}
              photo={c.photo}
            />
          })
        }
      </div>
    </div>
  )
}
