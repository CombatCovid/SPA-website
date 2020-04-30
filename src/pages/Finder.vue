<template>
  <Layout>
    <v-container>
        <h1 class="horiz-center">Finder</h1>

        <client-only>
          <ais-instant-search :index-name="indexName"
                              :search-client="searchClient" class="horiz-center searchbox">

            <ais-configure :hits-per-page.camel="32"/>

            <ais-powered-by/>
            <ais-search-box show-loading-indicator/>

            <ais-hits class="clear-above">
              <div slot-scope="{ items }" class="">
                <div class="d-flex flex-nowrap horiz-center content-sized">
                  <v-btn class="slide-btn-spaced"@click="slideFinds(-blockSize, items.length)"><</v-btn>
                  <p v-if="items.length > 0" class="slide-count-text">Showing {{ wordOfOffset(items.length) }} out of {{ items.length }} designs</p>
                  <p v-else class="slide-count-text">No Designs match your search...</p>
                  <v-btn class="slide-btn-spaced" @click="slideFinds(blockSize, items.length)">></v-btn>
                </div>
                <v-layout d-flex flex-wrap>
                  <v-row d-flex cols="1">
                    <v-col cols="12" md="3"
                           class="d-flex child-flex"
                           v-for="(item, index) in offsetFinds(items, currentOffset)" :key="index">
                      <JoseFinderCard :repo="{ title: item.title, name: item.name,
                        nameWithOwner: item.nameWithOwner, isPrivate: item.isPrivate,
                        description: item.description, cardImage: item.cardImage,
                        summaryDoc: item.cardSummary, summaryImage: item.cardImage,
                        repoBranch: repoBranch }"/>
                    </v-col>
                  </v-row>
                </v-layout>
              </div>
            </ais-hits>

          </ais-instant-search>
        </client-only>
    </v-container>
  </Layout>
</template>

<script>

  import algoliasearch from 'algoliasearch'
  import store from '~/store'
  import JoseFinderCard from '../components/JoseFinderCard'

  export default {
    metaInfo: {
      title: 'Finder'
    },
    data: function () {
      return {
        numberRepos: 3,
        blockSize: 8,
        currentOffset: 0,
        indexName: store.getters.algoSearchIndex,
        searchClient: algoliasearch(
          store.getters.algoAppId,
          store.getters.algoSearchKey
        ),
        repoBranch: store.getters.repoBranch
      }
    },
    methods: {
      offsetFinds: (finds, offset = 0, blockSize = 8) => finds.slice(offset, blockSize + offset),
      wordOfOffset: function (totalHits) { // *todo* temp, as I have a comprehesive fn for this, dig it up....
        const words = [ 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth',
          'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth' ]

        // *todo* safe for present words but see above, and/or refactor
        const blockNumber = Math.min(Math.floor(this.currentOffset / this.blockSize), 14)
        const numberShown = Math.min (totalHits - (this.blockSize * blockNumber), this.blockSize)
        const last = blockNumber > 0  && (totalHits - (this.blockSize * blockNumber)) <= this.blockSize

        return (last ? 'last' : words[blockNumber]) + ' ' + numberShown.toString()
      },
      slideFinds: function (slide, totalHits) {
        // *todo* later in steps, we have effect and slider/arrow-button drive
        this.currentOffset = Math.min(Math.max(0, this.currentOffset + slide),
          this.blockSize * Math.floor(totalHits / this.blockSize))
      }
    },
    components: { JoseFinderCard },
  }
</script>

<style scoped>
  .horiz-center {
    margin: 0 auto;
    text-align: center;
  }
  .searchbox {
    margin: 15px;
  }
  .content-sized {
    width: max-content;
  }
  .slide-btn-spaced {
    margin: 0 15px;
  }
  .slide-count-text {
    margin-top: 7px;
  }
  .low-attention {
    font-size: x-small;
  }
  .clear-above {
    margin-top: 10px;
  }
</style>
