import axios from "axios";

const { PAYPAL_BASE_URL, PAYPAL_CLIENT_ID, PAYPAL_SECRET } = process.env;

if (!PAYPAL_BASE_URL) {
  console.log("Error accessing PayPal credentials...");
  process.exit(1);
}

const BASE_URL = process.env.BASE_URL;
if (!BASE_URL) {
  console.log("Unable to access base url..");
  process.exit(1);
}

export const generateAccessToken = async () => {
  const response = await axios({
    url: `${PAYPAL_BASE_URL}/v1/oauth2/token`,
    method: "post",
    data: "grant_type=client_credentials",
    auth: {
      username: PAYPAL_CLIENT_ID,
      password: PAYPAL_SECRET,
    },
  });
  return response.data.access_token;
};

const createOrder = async () => {
  const accessToken = await generateAccessToken();

  const response = await axios({
    url: `${PAYPAL_BASE_URL}/v2/checkout/orders`,
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    data: {
      intent: "CAPTURE",
      purchase_units: [
        {
          items: [
            {
              name: "notebook",
              description: "modern all in one notebook",
              quantity: 1,
              unit_amount: {
                currency_code: "USD",
                value: "100.00",
              },
            },
          ],
          amount: {
            currency_code: "USD",
            value: "100.00",
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: "100.00",
              },
            },
          },
        },
      ],
      //   learn more about application context
      application_context: {
        return_url: `${BASE_URL}/complete-order`,
        cancel_url: `${BASE_URL}/cancel-order`,
        brand_name: "ARRIBION",
        user_action: "PAY_NOW",
        shipping_preference: "NO_SHIPPING",
      },
    },
  });
    //  ONLY APPROVE LINK IS NECCESSARY
  return response.data.links.find((link) => link.rel === "approve").href; // Approval URL
};

export default createOrder;
