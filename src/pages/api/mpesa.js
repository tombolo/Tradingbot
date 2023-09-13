/* import axios from 'axios';
import {generateToken} from "./tokencheck";

export default async function handler(req,res){
    const phone = req.body.phone.substring(1);
    const amount = req.body.amount;

    const date = new Date();
    const timeStamp =
        date.getFullYear() +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        ("0" + date.getDate()).slice(-2) +
        ("0" + date.getHours()).slice(-2) +
        ("0" + date.getMinutes()).slice(-2) +
        ("0" + date.getSeconds()).slice(-2);

        const shortCode =process.env.MPESA_PAYBILL;
        const passkey = process.env.MPESA_PASS_KEY;
        const token = await generateToken();
        const password = new Buffer.from(shortCode + passkey +timeStamp).toString("base64")

    // res.json({ phone: phone, amount: amount })Avoid sending multipe responses to the client
    await axios.post("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
        {
            BusinessShortCode:shortCode ,
            Password:password,
            Timestamp: timeStamp,
            TransactionType: "CustomerPayBillOnline",
            Amount: amount,
            PartyA: `254${phone}`,
            PartyB: shortCode,
            PhoneNumber: `254${phone}`,
            CallBackURL: "https://27f8-197-237-80-19.ngrok.io/callback",
            AccountReference: `254${phone}`,
            TransactionDesc: "Test"
        },
        {
            headers:{
                Authorization: `Bearer ${token}`,
            },
        }
        ).then((response)=>{
            console.log(response.data);
            res.status(200).json(response.data);
        }).catch((err)=>{
            console.log(err.message)
            res.status(400).json(err.message)
        })

} */