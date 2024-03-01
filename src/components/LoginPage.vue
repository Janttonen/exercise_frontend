<script setup lang="ts">
import router from "@/router";

const { VITE_CLIENT_ID, VITE_CLIENT_SECRET } = import.meta.env;

const login = async () => {
  window.location.href = `https://github.com/login/oauth/authorize?client_id=${VITE_CLIENT_ID}`;

  // giving dummy token as user clicks Login
  localStorage.setItem("Logged", "true");
};

if (localStorage.getItem("Logged") == "true") {
  router.push("/home");
  //getToken()
}

// Trying to fecth user token in order to access API, doesnt work
// I have made fake file and I am displaying that to my page
/*
const getToken = async (code: string): Promise<any> => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    const response = await fetch(
      `https://github.com/login/oauth/access_token?client_id=${VITE_CLIENT_ID}&client_secret=${VITE_CLIENT_SECRET}&code=${code}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Error, ${error}`);
    localStorage.setItem("Logged", "false");
  }
};
*/
</script>

<template>
  <c-login-card background-position="50% 0%" src="/img/bg.png">
    <c-login-card-title>Login to service</c-login-card-title>

    <c-login-card-content id="c-login">
      <div>
        <h3>Welcome to Exercise FrontEnd app!</h3>
        <p>Login with GitHub in order to access this site</p>
      </div>
    </c-login-card-content>

      <c-card-content>
        <c-login-buttons>
          <c-login-button
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            @click="login"
            >GitHub</c-login-button
          >
        </c-login-buttons>
      </c-card-content>

  </c-login-card>
</template>
