import { gql } from 'apollo-server-fastify';

const typeDefs = gql`
type Query {
    currentUser: User
}

type User {
    id: ID!
    firstName: String!
    lastName: String
    username: String
    languageCode: String
    collections: [Collection!]!
    collection(slug: String!): Collection
}

type Collection {
    id: ID!
    title: String!
    slug: String!
    user: User!
    bookmarks: [Bookmark!]!
    bookmarkCount: Int!
}

type Bookmark {
    id: ID!
    messageLink: String
    collections: [Collection!]!
    user: User!
}
`;

export default typeDefs;