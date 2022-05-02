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

    function solution2(size, arr) {
        let answer = Array.from({length:size}, ()=>0);

        for(let x of arr) {
            let pos = -1;
            for(let i = 0; i < size; i++) {
                if(x===answer[i]) pos = i;
                if(pos === -1) {
                    for(let i = size - 1; i >= 1; i--) {
                        answer[i] = answer[i-1];
                    }
                    answer[0] = x;
                }
                else {
                    for(let i = pos; i >= 1; i--) {
                        answer[i] = answer[i-1];
                    }
                    answer[0] = x;
                }
            }
        }

        return answer;
    }

    let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
    console.log(solution(5, arr));
    console.log(solution2(5, arr));

})();