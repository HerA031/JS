const year = 2028

if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    console.log(`${year}년은 윤년`);
} else {
    console.log(`${year}년은 평년`);
}