// 뮤직비디오(결정 알고리즘)

(()=> {
    function count(arr, capa) {
        let cnt = 1, sum = 0;
        for(let x of arr) {
            if(sum + x > capa){
                cnt++;
                sum = x;
            }
            else sum += x;
        }

        return cnt;
    }

    function solution(num, arr) {
        let answer;
        let lt = Math.max(...arr);
        let rt = arr.reduce((prev, current) => prev + current);

        while(lt<=rt) {
            let mid = parseInt((lt + rt) / 2);
            if(count(arr, mid) <= num) {
                answer = mid;
                rt = mid - 1;
            }
            else lt = mid + 1;
        }


        return answer;
    }
    let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(solution(3, arr));
})();