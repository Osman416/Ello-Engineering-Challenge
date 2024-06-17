const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const path = require('path');

const typeDefs = gql`
  type Book {
    author: String
    coverPhotoURL: String
    readingLevel: String
    title: String
  }

  type Query {
    books: [Book]
  }
`;

const books = JSON.parse(fs.readFileSync(path.join(__dirname, 'books.json'), 'utf8'));

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
