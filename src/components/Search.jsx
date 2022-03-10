import axios from 'axios';
import React , { useState, useEffect }from 'react';

const Search = () => {
    const [term, setTrem] = useState('');
    const [results,setResults] = useState([]);

    useEffect(()=>{

        const Search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })            
            setResults(data.query.search);
        }
        const timeoutId = setTimeout(()=>{
            if(term){
                Search();
            }
        },500)
        return ()=>{            
            clearTimeout(timeoutId)
        }


    },[term])

    const renderdResults = results.map( (result) => {
        return (
            <div className='item' key={result.pageid}>
                <div className='right floated content'>
                    <a
                     className='ui button'
                     href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>                    
                </div>
            </div>
        );
    })

    return ( 
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Search something...</label>
                    <input value={term} onChange={ e => setTrem(e.target.value)} type="text" className='input'/>
                </div>
            </div>
            <div className='ui celled list'>
                {renderdResults}
            </div>
        </div>
    );
}
 
export default Search;