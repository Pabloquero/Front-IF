/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo-hooks"

import Header from "./header"
import Footer from "./footer"
import "./../assets/sass/style.scss"

const client = new ApolloClient({
  uri: "https://lychee-crisp-57351.herokuapp.com/graphql",
})

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <ApolloProvider client={client}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer />
        </ApolloProvider>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
