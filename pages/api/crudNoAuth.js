import axios from 'axios';
import {
    API_URL,
  } from '../../config';

   
  export async function get(path) {
    return await axios
    .get(`${API_URL}/${path}`)
    .then((res)=>{
        return res
    }).catch((err)=>{
        return err.response
    })
  }

  export async function post(path,data) {
    return await axios
    .post(`${API_URL}/${path}`,data)
    .then((res)=>{
      return res
    }).catch((err)=>{
      err.response
    })
  }

  // export async function put(path,data) {
  //   return await axios
  //   .put(`${API_URL}/${path}`,data)
  //   .then((res)=>{
  //     return res
  //   }).catch((err)=>{
  //     err.response
  //   })
  // }
  export async function destroy(path,id) {
    return await axios
    .delete(`${API_URL}/${path}/${id}`,)
    .then((res)=>{
      return res
    }).catch((err)=>{
      err.response
    })
  }
  export async function put(path,id,data) {
    return await axios
    .put(`${API_URL}/${path}/${id}`,data)
    .then((res)=>{
      return res
    }).catch((err)=>{
      err.response
    })
  }