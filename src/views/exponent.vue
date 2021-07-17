<template>
  <div id="exponent-page">
    <Header :title="`历史心情指数`" />
    <div class="main-container">
      <div class="car-container">
        <div class="header">
          <img src="../images/avater.svg" alt="avater" />
          <p>{{ res.userInfo.name }}</p>
        </div>
        <div class="exponent-container">
          <p class="exponent">{{ res.avarageEx }}</p>
          <p class="exponent-des">周平均心情指数</p>
        </div>
      </div>
      <LineBar :exponents="res.exponents" />
    </div>
  </div>
</template>



<script>
import getData from "../mock.js";
import Header from "../components/header.vue";
import LineBar from "../components/line-bar.vue";
export default {
  name: "exponents",
  components: {
    Header,
    LineBar,
  },
  data() {
    return {
      res: {
        exponents: [0, 0, 0, 0, 0, 0, 0],
        userInfo: {
          avater: {},
          name: "",
        },
      },
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.res = await getData();
      let avarageEx = this.res.exponents.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
      this.res.avarageEx = parseInt(avarageEx / 7);
    },
  },
};
</script>

<style lang="scss" scoped>
#exponent-page {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background: #ffffff;
  .main-container {
    margin: 0 auto;
    width: 3.58rem;
    .car-container {
      padding: 0.46rem 0 0.34rem 0;
      box-shadow: 0px -0.06rem 0.16rem rgba(0, 0, 0, 0.15);
      border-radius: 0.24rem 0.24rem 0 0;
      .header {
        height: 0.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 0.36rem;
          width: 0.36rem;
          border-radius: 50%;
          margin-right: 0.12rem;
        }
        p {
          font-family: PingFang HK;
          font-style: normal;
          font-weight: 500;
          font-size: 0.2rem;
          line-height: 0.28rem;
        }
      }
      .exponent-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        .exponent {
          font-family: Nunito;
          font-style: normal;
          font-weight: 800;
          font-size: 0.72rem;
          line-height: 0.98rem;
          display: flex;
          align-items: center;
          text-align: center;
          letter-spacing: -0.003rem;
          color: #2d2f33;
        }
        .exponent-des {
          font-family: PingFang HK;
          font-style: normal;
          font-weight: 500;
          font-size: 0.18rem;
          line-height: 0.25rem;
          display: flex;
          align-items: center;
          text-align: center;
          letter-spacing: -0.003rem;
          color: #929292;
        }
      }
    }
  }
}
</style>