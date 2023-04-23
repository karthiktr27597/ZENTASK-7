let palindrome = [1,2,3,4,5,26,99,71,67,33,17,27,39];

let prime = (palindrome)=>{
    let i=0;
    let arr=[];
    while(i<palindrome.length) {
        let flag=0;
        for(let j=2; j<=palindrome[i]/2; j++)
        {
            if(palindrome[i]%j === 0)
            {
                flag++;
                break;
            }
        }
        if(flag === 0) {
         arr.push(palindrome[i]);
        }
        i++;
    }
    return arr.join();
}

console.log(prime(input));