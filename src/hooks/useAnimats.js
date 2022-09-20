import axios from "axios"

export async function getAnimats() {
  let animats = null

  await axios.get(
    "http://localhost:3000/api/rest/getAnimates/getAnimates")
    .then(res => {
      animats = {
        entrances: res.data.data[0].entrances,
        exits: res.data.data[1].exits
      }

      localStorage.setItem("animats", animats)
      console.log("获取过渡动画成功");
    })
    .catch(e => {
      console.error("获取过度动画失败", e)
    })

}