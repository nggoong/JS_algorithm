// 올바른 괄호

(()=> {
    function solution(a) {
        let answer = 'YES';
        let result = [];

        for(let x of a) {
            if(x === '(') {
                result.push(x);
            }
            else if(x === ')') {
                if(result.length === 0) {
                    answer='NO';
                    return answer;
                }
                result.pop();
            }
        }

        if(result.length > 0) {
            answer = 'NO';
        }
        return answer;
    }

    let a="(())()((())))()";
    console.log(solution(a));
})();