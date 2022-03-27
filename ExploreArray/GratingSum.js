// 격자판 합 구하기

(()=> {
    function solution(arr) {
        let answer = 0;
        let n = arr.length;
        let col, row;
        let xline1 = 0;
        let xline2 = 0;

        for(let i = 0; i< arr.length; i++) {
            col = 0;
            row = 0;
            for(let j = 0; j < arr.length; j++) {
                col += arr[i][j];
                row += arr[j][i];
            }
            
            // answer = Math.max(answer, col, row);
            // console.log(`${i} : ${col}, ${row}, ${answer}`);
        }

        for(let i = 0; i< arr.length; i++) {
            xline1 += arr[i][i];
            xline2 += arr[i][n-1-i];
            answer = Math.max(answer, xline1, xline2);
        }
        

        


        return answer;
    }

    let arr=[[10, 13, 10, 12, 15], 
            [12, 39, 30, 23, 11],
            [11, 25, 50, 53, 15],
            [19, 27, 29, 37, 27],
            [19, 13, 30, 13, 19]];
    console.log(solution(arr));
})();