import { gql, GraphQLClient } from 'graphql-request'
import React from 'react'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export default async function comments(req, res) {
    const graphQLclient = new GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`
        }
    })

    const query = gql`
        mutation CreateComment($name:String!,$email:String!,$comment:String!,$slug:String!){
            createComment(data:{name:$name,email:$email,comment:$comment,post:{connect:{slug:$slug}}}){id}
        }
    `

    const result = await graphQLclient.request(query, req.body)
    return res.status(200).send(result);
}
