// 基于axios 封装
import axios from "axios"

const request = axios.create({
    baseURL: "https://conduit.productionready.io"
})

export default request