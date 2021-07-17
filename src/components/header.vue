  <template>
  <div class="header-container">
    <img class="narrow" src="../images/narrow.svg" alt="goback" @click="goBack"/>
    <div class="title">{{ title }}</div>
  </div>
</template>
  
<script>
export default {
  components: "header",
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    goBack(){
      this.$router.push('/')
    }
  }
};
</script>
<style lang="scss" scoped>
.header-container {
  height: 0.28rem;
  display: flex;
  letter-spacing: -0.003rem;
  align-items: center;
  padding:0.05rem 0.18rem 0.22rem 0.18rem;
  .narrow {
    width: 0.235rem;
    height: 0.17rem;
  }
  .title {
    margin: 0 auto;
    width: 1.19rem;
    height: 0.28rem;
    font-family: PingFang HK;
    font-style: normal;
    font-weight: 500;
    font-size: 0.2rem;
    line-height: 0.28rem;
  }
}
</style>