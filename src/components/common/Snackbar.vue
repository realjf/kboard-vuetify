<template>
  <v-card>
    <v-snackbar
      v-model="snackbarVal"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ text }}
    </v-snackbar>
  </v-card>
</template>

<script>
    export default {
        name: "Snackbar",
      props: {
        snackbar: {
          type: Boolean,
          default: function () {
            return false;
          }
        },
        color: {
          type: String,
          default: function () {
            return "success" // error|success|info
          }
        }
      },
      watch: {
        snackbar: function(val){
              this.snackbarVal = val;
            }
      },
      data () {
        return {
          snackbarVal: false,
          y: 'top',
          x: null,
          mode: '',
          timeout: 3000,
          text: 'Hello, I\'m a snackbar'
        }
      }
    }
</script>

<style scoped>

</style>
