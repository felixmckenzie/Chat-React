import { Link } from 'react-router-dom';
import { DetailCard } from './DetailCard'
import { SideBarLink } from './SideBarLink';
import { List } from './List'
import { SideBarHeader } from './SideBarHeader'

type ItemType = {
  id: string | number;
  [key: string]: any;
};

type SideBarProps = {
  items: ItemType[];
  type: 'messages' | 'friends' | 'links';
  heading: string;
};


const renderItem = (type: SideBarProps['type'], item: ItemType) => {
  if (type === 'messages') {
    return (
        <Link to={'/'}>
         <DetailCard
        key={item.id}
        title={item.sender}
        text={item.text}
        date={item.timestamp}
      />
        </Link>
     
    );
  }

  if(type === 'friends'){
   return(
    <Link to={'new-message'} state={{contactId: item.clerkId, username: item.username}}>
    <DetailCard
      key={item.id}
      title={item.username}
      text="I'm on Dev Chat"
      avatar={item.avatar}
    />
    </Link>
   ) 
  }

  if(type === 'links'){ 
    return (
    <SideBarLink key={item.id} href={item.href} title={item.title} />
    )
    
    }
    return null;
  }

const SideBar = ({ items, type, heading }: SideBarProps): JSX.Element => {


    return (
       <div className="hidden md:flex md:flex-shrink-0 flex-col w-4/12 border-r ">
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