const {createFilePath} = require(`gatsby-source-filesystem`);

const path = require(`path`);

exports.onCreateNode = ({node, getNode, actions}) => {

    const {createNodeField} = actions;

   if(node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({
        node,
        name: `slug`,
        value: slug
    })
   }
} 

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    
    return graphql(`
    {
        allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
          edges {
            node {
              frontmatter {
                title
              }
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
        const posts = result.data.allMdx.edges;
          posts.forEach(({node}, index) => {
            const slug = node.fields.slug; 
              createPage({
                  path: slug,
                  title: node.frontmatter.title,
                  component: path.resolve(`./src/templates/project.js`),
                  context: {
                      slug: slug,
                      prev: index === 0 ? posts[posts.length - 1].node : posts[index - 1].node,
                      next: index === (posts.length - 1) ? posts[0].node : posts[index + 1].node,
                  }
              })
          })
      })
  }
  