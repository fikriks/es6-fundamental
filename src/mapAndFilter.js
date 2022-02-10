/*
    Map And Filter
*/

// ES6
const mySkills = ["Web Development", "Copywriter", "DevOps"];

mySkills.push("Design");

// Map
const printSkills = mySkills.map(skill => {
    return skill;
});

console.log(`Keahlian saya adalah : ${printSkills}`);

// Filter
const myPrimarySkill = mySkills.filter(skill => {
    return skill === "Web Development";
});

console.log(`Keahlian utama saya adalah : ${myPrimarySkill}`);