<template>
  <Layout class="">
    <div class="viewer-container">
    <h1 class="horiz-center">Viewer</h1>
    <div class="master-detail" style="max-width:800px; margin:0 auto;">
      <p>
        This display is to the point of what we want, showing Designs out of a list chosen from
        Finder results. What follows when we have the Vuex foundation in,
        is the ability to Mark chosen designs,
        and refer to them from the Chosen Designs list, shown in mock at present.
      </p>
    </div>
    <div class="master-detailx">
      <v-container class="viewer-container">
          <HorizontalMD :design="design"/>
      </v-container>
    </div>
  </div>
  </Layout>
</template>

<script>
  import HorizontalMD from '@/components/HorizontalMD'
  import VerticalMD from '@/components/VerticalMD'

  export default {
    metaInfo: {
      title: 'Demo Connect'
    },
    data: function () {
      return {
        design: this.$route.params.design,
        anchorParts: {
          target: '_blank',
          rel: 'noreferrer noopener'
        },
        numberRepos: 99
      }
    },
    components: {VerticalMD, HorizontalMD},
    async mounted () {
      console.log ('route params: ' + JSON.stringify(this.$route.params.design))
    }
  }
</script>

<style scoped>
  .viewer-container{
    padding:3em 1em 0 1em;
    margin-bottom:3em;
  }

  .li {
    margin-bottom: 1em !important;
  }
  
  .horiz-center {
    margin: 0 auto;
    text-align: center;
  }
  .repo-list {
    padding: 2px 10px;
  }
  
  .master-detail {
      margin: 10px;
      padding: 10px;
  }

  @media only screen and (min-width: 1029px) {
    
  .master-detail {
    margin: 20px;
    padding: 15px;
    color: darkslategray;
    background-color: beige;
    }
  }

  
</style>
