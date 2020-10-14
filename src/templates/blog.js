import React from "react"
import { graphql } from "gatsby"
import Site from "../components/Site";

export default ({ data }) => {
    const { frontmatter, html } = data.markdownRemark;
    return (
      <Site>
        <article>
          <div className="blog-post-container ph2 ph0-l">
            <div className="blog-post">
              <h1 className="mb0 f1">{frontmatter.title}</h1>
              <p className="mt1 near-black fw1">{frontmatter.date}</p>
              <div
                className="blog-post-content lh-copy pt2"
                dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
          </div>
        </article>
      </Site>
    );
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: { id: { eq: $id } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        id
        title
      }
    }
  }
`