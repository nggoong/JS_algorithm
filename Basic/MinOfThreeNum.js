// 세 수 중 최솟값

(()=> {
    function solution2(a, b, c){
        let answer;
        
        answer = Math.min(a,b,c);
        return answer;
    }

    function solution(a, b, c) {
        let answer;
        
        if(a < b) answer = a;
        else answer = b;

        if(answer > c) answer = c;

        return answer;
    }

    console.log(solution(100, 3, 45));
    console.log(solution2(100, 3, 45));
})();