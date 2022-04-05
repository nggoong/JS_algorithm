// 최대 매출

(()=> {
    function solution(k, arr){
        let answer = 0;
        let sum = 0;
        let start = 0;
        let end = k;

        for(let i = 0; i < k; i++) {
            sum += arr[i];
        }
        answer = sum;

        while(end < arr.length) {
            sum = sum + arr[end++] - arr[start++];
            if(sum > answer) answer = sum;
        }

       
        return answer;
    }
    
    let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
    console.log(solution(3, a));


})();