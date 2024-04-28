import React from 'react'




const Card = ({title, image, description}) => {
  return (
    <div>
     <img className=' w-[200px] ' src={image} alt={title}/>
    </div>
  )
}



const Row = ({title,arr =[
  {
    img:"https://imgs.search.brave.com/UNlLTluyKGd0P_bYMRP_ggFN34HH3nDQR9xmUA-ANyc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mci53/ZWIuaW1nNC5hY3N0/YS5uZXQvY18zMDBf/MzAwL2ltZy9kZS8y/NC9kZTI0YzgyNTAz/OGU4YzE1MTMwZTI4/OTU3ZmQ1YTgzMy5q/cGc"
  }
]}) => {
  return (
    <div>
      <h2 className='m-2'>{title}</h2>
      <div className='flex'>
      {

      arr.map((item) => ( 
        <>

        <Card title={item.title} image={item.img} description={item.description}/>
   
        </>
      ))
      }
      </div>
    </div>
  )
}



const Home =() => {
  return (
    <section>

    <Row title="Popular On Netflix"/>
    <Row title="Tv Shows"/>
    <Row title="Recently Viwed"/>
    <Row title="My List"/>
 


</section>
  )
}







export default Home;

