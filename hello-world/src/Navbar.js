import { Link, useNavigate } from 'react-router-dom'
export default function Navbar(){
    const navigate = useNavigate();
    return <>
        <Link to='/'> Dashboard</Link> <br/>
        <Link to='/about'> About</Link> <br/>
        <Link to='/login'> LogIn </Link> <br/>
        <Link to='/product'> Product </Link> <br/>
        <button onClick={()=> navigate('/')}>Go to Dashboard</button>
    </>
}