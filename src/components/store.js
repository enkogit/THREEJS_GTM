import React from "react";

export function Store() {
  return (
    <div className="container">
      <p className="bottom-space-md" />
      <div className="token__section">
        <div className="token__wrapper">
          <div className="token__container-card">
            <div className="token__container-cardInfo">
              <div className="row">
                <div className="col">
                  <div
                    className="row"
                    style={{ flexFlow: "row", alignItems: "center" }}
                  >
                      <img
                        src="images/web/spaceman.png"
                        width="75px"
                        alt=""
                        style={{ marginTop: "-5px" }}
                      />
                  </div>
                </div>
                <div className="col">
                  <div
                    className="row"
                    style={{ flexFlow: "row", alignItems: "center" }}
                  >
                    <h2
                      style={{
                        display: "flex",
                        fontSize: "55px",
                        fontWeight: "800",
                        textAlign: "center",
                      }}
                    >
                      MERCH
                    </h2>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="row"
                    style={{ flexFlow: "row", alignItems: "center" }}
                  >
                      <img
                        src="images/web/spacewoman.png"
                        width="75px"
                        alt=""
                        style={{ marginTop: "-5px" }}
                      />
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ flexFlow: "column" }}>
              <h2
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  textAlign: "justify",
                  letterSpacing: "0.15em",
                  margin: "5px",
                }}
              >
                We've got the dopest doge merch you'll find anywhere on the
                internet! If you're a fan of the lovable Shiba Inu with the big
                personality, you're in the right place. We've got everything you
                need to show off your love for doge, from t-shirts and hoodies
                to hats and stickers. Our doge-themed merchandise is sure to
                turn heads and make people ask, "Where'd you get that dope doge
                gear?" But that's not all! We've also got a wide selection of
                doge-themed gifts and accessories that will blow your mind, like
                plush toys, mugs, and even rugs (NOT pulls). We promise you
                won't be disappointed (unless you hate doge, in which case,
                sorry bro).
              </h2>
              <div
                    className="row"
                    style={{ flexFlow: "row", alignItems: "center" }}
                  >
                    <div className="flip">
                      <img
                        src="images/web/doge_dance.gif"
                        width="50px"
                        alt=""
                        style={{ marginTop: "-5px" }}
                      />
                    </div>
                  </div>
              <h2
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  textAlign: "center",
                  letterSpacing: "0.25em",
                  margin: "5px",
                }}
              >
                click to check out the stuff
              </h2>
              <div className="float-div">
                <h2
                  style={{
                    fontSize: "25px",
                    fontWeight: "100",
                    textAlign: "center",
                    margin: "5px",
                  }}
                >
                  ↡
                </h2>
              </div>
              <div className="row">
                <div className="col">
                  <a href="https://store.doge-1.org" className="btn effect04">
                    <h2
                      style={{
                        fontSize: "15px",
                        fontWeight: "500",
                        textAlign: "center",
                        letterSpacing: "0.25em",
                        margin: "5px",
                      }}
                    >
                      STORE.DOGE-1.ORG
                    </h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
