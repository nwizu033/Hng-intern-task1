import React from 'react'
import avatar from './profile__img.png'
import { FaEllipsisH } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='main-section'>
        <div className='profile-section'>
          <FaEllipsisH id='menu_icon'/>
          <p id='share'/>
          <img src={avatar} id='profile__img'/>
          <p id='twitter'>Chinwizu</p>
          <p id='slack'>Chinwizu Anthony</p>
        </div>

        <div className='link-section'>
          <a href='https://twitter.com/chinwizu'>Twitter Link</a>
          <a href='https://training.zuri.team/' id='btn__zuri'>Zuri Team</a>
          <a href=' http://books.zuri.team ' id='books'>Zuri Books</a>
          <a href='https://books.zuri.team/python-for-beginners?ref_id=chinwizuanthony' id='book__python'>Python Books</a>
          <a href='https://background.zuri.team' id='pitch'>Background Check for Coders</a>
          <a href='https://books.zuri.team/design-rules ' id='book__design'>Design Books</a>
          <Link to='/contact' id='contact'>Contact Me</Link>
        </div>

        <div className='social-section'>
            <p id='slack_icon'/>
            <p id='github_icon'/>
        </div>

      </div>
  )
}

export default Home