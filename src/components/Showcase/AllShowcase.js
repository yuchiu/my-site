import React from 'react'
import $ from 'jquery';

class AllShowcase extends React.Component {
  componentDidUpdate() {
    if(this.props.category)
    console.log("on Allshowcase: "+this.props.category)
    else
    console.log('on AllShowcase: no category props')
    $('.all').hide("");
    setTimeout(() => {
      
      $(`.${this.props.category}`).show("");
  }, 700);

  }

  render() {
    return (
      <div>
        <div id="all-showcase">
          <div className="content">
            <div className="thumbnail all frontend">
              <div className="pic" id="pic1"></div>
              <div className="desc">
                <h2 >Netflix Clone</h2>
                <p >ReactJS ∙ Redux ∙ Scss ∙ tmdb API</p>
                <a
                  href="https://github.com/yuchiu/React-Redux-Netflix-Clone"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a href="http://netflix-react.surge.sh/" target="_blank" className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>
            <div className="thumbnail all frontend backend">
              <div className="pic" id="pic27"></div>
              <div className="desc">
                <h2 >Recipe Sharing App</h2>
                <p >VueJS ∙ ExpressJS ∙ Sequelize ∙ SQLite</p>
                <a
                  href="https://github.com/yuchiu/Recipe-Sharing-App"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a href="http://recipesharingapp.surge.sh/" target="_blank" className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>

            <div className="thumbnail all frontend">
              <div className="pic" id="pic2"></div>
              <div className="desc">
                <h2 >Venues Finder</h2>
                <p >ReactJS ∙ Redux ∙ GoogleMap ∙ foursquare API</p>
                <a
                  href="https://github.com/yuchiu/React-Redux-Venues-Finder"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a href="https://venues-finder.surge.sh/" target="_blank" className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>

            <div className="thumbnail all frontend">
              <div className="pic" id="pic5"></div>
              <div className="desc">
                <h2 >Image Upload App</h2>
                <p >React ∙ Redux ∙ Firebase</p>
                <a
                  href="https://github.com/yuchiu/React-Redux-Recipe-App"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a href="http://recipe-app.surge.sh/" target="_blank" className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>

            <div className="thumbnail all frontend">
              <div className="pic" id="pic14"></div>
              <div className="desc">
                <h2>Real Time Chat CDN</h2>
                <p>ReactJS ∙ Redux ∙ Firebase</p>
                <a
                  href="https://github.com/yuchiu/React-Chat-Plugin"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a href="https://chat-plugin.surge.sh/" target="_blank" className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>

            <div className="thumbnail all frontend">
              <div className="pic" id="pic7"></div>
              <div className="desc">
                <h2 >Calculator</h2>
                <p>JS ∙ jQuery ∙ CSS</p>
                <a
                  href="https://github.com/yuchiu/js-calculator"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a
                  href="https://yuchiu.github.io/js-calculator/"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>

            <div className="thumbnail all frontend">
              <div className="pic" id="pic9"></div>
              <div className="desc">
                <h2 >Simon's Game</h2>
                <p>JS ∙ jQuery ∙ CSS</p>
                <a
                  href="https://github.com/yuchiu/simon-game"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a
                  href="https://yuchiu.github.io/simon-game/"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>

            <div className="thumbnail all frontend">
              <div className="pic" id="pic16"></div>
              <div className="desc">
                <h2 >Random Quote Machine</h2>
                <p>JS ∙ jQuery ∙ CSS</p>
                <a
                  href="https://github.com/yuchiu/random-quote-machine"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a
                  href="https://yuchiu.github.io/random-quote-machine/"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>

            <div className="thumbnail all frontend">
              <div className="pic" id="pic3"></div>
              <div className="desc">
                <h2 >Pomodoro Timer</h2>
                <p>JS ∙ CSS</p>
                <a
                  href="https://github.com/yuchiu/tomato-clock"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a
                  href="https://yuchiu.github.io/tomato-clock/"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>

            <div className="thumbnail all frontend">
              <div className="pic" id="pic28"></div>
              <div className="desc">
                <h2 >Twitch Online Status</h2>
                <p>JS ∙ jQuery ∙ CSS ∙ Twitch API</p>
                <a
                  href="https://github.com/yuchiu/twitch-JSON-API"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a
                  href="https://yuchiu.github.io/twitch-JSON-API/"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>

            <div className="thumbnail all frontend">
              <div className="pic" id="pic4"></div>
              <div className="desc">
                <h2 >Conway's Game of Life</h2>
                <p>JS</p>
                <a
                  href="https://github.com/yuchiu/game-of-life"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a
                  href="https://yuchiu.github.io/game-of-life/"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>

            <div className="thumbnail all frontend">
              <div className="pic" id="pic22"></div>
              <div className="desc">
                <h2>Force Directed Graph</h2>
                <p>React ∙ D3</p>
                <a
                  href="hhttps://github.com/yuchiu/Force-Graph-React-D3"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a href="https://d3-forcegraph.surge.sh/" target="_blank" className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>

            <div className="thumbnail all frontend">
              <div className="pic" id="pic21"></div>
              <div className="desc">
                <h2>GDP Bar Chart</h2>
                <p>JS ∙ D3</p>
                <a
                  href="https://github.com/yuchiu/GDP-barchart-d3"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a
                  href="https://yuchiu.github.io/GDP-barchart-d3/"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>
            <div className="thumbnail all frontend">
              <div className="pic" id="pic6"></div>
              <div className="desc">
                <h2 >Weather App</h2>
                <p>JS ∙ jQuery ∙ Open Weather API</p>
                <a
                  href="https://github.com/yuchiu/show-the-weather"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a
                  href="https://yuchiu.github.io/show-the-weather/"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>

            <div className="thumbnail all frontend">
              <div className="pic" id="pic11"></div>
              <div className="desc">
                <h2>Boostrap Page</h2>
                <p>Bootstrap</p>
                <a
                  href="https://github.com/yuchiu/bootstrap-conf"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a
                  href="https://yuchiu.github.io/bootstrap-conf/"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>

            <div className="thumbnail all frontend">
              <div className="pic" id="pic20"></div>
              <div className="desc">
                <h2 >Wiki Viewer</h2>
                <p>JS ∙ Bootstrap4 ∙ Wiki API</p>
                <a
                  href="https://github.com/yuchiu/wiki-viewer"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a
                  href="https://yuchiu.github.io/wiki-viewer/"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>

            <div className="thumbnail all frontend">
              <div className="pic" id="pic31"></div>
              <div className="desc">
                <h2 >Tic Tac Toe</h2>
                <p>JS</p>
                <a
                  href="https://github.com/yuchiu/tic-tac-toe"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a
                  href="https://yuchiu.github.io/tic-tac-toe/"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>

            <div className="thumbnail all frontend">
              <div className="pic" id="pic32"></div>
              <div className="desc">
                <h2 >Rotating Cube</h2>
                <p>CSS</p>
                <a
                  href="https://github.com/yuchiu/rotating-cube"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a
                  href="https://yuchiu.github.io/rotating-cube/"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>

            <div className="thumbnail all backend">
              <div className="pic" id="pic26"></div>
              <div className="desc">
                <h2 >URL Shortener API</h2>
                <p>NodeJS ∙ ExpressJS ∙ Mongoose ∙ MongoDB</p>
                <a
                  href="https://github.com/yuchiu/URL-Shortener-Microservice"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
              </div>
            </div>

            <div className="thumbnail all backend">
              <div className="pic" id="pic23"></div>
              <div className="desc">
                <h2 >Timestamp API</h2>
                <p>NodeJS ∙ ExpressJS</p>
                <a
                  href="https://github.com/yuchiu/Timestamp-MicroService"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a
                  href="https://timestamp-yuchiu.herokuapp.com/"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>
            <div className="thumbnail all backend">
              <div className="pic" id="pic24"></div>
              <div className="desc">
                <h2 >Request Header Parser API</h2>
                <p>NodeJS ∙ ExpressJS</p>
                <a
                  href="https://github.com/yuchiu/Request-Header-Parser-Microservice"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a
                  href="https://headerparser-yuchiu.herokuapp.com/"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>
            <div className="thumbnail all backend">
              <div className="pic" id="pic25"></div>
              <div className="desc">
                <h2 >File Metadata API</h2>
                <p>NodeJS ∙ ExpressJS</p>
                <a
                  href="https://github.com/yuchiu/File-Metadata-Microservice"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>Github</a>
                <a
                  href="https://filemetadata-yuchiu.herokuapp.com/"
                  target="_blank"
                  className="a-tag-btn sandy-two">
                  <i className="fa fa-external-link"></i>View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AllShowcase