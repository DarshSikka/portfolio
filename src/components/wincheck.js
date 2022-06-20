export default function winCheck(arr){
console.log(arr);
const cases = [
    {
        condition: arr[0]===arr[1]&& arr[0]===arr[2],
        winner: arr[0]
    }, 
    {
        condition: arr[3]===arr[4]&& arr[3]===arr[5],
        winner: arr[3]
    }, 
    {
        condition: arr[6]===arr[7]&& arr[6]===arr[8],
        winner: arr[6]
    }, 
    {
        condition: arr[0]===arr[3] && arr[0]===arr[6],
        winner: arr[0]
    }, 
    {
        condition: arr[1]===arr[4] && arr[1]===arr[7],
        winner: arr[1]
    }, 
    {
        condition: arr[2]===arr[5] && arr[2]===arr[8],
        winner: arr[2]
    },
    {
       condition: arr[0]===arr[4] && arr[0]===arr[8],
       winner: arr[0]
    }, 
    {
        condition: arr[2]===arr[4] && arr[2]===arr[6],
        winner: arr[2]
    }
]
console.log(cases);
const conditions = cases.map(ele=>ele.condition);
const index = conditions.indexOf(true);
if(index===-1){
    return ""
}
else {
    return cases[index].winner;
}
}