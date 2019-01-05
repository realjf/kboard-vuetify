<template>
  <div id="app">
    <v-app id="inspire">
      <div>
        <v-alert
          :value="true"
          color="color"
          icon="icon"
          outline
        >
          {{ text }}
        </v-alert>
      </div>
    </v-app>
  </div>
</template>

<script>
    export default {
        name: "Alert",
        data () {
          return {
            icon: "", // check_circle|info|priority_high|warning
            color: "", // success|info|warning|error
            text: "",
          }
        },
        methods: {
            warningAlert: function (text) {
              this.color = "warning";
              this.icon = "priority_high";
              this.text = text;
            },
            errorAlert: function (text) {
              this.color = "error";
              this.icon = "warning";
              this.text = text;
            },
            successAlert: function (text) {
                this.color = "success";
                this.icon = "check_circle";
                this.text = text;
            },
            infoAlert: function () {
              this.color = "info";
              this.icon = "info";
              this.text = text;
            }
        }
    }
</script>

<style scoped>

</style>
