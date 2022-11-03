fs = require("fs").promises;
const { writeFile } = require("fs").promises;

const makeFile = async (num) => {
  try {
    await writeFile("./content/practice2.txt", "This is the first line \n");
    for (let i = 2; i < 11; i++) {
      await writeFile("./content/practice2.txt", `This is line ${i} \n`, {
        flag: "a",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

makeFile();

