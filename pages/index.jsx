import Head from 'next/head'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ArticleWidget, Categories } from '../components'
import Articles from "../components/Article/Articles"
import { getPosts } from '../services/index'

const Home = ({ posts }) => {

  const [filteredPosts, setPosts] = useState(posts);
  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      setPosts(prev => prev.concat(Array.from({ length: 10 })))
    }, 1500);
  };



  return (
    <div className="container mx-auto lg:w-10/12 px-10 mb-8 ">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
        <div className="col-span-1 lg:col-span-8">
          <InfiniteScroll
            dataLength={posts.length} //This is important field to render the next data
            next={fetchMoreData}
            hasMore={false}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
       
          >
            <Articles posts={filteredPosts} />
          </InfiniteScroll>



        </div>


        <div className="col-span-1 lg:col-span-4 ">
          <div className="lg:sticky top-10  mt-10">

            <ArticleWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;

export const getStaticPaths = async () => {
  return {
      paths: [],
      fallback: "blocking"
  }
}

export async function getStaticProps() {
  const posts = await getPosts() || []
  return {
    props: { posts }
  }
}
