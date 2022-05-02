// 회의실 배정

(()=> {
    function solution(arr) {
        let answer = 1;
        let endTime = 0;

        arr.sort((a, b) => {
            if(a[1] === b[1]) return a[0] - b[0];
            else return a[1] - b[1];
        })

        console.log(arr);

        for(let i of arr) {
            if(!endTime) endTime = i[1];
            else {
                if(endTime <= i[0]) {
                    endTime = i[1];
                    answer++;
                }
            }
        }


        return answer;
    }

    let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
    let arr2 = [[3, 3], [1, 3], [2, 3]];
    console.log(solution(arr));
    console.log(solution(arr2));
})();