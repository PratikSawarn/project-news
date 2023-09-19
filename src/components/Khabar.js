import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import NavBar from './NavBar'

const Khabar=(props)=> {
    const [articles,setarticles]=useState([])
    const [totalResults,settotalResults]=useState()
    const [page,setpage]=useState(1)

    const updateNews=async()=>{
        let url=`https://newsapi.org/v2/everything?q=${props.category}&sortBy=publishedAt&apiKey=efab1f5a24cb4e5b8c5e5d9598fad213&pageSize=${props.pageSize}&page=${page}`;
        let data= await fetch(url);
        let parsedData= await data.json();
        console.log(parsedData);
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        
    }
    useEffect(()=>{
        updateNews();
    }
    )


    const handelPrevclick=async()=>{
        setpage(page-1)
        updateNews();
    }

    const handelNextclick=async()=>{
        setpage(page+1)
        updateNews();
    }

  
    return (
    <>
        <NavBar/>
        <div className='container my-3'>
            <h2>Top - Headlines</h2>
            <div className='row'>
                {articles.map((element)=>{
                    return <div className='col-md-4' key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                    })
                }
            </div>
            <div className='container d-flex justify-content-between my-3'>
                <button disabled={page<=1} type='button' className='btn btn-dark' onClick={handelPrevclick}>&larr; Previous</button>
                <button disabled={page+1>Math.ceil(totalResults/props.pageSize)} type='button' className='btn btn-dark' onClick={handelNextclick}>Next &rarr;</button>
            </div>
        </div>
    </>
    )
    
  
}
Khabar.defaultProps={
    country:'in',
    pageSize:6,
    category:'general',
}
Khabar.propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
}

export default Khabar