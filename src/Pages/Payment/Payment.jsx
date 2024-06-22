import { useLocation } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY)
const Payment = () => {
    const location = useLocation();
    const paymentInfo = location.state;
    return (
        <div className="px-5 md:px-10 lg:px-20">
            <SectionTitle heading={'Complete Your Payment'}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOut paymentInfo={paymentInfo}></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;