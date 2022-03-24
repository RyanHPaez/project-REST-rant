const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
              <a href="/places">
                <link rel = "stylesheet" href = "/css/style.css"/>
  <button className="btn-primary">Places Page</button>
</a>
          </main>
      </Def>
    )
  }

module.exports = home

