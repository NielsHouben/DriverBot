var mqtt = require('mqtt')
let client = {}

export default {
    launch (id, callback) {
        var options = {
            port: "1883",
            clientId: id,
            username: "niels.houben1@gmail.com",
            password: "ost123",
            clean: false,
            will: {
                topic: 'offline',
                payload: id,
                qos: 2
            }
        }
        client = mqtt.connect('tcp://maqiatto.com', options)
        client.on('connect', (topic, message) => {
            callback(topic, message)
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
        console.log(topic, message)
        client.publish(topic, message, { qos: 1 })
    }
}