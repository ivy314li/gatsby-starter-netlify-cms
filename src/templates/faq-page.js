import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const FAQPageTemplate = ({ title, description, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-centered">
                {title}
              </h2>

              <h3 className="title is-size-5 has-text-centered">
                {description}
              </h3>
              <section class="section">
              <PageContent className="content" content={content} />
              </section>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FAQPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  description: PropTypes.string,
  contentComponent: PropTypes.func,
}

const FAQPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <FAQPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        description = {post.frontmatter.description}
        content={post.html}
      />
    </Layout>
  )
}

FAQPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FAQPage

export const faqPageQuery = graphql`
  query FAQPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
