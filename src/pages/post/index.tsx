import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import Header from '@/components/header';
import { getPost } from '@/services/post/api';

interface IPostProps {
  id: number;
  title: string;
  body: string;
}

const Post = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data, isLoading, isError } = useQuery<IPostProps>('post', getPost(id));

  if (isLoading) {
    return <h4>Loading</h4>;
  }
  if (isError) {
    return <h4>Something went wrong !!</h4>;
  }
  return (
    <div>
      <Header />
      <div>{data && data.title}</div>
    </div>
  );
};

export default Post;
