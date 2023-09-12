import ProductCard from '../components/ProductCard';

interface User{
    id:number;
    name:string;
    email:string;
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-store'});
     const users: User[] = await res.json();
    return (
        <div>
<div><ProductCard/></div>
    <h1>Users Page</h1> 
    <p>{new Date().toLocaleTimeString()}</p>
     <table className='table table-bordered'>
        <thead>
            <tr>
                <th>UserName</th>
                <th>UserEmail</th>
            </tr>
        </thead>
        <tbody>     {users.map((user) =><tr key ={user.id}><td>{user.email}</td><td>{user.name}</td></tr>)}</tbody>

     </table>
         </div>

    )
}
export default UsersPage