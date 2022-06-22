import Head from 'next/head'
import { ArticleWidget, Categories } from '../../components'
import SingleArticleDetails from '../../components/SingleArticalDetails/SingleArticleDetails'

const ArticleDetails = () => {
  return (
    <div className="container mx-auto lg:w-10/12 px-10 mb-8 ">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
   
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
      <div className="col-span-1 lg:col-span-8">
      <SingleArticleDetails/>
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

export default ArticleDetails