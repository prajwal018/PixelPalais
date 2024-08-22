import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tag from './tag';

interface MediumPost {
  title: string;
  link: string;
  categories:string[];
  pubDate: string;
  description: string;
}

const MEDIUM_FEED_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@prajwal018';

const MediumPosts: React.FC = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        // Check if posts are already cached in sessionStorage
        const cachedPosts = sessionStorage.getItem('mediumPosts');
        if (cachedPosts) {
          setPosts(JSON.parse(cachedPosts));
          setLoading(false);
          return;
        }
        else{
          const response = await axios.get(MEDIUM_FEED_URL);
        const fetchedPosts: MediumPost[] = response.data.items.map((item: MediumPost) => ({
          title: item.title,
          link: item.link,
          categories:item.categories,
          pubDate: new Date(item.pubDate).toDateString(),
          description: item.description.replace(/<\/?[^>]+(>|$)/g, ""),
        }));
        // Cache the posts in sessionStorage
        sessionStorage.setItem('mediumPosts', JSON.stringify(fetchedPosts));

        setPosts(fetchedPosts);}
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  if (loading) {
    return <p>Loading Medium posts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      {posts.map((post) => (
        <div key={post.link} className="p-4 rounded-md bg-lightPrimary dark:bg-darkPrimary snap-center">
          <h2 className="text-xl">
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              {post.title}
            </a>
          </h2>
          <p className="text-sm text-gray-500">{post.pubDate}</p>
          <p className='bg-transparent overflow-y-clip line-clamp-1'>{post.categories.map((item,index) => (
            <Tag key={index+10} item={item} />
          ))}</p>
          <p className='mb-2 text-base dark:text-lightPrimary text-darkPrimary line-clamp-6'> {post.description } </p>
        </div>
      ))}
    </>
  );
};

export default MediumPosts;
