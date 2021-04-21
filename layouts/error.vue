<template>
  <v-app dark>
    <!--<v-container class="pt-10">
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <NuxtLink to="/"> Home page </NuxtLink>
    </v-container>-->

    <div class="my-auto mx-auto">

      <img class="mx-6" width="80" src="/error.svg"></img>


      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <v-btn  style="text-transform: none" class="mx-2 mt-5" color="primary" to="/">Home page</v-btn>
      <!--    <NuxtLink to="/"> Home page </NuxtLink>-->
    </div>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
