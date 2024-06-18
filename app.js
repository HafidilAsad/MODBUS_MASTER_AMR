const express = require("express");
const cors = require("cors");
const Modbus = require("modbus-serial");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(cors());
const port = process.env.PORT || 5200;

const modbusServerIp = "172.172.8.110";
const modbusServerPort = 8888; // Default Modbus TCP port

const registerValue = 1;

// Register addresses
const registerAddresses = {
// FORMAT
// MC : REGISTER ADDRESS

// LINE 2 ================================
  20: 13,
  22: 13,
  34: 10,
  33: 10,
  28: 14,
  27: 14,
  30: 11,
  29: 11,
  32: 15,
  31: 15,
  24: 16,
  12: 16,
  40: 17,
  10: 17,
  54: 18,
  7: 18,


//  LINE 1 ================================
  25: 19,
  37: 19,
  36: 19,
  45: 56,
  44: 56,
  46: 56,
  1: 40,
  2: 40,
  5: 24,
  6: 24,
  43: 20,
  42: 20,
  41:20,

//   LINE 3 ================================
  58:28,
  59:28,
};

const client = new Modbus();
// Connect to the Modbus server
client.connectTCP(modbusServerIp, { port: modbusServerPort }, (err) => {
  if (err) {
    console.error("Error connecting to Modbus server:", err);
    client.close();
    // res.status(500).send("Error connecting to Modbus server");
  } else {
    console.log("Connected to Modbus server");

    // Function to handle writing to Modbus register
    const writeRegister = (register, res) => {
      console.log(`API MC ${register} Telah dipanggil`);
      console.log(`API call MC ${register} completed at:`, new Date().toLocaleString('id-ID'));

      client.writeRegister(registerAddresses[register], registerValue, (writeErr, response) => {
        if (writeErr) {
          console.error("Error writing register:", writeErr);
          res.status(500).send("Error writing Modbus register");
          process.exit(1);
        } else {
          console.log("Write successful:", response);
          res.status(200).send("Write successful");
        }
      });
    };

    //  for each register in the registerAddresses object
    Object.keys(registerAddresses).forEach(register => {
      app.get(`/write-modbus-register/${register}`, (req, res) => writeRegister(register, res));
    });
  }
});

app.listen(port, () => {
    console.log(`Express server running on port ${port}`);
  });
  