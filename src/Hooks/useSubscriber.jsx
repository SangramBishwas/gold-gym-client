import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useSubscriber = () => {
    const axiosPublic = useAxiosPublic();
    const {data: subscribers = []} = useQuery({
        queryKey: ['subscribers'],
        queryFn: async () => {
            const res = await axiosPublic.get('/subscribers')
            return res.data
        }
    })
    return [subscribers]
};

export default useSubscriber;