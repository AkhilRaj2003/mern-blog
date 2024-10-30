import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const Postdetail = () => {
  return (
   <section className="post-detail">
    <div className="container post-detail__container">
      <div className="post-detail__header">
        <PostAuthor />
        <div className="post-detail__buttons">
          <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
          <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
        </div>
      </div>
      <h1>This is the post title!</h1>
      <div className="post-detail__thumbnail">
        <img src={Thumbnail} alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nostrum tempore temporibus amet porro, sunt deleniti explicabo, 
        quam corrupti, qui minus iusto. Nemo dolores laudantium, ratione,
        aperiam nobis asperiores adipisci vero sint quia iste eligendi,
        libero veniam ipsum non inventore officia.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Quia, minus eligendi! Obcaecati, labore adipisci necessitatibus pariatur quae vero.
          Molestias consectetur commodi animi, iste nisi asperiores esse magni fugit nesciunt cumque sequi reprehenderit,
           est eos amet. Consequatur cum asperiores cumque repellendus nihil labore,
         nam harum aliquam dolorem quibusdam tenetur ducimus iusto?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Iusto vitae dicta magni nemo. In distinctio minima corporis, quas molestias ipsam aliquam,
         sed dolores ad laboriosam neque rerum quis praesentium.
         Corporis alias odio eligendi, sequi quia dolore aspernatur doloribus quasi commodi magnam sit,
          necessitatibus autem nihil illo saepe rem maxime iusto fugiat repellat itaque earum labore dicta quos! 
          Nulla culpa corporis fugit! Veniam cumque ipsum quas delectus inventore ut sapiente ex, laborum 
          voluptates est laboriosam nobis voluptas quod possimus temporibus alias ea rem nulla fuga aliquam. 
        Qui quae ea vitae laboriosam incidunt deleniti officia voluptatibus, at officiis sapiente nesciunt rerum culpa.
      </p>
    </div>
      
    
   </section>
  )
}

export default Postdetail
