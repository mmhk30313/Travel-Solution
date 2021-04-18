import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
// import CardForm from './CardForm';
import SplitForm from './SplitForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Ig3tuEyJ828sNKrVzBEuhNn8cJ78l4sS0VuBFtkzrq2dBxQmi9h3Pkhg37VkH7v4KuaevsfOTdZTwg9EvbRJVLU008YC9tcfi');

const ProcessPayment = () => {
  return (
    <div className="">
        <div className="pt-2 w-100 mx-auto">
            {/* <h1 className="text-center mt-5">Payment</h1> */}
            <Elements className="mt-5" stripe={stripePromise}>
                {/* <CardForm/> */}
                <SplitForm/>
            </Elements>

        </div>
    </div>
  );
};

export default ProcessPayment;