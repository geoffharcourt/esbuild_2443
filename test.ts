import { HelloEnum } from './enum';

const items = ["a", "b", "c", "1", "2", "3", "4", "5"];
const item = items[Math.floor(Math.random()*items.length)];

const wasntEqual = item !== HelloEnum.say.toString();

console.log(wasntEqual);
