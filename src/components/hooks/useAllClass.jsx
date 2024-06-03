import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useAllClass = () => {
    const axiosPublic = useAxiosPublic();
    const {data: allClasses = [], isPending: loading, refetch} = useQuery({
        queryKey: ['allClasses'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/classes');
            return res.data;
        }
    })

    return [allClasses, loading, refetch]
};

export default useAllClass;