'use strict';

import convict from 'convict';
import path from 'path';

const conf = convict({
    env: {
        doc: "The application environment.",
        format: ["production", "development", "test"],
        default: "development",
        env: "NODE_ENV"
    },
    ip: {
        doc: "The ip address to bind.",
        format: "ipaddress",
        default: "127.0.0.1",
        env: "IP_ADDRESS"
    },
    port: {
        doc: "The port to bind.",
        format: "port",
        default: 4000,
        env: "PORT"
    }
});

const env = conf.get('env');
conf.loadFile(path.join(__dirname + `/${env}.json`));
conf.validate({strict: true});

export default conf;