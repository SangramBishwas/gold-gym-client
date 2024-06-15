import { Button, Label, TextInput } from "flowbite-react";
import SectionTitle from "../../Shared/SectionTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const NewsLetter = () => {
    const axiosPublic = useAxiosPublic();

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const subscriber = {
            name: name,
            email: email
        }
        axiosPublic.post('/subscribers', subscriber)
        .then(res => {
            const result = res.data;
            if(result.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Your request has been sent`,
                    showConfirmButton: false,
                    timer: 2500
                });
            }
        })
    }
    return (
        <div className="border-2 mx-5 md:mx-10 lg:mx-20 my-5 md:my-10">
            <SectionTitle heading={"News Letter"} subHeading={"Please fill up this form and get our newsletter for every week"}></SectionTitle>
        <form onSubmit={handleOnSubmit} className="flex max-w-md flex-col gap-4 mx-auto pb-5 px-5">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name" value="Your Name" />
                </div>
                <TextInput type="text" name="name" required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput name="email" type="email" placeholder="name@flowbite.com" required />
            </div>
            <Button className="font-semibold" type="submit">Subscribe</Button>
        </form>
        </div>
    );
}

export default NewsLetter;