import {AiOutlineMenu} from "react-icons/ai";

type ContactType = {
  name: string,
  avatar: string
}

const contacts = [
  {
    name: 'Jack Daniels',
    avatar: 'https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80'
  },
  {
    name: 'Bob Marley',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
  },
  {
    name: 'Curt Cobain',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
  },
  {
    name: 'Michaele Jackson',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Freddy Mercury',
    avatar: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Tony Stark',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  }
] as Array<ContactType>;

export const RightSidebar = () => {
  return (
    <section className="shadow-lg p-4 w-1/4 h-screen">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Contacts</h2>
        <AiOutlineMenu className="text-gray-600"/>
      </div>
      <ul className="list-none">
        {
          contacts.map((item, index) => (
            <li key={index}>
              <a className="flex items-center py-2" href="/">
                <div className="h-9 w-9 rounded-full overflow-hidden">
                  <img src={item.avatar} alt="user avatar"/>
                </div>
                <span className="pl-3"> {item.name}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
