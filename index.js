#!/usr/bin/env node

const binarySearch = require('./binary-search');
const linearSearch = require('./linear-search');
const faker = require('faker');

function main() {
  const bsLable = 'binarySearch'; 
  const lsLable = 'linearSearch'; 

  let maxArr = [10, 50, 100, 200, 300, 500, 999, 2000, 10000];
  maxArr.forEach((m, idx) => {
    console.log(`\n>>> test ${idx + 1} using ${m} number`)
    let nums = []; 
    for (let i = 0; i < m; i++) {
      nums.push(faker.random.number(2000));
    }
  
    // cpnums is sorted array that will use for binary search
    let cpnums = [...nums];
    cpnums.sort((a, b) => a - b);
  
    console.time(bsLable);
    binarySearch(cpnums, 376);
    console.timeEnd(bsLable);
  
    console.time(lsLable);
    linearSearch(nums, 376);
    console.timeEnd(lsLable);
  })

}

main();
