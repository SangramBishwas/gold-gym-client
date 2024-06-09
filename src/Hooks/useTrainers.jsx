import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const useTrainers = () => {
    const axiosPublic = useAxiosPublic();
    const { data: trainers = [] } = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const res = await axiosPublic.get('/trainers');
            return res.data
        }
    })
    return [trainers]
};

export default useTrainers;