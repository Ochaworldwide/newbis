import React from 'react'
import Books from '../components/Books'



const AuthorProfile = () => {
  return (
    <div>

      <div className="profile-header">
        <h1>
          Author Profile
        </h1>
      </div>

      <div className="authorPage-body">
        <div className="author-details">
          <div className="author-img"></div>
          <div className="author-info">
            <h1>Mathew</h1>
            <p>Uyo, Nigeria</p>
            <h1>About</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur. Tempus habitant amet tempor amet integer urna.
             Nunc purus erat volutpat placerat ultrices tincidunt sed diam eu. Cursus nisl 
             sit vitae viverra erat. Tincidunt sit ultricies nunc at morbi.
            Elit semper faucibus eu sed amet molestie quisque sit dis. Ut sagittis sit 
            volutpat purus molestie tellus nulla. Imperdiet aenean aenean sit pretium sit
            blandit. Turpis id amet amet lorem. At pellentesque ac nunc purus massa vitae vitae.
            Integer suspendisse in etiam turpis lacus cras sem. Et eleifend id urna scelerisque.
            Consequat vitae id senectus congue. Id cursus sed est sed mauris curabitur. 
            Sit justo tellus faucibus vitae tincidunt sapien tortor volutpat.
            Consectetur nibh mollis feugiat maecenas cras. Nec enim amet tempor
            pharetra ultricies quam cum. Bibendum suspendisse dictumst ligula 
            lectus vitae lectus. Feugiat amet diam diam magna neque.
            </p>
          </div>
        </div>

        <div className="book-count">
          <h5>BOOKS</h5>

          <h5>15 BOOKS</h5>
        </div>


        <Books />

        <Books />

        <Books />

       
      </div>




    </div>
  )
}

export default AuthorProfile