'use strict';
import axios from 'axios';

const baseUrl = 'http://localhost:8088/api';

export default {
  searchImages(searchString, page) {
    return axios.get(`${baseUrl}/images?search=${searchString}&page=${page}`)
  },
  getImageDetails(id) {
    return axios.get(`${baseUrl}/images/${id}/details`)
  }
};