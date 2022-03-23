// 홀수
// 7개의 자연수가 주어질 때, 홀수인 자연수만 골라 합을 구하고 그 중 최솟값을 구하라.

(()=> {
    function solution(a, b, c, d, e, f, g) {
        let answer;
        let temp = Array(a, b, c, d, e, f, g);
        let odd = [];
        let sum = 0;
        
        for(let i = 0; i< temp.length; i++) {
            if(temp[i] % 2 !== 0) {
                odd.push(temp[i]);
                sum = sum + temp[i];
            }
        }
        answer = Math.min(...odd);
        
        console.log(`최솟값 : ${answer}`);
        console.log(`홀수 합 : ${sum}`);
    }

    solution(12,77,38,41,53,92,85);
})();