<template>
  <v-app>
    <v-system-bar app dark>
      <v-btn icon x-small to="/" v-if="$nuxt.$route.path != '/'">
        <v-icon class="mx-3" color="white" title="Home page"
          >fas fa-home
        </v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <v-icon color="green darken-2"> mdi-domain </v-icon>
      <v-icon class="mx-3" color="white" title="Add project" @click="test"
        >fas fa-plus</v-icon
      >

      <v-icon
        class="mx-3"
        color="white"
        title="Documentation"
        @click="goToOpenneu"
        >fas fa-search</v-icon
      >

      <v-icon
        class="mx-3"
        color="white"
        title="Search"
        @click="goToDocumentation"
        >fas fa-question</v-icon
      >

      <v-icon
        class="mx-3"
        color="white"
        title="Report a bug"
        @click="goToReportBug"
        >fas fa-bug</v-icon
      >
      <v-icon
        class="mx-3"
        color="white"
        title="Join our github project"
        @click="goToOurGithubProject"
        >fab fa-github</v-icon
      >

      <a class="mx-3" href="#" @click="loginWithGitHub" v-if="!isConnected"
        >login with github</a
      >
      <a class="mx-3" href="/user/nassimskysoft" v-if="isConnected"
        >nassimskysoft</a
      >
      <v-btn icon x-small to="/logout" v-if="isConnected">
        <v-icon class="mr-3" color="white" title="Log out"
          >fas fa-sign-out-alt
        </v-icon></v-btn
      >
    </v-system-bar>

    <nuxt />

    <v-footer dark :absolute="!fixed" app>
      <div class="mx-auto" @click="gotToNeuroanatomy" style="cursor: pointer">
        <v-avatar>
          <img
            src="https://brainbox.pasteur.fr/img/naat-bw.svg"
            style="width: 28px; height: 28px"
          />
        </v-avatar>
        <span style="font-size: smaller">
          groupe de neuroanatomie appliquée et théorique
        </span>
      </div>
    </v-footer>
  </v-app>
</template>

<!--
    <video
      id="bgBrains"
      style="
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      "
      muted=""
      autoplay=""
      loop=""
    >
      <source
        src="https://brainbox.pasteur.fr/img/bgBrains.mp4"
        type="video/mp4"
      />
    </video>-->

<!--
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>-->

<!--
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
 
  </v-app>
  -->

<script>
import front from "../plugins/front";

export default {
  data() {
    return {
      isConnected: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },
  mounted() {
    console.log("Mounted +++lancement de APP");
  },
  methods: {
    test() {
      console.log("test");
    },

    goToOpenneu() {
      window.open("http://openneu.ro/metasearch/", "_blank");
    },
    goToDocumentation() {
      window.open("https://brainbox.pasteur.fr/doc/index.html", "_blank");
    },

    goToAddProject() {
      window.open("https://brainbox.pasteur.fr/doc/index.html", "_blank");
    },
    gotToNeuroanatomy() {
      window.open("http://neuroanatomy.github.io/", "_blank");
    },
    goToMicroDraw() {
      window.open("https://microdraw.pasteur.fr/", "_blank");
    },
    goToBrainBox() {
      window.open("https://brainbox.pasteur.fr/", "_blank");
    },
    goToReportBug() {
      window.open(
        "https://github.com/neuroanatomy/BrainBox/issues/new",
        "_blank"
      );
    },
    goToOurGithubProject() {
      window.open("https://github.com/neuroanatomy/BrainBox", "_blank");
    },
    loginWithGitHub() {
      console.log("test login loginWithGitHub");
      front.session.loginWithGitHub();
    }
  }
};
</script>
