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
            console.log(store.join(''));
        }
        answer = store.join('');

        return answer;
    }

    let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
    console.log(solution(str));
})();