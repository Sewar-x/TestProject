<template>
  <div class="line-bar-container">
    <div class="background-line top"></div>
    <div class="background-line mid"></div>
    <transition-group class="line-panel" name="line-bar-list">
      <li
        class="line-container"
        v-for="(grade, index) in exponents"
        :key="index + grade"
        @mouseover="touchLineBar"
        @mouseout="unTouchLineBar"
        :class="[loaded ? `line-container${index} show-line` : '']"
      >
        <span
          :class="`line`"
          :style="`height:${
            loaded ? (grade < quesGrade ? 0.87 : (283 * grade) / 10000) : 0
          }rem;backgroundColor:${face(grade).color}; transition-delay:${index*0.11}s;`"
        >
          <p>{{ grade > quesGrade ? grade : "" }}</p>
          <img
            class="face"
            :class="[loaded ? 'loadedAni' : '']"
            :src="face(grade).header"
            alt=""
          />
        </span>
        <span class="date" :class="{ today: today === index }">
          {{ indexToDate[index] }}
        </span>
      </li>
    </transition-group>
  </div>
</template>
<script>
import naughty from "../images/naughty.svg";
import smile from "../images/smile.svg";
import question from "../images/question.svg";
export default {
  components: "linebar",
  props: {
    exponents: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      indexToDate: ["六", "日", "一", "二", "三", "四", "五"],
      quesGrade: 30,
      animateShow: false,
      today: (new Date().getDay() + 1) % 7,
      lineStyle: "",
      loaded: false,
    };
  },
  mounted() {
    let that = this;
    setTimeout(() => {
      that.loaded = true;
    }, 500);
  },
  methods: {
    face: function (grade) {
      grade = Number(grade);
      let obj = {
        color: "#CFCFCF",
        header: question,
      };
      if (grade < this.quesGrade) {
        obj = {
          color: "#CFCFCF",
          header: question,
        };
      } else if (grade < 90) {
        obj = {
          color: "#52C873",
          header: smile,
        };
      } else {
        obj = {
          color: "#FF823C",
          header: naughty,
        };
      }
      return obj;
    },
    randomNum(minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10);
          break;
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
          break;
        default:
          return 0;
          break;
      }
    },
    touchLineBar(event) {
      let target = event.path[1];
      let line = target.getElementsByClassName("line")[0];
      let date = target.getElementsByClassName("date")[0];
      let grade = Number(target.getElementsByTagName("p")[0].innerHTML);
      let lineStyle = line.style;
      this.lineStyle = `height:${lineStyle.height};background:${lineStyle.backgroundColor};`;
      let lineBackGround = lineStyle.backgroundColor;

      let backgroundColor = "";
      if (grade < this.quesGrade) {
        backgroundColor = "#CFCFCF";
      } else if (grade < 90) {
        backgroundColor =
          "linear-gradient(180deg, #42F373 42.71%, #A1FD44 100%);";
      } else {
        backgroundColor =
          "linear-gradient(180deg, #FFA14A 35.42%, #FFCC4A 100%);";
      }
      line.setAttribute(
        "style",
        `height:${lineStyle.height};background:${backgroundColor}`
      );
      date.setAttribute("style", `color:${lineBackGround};`);
    },
    unTouchLineBar(event) {
      let target = event.path[1];
      let line = target.getElementsByClassName("line")[0];
      let date = target.getElementsByClassName("date")[0];
      line.setAttribute("style", this.lineStyle);
      date.setAttribute("style", ``);
    },
  },
};
</script>
<style lang="scss" scoped>
.line-bar-container {
  height: 3.15rem;
  position: relative;
  .background-line {
    height: 2px;
    width: 3.6rem;
    background-color: #f2f2f2;
  }
  .mid {
    position: absolute;
    top: 50%;
  }
  .line-panel {
    width: 100%;
    height: 3.2rem;
    display: flex;
    position: absolute;
    flex-direction: row;
    justify-content: space-between;
    .line-container {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      justify-content: flex-end;
      transform: scale(0);
      &:hover {
        .line {
          transition: all 0.1s ease-in-out;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          transform: scale(1.1);
        }
        .date {
          transition: all 0.1s ease-in-out;
          background: #ffffff;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          border-radius: 8px;
        }
      }
      .line {
        height: 0rem;
        transition: height 1s ease-in-out;
        background: #52c873;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          width: 100%;
          font-family: Nunito;
          font-style: normal;
          font-weight: bold;
          font-size: 0.2rem;
          line-height: 0.27rem;
          text-align: center;
          letter-spacing: -0.003rem;
          color: #ffffff;
          margin-top: 0.12rem;
        }
        .face {
          transform: scale(0);
          transition: transform 0.5s ease-in-out 0.5s;
          margin: 0.04rem;
        }
        .loadedAni {
          transform: scale(1);
        }
      }
      .date {
        font-family: PingFang HK;
        font-style: normal;
        font-weight: 500;
        font-size: 0.18rem;
        line-height: 0.36rem;
        width: 0.36rem;
        height: 0.36rem;
        align-items: center;
        text-align: center;
        letter-spacing: -0.003rem;
        color: #2d2f33;
        margin-top: 0.17rem;
      }
      .today {
        background-color: #2d2f33;
        color: #ffffff;
        border-radius: 8px;
      }
    }
    .show-line {
      transform: scale(1);
    }
    .line-container0 {
      transition-delay: 0.1s;
      .face {
        transition-delay: 0.21s;
      }
    }
    .line-container1 {
      transition-delay: 0.2s;
      .face {
        transition-delay: 0.32s;
      }
    }
    .line-container2 {
      transition-delay: 0.3s;
      .face {
        transition-delay: 0.43s;
      }
    }
    .line-container3 {
      transition-delay: 0.4s;
      .face {
        transition-delay: 0.54s;
      }
    }

    .line-container4 {
      transition-delay: 0.5s;
      .face {
        transition-delay: 0.65s;
      }
    }
    .line-container5 {
      transition-delay: 0.66s;
      .face {
        transition-delay: 0.76s;
      }
    }
    .line-container6 {
      transition-delay: 0.7s;
      .face {
        transition-delay: 0.87s;
      }
    }
  }
}
</style>