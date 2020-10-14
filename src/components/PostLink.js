import React from "react";
import s from './PostLink.module.scss';
import { Link } from "gatsby";

export default ({ post }) => {

    return (
      <div className={`bb bt ph2 ph0-l`}>
        <div className={`mv3`}>
            <Link 
              className={`${s.postLink} black dim link`}
              to={post.frontmatter.id}>
              <h1 className="mv0">{post.frontmatter.title}</h1>
            </Link>
            <p className={`dark-gray pt1 mv0 sans-serif fw1`}>{post.frontmatter.date}</p>
        </div>
      </div>
    );
}