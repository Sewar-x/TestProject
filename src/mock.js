
const res = {
  exponents: [40, 89, 7, 90, 92, 97, 81],
  userInfo: {
    avater,
    name: '妹爷'
  }
}
import avater from "./images/avater.svg";
export default function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res)
    }, 0);
  })
}