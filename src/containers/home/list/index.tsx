import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';

import { updatePosts } from '@/services/post/api';

import Tab from '../tab';
import styles from './list.module.scss';

interface IPostProps {
  id: number;
  title: string;
  body: string;
}

const List = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  // ref는 target을 지정할 element에 지정한다.
  //inView type은 boolean으로 root(뷰포트)에 target(ref를 지정한 element)이 들어오면 true로 변환됨

  useEffect(() => {
    // hasNextPage 다음 페이지가 있는지 여부, Boolean (getNextPageParam 리턴값에 의해서)
    if (inView && hasNextPage) {
      // fetchNextPage fetch callback 함수를 실행
      fetchNextPage();
    }
  }, [inView]);

  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery<IPostProps[]>(
    'posts',
    async ({ pageParam = 1 }) => {
      return await updatePosts(pageParam);
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPage = 10; // 한번에 10개씩 보여주기
        const nextPage = allPages.length + 1; //
        return nextPage <= maxPage ? nextPage : undefined; // 다음 데이터가 있는지 없는지 판단
      },
    },
  );
  if (isLoading) {
    return <h4>Loading</h4>;
  }
  if (isError) {
    return <h4>Something went wrong !!</h4>;
  }

  return (
    <div className={styles.container}>
      {data &&
        data.pages.map((posts, index) => (
          <Fragment key={index}>
            {posts.map((post) => (
              <Tab key={post.id} label={post.title} contents={post.body} />
            ))}
          </Fragment>
        ))}
      <div ref={ref} />
      <button ref={ref} onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
        {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load Newer' : 'Nothing more to load'}
      </button>
      {isFetchingNextPage && <p>계속 불러오는 중</p>}
    </div>
  );
};

export default List;
