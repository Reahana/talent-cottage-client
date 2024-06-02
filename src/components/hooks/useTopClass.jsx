import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useTopClass = () => {
    const axiosPublic = useAxiosPublic();
    const {data: topClasses = [], isPending: loading, refetch} = useQuery({
        queryKey: ['topClasses'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/top-classes');
            return res.data;
        }
    })
  



    return [topClasses, loading, refetch]
};

export default useTopClass;