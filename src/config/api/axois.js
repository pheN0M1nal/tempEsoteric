import axios from "axios"

const axiosInstance = () => {
  //
  const axiosInst = axios.create({
    baseURL:
      process.env.NODE_ENV === "production"
        ? `${process.env.REACT_APP_MAIN_SERVER_URL_PRODUCTION}/api/v1`
        : `${process.env.REACT_APP_MAIN_SERVER_URL_DEVELOPMENT}/api/v1`,
    timeout: 99999999999999999999,
    headers: {
      Authorization: window.localStorage.getItem("access_token")
        ? `Bearer ${window.localStorage.getItem("access_token")}`
        : null,
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })

  axiosInst.interceptors.response.use(
    (response) => {
      // Any status code from range of 2xx
      // Do something with response data
      return response
    },
    (error) => {
      // Any status codes outside range of 2xx
      // Do something with response error
      return Promise.reject(error)
    }
  )

  axiosInst.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      config.url = config.url.replace(config.baseURL, "")
      return config
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error)
    }
  )

  return axiosInst
}

export default axiosInstance
