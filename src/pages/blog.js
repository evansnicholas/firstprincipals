import React from "react";
import Site from "../components/Site";
import PostLink from '../components/PostLink';

export default ({ data }) => { 
  
  const edges = data.allMarkdownRemark.edges;
  const posts = edges
    .map((edge,  index) => {
      const isFirst = index === 0;
      const isLast = index === edges.length - 1;
      let classes = 'w-100';
      if (!isLast) {
        classes = `${classes} bb pb4 mb4`;
      }
      return (
        <div key={index} className={classes}>
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