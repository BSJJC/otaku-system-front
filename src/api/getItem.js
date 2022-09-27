import axios from "axios";

const getItems = async url => {
  let data;

  await axios.get(url)
    .then(res => {
      data = res.data;
    })
    .catch(err => {
      console.error(err);
    })

  return data
}

export default getItems;