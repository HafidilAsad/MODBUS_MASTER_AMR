const express = require("express");
const Modbus = require("modbus-serial");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5100; // Use the configured port or default to 5100

app.get("/write-modbus-register", (req, res) => {
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
