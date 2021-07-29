import {useState, useEffect} from 'react';
import people from '../images/people.jpg';

export default () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [download, setDownload] = useState(true);
    const handleClick = (e) => {
        e.preventDefault();

        if(name === '' || email === '' || password === '')
        console.log('you havent entered data');
        else{
            console.log(name, email, password);
            setName('');
            setEmail('');
            setPassword('');
            setDownload(prevState => !prevState);
        }
       
    }
    return (
        <>
            <div className="form-box">
                <div className="card">
                    <div className="card-image">
                        <img src={people} />
                    </div>
                    <div className="card-body">
                        <input text placeholder='Name' onChange={e => setName(e.target.value)} value={name}/>
                        <input text placeholder='Email' onChange={e => setEmail(e.target.value)} value={email}/>
                        <input text placeholder='Password' onChange={e => setPassword(e.target.value)} value ={password}/>
                        <button className="btn" onClick={handleClick}>{download? 'Download a Sample' : 'Sample Downloaded'}</button>

                    </div>
                </div>
            </div>
        </>
    )
}