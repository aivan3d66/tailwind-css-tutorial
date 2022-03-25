import avatar from "../../avatar.jpg";

export const Avatar = () => {
  return (
    <div className="w-7 h-7">
      <img
        className='w-7 h-7 m-auto rounded-full text-3xl'
        src={avatar}
        width='30'
        alt="avatar"
      />
    </div>
  )
}
