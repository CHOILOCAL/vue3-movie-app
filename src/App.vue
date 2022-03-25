<template>
<Header />
<RouterView />
</template>

<script>
import Header from '~/components/Header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
</style>