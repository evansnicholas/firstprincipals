import React from "react"
import { graphql } from "gatsby"
import Site from "../components/Site";
import * as s from './blog.module.scss';
import Img from "gatsby-image";

const Blog = ({ data }) => {
    const { frontmatter, html } = data.markdownRemark;
    let imageOrVideo;
    if (frontmatter.featured) {
      imageOrVideo = <Img
        fluid={frontmatter.featured.childImageSharp.fluid}
        alt="Featured Image or Video"
      />
    }
    if (frontmatter.featuredVideo) {
      imageOrVideo =
        <video controls muted loop className="w-100">
          <source src={frontmatter.featuredVideo.publicURL} type="video/mp4" />
        </video>
    }

    return (
      <Site>
        <article className={`${s.blog} pv4`}>
          <div className='blog-post-container ph2 ph0-l'>
            <div className="blog-post">
              <h1 className="mb0 f1">{frontmatter.title}</h1>
              <p className="mt1 near-black fw1">{frontmatter.date}</p>
              {imageOrVideo}
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
        featured {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredVideo {
          publicURL
        }
      }
    }
  }
`

export default Blog;