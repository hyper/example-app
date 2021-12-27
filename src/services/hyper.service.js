import axios from 'axios';

axios.defaults.baseURL = 'https://api.hyper.co/v6';
axios.defaults.headers['Authorization'] = `Bearer ${process.env.HYPER_SECRET_KEY}`;

export function retrieveAccount(id, options) {
  return axios.get(`/accounts/${id}`, {
    headers: { 'Hyper-Account': id },
    ...options,
  }).then(response => response.data);
}

export function updateAccount(id, data, options) {
  return axios.patch(`/accounts/${id}`, data, {
    headers: { 'Hyper-Account': id },
    ...options,
  }).then(response => response.data);
}