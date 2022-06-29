import axios from "axios";
async function getData(userId) {
  const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
  const {data: post} = await axios ("https://jsonplaceholder.typicode.com/posts/" + userId);
  
  console.log (user);
  console.log (post);
}
export default getData;