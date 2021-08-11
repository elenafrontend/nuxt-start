<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user of users" :key="user.id">
        <NuxtLink :to="`/users/${user.id}`">{{ user.name }}</NuxtLink>
        
      </li>
    </ul>
    

    <div class="slider" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/img/fff.png" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/fff.png" alt="" />
        </div>
      </div>
      <div slot="button-prev" class="swiper-button-prev"></div>
      <div slot="button-next" class="swiper-button-next"></div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import SwiperClass, { Navigation, Pagination } from "swiper";
SwiperClass.use([Navigation, Pagination]);
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import { mapGetters } from 'vuex'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,

        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      users: 'users/getUsers'
    })
  }
};
</script>

<style scoped>
  .slider {
    margin-top: 100px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }
</style>
