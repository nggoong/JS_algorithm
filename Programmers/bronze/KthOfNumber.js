(()=> {
    function solution(array, commands) {
        var answer = [];
        for(let i of commands) {
            let [from, to, k] = i;
            temp = array.slice(from - 1, to);
            temp = temp.sort(function(a,b){
                return a-b;
            });
            console.log(temp)
            answer.push(temp[k-1]);
        }
        
        return answer;
    }
    console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))
})();