import Head from 'next/head'
import { useEffect, useState } from 'react';
import { ArticleWidget, Categories } from '../../components'
import SingleArticleDetails from '../../components/SingleArticalDetails/SingleArticleDetails'
import { getArticleDetails, getCategories } from '../../services';

const ArticleDetails = ({article}) => {
 
  return (
    <div className="container mx-auto lg:w-10/12 px-10 mb-8 ">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
        <div className="col-span-1 lg:col-span-8">
          <SingleArticleDetails article={article}/>
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          <div className="lg:sticky top-10  mt-10">
            <ArticleWidget slug={article.slug} categories={article.categories?.map((item,index)=>item.slug)}/>
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetails;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  }
}

export const getStaticProps = async ({ params }) => {
  const data = await getArticleDetails(params.slug)
  return {
    props:{article:data}
  }

}