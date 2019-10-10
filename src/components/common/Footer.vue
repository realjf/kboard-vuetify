<template>
  <v-footer dark padless>
    <v-card class="flex" tile>
      <v-card-title class="blue">
        <div class="flex-grow-1"></div>

        <v-btn v-for="icon in icons" :key="icon.icon" class="mx-4" dark icon>
          <a :href="icon.url" class="icon-url" target="_blank">
            <v-icon size="24px">{{ icon.icon }}</v-icon>
          </a>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} —
        <strong>copyright &copy; realjf.com</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "k-footer",
  data() {
    return {
      icons: [
        {
          icon: "fa fa-github",
          url: "https://github.com/realjf"
        },
        {
          icon: "fa fa-reddit",
          url: "http://bbs.realjf.com"
        }
      ]
    };
  }
};
</script>

<style scoped>
.icon-url {
  text-decoration: none;
  color: white;
  background-color: none;
}
</style>
