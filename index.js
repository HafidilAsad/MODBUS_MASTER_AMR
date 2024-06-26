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

const registerAddress20 = 13
const registerValueBack = 0;

const registerAddress34 = 10
const registerAddress30 = 11
const registerAddress28 = 14
const registerAddress32 = 15
const registerAddress24 = 16
const registerAddress40 = 17
const registerAddress54 = 18
const registerAddress25 = 19
const registerAddress45 = 56
const registerAddress1 = 40
const registerAddress5 = 24
const registerAddress43 = 20

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

    // untuk 30
    app.get("/write-modbus-register/30", (req, res) => {
      console.log("API MC 30 Telah dipanggil");
      console.log("API call MC 30 completed at:", new Date().toLocaleString('id-ID'));

      client.writeRegister(
        registerAddress30,
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

    // untuk 34
    app.get("/write-modbus-register/34", (req, res) => {
      console.log("API MC 34 Telah dipanggil");
      console.log("API call MC 34 completed at:", new Date().toLocaleString('id-ID'));

      client.writeRegister(
        registerAddress34,
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
            registerAddress20,
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
          app.get("/write-modbus-register/40", (req, res) => {
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
            // untuk 25
          app.get("/write-modbus-register/25", (req, res) => {
              console.log("API MC 25 Telah dipanggil");
              console.log("API call MC 25 completed at:", new Date().toLocaleString('id-ID'));
        
              client.writeRegister(
                registerAddress25,
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
          // untuk 45
          app.get("/write-modbus-register/45", (req, res) => {
            console.log("API MC 45 Telah dipanggil");
            console.log("API call MC 45 completed at:", new Date().toLocaleString('id-ID'));
      
            client.writeRegister(
              registerAddress45,
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
          // untuk 5
          app.get("/write-modbus-register/5", (req, res) => {
            console.log("API MC 5 Telah dipanggil");
            console.log("API call MC 5 completed at:", new Date().toLocaleString('id-ID'));
      
            client.writeRegister(
              registerAddress5,
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
          // untuk 1
          app.get("/write-modbus-register/1", (req, res) => {
            console.log("API MC 1 Telah dipanggil");
            console.log("API call MC 1 completed at:", new Date().toLocaleString('id-ID'));

            client.writeRegister(
              registerAddress1,
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

          // untuk 43
          app.get("/write-modbus-register/43", (req, res) => {
            console.log("API MC 43 Telah dipanggil");
            console.log("API call MC 43 completed at:", new Date().toLocaleString('id-ID'));
      
            client.writeRegister(
              registerAddress43,
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
