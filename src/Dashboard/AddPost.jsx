import { Button, Textarea } from "flowbite-react";
import DashboardTitle from "./DashboardTitle";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const AddPost = () => {
    const axiosSecure = useAxios();
    const { user } = useAuth()
    const { data: userInfo = [] } = useQuery({
        queryKey: [user?.email, 'userInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`);
            return res.data
        }
    })

    const getFormattedDate = () => {
        const today = new Date();
        const options = { day: '2-digit', month: '2-digit', year: '2-digit' };

        const formattedDate = today.toLocaleDateString('en-GB', options);

        return formattedDate;
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const newPost = {
            name: userInfo?.name,
            role: userInfo?.role,
            post: form.get('post'),
            date: getFormattedDate(),
            image: userInfo?.image

        }
        axiosSecure.post('/getPost', newPost)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Your slots has been updated`,
                        showConfirmButton: false,
                        timer: 3000
                    });

                }

            })

    }
    return (
        <div>
            <DashboardTitle heading={'Add Your Post'}></DashboardTitle>
            <form onSubmit={handleOnSubmit} className="w-full">
                <div className="mx-auto w-full md:w-3/4 ">
                    <Textarea id="post" name="post" required rows={4} />
                </div>
                <div className="mx-auto my-5 flex justify-center w-full md:w-3/4">
                    <Button type="submit" className="w-1/2">POST</Button>
                </div>
            </form>
        </div>
    );
};

export default AddPost;