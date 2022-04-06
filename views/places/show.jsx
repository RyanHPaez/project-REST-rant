const React = require("react");
const Default = require("../default");

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
  return (
      <Default>
        <main>
          <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            {/* ... */}
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
            <a
              href={`/places/${data.place.id}/edit`}
              className="btn btn-warning"
            >
              Edit
            </a>
            {` `}
            <form
              method="POST"
              action={`/places/${data.place.id}?_method=DELETE`}
            >
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
            <div>
                {/* needs comment box */}
              <h2>Comments</h2>
              <div className="row"></div> 
            </div>
          </div>
        </div>
      </main>
    </Default>
  );
}

module.exports = show;
