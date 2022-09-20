import axios from "vue"

const getAnimats = () => {
 axios
  .get("http://localhost:3000/api/rest/getAnimates/getAnimates", {})
  .then((res) => {
   const animats = {
    entry: res.data.data[0].entrances,
    exits: res.data.data[1].exits,
   };

   return animats
  })
  .catch((err) => {
   console.error(err);
  });
}

export default getAnimats