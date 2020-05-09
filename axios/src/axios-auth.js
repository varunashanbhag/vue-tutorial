import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vue-axios-86f5f.firebaseio.com/'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance