import { Button, Card, FileInput, Label, Modal, TextInput } from "flowbite-react";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_img_hosting_key;
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const Profile = () => {
    const { user, updateUserProfile } = useAuth();
    const [openModal, setOpenModal] = useState(false);
    const axiosPublic = useAxiosPublic()
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('image');
        const imageFile = { image: photo };
        const res = await axiosPublic.post(imageHostingAPI, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
        const resData = res.data;
        const image = resData.data.display_url;
        if (resData.success) {
            updateUserProfile(name, image)
                .then(() => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Your profile has been updated`,
                        showConfirmButton: false,
                        timer: 3000
                    });
                    setOpenModal(false)
                })
        }
    }
    return (
        <div className="my-5">
            <Card className="bg-gray-100 max-w-sm mx-auto lg:mx-20">
                <div className="flex flex-col space-y-3 items-center">
                    <img
                        alt="Bonnie image"
                        height="96"
                        src={user?.photoURL}
                        width="96"
                        className="mb-3 rounded-full shadow-lg"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user?.displayName}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</span>
                    <button
                        onClick={() => setOpenModal(true)}
                        className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                        Edit Profile
                    </button>
                </div>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>Edit your information</Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleOnSubmit} className="space-y-5">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="base" value="Your Name" />
                                </div>
                                <TextInput id="base" type="text" name="name" sizing="md" />
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <Label htmlFor="file-upload" value="Upload multiple files" />
                                </div>
                                <FileInput id="file-upload" name="image" />
                            </div>
                            <Button className="ml-auto my-5" type="submit">Update</Button>
                        </form>
                    </Modal.Body>
                </Modal>
            </Card>
        </div>
    );
};

export default Profile;