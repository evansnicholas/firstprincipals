import React from "react";
import Site from "../components/Site";
import PostLink from '../components/PostLink';

export default ({ data }) => { 
  
  const edges = data.allMarkdownRemark.edges;
  const posts = edges
    .map(edge => { 
      return (
        <div className="w-100">
          <PostLink key={edge.node.id} post={edge.node} />
        </div>
      );
    });

  return (
    <Site>
      <div className="flex flex-wrap pb4">
        { posts }
      </div>
    </Site>
  )};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            id
            title
          }
        }
      }
    }
  }`