import readlineSync from 'readline-sync';

export const greeting = () => {
    const nameUser = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${nameUser}!`)
};