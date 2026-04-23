import axios from "axios";

const {
    PAYPAL_BASE_URL,
    PAYPAL_CLIENT_ID,
    PAYPAL_SECRET
} = process.env;
if (!PAYPAL_BASE_URL) {
    console.log("Error accessing paypal credentials...");
    process.exit(1);
}
export const generateAccessToken = async () => {
    const response = await axios({
      url: `${PAYPAL_BASE_URL}/v1/oauth2/token`,
      method: "post",
        data: "grant_type=client_credentials",
        auth: {
            username: PAYPAL_CLIENT_ID,
            password: PAYPAL_SECRET
      }
    });
    // console.log(response);
    return response.data.access_token
}
// generateAccessToken()
exports.createOrder = async () => {
    const accessToken = await generateAccessToken()

    const response = axios({
        url: `${PAYPAL_BASE_URL}v2/checkout/orders`,
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer${accessToken}`
        },
        data: JSON.stringify( {
            intent: "CAPTURE",
            purchase_unit: [
                {
                    items: {
                        name: "notebook",
                        description: "modern all in one notebook",
                        qauntity: 1,
                        unit_amount: {
                            currency_code: "USD",
                            value: 100.00
                        }
                    },
                    amount: {
                        currency_code: "USD",
                        amount: 100.00,
                        breakdown: {
                            items_totals: {
                                currency_code: "USD",
                                value: 100.00
                            }
                        }
                    }
                }
            ]
        })
    });
}

// export default generateAccessToken;