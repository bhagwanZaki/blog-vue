<template>
  <router-link :to="{ name: 'blogdetail', params: { id: id } }" class="blogDiv">
    <img src="../assets/img1.jpg" class="blogImg" alt="blog image" />
    <div class="blogdetail">
      <div class="date">{{ date }}</div>
      <h3>{{ title }}</h3>
      <p>
        {{ detail }}
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["id", "date", "title", "detail"],
};
</script>
<style src="../css/component/profileBlogItem.css"></style>
