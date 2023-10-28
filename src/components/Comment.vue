<template>
  <div class="comment">
    <div class="nameDate">
      <span class="name">{{ name }}</span> {{ date }}
    </div>
    <p class="cmt">
      {{ comment }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["comment", "name", "date"],
};
</script>

<style scoped src="../css/component/comment.css"></style>
