import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Eric",
      username: "codewitheric",
      userImg:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/RX4OQ5T6HYI6RJR7PNOSVOT2YU.jpg&w=1200",
      img: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      text: "cute bear",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Eric",
      username: "codewitheric",
      userImg:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/RX4OQ5T6HYI6RJR7PNOSVOT2YU.jpg&w=1200",
      img: "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      text: "awww",
      tiemstamp: "2 minutes ago",
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l xl:min-w-[576px] border-r border-gray-200 sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b ">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className=" h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
