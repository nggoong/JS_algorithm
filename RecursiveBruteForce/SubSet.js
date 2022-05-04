(()=> {
    function solution(n) {
        let answer;
        let ch = new Array(n+1).fill(0);

        function DFS(v) {
            if(v === n + 1) {
                let temp="";
                for(let i = 1; i<=n; i++) {
                    if(ch[i]) temp+=i+" ";
                }
                console.log(temp);
            }
            else {
                ch[v] = 1;
                DFS(v + 1);
                ch[v] = 0;
                DFS(v + 1);
            }
        }
        DFS(1)    
        return answer;
    }
    
    console.log(solution(3))
})();