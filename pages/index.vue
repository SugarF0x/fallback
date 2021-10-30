<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const text = 'welcome text'

    return {
      text,
    }
  },
})
</script>

<template>
  <div class="bg-black h-5 test">
    {{ text }}
  </div>
</template>

<style lang="scss" scoped>
.test {
  color: white;
  width: fit-content;
}
</style>
