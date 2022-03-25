import avatar from "../../avatar.jpg";

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
