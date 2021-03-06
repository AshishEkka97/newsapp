import React from 'react';
import styles from './Articles.module.css';
import Article from '../Article/Article';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

const Articles = (props) => {
  slugify.extend({
    '$': '$'
  })
  return (
    <div className={styles.articles}>
      {
        props.data.map(article => {
          const articleTitle = slugify((article.title), {remove: /[*+~.(),$'"!:@]/g, lower: true});
          return <Link to={`details/${articleTitle}`} key={articleTitle}><Article data={article}/></Link>
        })
      }
    </div>
  )
}

export default Articles;