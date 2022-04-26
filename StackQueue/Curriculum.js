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

    console.log(solution('CBA', 'CBHGEA'));
})();