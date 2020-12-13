import React from 'react'

export default function Projects() {
  return (
    <div id="projects">
      <h2 className="title">Selected Projects</h2>
      <div className="container">

        <div className="card">
          <div className="face face1">
            <div className="content">
              <h2>HoopsCard</h2>
              <p>Collect virtual basketball cards and customize each with a player-specific skills section.</p>
              <p>Tech Stack: React, Styled Components, Ruby on Rails, PostgreSQL, Netlify</p>
              <a href="https://hoops-card.netlify.app/" target="_blank" rel="noopener noreferrer">Go to Site</a>
              <a href="https://github.com/mikanur10/Hoops-Card" target="_blank" rel="noopener noreferrer">Go to GitHub</a>
            </div>
          </div>
          <div className="face face2" id="bg_1">
            {/* <h2>HoopsCard</h2> */}
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <h2>Virtual Collective</h2>
              <p>A virtual meeting place where fans and admirers can come together for virtual artistic events.</p>
              <p>Tech Stack: React, CSS, Node.js, Express.js, PostgreSQL, Heroku</p>
              <a href="https://virtualcollective.netlify.app/" target="_blank" rel="noopener noreferrer">Go to Site</a>
              <a href="https://github.com/mikanur10/Virtual-Collective" target="_blank" rel="noopener noreferrer">Go to GitHub</a>
            </div>
          </div>
          <div className="face face2" id="bg_2">
            {/* <h2>Virtual Collective</h2> */}
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <h2>What-cha-Think</h2>
              <p>Review app for sports, movies and television. Users can post or delete reviews on each respective category page. Styling inspired by mid-90s Nickelodeon.</p>
              <p>Tech Stack: React, Styled Components, Netlify, Airtable DB",overview:</p>
              <a href="https://jolly-kare-8a9826.netlify.app/" target="_blank" rel="noopener noreferrer">Go to Site</a>
              <a href="https://github.com/mikanur10/What-cha-Think/tree/main/cha-think" target="_blank" rel="noopener noreferrer">Go to GitHub</a>
            </div>
          </div>
          <div className="face face2" id="bg_3">
            {/* <h2>What-cha-Think</h2> */}
          </div>
        </div>
      </div>

    </div>
  )
}