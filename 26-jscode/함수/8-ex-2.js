
// 1) 함수 checkEvenOdd 선언 (매개변수 num)
function checkEvenOdd(num){
    //    → if: num을 2로 나눈 나머지가 0이면 "짝수입니다." 반환
    if(num%2==0){
        return '짝수입니다.'
    }else{
        //    → else: "홀수입니다." 반환
        return '홀수입니다.'

    }
}

// 2) checkEvenOdd(7), checkEvenOdd(12) 호출 결과 출력하기
console.log(checkEvenOdd(8));
