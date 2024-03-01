<script setup lang="ts">
import fakeRepos from "../fakerepos.json";
import { mdiStar } from "@mdi/js";

// tried to creaty interface for repositories and then I was suposed to filter public strarred repositories to this interface.
// I have made fake file and I am displaying that to my page
/*
export interface Repository {
  id: number;
  name: string;
  owner: string;
  desc: string;
  URL: string;
  topics: string[];
  license?: boolean;
  private: boolean;
}
*/
</script>

<template>
  <c-main>
    <c-page>
      <c-card responsive>
        <c-card-title>Here are all your starred repositories</c-card-title>

        <c-card-content v-for="repo in fakeRepos" :key="repo.id">
          <c-accordion value="one">
            <c-accordion-item value="one" heading="Repository">
              <c-icon slot="icon" :path="mdiStar" />
              <pre>
Name: {{ repo.name }}
Description: {{ repo.description }}
URL: {{ repo.html_url }}
License: {{ repo.license.name }}
Topics: {{ repo.topics }}
              </pre>
            </c-accordion-item>
          </c-accordion>
        </c-card-content>
      </c-card>
    </c-page>
  </c-main>
</template>
