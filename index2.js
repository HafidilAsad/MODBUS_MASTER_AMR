const express = require("express");
const Modbus = require("modbus-serial");
const dotenv = require("dotenv");

dotenv.config(); 

const app = express();
const port = process.env.PORT || 5200; 

const client = new Modbus();
const modbusServerIp = process.env.MODBUS_SERVER_IP_TRIAL;
const modbusServerPort = process.env.MODBUS_SERVER_PORT;

const registerValue = 1;

client.connectTCP(modbusServerIp, { port: modbusServerPort }, (err) => {
      if (err) {
        console.error("Error connecting to Modbus server:", err);
        client.close();
        res.status(500).send("Error connecting to Modbus server with register address");
      } else {
        console.log("Connected to Modbus server");
  
        app.get("/api/write-modbus-register/:registerAddress", (req, res) =>{
          const registerAddress = parseInt(req.params.registerAddress);

          // Validate if registerAddress is a number
       if (isNaN(registerAddress)) {
         res.status(400).send("Invalid register address");
         return;
       }
      
        // Write a single register with the specified value
        client.writeRegister(
          registerAddress,
          registerValue,
          (writeErr, response) => {
            if (writeErr) {
              console.error("Error writing register:", writeErr);
              res.status(500).send("Error writing Modbus register");
              process.exit(1);
            } else {
              console.log("Write successful:", response);
              res.status(200).send("Write successful");
            }
          }
        );
      })        
      }})

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
