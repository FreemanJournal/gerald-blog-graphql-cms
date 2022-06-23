import Head from 'next/head'
import { ArticleCard, ArticleWidget, Categories } from '../../components'
import { getCategoryRelatedPost } from '../../services'

 function CategoryRelated({ relatedArticles }) {
    return (
        <div className="container mx-auto lg:w-10/12 px-10 mb-8 ">
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
                <div className="col-span-1 lg:col-span-8">
                    {
                        relatedArticles?.map((post, index) => <ArticleCard post={post} key={index} />)
                    }
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
export default CategoryRelated;
export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking"
    }
}

export const getStaticProps = async ({ params }) => {
    const data = await getCategoryRelatedPost(params.slug)
    return {
        props: { relatedArticles: data }
    }
}