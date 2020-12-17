const xyz = require('express')
const app = xyz()
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.listen(3009)
console.log("running on port 3009")


const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)



    const msg = {
        to: "ritk.2503@gmail.com",
        from: "ritesh_k@apollohospitals.com",
        subject: "test",
        text: ' ',
        // html: '<strong>`hi there`</strong>',
        html: "boom",
        attachments: [],
    };


app.get('/sendEmail', async function f1(req, res) {
    let messageInQuery = req.query.text;
    const msg = {
        to: "ritk.2503@gmail.com",
        from: "ritesh_k@apollohospitals.com",
        subject: "test",
        text: ' ',
        // html: '<strong>`hi there`</strong>',
        html: messageInQuery,
        attachments: [],
    };
    console.log("message textt",msg.html)
    console.log("message wont go coz sendgridkey not added yet")
    return res.send("okkk")
    // let sendgridResponse= await sgMail.send(msg)
    // console.log("sendgridResponse",sendgridResponse)
    // return res.send({code:"ok",response:sendgridResponse})
    }
)


// app.post('/123', function (req, res) {
//     console.log(req.body);
//     var password=req.body.pass
//     console.log("this is your password :",password)
//     return res.send({
//         code:"ok",
//         password:password
//     })
// })


