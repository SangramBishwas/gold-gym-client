import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useTrainer = () => {
    const {user} = useAuth();
    const axiosSecure = useAxios()
    const {data: isTrainer} = useQuery({
        queryKey: [user?.email, 'isTrainer'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/trainer/${user?.email}`);
            console.log(res.data);
            return res.data?.trainer
        }
    })
    return [isTrainer]
};

export default useTrainer;