import axios from 'axios';
import headers from './auth';

export default {
    getUser: (id) => {
        return axios({
            url: `./api/profile/${id}`,
            method: 'GET',
            headers: headers(),
        });
    },

    login: (email, password) => {
        return axios
            .post('./api/auth/login', {
                email,
                password,
            })
            .then((response) => {
                console.log(response.data);
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response;
            });
    },

    logout: () => {
        localStorage.removeItem('user');
    },

    getCurrentUser: () => JSON.parse(localStorage.getItem('user')),

    signup: (userData) => {
        return axios.post('./api/auth/signup', userData);
    },

    editUser: function (userData) {
        return axios({
            url: `/api/profile/${userData.id}`,
            userData,
            medthod: 'PUT',
            headers: headers(),
        });
    },

    addChild: function (userData) {
        return axios({
            url: `api/child/addChild/${userData.ParentId}`,
            data: userData,
            method: 'POST',
            headers: headers(),
        });
    },

    deleteChild: function (parentId, childId) {
        return axios({
            url: `api/child/deleteChild/${parentId}`,
            data: { childId },
            method: 'DELETE',
            headers: headers(),
        });
    },

    editChild: function (userData, parentId) {
        return axios({
            url: `api/child/editChild/${parentId}`,
            data: userData,
            method: 'PUT',
            headers: headers(),
        });
    },
};
