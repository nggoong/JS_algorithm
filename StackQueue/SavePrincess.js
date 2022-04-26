// 공주 구하기

(()=> {
    function solution(n, m) {
        let answer;
        let arr = [];
        let count = 0;

        for(let i = 1; i <= n; i++) {
            arr.push(i);
        }

        while(arr.length !==1) {
            count++;
            if(count !== 3) {
                let temp = arr.shift();
                arr.push(temp);
                console.log(arr)
            }
            else if(count === 3) {
                arr.shift();
                count = 0;
                console.log(arr)
            }
            
        }
        answer = arr[0];
        return answer;
    }

    console.log(solution(8, 3));
})();