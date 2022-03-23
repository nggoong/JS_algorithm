// 삼각형 판별하기

// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야한다.

(()=> {
    function solution(a, b, c) {
        let answer;
        let sum = a + b + c;
        answer = Math.max(a, b, c) < sum - Math.max(a, b, c) ? 'YES' : 'NO';

        return answer;
    }

    console.log(solution(6, 7, 11));
})();