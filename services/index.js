import { request, gql } from 'graphql-request'
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;
  const results = await request(graphqlAPI, query)
  return results.postsConnection.edges;
}

export const getRecentPost = async () => {
  const query = gql`
    query GetPostDetails(){
      posts(
        orderBy: createdAt_ASC
        last:3
        ){
          title
          featuredImage {
            url
          }
          createdAt
          slug
        }
    }
    `

  const results = await request(graphqlAPI, query)
  return results.posts;
}

export const getSimilarPost = async () => {
  const query = gql`
  query GetPostsDetails($slug:String!,$categories:[String!]){
    posts(
      where:{slug_not:$slug,AND: {categories_some:{slug_in:$categories}}}
      last:3
    ){
      title
      featuredImage {
        url
      }
      createdAt
      slug
    }
  }
  `
  const results = await request(graphqlAPI, query)
  return results.posts;
}

export const getCategories = async () =>{
  const query = gql`
    query GetCategories{
      categories{
        name
        slug
      }
    }
  `

const results = await request(graphqlAPI, query)
return results.categories;
}