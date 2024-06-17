import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useSubscriber = () => {
    const axiosSecure = useAxios();
    const {data: subscribers = []} = useQuery({
        queryKey: ['subscribers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/subscribers')
            return res.data
        }
    })
    return [subscribers]
};

export default useSubscriber;