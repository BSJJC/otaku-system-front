import axios from "axios"

const postItem = async (url, params) => {
  let data = null;

  await axios.post(url, params)
    .then(res => {
      data = res.data
    })
    .catch(err => {
      console.error(err);
    })

  return data
}

export default postItem