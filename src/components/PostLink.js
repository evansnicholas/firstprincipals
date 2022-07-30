import React from "react";
import { Link } from "gatsby";

export const PostLink = ({ post }) => {

  return (
    <div className={`ph2 ph0-l`}>
      <Link
        className={`black dim link`}
        to={post.frontmatter.id}>
        <h1 className="mv0">{post.frontmatter.title}</h1>
      </Link>
      <p className={`dark-gray pt1 mv0 sans-serif fw1`}>{post.frontmatter.date}</p>
    </div>
  );
};

export default PostLink;