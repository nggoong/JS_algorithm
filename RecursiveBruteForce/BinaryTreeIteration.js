// 이진트리 순회(DFS)

(()=> {
    // 전위순회
    function solution(v) {
        let answer;
        function DFS(v) {
            if(v > 7) {
                console.log('리턴됨 : ', v);
                return;
            }
            else {
                // console.log(v); // 전위순회
                DFS(v*2);
                // console.log(v); //중위순회
                DFS(v*2+1);
                console.log(v); //후위순회
            }
        }
        DFS(v);
        return answer;
    }

    console.log(solution(1));
})()