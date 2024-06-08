import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useEnrolledCourse = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: enrolledClass = [],  refetch} = useQuery({
        queryKey: ['enrolledClass', user?.email], 
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure.get(`/enrolled-courses?email=${user.email}`);
            return res.data;
        }
    })
  



    return [enrolledClass,  refetch]
};

export default useEnrolledCourse;