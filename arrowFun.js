//1.  print odd number

let input = [4,7,10,15,30,19,45,74,99]
// let input = [2,4,6,88,98,91]

let oddNumber = (input) => {
for(let i of input)
{
    if(i%2 !== 0)
    {
        console.log(i);
    }
}
}
oddNumber(input);


//2.  Convert all the strings to title caps in a string array

let strArray = ['kuMar', 'karti', 'ROSE', 'red', 'numbeR']

let titleCap = (strArray) => {
    for(let i=0; i<strArray.length; i++) {
        strArray[i] =  strArray[i].toLowerCase();
        strArray[i] = strArray[i].charAt(0).toUpperCase()+strArray[i].slice(1);
    }
    return strArray;
}
console.log(titleCap(strArray));

// 3.  Sum of all numbers in an array

let arr = [5,10,15,25,35,40,100];
//let input = [1,2,3,4,5];

(()=> {
    let i=0;
    let sum=0;
    while(i<arr.length) {
        sum=sum+arr[i]
        i++;
    }
    console.log('Sum of all number is',sum);
})();

//4. Return all the palindromes in an array

//let input = [5,10,15,25,35,40,100];
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

console.log(prime(palindrome));

//5.  Return all the palindromes in an array

let input1 = [26,99,33,17,'kak','num','rotator','noon']
// let input =[12, 15, 25, 111, 5555, 'mom']

let palindrome1 = (input1)=> {
    let i=0;
    let ans="";
    while(i<input1.length) {
      let temp="";
      temp=temp+input1[i];
      let flag=0;
      for(let j=0; j<temp.length; j++)
      {
         if(temp[j] == temp[temp.length-1-j])
         {
            flag++;
         }
         else
         {
            break;
         }
      }
        if(flag === temp.length) {
         ans=ans+input1[i]+" ";
        }
        i++;
    }
    if(ans.length>0)
    {
        return ans.trimEnd();
    }
    else
    {
        return 'No Palindrome found'
    }
}
console.log(palindrome1(input1));