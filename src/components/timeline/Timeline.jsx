import React, { useEffect, useState } from 'react';
import './Timeline.css';
import Share from '../share/Share';
import Post from '../post/Post';
import axios from 'axios';

// import { Posts } from '../../dummyData';
export default function Timeline({ username }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get('/posts/timeline/63915a1985a5a07721fd5e5a');
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
