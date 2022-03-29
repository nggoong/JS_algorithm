// 자리수의 합

(()=> {
    function solution(n, arr) {
        let answer;
        let sum = 0;
        let max = 0;
        let temp = 0;

        for(let i = 0; i < n; i++) {
            sum = 0;
            temp = arr[i];
            while(temp >= 1) {
                sum += temp % 10;
                temp = parseInt(temp / 10);
            }
            if(sum > max) {
                max = sum;
                answer = arr[i];
            }
            else if(sum === max) {
                answer = answer > arr[i] ? answer : arr[i];
            }
        }
        return answer;
    }

    let arr = [128, 460, 603, 40, 521, 137, 123];
    console.log(solution(7, arr));
})();