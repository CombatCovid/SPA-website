<template>
  <Layout>
    <h1>Jurra Connect</h1>
    <p>We're using this variant to test a full query.
      Results are simply formatted.</p>
    <div class="query-content">
      <div v-if="$page">
        <div class="repo-list" v-for="node in $page.gitapi.repos.repositories.nodes" :key="node.name">
          <div v-if="node.docs && node.name !== 'doc-template'">
            <h2>Repo name is {{ node.name }}</h2>
            <h1>Documents</h1>
            <!-- N.b. the test for folder.lang !== img can go out to assure, once Vuex cleans the tree -->
            <div class="folder" v-if="folder && folder.lang !== 'img'" v-for="folder in node.docs.folders">
              <h2>Language: {{ folder.lang }}</h2>
              <div class="file" v-for="file in folder.contents.files">
                <h3>{{ file.name }}</h3>
              </div>
            </div>
            <h1>Images</h1>
            <div class="file" v-for="entry in node.images.entries">
              <h3>{{ entry.name }}</h3>
            </div>
            <h1>Sources</h1>
            <div class="file" v-for="entry in node.srcs.entries">
              <h3>{{ entry.name }}</h3>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h2>No data yet...</h2>
      </div>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Jurra Connect'
  },
  data: function () {
    return {
      numberRepos: 3
    }
  },
  mounted () {
    // these are just dev debug possibilities, soon to go as not now needed
    // console.log ('results: ' + JSON.stringify(this.$page))
    // console.log ('results: ' +
    //   JSON.stringify(this.$page.gitapi.repos.repositories.nodes[4].docs.folders[0].lang))
    // console.log ('results: ' +
    //   JSON.stringify(this.$page.gitapi.repos.repositories.nodes[4].docs.folders[0].folder.files[0]))
  }
}
</script>

// this is full-results query, for everything it seems we need.
// images are duplicate-listed under docs files, but unavoidable and cheap
<page-query>

  query Jurra3 {
  gitapi{
    repos: organization(login:"CombatCovid"){
      repositories(first:50){
        nodes {
          name
          nameWithOwner
          docs: object(expression: "master:docs") {
            ... on GitApi_Tree {
              folders: entries {
                lang: name
                ... FolderInfo
              }
            }
           }
           images: object(expression: "master:docs/img") {
             ... on GitApi_Tree {
               entries {
                 name
               }
             }
           }
           srcs: object(expression: "master:src") {
             ... on GitApi_Tree {
               entries {
                 name
               }
             }
           }
        }
      }
    }
  }
}

fragment FolderInfo on GitApi_TreeEntry {
    contents: object {
      ... on GitApi_Tree {
        files: entries {
          name
          object {
            ...on GitApi_Blob {
              isBinary
              text
            }
          }
        }
      }
    }
  }

</page-query>

<style scoped>
  .query-content {
    margin: 20px;
    padding: 15px;
    color: darkslategray;
    background-color: beige;
  }
  .repo-list {
    padding: 2px 10px;
  }
  .folder {
    margin-left: 20px;
  }
  .file {
    margin-left: 20px;
  }
</style>
