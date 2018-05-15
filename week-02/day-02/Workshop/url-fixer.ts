export{};
'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!
// let url: string = 'https//www.reddit.com/r/nevertellmethebots';

const wrongComp: string[] = ['https//', 'bots'];
const fixxer: string [] = ['https://', 'odds'];

function urlFix(url) {
  for (let i:number = 0; i < 2; i++) {
    url = url.replace(wrongComp[i], fixxer[i]);
    // these are just for debugging puropses
    // console.log(`Wrong is: ${wrongComp[i]}`);
    // console.log(`Correct is: ${fixxer[i]}`);
  }
  return url;
}
console.log(urlFix('https//www.reddit.com/r/nevertellmethebots'));