const Axios = require("axios").default;
const arg = process.argv[2];
const axios = require('axios');
const getdata = async() => {
    return await axios({ url: 'https://clist.by/get/events/' })
}
const app = async() => {
    //  body = [];
    let body = await getdata();
    body = body.data;
    let date = new Date();
    let curr = [],
        past = [],
        future = [];
    body.map(contest => {
        let start = contest.start;
        start = new Date(start);
        let end = contest.end;
        end = new Date(end);
        if (end < date) {
            past.push(contest)
        } else if (start > date)
            future.push(contest);
        else
            curr.push(contest);
    })
    switch (arg) {
        case 'future':
            console.log(future);
            break;
        case 'past':
            console.log(past);
            break;
        case 'present':
            console.log(curr);
            break;
        case 'all':
            console.log(body);
            break;
        default:
            console.log("enter correct parameter");
    }

}


app();