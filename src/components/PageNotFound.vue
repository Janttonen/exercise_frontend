<script setup lang="ts">
import router from "@/router";

const loginPage = () => {
  router.push("/login");
};
</script>

<template>
  <c-main id="notfound">
    <c-card>
      <c-card-title>Whoops something went wrong</c-card-title>

      <c-card-content> Go back to application </c-card-content>

      <c-card-actions justify="space-between">
        <c-button @click="loginPage">Confirm</c-button>
      </c-card-actions>
    </c-card>
  </c-main>
</template>
