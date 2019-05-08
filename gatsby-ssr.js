/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
//export { Layout } from "./src/components/layout"
const fetch = require("isomorphic-fetch")
const React = require("react")
const ApolloClient = require("apollo-boost").default
const { ApolloProvider, getMarkupFromTree } = require("react-apollo-hooks")
const { renderToString } = require("react-dom/server")

const client = new ApolloClient({
  uri: "https://lychee-crisp-57351.herokuapp.com/graphql",
  fetch,
})

exports.wrapRootElement = ({ element }) => {
  const renderedHtml = getMarkupFromTree({
    renderFunction: renderToString,
    tree: <ApolloProvider client={client}>{element}</ApolloProvider>,
  })
  return renderedHtml
}
