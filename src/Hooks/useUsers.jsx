import useAuth from './useAuth';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();
    const { data: users = [] } = useQuery({
        queryKey: [user?.email, 'users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`);
            return res.data;
        }
    })
    return [users]
};

export default useUsers;