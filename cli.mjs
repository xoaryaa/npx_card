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
                    open("mailto:at7358@nyu.edu");
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: `Download my ${chalk.magentaBright.bold("Resume")}?`,
                value: () => {
                    open('https://xoaryaa.github.io/resume.pdf');
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
    title: chalk.white("M.S. Computer Engineering @ NYU Tandon"),
    focus: chalk.white("Computer architecture · GPUs · ML systems"),
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
        `${data.title}`,
        `${data.focus}`,
        ``,
        `${data.labelInstagram}  ${data.instagram}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic("I'm looking for Summer 2027 internships in")}`,
        `${chalk.italic("computer architecture and GPU performance.")}`,
        `${chalk.italic("My inbox is always open, whether you have a")}`,
        `${chalk.italic("question or just want to say hi!")}`
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
