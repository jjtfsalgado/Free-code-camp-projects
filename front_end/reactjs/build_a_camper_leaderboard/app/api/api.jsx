import axios from 'axios';

const All_TIME_BEST = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
const LAST_TIME_BEST = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

module.exports = {
  getAll: function () {
    return axios.get(All_TIME_BEST).then(function (response) {
      return {
        data: response.data
      }
    }).catch(function (error) {
      throw error;
    });
  },
  getLast: function () {
    return axios.get(LAST_TIME_BEST).then(function (response) {
      return {
        data: response.data
      }
    }).catch(function (error) {
      throw error;
    });
  }
}
