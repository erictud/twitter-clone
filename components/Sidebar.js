import Image from "next/image";
import SidebarMenuItem from "../components/SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkAltIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/* Twitter logo */}
      <div className="hoverEffect p-0 pl-5 xl:pl-0 hover:bg-blue-100 xl:px-1 h-12 w-12">
        <Image
          width={50}
          height={50}
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
        />
      </div>
      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmark" Icon={BookmarkAltIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>

      {/* Button */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>

      {/* Miniprofile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img
          src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/RX4OQ5T6HYI6RJR7PNOSVOT2YU.jpg&w=1200"
          alt="user profile img"
          className="h-10 w-10 rounded-full xl:mr-2"
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Tudorica Eric</h4>
          <p className="text-gray-500">@TudoricaEric</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
}
