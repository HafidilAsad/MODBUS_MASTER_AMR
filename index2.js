const express = require("express");
const Modbus = require("modbus-serial");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5200; // Use the configured port or default to 5100
//Write Data Modbus Register
app.get("/api/write-modbus-register", (req, res) => {
  // Create a Modbus TCP client
  const client = new Modbus();

  // Define the Modbus server's IP address and port
  const modbusServerIp = "192.168.137.27";
  const modbusServerPort = 502; // Default Modbus TCP port

  // Set the register address and value
  const registerAddress = 10;
  const registerValue = 1;

  // Connect to the Modbus server
  client.connectTCP(modbusServerIp, { port: modbusServerPort }, (err) => {
    if (err) {
      console.error("Error connecting to Modbus server:", err);
      client.close();
      res.status(500).send("Error connecting to Modbus server");
    } else {
      console.log("Connected to Modbus server");

      // Write a single register with the specified value
      client.writeRegister(
        registerAddress,
        registerValue,
        (writeErr, response) => {
          if (writeErr) {
            console.error("Error writing register:", writeErr);
            res.status(500).send("Error writing Modbus register");
          } else {
            console.log("Write successful:", response);
            res.status(200).send("Write successful");
          }

          // Close the connection
          client.close();
        }
      );
    }
  });
});

// Dynamic Route for get api

app.get("/api/write-modbus-register/:registerAddress", (req, res) =>{
    // Create Modus Client
    const client = new Modbus();

    //Define modbus Server IP 
    const modbusServerIp = process.env.MODBUS_SERVER_IP;
    const modbusServerPort = process.env.MODBUS_SERVER_PORT;


    const registerAddress = parseInt(req.params.registerAddress);

     // Validate if registerAddress is a number
  if (isNaN(registerAddress)) {
    res.status(400).send("Invalid register address");
    return;
  }
 

  // Set the value
  const registerValue = 1;

  // wait 10 second then execute function
  setTimeout(()=>{
    client.connectTCP(modbusServerIp, { port: modbusServerPort }, (err) => {
      if (err) {
        console.error("Error connecting to Modbus server:", err,registerAddress);
        client.close();
        res.status(500).send("Error connecting to Modbus server with register address");
      } else {
        console.log("Connected to Modbus server");
  
        // Write a single register with the specified value
        client.writeRegister(
          registerAddress,
          registerValue,
          (writeErr, response) => {
            if (writeErr) {
              console.error("Error writing register:", writeErr);
              res.status(500).send("Error writing Modbus register");
            } else {
              console.log("Write successful:", response);
              res.status(200).send("Write successful");
            }
  
            // Close the connection
            client.close();
          }
        );
      }})
  }, 10 * 1000)
   // Connect to the Modbus server
  


})

// for back value modbus
app.get("/back-modbus-register", (req, res) => {
  // Create a Modbus TCP client
  const client = new Modbus();

  // Define the Modbus server's IP address and port
  const modbusServerIp = "192.168.137.27";
  const modbusServerPort = 502; // Default Modbus TCP port

  // Set the register address and value
  const registerAddress = 10;
  const registerValue = 0;

  // Connect to the Modbus server
  client.connectTCP(modbusServerIp, { port: modbusServerPort }, (err) => {
    if (err) {
      console.error("Error connecting to Modbus server:", err);
      client.close();
      res.status(500).send("Error connecting to Modbus server");
    } else {
      console.log("Connected to Modbus server");

      // Write a single register with the specified value
      client.writeRegister(
        registerAddress,
        registerValue,
        (writeErr, response) => {
          if (writeErr) {
            console.error("Error writing register:", writeErr);
            res.status(500).send("Error writing Modbus register");
          } else {
            console.log("Write successful:", response);
            res.status(200).send("Write successful");
          }

          // Close the connection
          client.close();
        }
      );
    }
  });
});

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
