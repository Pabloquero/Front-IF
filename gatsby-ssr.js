/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")
const fetch = require("isomorphic-fetch")
const ApolloClient = require("apollo-boost").default
const { ApolloProvider } = require("react-apollo-hooks")

const client = new ApolloClient({
  uri: "https://lychee-crisp-57351.herokuapp.com/graphql",
  fetch,
})

exports.wrapRootElement = ({ element }) => {
  return <ApolloProvider client={client}>{element}</ApolloProvider>
}
