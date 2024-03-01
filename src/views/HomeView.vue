<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";
import { RouterView } from "vue-router";
import { mdiInformationOutline, mdiHome, mdiLogout } from "@mdi/js";

const currentMenuItem = ref("button");

if(localStorage.getItem('Logged') != "true"){
  router.push("/login")
}

const onNavigation = (item: string) => {
  currentMenuItem.value = item;
  router.push(`/${item}`);
};

const logout = () => {
  localStorage.removeItem("Logged");
  router.push("/login");
};
</script>

<template>
  <c-main>
    <c-toolbar>
      <c-csc-logo />
      CSC Exercise
    </c-toolbar>

    <c-side-navigation>
      <c-side-navigation-item
        :active="currentMenuItem === 'home'"
        @click="onNavigation('home')"
      >
        <c-icon :path="mdiHome" size="20" />
        Home
      </c-side-navigation-item>
      <c-side-navigation-item
        :active="currentMenuItem === 'about'"
        @click="onNavigation('about')"
      >
        <c-icon :path="mdiInformationOutline" size="20" />
        About
      </c-side-navigation-item>
      <c-side-navigation-item slot="bottom" @click="logout">
        <c-icon :path="mdiLogout" />Logout
      </c-side-navigation-item>
    </c-side-navigation>

    <c-page>
      <RouterView />
    </c-page>
  </c-main>
</template>
