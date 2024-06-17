import { Button, FileInput, Label, TextInput } from "flowbite-react";
import DashboardTitle from "../DashboardTitle";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";
const image_hosting_key = import.meta.env.VITE_img_hosting_key;
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddClasses = () => {
    const axiosSecure = useAxios();
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const photo = form.get('image');
        const imageFile = { image: photo };
        const res = await axiosSecure.post(imageHostingAPI, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })

        const resData = res.data;
        console.log(resData)
        if (res.data.success) {
            const classe = {
                class_name: form.get('name'),
                number_of_bookings: form.get('available_sit'),
                images: resData.data.display_url,
                details: form.get('description'),
            }
            console.log(classe);
            const res = await axiosSecure.post('/classes', classe);
            console.log(res.data)
            if (res.data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Your class has been added`,
                    showConfirmButton: false,
                    timer: 2500
                });
                // navigate('/')
            }

        }
    }
    return (
        <div>
            <DashboardTitle heading={"Add New Classes"}></DashboardTitle>
            <form onSubmit={handleOnSubmit} className="flex flex-col gap-4 px-20">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Class Name" />
                    </div>
                    <TextInput name="name" type="text" placeholder="Class name" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="available_sit" value="Available Sit" />
                    </div>
                    <TextInput name="available_sit" type="number" placeholder="Available Sit" required shadow />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="description" value="Description" />
                    </div>
                    <TextInput name="description" type="text" required shadow />
                </div>
                <div className="space-y-1">
                    <div>
                        <Label htmlFor="large-file-upload" value="Image" />
                    </div>
                    <FileInput name="image" id="large-file-upload" sizing="lg" required />
                </div>

                <Button className="w-1/2 mx-auto my-5" type="submit">Add This</Button>
            </form>
        </div>
    );
};

export default AddClasses;