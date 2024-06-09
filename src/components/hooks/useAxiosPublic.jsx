import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://talent-cottage-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;