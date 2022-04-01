// 멘토링
(()=> {
    function solution(test){
        let answer=0;
        let m=test.length;
        let n=test[0].length;
        let count = 0;
        let mentor;
        let menti;
        for(let i = 1; i <= n; i++) {
            for(let j = 1; j <= n; j++) {
                count = 0;
                for(let k = 0; k < m; k++) {
                    for(let s = 0; s < n; s++) {
                        if(test[k][s] === i) mentor = s;
                        if(test[k][s] === j) menti = s;
                    }
                    if(mentor < menti) count++;
                }
                if(count === m) answer++;
            }
        }
        return answer;
    }

    let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
    console.log(solution(arr));
})();