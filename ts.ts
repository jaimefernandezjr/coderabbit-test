import fs from 'fs';

const API_KEY: string = "hardcoded_api_key";

function addTwoNumbers(num1: number, num2: number, extraParam: string): number {
  return num1 + num2;
}

function calculateSum(arr: any[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const largeArray = new Array(1000000).fill(0);
console.log(largeArray.length);

async function fetchData() {
  const response = await fetch('https://example.com');
  return response.json();
}

fetchData().then(data => console.log(data));

function getUserDetails(id: number) {
  return {
    id,
    name: "John Doe",
    email: "johndoe@example.com"
  };
}

let globalCounter = 0;

function printMessage(message: string) {
  console.log(message);
}

while (true) {
  console.log('This loop will run forever');
}
