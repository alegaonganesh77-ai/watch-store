const fs = require("fs");

const file = "notes.txt";


fs.writeFile(file, "", { flag: "a" }, (err) => {
  if (err) {
    console.log("Error creating file");
    return;
  }

  
  fs.appendFile(file, "My first note\n", (err) => {
    if (err) {
      console.log("Error adding note");
      return;
    }

    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.log("Error reading file");
        return;
      }

      console.log("File Content:\n" + data);

     
      fs.writeFile(file, "", (err) => {
        if (err) {
          console.log("Error clearing file");
          return;
        }

       
        fs.unlink(file, (err) => {
          if (err) {
            console.log("File cleared");
            return;
          }

          console.log("File deleted.");
        });
      });
    });
  });
});