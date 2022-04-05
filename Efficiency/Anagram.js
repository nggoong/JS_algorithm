// 아나 그램
(()=> {
    function solution(arr1, arr2) {
        let answer = 'YES';
        let str1 = new Map();
        let str2 = new Map();

        for(let i of arr1) {
            if(str1.has(i)) {
                str1.set(i, str1.get(i) + 1);
            }
            else {
                str1.set(i, 1);
            }
        }
        console.log(str1);

        for(let i of arr2) {
            if(str2.has(i)) {
                str2.set(i, str2.get(i) + 1);
            }
            else {
                str2.set(i, 1);
            }
        }

        console.log(str2);

        for(let entry of str1) {
            let [key, value] = entry;
            if(!str2.has(key)) answer='NO';
            else {
                if(str2.get(key) !== value) {
                    answer='NO';
                    break;
                }
            }
        }
        return answer;
    }

    let a="AbaAeCe";
    let b="baeeACA";
    let c='AbaAeCe';
    console.log(solution(a, c));
})();