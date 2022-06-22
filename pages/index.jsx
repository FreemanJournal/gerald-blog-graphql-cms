import Head from 'next/head'
import { ArticleCard, ArticleWidget, Categories, Header } from '../components'
import {getPosts} from '../services/index'


const Home = ({posts}) => {

  
// console.log('posts',posts);
  return (
    <div className="container mx-auto lg:w-10/12 px-10 mb-8 ">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
        <div className="col-span-1 lg:col-span-8">
          {
            posts.map((post, index) => <ArticleCard post={post} key={index} />)
          }
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          <div className="lg:sticky top-10  mt-10">
            <ArticleWidget />
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;

export async function getStaticProps(){
  const posts = await getPosts() || []
  return {
    props:{ posts}
  }
}
