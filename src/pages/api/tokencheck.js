/*import axios from 'axios';

// export default async function handler(req,res){
//     const token = await generateToken();
//     res.status(200).json({token});
// }

export async function generateToken(){
    const consumerKey = process.env.MPESA_CONSUMER_KEY;
    const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
    const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');

    try {
        const response = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
            headers: {
              authorization: `Basic ${auth}`,
            },
        });
        return response.data.access_token;

    } 
    catch (error) {
        console.error(error.message);
        throw err
    }
} */