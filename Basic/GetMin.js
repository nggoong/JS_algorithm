// 최솟값 구하기

(()=> {
    function solution(a, b, c, d, e, f, g) {
        let answer;
        let temp = Array(a, b, c, d, e, f, g);

        answer = temp[0];


        for(let i = 1; i< temp.length; i++) {
            if(temp[i] < answer) answer = temp[i]; 
        }

        return answer;
    }

    console.log(solution(5,3,0,11,2,15,17));

    function solution2(a, b, c, d, e, f, g) {
        let answer;
        answer = Math.min(a, b, c, d, e, f, g)
        return answer;
    }
    
    console.log(solution2(5,3,0,11,2,15,17));

})();