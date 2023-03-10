import axios from "axios";

const getItem = async url => {
  let data = null;

  await axios.get(url)
    .then(res => {
      data = res.data;
    })
    .catch(err => {
      console.error(err);
    })

  return data
}

export default getItem;