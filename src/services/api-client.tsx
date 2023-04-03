import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: "55f3e504ce1a432eb0d8efc6bf97487f"
    }
})