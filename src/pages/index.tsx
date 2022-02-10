import { GetStaticProps } from 'next';
import Head from 'next/head'
import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';
import styles from './home.module.scss';
import Link from 'next/link';

// Icons
import { FiCalendar, FiUser } from 'react-icons/fi';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  posts: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

 export default function Home({posts}: PostPagination) {
    return (
      <>
       <Head>
        <title>Inicio | Dev Blog</title>
      </Head>

      <main className={styles.container}>
            <div className={styles.posts}>
                  <Link  href='/'>
                    <a>
                      <strong>Desenvolvendo uma web acessível</strong>
                      <p>Protocolos e diretrizes orientam o desenvolvimento de tecnologias acessíveis, mas é preciso olhar para além de tudo isso</p>
                      <div className={styles.infoContainer}>
                      <div>
                            <FiCalendar />
                            <time>
                              12/23/1212
                            </time>
                          </div>
                          <div>
                            <FiUser />
                            <span>Leonardo Borges</span>
                          </div>
                      </div>
                    </a>
                  </Link>

                  <Link  href='/'>
                    <a>
                      <strong>Desenvolvendo uma web acessível</strong>
                      <p>Protocolos e diretrizes orientam o desenvolvimento de tecnologias acessíveis, mas é preciso olhar para além de tudo isso</p>
                      <div className={styles.infoContainer}>
                      <div>
                            <FiCalendar />
                            <time>
                              12/23/1212
                            </time>
                          </div>
                          <div>
                            <FiUser />
                            <span>Leonardo Borges</span>
                          </div>
                      </div>
                    </a>
                  </Link>

                  <Link  href='/'>
                    <a>
                      <strong>Titulo</strong>
                      <p>subtitle</p>
                      <div className={styles.infoContainer}>
                      <div>
                            <FiCalendar />
                            <time>
                              12/23/1212
                            </time>
                          </div>
                          <div>
                            <FiUser />
                            <span>Leonardo Borges</span>
                          </div>
                      </div>
                    </a>
                  </Link>
            </div>
      </main>
      </>
    )
 }


 export const getStaticProps: GetStaticProps = async () => {

const prismic = getPrismicClient();

const postsResponse = await prismic.query([
  Prismic.predicates.at('document.type', 'postt')
], {
  fetch: ['post.title', 'post.content'],
  pageSize: 20,
})

const posts = postsResponse.results.map(post => {
  return {
    uid: post.uid,
    data: {
      title: post.data.title,
      subtitle: post.data.subtitle,
      author: post.data.author,
    },
    first_publication_date: post.first_publication_date,
  };
});

return {
  props: {
    postsPagination: {
      next_page: postsResponse.next_page,
      results: posts,
    },
  },
  revalidate: 60 * 60 * 24, // 24 hours
};
};