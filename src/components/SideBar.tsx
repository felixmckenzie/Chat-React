import { Link } from 'react-router-dom';
import { MessageItem } from './MessageItem'
import { List } from './List'
import { SideBarHeader } from './SideBarHeader'

type ItemType = {
  id: string | number;
  [key: string]: any;
};

type SideBarProps = {
  items: ItemType[];
  type: 'messages' | 'friends';
  heading: string;
};


const renderItem = (type: SideBarProps['type'], item: ItemType) => {
  if (type === 'messages') {
    return (
        <Link to={'/'}>
         <MessageItem
        key={item.id}
        title={item.sender}
        text={item.text}
        date={item.timestamp}
      />
        </Link>
     
    );
  }

  if(type === 'friends'){ 
    return (
    <li className='flex w-full items-center rounded-md p-2 hover:underline'><Link to={item.href}>{item.title}</Link></li>
    )
    
    }
    return null;
  }





const SideBar = ({ items, type, heading }: SideBarProps): JSX.Element => {


    return (
       <div className="hidden md:flex flex-col h-screen w-4/12 overflow-hidden border-r border-x-slate-900 divide-y">
        <SideBarHeader heading={heading} />
                <List>
                    <div>
                        {items.map((item) => renderItem(type, item))}
                    </div>
              </List>
       </div>
    )
}

export default SideBar