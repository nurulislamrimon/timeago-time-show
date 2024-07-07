const timeago = require("timeago.js");

const now = new Date();
const ago11H = Date.now() - 11 * 1000 * 60 * 60;
const ago8y = Date.now() - 8 * 365 * 24 * 1000 * 60 * 60;

console.log(timeago.format(now));
console.log(timeago.format(ago11H));
console.log(timeago.format(ago8y));

// format region
console.log(timeago.format("2016-06-12", "en_US"));
