import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useTrainerApi = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();
    const { data: trainer = [] } = useQuery({
        queryKey: [user?.email, 'trainer'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/trainer/${user?.email}`)
            return res.data
        }
    })
    return [trainer]
};

export default useTrainerApi;