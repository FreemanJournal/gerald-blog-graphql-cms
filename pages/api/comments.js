import { gql, GraphQLClient } from 'graphql-request'
import React from 'react'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const graphToken = process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN
export default async function comments(req, res) {
    // console.log('graphToken',graphToken);
    const graphQLclient = new GraphQLClient((graphqlAPI), {
        headers: {
            authorization: `Bearer ${graphToken}`
        }
    })

    const query = gql`
        mutation CreateComment($comment:String!,$email:String!,$name:String!,$slug:String!){
            createComment(data:{comment:$comment,email:$email,name:$name,post:{connect:{slug:$slug}}}){id}
        }
    `
    try {
        const result = await graphQLclient.request(query, req.body)

        return res.status(200).send(result);
        
    } catch (error) {
       
        
    }
   
}
