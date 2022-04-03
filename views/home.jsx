const React = require("react");
const Default = require("./default");

function home() {
  return (
    <Default>
      <main>
        <h1>REST-Rants</h1>
        <div>
          <img
            src="https://popmenucloud.com/cdn-cgi/image/width=640,height=640,format=png,fit=scale-down/rjspvfeg/ab3dce7e-345e-400a-a385-6ce873711cf6.jpg"
            alt="Chia Fruit Shake"
            style={{ width: 800 }}
          />
          <div>
            Photo by{" "}
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
              Ryan Paez
            </a>{" "}
            on{" "}
            <a href="https://insideecology.com/2018/06/21/a-closer-look-at-spider-webs/">
              The Web!
            </a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Default>
  );
}

module.exports = home;
