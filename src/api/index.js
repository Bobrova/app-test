import axios from 'axios';
import url from 'constants/Url';

export default class apiList {
  static getList() {
    return axios.get(url);
  }

  static postTest(payload) {
    return axios.post(url, payload);
  }

  static deleteTest(payload) {
    return axios.delete(`${url}/${payload}`);
  }

  static putTest(payload) {
    return axios.put(`${url}/${payload.id}`, payload);
  }
}
