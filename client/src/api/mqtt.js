// var mqtt = require('mqtt')
import mqtt from 'mqtt'
let client = {}



export default {
    launch (id, callback) {
        const options = {
            // protocol: 'mqtts',
            rejectUnauthorized: false,
            // port: "3883",
            port: "8883",
            username: "niels.houben1@gmail.com",
            password: "ost123",
            clientId: id,
            clean: false,
            will: {
                topic: 'offline',
                payload: id,
                qos: 2
            },
            ca:
                "\
            -----BEGIN CERTIFICATE-----\
            MIIDPzCCAicCFAgB/9E66qY666QwZU3U+uX/sk7QMA0GCSqGSIb3DQEBCwUAMFwx\
            CzAJBgNVBAYTAkFVMRMwEQYDVQQIDApTb21lLVN0YXRlMSEwHwYDVQQKDBhJbnRl\
            cm5ldCBXaWRnaXRzIFB0eSBMdGQxFTATBgNVBAMMDG1hcWlhdHRvLmNvbTAeFw0y\
            MDA1MDMxNTU4NTZaFw0yMTA0MjgxNTU4NTZaMFwxCzAJBgNVBAYTAkFVMRMwEQYD\
            VQQIDApTb21lLVN0YXRlMSEwHwYDVQQKDBhJbnRlcm5ldCBXaWRnaXRzIFB0eSBM\
            dGQxFTATBgNVBAMMDG1hcWlhdHRvLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEP\
            ADCCAQoCggEBAPQUxGPAcCiAhIDvNWGh2UFhtVAEu9JiadWRzBPaWgwePvFfHtNN\
            isiqLpPB39+IsOEaya9W6izpF9dNdEsLZX0oKKv1JzBYFuBskQOb4oLqEOztnxf7\
            jq15mYTpim/6rL6d4VzwfHDH02TxBgM8cVPPJIjN8qfymWXB1Rb8phT6q1wT8tey\
            TgOHwm8BmCk+7UX6j5gT9LB5nDCZOmjcK9m/wYE9xQBmxevGbYlFt5woXjpE+BTa\
            DeXVZMum5gqkJ1CvviwoNkFbAUJ5e619gGJfL2HOre7ckHPLRjplCWacNb6eHe3R\
            0tZFNaDphGL8hyUnPK+CnFG+B4d7JqKliq8CAwEAATANBgkqhkiG9w0BAQsFAAOC\
            AQEAA+V0DyO/RDqCEWBrPDByEzNSharBL/ig8Mr9z+AoU0dLmmb8kwpPO1hJUTdh\
            uARNHg8HyeoHlPqEDlfP2+KDqvHZmWRx5GSBHMPFYvaDLk9237nueEmTPM3cdVFh\
            ZQPI7gwlYxO6hvqtHpHb4erOLXpQSHl06tE75akM0BS9ve1t0rvDBk/YbB7sIUei\
            30NF8LdIgDZPBDOPvGRvXm3ib20S8fkHTgNMEsGuPjrk41glH6nONlDzQ+8NbXwo\
            B9AWDQG54xUYDpOwM/LTRdvYfFMH9+U8nXCRO+xD89R80BQkeFz9On5tf6y2D8Pl\
            79gL077l7yk/UUsZukhkpzFnrg==\
            -----END CERTIFICATE-----\
                "
        }
        client = mqtt.connect('mqtt://maqiatto.com:3883', options)
        client.on('connect', (topic, message) => {
            callback(topic, message)
        })
        client.on('error', (err) => {
            console.log(err)
        })
    },
    end () {
        client.end()
    },
    subscribe (topic) {
        client.subscribe(topic)
        console.log('subscribe:', topic)
    },
    publish (topic, message) {
        console.log(message)
        client.publish(topic, message, { qos: 1 })
    }
}