const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTM'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
];

const scores = (arr) => {
    const scores = [];
    for (const element of arr) {
        if (element.scores > 85) {
            scores.push(element.scores);
        }
    }
    return scores;
};
console.log('Scores Greater Than 85', scores(users));

const newUser = {
    name: 'Pratiksha',
    scores: 89,
    skills: ['HTML', 'CSS', 'JS'],
    age: 21
};
const addUser = (arr, newUser) => {
    for (const user of arr) {
        if (user['name'] === newUser.name) {
            return ' user exist';
        }
    }
    arr.push(newUser);
    return arr;
};
console.log('New User Added:', addUser(users, newUser));

const userSkill = (arr, name, skill) => {
    let found = false;
    for (const user of arr) {
        if (user['name'] === name) {
            user.skills.push(skill);
            found = true;
            break;
        }
    }
    if (!found) {
        return 'user does not exist';
    }

    return arr;
};
console.log('user skills added: ', userSkill(users, 'Pratiksha', 'ReactJs'));

const editUser = (arr, name, newUser) => {
    let found = false;
    for (const user of arr) {
        if (user['name'] === name) {
            user.name = newUser.name;
            user.scores = newUser.scores;
            user.skills = newUser.skills;
            user.age = newUser.age;
            found = true;
            break;
        }
    }
    if (!found) {
        return 'user does not exist';
    }
    return arr;
};
console.log('User edited:', editUser(users, "Brook", newUser));




