<template>
    <ais-pagination>
        <v-layout d-flex class="paginator"
            slot-scope="{
            currentRefinement,
            nbPages,
            pages,
            isFirstPage,
            isLastPage,
            refine,
            createURL
            }"
        >
            <v-btn class="paginator__btn" v-if="!isFirstPage" :href="createURL(0)" @click.prevent="refine(0)">
                ‹‹
            </v-btn>
            <v-btn class="paginator__btn" v-if="!isFirstPage" 
                  :href="createURL(currentRefinement - 1)"
                  @click.prevent="refine(currentRefinement - 1)">
                ‹
            </v-btn>
            <v-btn class="paginator__btn"
                v-for="page in pages" :key="page"
                :href="createURL(page)"
                :style="{ fontWeight: page === currentRefinement ? 'bold' : '' }"
                @click.prevent="refine(page)"
            >
            <a
                
            >
                {{ page + 1 }}
            </a>
            </v-btn>
            <v-btn class="paginator__btn" v-if="!isLastPage"
                :href="createURL(currentRefinement + 1)"
                @click.prevent="refine(currentRefinement + 1)"
            >
            ›
            </v-btn>
            <v-btn class="paginator__btn" v-if="!isLastPage" :href="createURL(nbPages)" @click.prevent="refine(nbPages)">
                ››
            </v-btn>
        </v-layout>
    </ais-pagination>
</template>

<style scoped>
.paginator{
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin:0 auto;
}

.paginator__btn{
    margin: 0.5em 0.5em 0.5em 0;
    padding:0.5em 0.5em 0.5em 0.5em;
    box-shadow: 1px 5px 7px rgba(29, 53, 87, 0.15);
    border-radius: 3px;
    /* background-color: #FFFFFd !important; */
}

.paginator__btn:hover {
    /* background-color: #F9FDFF !important; */
    box-shadow: 1px 15px 17px rgba(29, 53, 87, 0.15) !important;
}

    
    
</style>