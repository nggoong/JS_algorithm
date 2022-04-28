// 카카오 캐시 문제 변형

(()=> {
    function solution(n, arr) {
        let answer = [];
        for(let x of arr) {
            let index = answer.indexOf(x);
            if(index === -1) {
                answer.unshift(x);
                if(answer.length > n) answer.pop();
                console.log(answer);
            }
            else if(index !== -1) {
                answer.splice(index, 1);
                answer.unshift(x);
                console.log(answer);
            }
        }
        
        
        return answer;
    }

    let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
    console.log(solution(5, arr));

})();