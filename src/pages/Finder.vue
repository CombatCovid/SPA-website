<template>
  <Layout>
    <h1 class="horiz-center">Finder</h1>

    <client-only>
      <ais-instant-search :index-name="indexName"
                          :search-client="searchClient" class="horiz-center searchbox">

        <ais-configure :hits-per-page.camel="8"/>

        <ais-powered-by/>
        <ais-search-box/>

        <ais-hits class="clear-above">
          <div class="viewer" slot-scope="{ items }">
              <v-container class="viewer__container" grid-list-lg fluid>
             <v-layout row wrap>
              <v-flex xs12 sm6 md3 lg3 v-for="(item, index) in items" :key="index">
                  <JoseCard
                    v-if="item.cardImage !== null" 
                    :repo="{ 
                      title: item.title, 
                      name:item.name, 
                      nameWithOwner: item.nameWithOwner,
                      description: item.description, 
                      cardImage: item.cardImage 
                      }"
                  />
              </v-flex>
            </v-layout>              
            </v-container>
          </div>
        </ais-hits>

      </ais-instant-search>
    </client-only>
  </Layout>
</template>

<script>

  import algoliasearch from 'algoliasearch'
  import JoseLayout from '../components/JoseLayout';
  import JoseCard from '../components/JoseCard';

  export default {
    metaInfo: {
      title: 'Finder'
    },
    data: function () {
      return {
        numberRepos: 3,
        indexName: process.env.GRIDSOME_ALGO_SEARCH_INDEX,
        searchClient: algoliasearch(
          process.env.GRIDSOME_ALGO_APPLICATION_ID,
          process.env.GRIDSOME_ALGO_SEARCH_KEY
        )
      }
    },
    components: { JoseCard, JoseLayout },
    computed:{
      placeholder: function(){
        return "/resources/image/image-placeholder.png"
      }
    },
    methods: {
      showContent(repoName){
        return this.$router.push({ path: `/viewer/${repoName}`, design: '${repoName}' })
      }
    }
  }
</script>

<style scoped>
  /* .horiz-center {
    margin: 0 auto;
    text-align: center;
  }
  .searchbox {
    margin: 15px;
  }
  .low-attention {
    font-size: x-small;
  }
  .clear-above {
    margin-top: 10px;
  } */

  .viewer__container{

  }

  @media
  
</style>
