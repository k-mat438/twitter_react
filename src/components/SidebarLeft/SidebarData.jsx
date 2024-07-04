import { AiFillHome } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { PiDotsThreeCircle } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";


export const SidebarData = [
  {
    tittle: 'Home',
    icon: <AiFillHome />,
    link: '/api/v1/tweets'
  },
  {
    tittle: 'Explore',
    icon:  <IoIosSearch />,
    link: '/api/v1/tweets'
  },
  {
    tittle: 'Notification',
    icon: <IoNotificationsOutline />,
    link: '/api/v1/tweets'
  },
  {
    tittle: 'Message',
    icon: <FaRegEnvelope />,
    link: '/api/v1/tweets'
  },
  {
    tittle: 'Bookmark',
    icon: <FaRegBookmark />,
    link: '/api/v1/tweets'
  },
  {
    tittle: 'Communitiies',
    icon: <IoPeopleOutline />,
    link: '/api/v1/tweets'
  },
  {
    tittle: 'Premium',
    icon: <BsTwitterX />,
    link: '/api/v1/tweets'
  },
  {
    tittle: 'Profile',
    icon: <IoPersonOutline />,
    link: '/api/v1/tweets'
  },
  {
    tittle: 'More',
    icon: <PiDotsThreeCircle />,
    link: '/api/v1/tweets'
  },
]