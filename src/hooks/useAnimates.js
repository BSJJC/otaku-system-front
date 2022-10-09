import axios from "axios"

export async function getAnimates() {
  let animats = null

  await axios.get(
    "http://localhost:3000/api/rest/Animates/Animates")
    .then(res => {
      animats = {
        entrances: res.data.data[0].entrances,
        exits: res.data.data[0].exits
      }

      localStorage.setItem("animates", JSON.stringify(animats))
    })
    .catch(() => {
    })

}