// 교육 과정 설계

(()=> {
    function solution(need, subjects) {
        let answer = 'YES';
        let queue = need.split('');
        
        for(let i of subjects) {
            if(queue.indexOf(i) !== -1) {
                if(queue.shift() !== i) {
                    answer = 'NO';
                    return answer;
                }
            }
        }
        if(queue.length !== 0) answer = 'NO'; 


        return answer;
    }

    // 스택으로 푸는 방법

    function solution2(need, subjects) {
        let answer = 'YES';
        let stack = need.split('').reverse();

        for(let i of subjects) {
            if(stack.includes(i)) {
                if(stack.pop() !== i) {
                    answer = 'NO';
                    return answer;
                }
            }
        }
        if(stack.length !== 0) answer='NO';

        return answer;
    }

    console.log(solution('CBA', 'CBHGEA'));
    console.log(solution2('CBA', 'CBHGEA'));
})();