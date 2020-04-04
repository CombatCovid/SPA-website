<template>
    <v-card 
      v-on:click="showContent(repo.name)"
      hover min-height="" max-height=""
    >
    <v-img 
      :src="getImgUrl(repo.nameWithOwner, repo.cardImage)" 
      p-5 class="white--text align-end" 
      height="200px"
      gradient="to bottom, rgba(0,0,50,.6), rgba(0,0,80,.2)"
    >
    </v-img>
    <v-card-title v-text="repo.title"></v-card-title>
    <v-card-text class="text-primary" v-text="repo.description"></v-card-text>
  </template>
</template>

<script>
  export default {
    name: "JoseCard",
    props: {
      repo: {
        type: Object,
        default: {
          title: 'A Repo',
          name: 'a-repo',
          nameWithOwner: 'a-repo-repo-owner',
          description: 'this is a repo',
          cardImage: 'cardimage.jpg',
          thumbImage: 'thumbimage.jpg'
        }
      }
    },
    methods: {
      getImgUrl: function (nameWithOwner, fileName) {
        if (fileName !== undefined) {
          // console.log('fileName: ' + fileName)
          // console.log('cardImage path: ' + `https://raw.githubusercontent.com/${nameWithOwner}/master${fileName}`)
          return `https://raw.githubusercontent.com/${nameWithOwner}/master${fileName}`
        } else {
          return "/resources/image/image-placeholder.png"
        }
      },
      showContent(repoName){
        if (repoName) {
          return this.$router.push({ path: `/viewer/${repoName}`, design: `${repoName}` })      }
        }
    }
  }
</script>

