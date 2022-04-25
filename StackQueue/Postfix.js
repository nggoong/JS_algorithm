// 후위식 연산

(()=> {
    function solution(str) {
        let answer;
        let stack = [];
        let result = 0;

        for(let i of str) {
            if(!isNaN(i)) {
                stack.push(Number(i));
            }
            else if(isNaN(i)) {
                let rt = stack.pop();
                let lt = stack.pop();
                if(i === '+') result = lt + rt;
                else if(i === '-') result = lt - rt
                else if(i === '*') result = lt * rt;
                else if(i === '/') result = lt / rt;

                stack.push(Number(result));
            }
        }
        answer = stack[0];
        return answer;
    }

    let str="352+*9-";
    console.log(solution(str));
})();