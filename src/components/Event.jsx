import React from 'react'
import './sass/Event.scss'

const Event = () => {
    return (
        <section id="eventos" className="event-list">
        <div className="container">
          <article className="event">
            <figure className="event-imageContainer">
              {/* <img className="event-image" src="images/platzi-conf.jpg" width="500" /> */}
            </figure>
            <div className="event-detail">
              <h3 className="event-title">PlatziConf México 2018</h3>
              <p className="event-description">El evento más grande sobre gente que quiere aprender más de internet. En esté evento te comparto como tener una vida de constante aprendizaje.</p>
              <a className="event-url" href="https://www.youtube.com/watch?v=BIS7cWGgJg0" rel="noopener" target="_blank">Ver Plática</a>
            </div>
          </article>
          <article className="event">
            <figure className="event-imageContainer">
              <div className="flexible-video">
                {/* <iframe className="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/LoKvxCSZw5w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
              </div>
                {/* <img className="event-image" src="images/platzi-conf.jpg" width="500" /> */}
            </figure>
            <div className="event-detail">
              <h3 className="event-title">PlatziConf México 2018</h3>
              <p className="event-description">El evento más grande sobre gente que quiere aprender más de internet. En esté evento te comparto como tener una vida de constante aprendizaje.</p>
              <a className="event-url" href="https://www.youtube.com/watch?v=BIS7cWGgJg0" rel="noopener" target="_blank">Ver Plática</a>
            </div>
          </article>
          <article className="event">
            <figure className="event-imageContainer">
              <video className="html-video" src="videos/f8.mp4" width="1280" height="720" controls></video>
                {/* <img className="event-image" src="images/platzi-conf.jpg" width="500" /> */}
            </figure>
            <div className="event-detail">
              <h3 className="event-title">PlatziConf México 2018</h3>
              <p className="event-description">El evento más grande sobre gente que quiere aprender más de internet. En esté evento te comparto como tener una vida de constante aprendizaje.</p>
              <a className="event-url" href="https://www.youtube.com/watch?v=BIS7cWGgJg0" rel="noopener" target="_blank">Ver Plática</a>
            </div>
          </article>
          <article className="event">
            <figure className="event-imageContainer">
              {/* <img className="event-image" src="images/platzi-conf.jpg" width="500" /> */}
            </figure>
            <div className="event-detail">
              <h3 className="event-title">PlatziConf México 2018</h3>
              <p className="event-description">El evento más grande sobre gente que quiere aprender más de internet. En esté evento te comparto como tener una vida de constante aprendizaje.</p>
              <a className="event-url" href="https://www.youtube.com/watch?v=BIS7cWGgJg0" rel="noopener" target="_blank">Ver Plática</a>
            </div>
          </article>
        </div>
      </section>
    )
}

export { Event } 
