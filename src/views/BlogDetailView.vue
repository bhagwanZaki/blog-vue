<template>
  <div class="bmain">
    <div :class="[showComment ? 'detailDiv detailCommentOpen' : 'detailDiv']">
      <img src="../assets/img6.jpg" alt="detail" class="detailImg" />
      <h2>
        Exploring Alternate Realities: The Psychology of Immersion in AR and VR
      </h2>
      <h4 class="writter">
        <u> Article by Khan Zaki </u>
      </h4>
      <div class="blog">
        <p>
          In the ever-evolving landscape of technology, Augmented Reality (AR)
          and Virtual Reality (VR) have emerged as groundbreaking platforms,
          offering users the chance to step into alternate realities. Beyond
          their technological marvel, these immersive experiences are intriguing
          from a psychological standpoint, raising questions about how they
          affect our minds and emotions.
        </p>
        <p>
          The Power of Immersion: One of the key psychological aspects of AR and
          VR is immersion. When users put on a VR headset or engage with AR
          applications, they enter a new world where their senses are engaged in
          a profound way. This immersion can have various effects, from
          heightened emotional responses to improved learning retention. Studies
          have shown that immersive experiences in VR can elicit strong emotions
          and empathy, making them valuable tools for empathy training, therapy,
          and even marketing.
        </p>
        <p>
          Presence and Believability: Another fascinating aspect is the concept
          of "presence." In VR, users often report a sense of presence, feeling
          as if they are truly in the virtual environment. This sensation can
          blur the line between reality and simulation, influencing our
          perceptions and reactions. Researchers delve into questions of how the
          brain processes this altered sense of reality and the potential
          implications for mental health and decision-making.
        </p>
        <p>
          Challenges and Ethical Considerations: As we explore the psychology of
          immersion in AR and VR, we must also address the potential challenges
          and ethical considerations. For instance, prolonged exposure to
          immersive virtual environments can lead to issues like motion sickness
          or a disconnect from the real world. Additionally, questions about
          privacy, data security, and the potential for addiction are topics
          that merit careful examination.
        </p>
        <p>
          Future Directions: As the technology continues to advance, our
          understanding of the psychological impact of AR and VR will evolve as
          well. Researchers are working diligently to unravel the intricacies of
          immersion, presence, and the human mind's response to these digital
          realities. The future promises exciting developments in both the
          psychological and technological realms as we continue to explore the
          depths of AR and VR immersion.
        </p>
        <p>
          In conclusion, the psychology of immersion in AR and VR is a
          captivating field of study that delves into how these technologies
          influence our emotions, perceptions, and behavior. As we unlock the
          mysteries of alternate realities, we also encounter challenges and
          ethical considerations that require thoughtful exploration. With
          ongoing research and innovation, we are on the brink of a new era
          where the lines between reality and virtuality continue to blur,
          offering boundless opportunities and challenges for the human mind to
          explore.
        </p>
      </div>
    </div>
    <div class="likeAndCommendDiv">
      <HeartIcon :class="[like ? 'ci like' : 'ci ']" @click="likeFn" />
      <ChatBubbleOvalLeftIcon class="ci" @click="toggleShowComment" />
    </div>
    <Transition name="fade">
      <div v-if="showComment" class="commentDiv">
        <h3>Comments</h3>
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="10"
          placeholder="Add your thought"
          class="textarea"
          v-model="comment"
        ></textarea>
        <button class="cmtBtn" @click="addComment">Comment</button>
        <div class="comments">
          <CommentVue
            v-for="cmtInfo in comments"
            :key="cmtInfo.id"
            :comment="cmtInfo.comment"
            :date="cmtInfo.date"
            :name="cmtInfo.author"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import { HeartIcon, ChatBubbleOvalLeftIcon } from "@heroicons/vue/24/solid";
import CommentVue from "@/components/Comment.vue";

export default {
  props: ["id"],
  data() {
    return {
      showComment: false,
      like: false,
      comment: "",
      comments: [
        {
          id: 1,
          comment: "Just random comment",
          author: "Khan Zaki",
          date: "2d",
        },
        {
          id: 2,
          comment: "Interesting discussion!",
          author: "Sarah Smith",
          date: "1h",
        },
        {
          id: 3,
          comment: "I completely agree with this!",
          author: "John Doe",
          date: "3d",
        },
        {
          id: 4,
          comment: "Can't wait to see more updates!",
          author: "Emily Johnson",
          date: "5h",
        },
        {
          id: 5,
          comment: "This is so informative!",
          author: "David Lee",
          date: "1d",
        },
        {
          id: 6,
          comment: "Great article, thanks for sharing!",
          author: "Linda Brown",
          date: "4h",
        },
        {
          id: 7,
          comment: "I have a question about this topic.",
          author: "Alex Turner",
          date: "2d",
        },
        {
          id: 8,
          comment: "I learned something new today.",
          author: "Grace Martinez",
          date: "6h",
        },
        {
          id: 9,
          comment: "This deserves more attention!",
          author: "Michael Adams",
          date: "2d",
        },
        {
          id: 10,
          comment: "Looking forward to the next post!",
          author: "Ella Wilson",
          date: "1d",
        },
      ],
    };
  },
  methods: {
    likeFn() {
      this.like = !this.like;
    },
    addComment() {
      var data = {
        author: "Khan Zaki",
        comment: this.comment,
        date: "now",
      };
      this.comments = [data, ...this.comments];
      this.comment = "";
    },
    toggleShowComment() {
      this.showComment = !this.showComment;
    },
  },
  components: {
    HeartIcon,
    ChatBubbleOvalLeftIcon,
    CommentVue,
  },
};
</script>

<style scoped src="../css/blogdetail.css"></style>
