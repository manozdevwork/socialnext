
import React from 'react';
import { Calendar, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ScheduledPost {
  title: string;
  date: string;
  time: string;
  image: string;
  tag: string;
  bgColor?: string;
}

interface ScheduledPostsProps {
  posts: ScheduledPost[];
}

const ScheduledPosts: React.FC<ScheduledPostsProps> = ({ posts }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="text-red-500">
            <Calendar className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-semibold">Scheduled Posts</h2>
        </div>
        <Button variant="ghost" className="text-sky-400 hover:text-sky-500 hover:bg-sky-50 rounded-full font-medium px-6 py-2.5">
          View All
        </Button>
      </div>
      
      <div className="space-y-6">
        {posts.map((post, index) => (
          <ScheduledPostItem key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

interface ScheduledPostItemProps {
  post: ScheduledPost;
}

const ScheduledPostItem: React.FC<ScheduledPostItemProps> = ({ post }) => {
  return (
    <div className="flex items-start gap-4 py-3">
      <div className="relative min-w-[80px] h-[80px] rounded-md overflow-hidden">
        <img 
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute bottom-0 left-0 right-0 ${post.bgColor || 'bg-gray-800'} text-white text-[7px] font-semibold p-1 text-center leading-tight`}>
          {post.tag}
        </div>
      </div>
      
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-gray-800 leading-tight text-lg mb-2 pr-2">{post.title}</h3>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <MoreVertical className="h-5 w-5 text-gray-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Reschedule</DropdownMenuItem>
              <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center text-sm text-gray-500 mt-2">
          <span>{post.date}</span>
          <div className="mx-3 w-16 border-t border-dotted border-gray-300"></div>
          <span>{post.time}</span>
        </div>
      </div>
    </div>
  );
};

export default ScheduledPosts;
