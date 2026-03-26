import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, users, comments }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} users={users} comments={comments} />
    ))}
  </div>
);
