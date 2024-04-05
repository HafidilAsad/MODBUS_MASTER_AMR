const express = require("express");
const cors = require("cors");
const Modbus = require("modbus-serial");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(cors());
const port = process.env.PORT || 5200; // Use the configured port or default to 5100

// app.get("/write-modbus-register", (req, res) => {
//   console.log("telah dipanggil lewat api");
//   console.log("Pada Jam", new Date().toLocaleString('id-ID'));
//   // Create a Modbus TCP client
//   const client = new Modbus();

//   // Define the Modbus server's IP address and port
//   const modbusServerIp = "172.172.8.110";
//   const modbusServerPort = 8888; // Default Modbus TCP port

//   // Set the register address and value
//   const registerAddress = 10;
//   const registerValue = 1;

//   // Connect to the Modbus server
//   client.connectTCP(modbusServerIp, { port: modbusServerPort }, (err) => {
//     if (err) {
//       console.error("Error connecting to Modbus server:", err);
//       client.close();
//       res.status(500).send("Error connecting to Modbus server");
//     } else {
//       console.log("Connected to Modbus server");

//       // Write a single register with the specified value
//       client.writeRegister(
//         registerAddress,
//         registerValue,
//         (writeErr, response) => {
//           if (writeErr) {
//             console.error("Error writing register:", writeErr);
//             res.status(500).send("Error writing Modbus register");
//           } else {
//             console.log("Write successful:", response);
//             res.status(200).send("Write successful");
//           }

//           // Close the connection
//           client.close();
//         }
//       );
//     }
//   });
// });

const client = new Modbus();

// Define the Modbus server's IP address and port
const modbusServerIp = "172.172.8.110";
const modbusServerPort = 8888; // Default Modbus TCP port

// Set the register address and value
const registerAddress = 10;
const registerValue = 1;

const registerAddress2 = 11;
const registerValue2 = 1;

const registerAddress28 = 13
const registerValueBack = 0;

const registerAddress28_B = 14
const registerAddress32 = 15
const registerAddress24 = 16
const registerAddress40 = 17
const registerAddress54 = 18

// Connect to the Modbus server
client.connectTCP(modbusServerIp, { port: modbusServerPort }, (err) => {
  if (err) {
    console.error("Error connecting to Modbus server:", err);
    client.close();
    // res.status(500).send("Error connecting to Modbus server");
  } else {
    console.log("Connected to Modbus server");

    app.get("/write-modbus-register", (req, res) => {
      console.log("API MC 33 Telah dipanggil");
      console.log("API call MC 33 completed at:", new Date().toLocaleString('id-ID'));

      client.writeRegister(
        registerAddress,
        registerValue,
        (writeErr, response) => {
          if (writeErr) {
            console.error("Error writing register:", writeErr);
            res.status(500).send("Error writing Modbus register");
            process.exit(1)
          } else {
            console.log("Write successful:", response);
            res.status(200).send("Write successful");
          }            
        }
      );
    });

    app.get("/write-modbus-register/2", (req, res) => {
      console.log("API MC 31 Telah dipanggil");
      console.log("API MC 31 call completed at:", new Date().toLocaleString('id-ID'));

      client.writeRegister(
        registerAddress2,
        registerValue2,
        (writeErr, response) => {
          if (writeErr) {
            console.error("Error writing register MC 30:", writeErr);
            res.status(500).send("Error writing Modbus register MC 30");
            process.exit(1)
          } else {
            console.log("Write successful to MC 30:", response);
            res.status(200).send("Write successful to MC30");
          }            
        }
      );
    });

    // untuk 28

    app.get("/write-modbus-register/28", (req, res) => {
      console.log("API MC 28 Telah dipanggil");
      console.log("API call MC 28 completed at:", new Date().toLocaleString('id-ID'));

      client.writeRegister(
        registerAddress28,
        registerValue,
        (writeErr, response) => {
          if (writeErr) {
            console.error("Error writing register:", writeErr);
            res.status(500).send("Error writing Modbus register");
            process.exit(1)
          } else {
            console.log("Write successful:", response);
            res.status(200).send("Write successful");
          }            
        }
      );
    });

        // untuk 20

        app.get("/write-modbus-register/20", (req, res) => {
          console.log("API MC 20 Telah dipanggil");
          console.log("API call MC 20 completed at:", new Date().toLocaleString('id-ID'));
    
          client.writeRegister(
            registerAddress28_B,
            registerValue,
            (writeErr, response) => {
              if (writeErr) {
                console.error("Error writing register:", writeErr);
                res.status(500).send("Error writing Modbus register");
                process.exit(1)
              } else {
                console.log("Write successful:", response);
                res.status(200).send("Write successful");
              }            
            }
          );
        });

           // untuk 32

           app.get("/write-modbus-register/32", (req, res) => {
            console.log("API MC 32 Telah dipanggil");
            console.log("API call MC 32 completed at:", new Date().toLocaleString('id-ID'));
      
            client.writeRegister(
              registerAddress32,
              registerValue,
              (writeErr, response) => {
                if (writeErr) {
                  console.error("Error writing register:", writeErr);
                  res.status(500).send("Error writing Modbus register");
                  process.exit(1)
                } else {
                  console.log("Write successful:", response);
                  res.status(200).send("Write successful");
                }            
              }
            );
          });

            // untuk 24
          app.get("/write-modbus-register/24", (req, res) => {
            console.log("API MC 24 Telah dipanggil");
            console.log("API call MC 24 completed at:", new Date().toLocaleString('id-ID'));
      
            client.writeRegister(
              registerAddress24,
              registerValue,
              (writeErr, response) => {
                if (writeErr) {
                  console.error("Error writing register:", writeErr);
                  res.status(500).send("Error writing Modbus register");
                  process.exit(1)
                } else {
                  console.log("Write successful:", response);
                  res.status(200).send("Write successful");
                }            
              }
            );
          });

          // untuk 40
          app.get("/write-modbus-register/24", (req, res) => {
            console.log("API MC 40 Telah dipanggil");
            console.log("API call MC 40 completed at:", new Date().toLocaleString('id-ID'));
      
            client.writeRegister(
              registerAddress40,
              registerValue,
              (writeErr, response) => {
                if (writeErr) {
                  console.error("Error writing register:", writeErr);
                  res.status(500).send("Error writing Modbus register");
                  process.exit(1)
                } else {
                  console.log("Write successful:", response);
                  res.status(200).send("Write successful");
                }            
              }
            );
          });
          // untuk 54
          app.get("/write-modbus-register/54", (req, res) => {
            console.log("API MC 54 Telah dipanggil");
            console.log("API call MC 54 completed at:", new Date().toLocaleString('id-ID'));
      
            client.writeRegister(
              registerAddress54,
              registerValue,
              (writeErr, response) => {
                if (writeErr) {
                  console.error("Error writing register:", writeErr);
                  res.status(500).send("Error writing Modbus register");
                  process.exit(1)
                } else {
                  console.log("Write successful:", response);
                  res.status(200).send("Write successful");
                }            
              }
            );
          });

    // Write a single register with the specified value
  
  }

});


app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
