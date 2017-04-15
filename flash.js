var inquirer = require("inquirer");
//var fs = require ("fs");


inquirer.prompt([{
    type: "list",
    message: "Would you like a Flashcard or a Cloze Statement?",
    choices: ["BasicCard", "ClozeCard"],
    name: "choice"
}]).then(function (answer) {
    //console.log(name);
    if (answer.choice === "BasicCard") {
        basicCard();
    } else {
        clozeCard();
    }
});

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
};

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

var basicCard = function () {
    console.log("Question: " + firstPresident.front);
    inquirer.prompt([{
        type: "input",
        message: "Type in answer",
        name: "reply"
    }]).then(function (answer) {
        if (answer.reply === "George Washington") {
            console.log("Correct! George Washington was the first President of the United States!");
        } else {
            console.log("Study Harder!");
        }
    });
};

function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
};

var firstPresidentCloze = new ClozeCard("George Washington was the First President of the United States.", "George Washington");

var clozeCard = function () {
    if (firstPresidentCloze.text.includes(firstPresidentCloze.cloze)) {
        return firstPresidentCloze.text.replace(firstPresidentCloze.cloze, "...");
    }
    inquirer.prompt([{
        type: "input",
        message: "Type in answer",
        name: "reply"
    }]).then(function (answer) {
        if (answer.reply === "George Washington") {
            console.log("Correct! George Washington was the first President of the United States!");
        } else {
            console.log("Study Harder!");
        }
    });

};