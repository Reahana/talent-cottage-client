
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './useAxiosPublic';

const useAllInstructor = () => {
    const axiosPublic = useAxiosPublic();
    const {data: allInstructors = [], isPending: loading, refetch} = useQuery({
        queryKey: ['allInstructors'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/instructors');
            return res.data;
        }
    })

    return [allInstructors, loading, refetch]
};

export default useAllInstructor;