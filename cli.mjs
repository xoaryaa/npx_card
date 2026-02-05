#!/usr/bin/env node

'use strict';

import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
import clear from 'clear';
import open from 'open';

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:avtayshete_b21@et.vjti.ac.in");
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: `Download my ${chalk.magentaBright.bold("Resume")}?`,
                value: () => {
                    open('https://drive.google.com/file/d/1m623b06gHLwGK7PtqCJy6U9g_KpfWYXM/view?usp=sharing');  
                    console.log("\nSee you with my projects.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Hasta la vista.\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("Arya Tayshete"),
    handle: chalk.white("@xoaryaa"),
    instagram: chalk.gray("https://instagram.com/") + chalk.cyan("aryatayshete"),
    github: chalk.gray("https://github.com/") + chalk.green("xoaryaa"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("arya-tayshete"),
    npx: chalk.red("npx") + " " + chalk.white("xoaryaa"),
    labelInstagram: chalk.white.bold("Instagram:"),
    labelGitHub: chalk.white.bold("GitHub:"),
    labelLinkedIn: chalk.white.bold("LinkedIn:"),
    labelCard: chalk.white.bold("Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelInstagram}  ${data.instagram}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic("I am currently looking for new opportunities,")}`,
        `${chalk.italic("My inbox is always open. Whether you have a")}`,
        `${chalk.italic("question or just want to say hi, I will try ")}`,
        `${chalk.italic("my best to get back to you!")}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);

const tip = [
    `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
    '',
].join("\n");

console.log(tip);

prompt(questions).then(answer => answer.action());
