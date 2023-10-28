<template>
  <div class="profileSection">
    <div class="blogList">
      <ProfileBlogItem
        v-for="blog in blogs"
        :key="blog.id"
        :id="blog.id"
        :date="blog.date"
        :title="blog.title"
        :detail="blog.detail"
      />
    </div>
    <div class="profile">
      Author Profile
      <h2 class="name">Khan Zaki Ur Rahman</h2>
      <h3 class="username">@{{ name }}</h3>
    </div>
  </div>
</template>

<script>
import ProfileBlogItem from "@/components/ProfileBlogItem.vue";
export default {
  components: {
    ProfileBlogItem,
  },
  props: ["name"],
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: "The Fascinating World of Quantum Physics",
          date: "15-02-2023",
          detail:
            "Discover the mind-bending concepts of quantum physics, from superposition to entanglement, and their implications on our understanding of the universe.",
        },
        {
          id: 2,
          title: "Exploring the Beauty of National Parks",
          date: "08-07-2022",
          detail:
            "Embark on a journey through the breathtaking landscapes of national parks, showcasing the wonders of nature and wildlife conservation efforts.",
        },
        {
          id: 3,
          title: "The Art of Cooking: A Culinary Adventure",
          date: "04-05-2023",
          detail:
            "Indulge in the world of gastronomy as we delve into the secrets of culinary artistry, from mastering the perfect soufflé to creating exotic dishes.",
        },
        {
          id: 4,
          title: "Hiking Tips for Nature Enthusiasts",
          date: "19-11-2022",
          detail:
            "Prepare for your next outdoor adventure with essential hiking tips, gear recommendations, and safety guidelines for exploring the great outdoors.",
        },
        {
          id: 5,
          title: "The Power of Mindfulness Meditation",
          date: "12-09-2023",
          detail:
            "Learn how mindfulness meditation can enhance your mental well-being, reduce stress, and cultivate a sense of inner peace and clarity.",
        },
        {
          id: 6,
          title: "Space Exploration: Journey to the Stars",
          date: "27-03-2022",
          detail:
            "Join the quest to uncover the mysteries of the cosmos, from the latest advancements in space technology to the search for extraterrestrial life.",
        },
        {
          id: 7,
          title: "The World of Digital Artistry",
          date: "09-01-2023",
          detail:
            "Explore the innovative realm of digital art, where creativity knows no bounds, and artists push the boundaries of traditional art forms.",
        },
        {
          id: 8,
          title: "A Glimpse into Ancient Civilizations",
          date: "30-06-2022",
          detail:
            "Travel back in time to unravel the mysteries of ancient civilizations, from the Egyptian pyramids to the grandeur of the Roman Empire.",
        },
        {
          id: 9,
          title: "The Science of Climate Change",
          date: "11-04-2023",
          detail:
            "Delve into the science behind climate change, its causes, consequences, and the urgent need for global action to mitigate its impact.",
        },
        {
          id: 10,
          title: "Exploring Underwater Wonders: The Coral Reefs",
          date: "14-08-2022",
          detail:
            "Dive into the mesmerizing world of coral reefs, teeming with vibrant marine life, and learn about the threats they face and conservation efforts to protect them.",
        },
      ],
    };
  },
};
</script>

<style scoped src="../../css/profile.css"></style>
