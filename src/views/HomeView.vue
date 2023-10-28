<template>
  <!-- LANDING SECTION -->
  <div class="landingsection">
    <router-link
      :to="{ name: 'blogdetail', params: { id: 1 } }"
      class="landingdiv1"
    >
      <img src="../assets/img1.jpg" alt="image" />
      <div class="lddbig">
        <h2>
          Exploring the Future: The Impact of Drone Technology on Industries
        </h2>
        <div class="lddbgwritten">By Khan Zaki</div>
      </div>
    </router-link>
    <router-link
      :to="{ name: 'blogdetail', params: { id: 2 } }"
      class="landingdiv2"
    >
      <img src="../assets/img2.jpg" alt="image" />
      <div class="lddsm">
        <h2>
          Exploring the Future: The Impact of Drone Technology on Industries
        </h2>
        <div class="lddsmwritten">By Khan Zaki</div>
      </div>
    </router-link>
    <router-link
      :to="{ name: 'blogdetail', params: { id: 3 } }"
      class="landingdiv3"
    >
      <img src="../assets/img3.jpg" alt="image" />
      <div class="lddsm">
        <h2>
          Exploring the Future: The Impact of Drone Technology on Industries
        </h2>
        <div class="lddsmwritten">By Khan Zaki</div>
      </div>
    </router-link>
  </div>
  <!-- LATEST SECTION -->
  <SectionTitle title="Latest" link="/" />
  <div class="latestSection">
    <LatestSideDiv
      date="11-12-2020"
      title="Networking just got easy"
      author="Khan Zaki"
      class="latestSectiondiv1"
      img="../assets/img4.jpg"
    />
    <LatestSideDiv
      date="11-12-2020"
      title="Networking just got easy"
      author="Kanton Ituski"
      class="latestSectiondiv2"
      img="../assets/img4.jpg"
    />

    <router-link
      :to="{ name: 'blogdetail', params: { id: 5 } }"
      class="latestSectiondiv3"
    >
      <img src="../assets/img6.jpg" class="biglatestImg" />
      <div class="biglatestDes">
        <div class="bldtop">
          <h4>11-12-2020</h4>
          <h4>Written by khan zaki</h4>
        </div>
        <div class="bldtitle">Something somw thasd</div>
      </div>
    </router-link>
  </div>
  <!-- POPULAR GRID -->
  <SectionTitle title="Popular" link="/" />
  <div class="popularGrid">
    <Populardiv
      v-for="blog in popularBlog"
      :title="blog.title"
      :date="blog.date"
      :author="blog.author"
      :key="blog.title"
    />
  </div>
</template>

<script>
import SectionTitle from "../components/SectionTitle.vue";
import LatestSideDiv from "../components/LatestSideDiv.vue";
import Populardiv from "../components/Populardiv.vue";
export default {
  name: "HomeView",
  components: {
    SectionTitle,
    LatestSideDiv,
    Populardiv,
  },
  data() {
    return {
      popularBlog: [
        {
          date: "22-10-2022",
          title: "Introduction to Django",
          author: "Khan Zaki",
        },
        {
          date: "22-10-2022",
          title: "Introduction to Vue.js",
          author: "John Doe",
        },
        {
          date: "15-09-2022",
          title: "Getting Started with React",
          author: "Jane Smith",
        },
        {
          date: "05-11-2022",
          title: "JavaScript Best Practices",
          author: "Alex Johnson",
        },
        {
          date: "30-08-2022",
          title: "Node.js Fundamentals",
          author: "Sarah Brown",
        },
        {
          date: "18-12-2022",
          title: "Responsive Web Design Tips",
          author: "David Wilson",
        },
      ],
    };
  },
};
</script>

<style src="../css/bloglist.css"></style>
