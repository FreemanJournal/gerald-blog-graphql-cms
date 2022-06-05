import Head from 'next/head'
import { ArticleCard, ArticleWidget, Categories, Header } from '../components'
const posts = [
  { title: "React Testing", excerpt: 'Learn React Testing' },
  { title: "React With JSM", excerpt: 'Learn React Tailwind Testing' }
]

const Home = () => {


  return (
    <div className="container mx-auto lg:w-10/12 px-10 mb-8 bg-gray-100">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {
            posts.map((post, index) => <ArticleCard post={post} key={index} />)
          }
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="lg:sticky relative top-8">
            <ArticleWidget />
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
