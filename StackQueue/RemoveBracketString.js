// 괄호 문자 제거

(()=> {
    function solution(str) {
        let answer;
        let store = [];

        for(let x of str) {
            if(x === ')') {
                while(store.pop()!=='(');
            }
            else store.push(x);
        }
        answer = store.join('');

        return answer;
    }

    function solution2(str) {
        let answer;
        let store = [];

        for(let x of str) {
            if(x!==')') {
                store.push(x);
            }
            else if(x === ')') {
                while(store[store.length - 1] !== '(') {
                    store.pop();
                }
                store.pop();
            }
        }
        answer= store.join('');

        return answer;
    }

    let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
    console.log(solution(str));
    console.log(solution2(str));
})();