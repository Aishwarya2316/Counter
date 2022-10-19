//import { Label } from "@mui/icons-material";
import './counter1.css';
const Counter1 = () => {
    console.log("clicked");
    let count = 0;
    function clickcounter() {
        ++count;
        console.log("count =", count);
    }
    return (
        <>
            <p className='p11'>Without Hook</p>
            <button className="b11"  onClick={clickcounter}>increse by 1</button>
        </>
    )
}

export default Counter1;