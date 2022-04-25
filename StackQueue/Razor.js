// 쇠막대기 문제

(()=> {
    function solution(str) {
        let answer = 0;
        let stack = [];
        let lastValue = '';

        for(let i of str) {
            if(i==='(') {
                stack.push(i);
            }
            else if(i === ')') {
                stack.pop();
                if(lastValue === '(') {
                    answer += stack.length;
                }
                else if(lastValue === ')') {
                    answer++;
                }
            }
            lastValue = i;
        }

        return answer;
    }
    let a="(((()(()()))(())()))(()())";
    console.log(solution(a));
})();