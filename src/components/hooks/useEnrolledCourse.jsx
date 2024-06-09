import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useEnrolledCourse = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: enrolledClasses = [],  refetch} = useQuery({
        queryKey: ['enrolledClasses', user?.email], 
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure.get(`/enrolled-courses?email=${user.email}`);
            return res.data;
        }
    })
  



    return [enrolledClasses,  refetch]
};

export default useEnrolledCourse;