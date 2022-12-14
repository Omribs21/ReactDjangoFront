import axios from "axios";

const URL = "https://back-testing3.onrender.com/products/";

export function getallproducts() {
  return new Promise((resolve) =>
    axios.get(URL).then((res) => resolve({ data : res.data}))
  );
}