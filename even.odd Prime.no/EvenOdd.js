const EvenOdd=()=>{
const evenodd=()=>{
    let number = parseInt(prompt("Enter a  number: "));
    if(number%2==0)
    {
        console.log(`${number} is a even number`);
    }
    else
    {
        console.log(`${number} is not a even number`);
    }
}
    return(<div>
        <button onClick={evenodd}>evenn</button>
    </div>)
}
export default EvenOdd;