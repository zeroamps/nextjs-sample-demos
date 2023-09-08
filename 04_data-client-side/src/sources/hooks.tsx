import { Post } from '@prisma/client';
import { useState, useEffect } from 'react';

export function usePosts() {
  const [posts, setPosts] = useState([] as Post[]);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return posts;
}

export function usePost(id: string | string[] | undefined) {
  const [post, setPost] = useState({} as Post);

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, [id]);

  return post;
}
