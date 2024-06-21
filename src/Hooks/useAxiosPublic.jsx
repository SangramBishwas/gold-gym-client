import axios from 'axios';

export const axiosPublic = axios.create({
    baseURL: 'https://gold-gym-server-ten.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;