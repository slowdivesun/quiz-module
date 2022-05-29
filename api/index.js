const express = require("express");
const fs = require("fs");
const cors = require("cors");
const csv = require("csv-parser");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/quiz/:courseId", (req, res) => {
  let courseId = req.params.courseId;
  if (courseId !== 0 && courseId !== 1) {
    courseId = 0;
  }
  let quizzes = [];
  fs.createReadStream("psychometry.csv")
    .pipe(csv())
    .on("data", (data) => {
      if (+data.courseId === courseId) {
        quizzes.push(data);
      }
    })
    .on("end", () => {
      res.json(quizzes);
    });
});

app.get("/quiz/:courseId/:sectionNum", async (req, res) => {
  let courseId = req.params.courseId;
  if (courseId !== 0 && courseId !== 1) {
    courseId = 0;
  }

  let quizzes = [];
  setTimeout(() => {
    fs.createReadStream("psychometry.csv")
      .pipe(csv())
      .on("data", (data) => {
        if (+data.courseId === courseId) {
          quizzes.push(data);
        }
      })
      .on("end", () => {
        let quizFile;
        for (let i = 0; i < quizzes.length; i++) {
          if (+quizzes[i].sectionNum === +req.params.sectionNum) {
            quizFile = quizzes[i].quizFile;
          }
        }
        fs.readFile(quizFile, function (err, data) {
          if (err) throw err;
          res.json(JSON.parse(data));
        });
      });
  }, 5000);
});

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
