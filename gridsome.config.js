// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: `gridsome-source-github-api`,
      options: {
        // token: required by the GitHub API
        token: `someString`,
  
        // GraphQLquery: defaults to a search query
        graphQLQuery: `anotherString`,
  
        // variables: defaults to variables needed for a search query
        variables: `someObject`
      }
    }
  ]
}
