const xyz = require('express')
const app = xyz()
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
const config = require('config');
const configInfo = config.get('configData');



const port = process.env.PORT || 3009
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`)

})

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(configInfo.emailApiKey)



const msg = {
        to: "",
        from: "ritesh_k@apollohospitals.com",
        subject: "test",
        text: '',
        html: "",
        attachments: [],
    };


app.get('/sendEmail', async function f1(req, res) {
    let messageToSend = req.query.text;
    let toEmail = req.query.toEmail;
    const msg = {
        to: toEmail,
        from: "riteshcarati@healthymotherhood.co.in",
        subject: "Test Mail",
        text: ' ',
        html: messageToSend,
        attachments: [],
    };
    console.log("message textt",msg.html)
    console.log("message recipient",msg.to)
    // console.log("message wont go coz sendgridkey not added yet")
    // return res.send("okkk")
    let sendgridResponse;
    try {
         sendgridResponse= await sgMail.send(msg)

    }catch (e) {
        console.log("error hai",e,"done boy")
    }

    console.log("hello there>>")
    console.log("sendgridResponse",sendgridResponse)
    return res.send({code:"ok",response:sendgridResponse})
    }
)



