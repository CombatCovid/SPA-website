<template>
  <Layout class="content">
    <section class="section">
    <!-- <h1>{{ $page.documentation.title }}</h1>
    <p class="intro">{{ $page.documentation.excerpt }}</p> -->
    <VueRemarkContent />
    </section>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Documentation ($id: ID!) {
  documentation(id: $id) {
    title
    excerpt
  }
}
</page-query>