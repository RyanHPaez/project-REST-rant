const React = require('react')

//stub function
function Def (html) {}

//def function
module.exports = Def

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }