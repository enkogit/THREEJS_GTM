import React from "react";
import { TokenBanners } from "./sub/token_banners";

export function Token() {
  return (
    <div className="container">
      <p className="bottom-space-sm" />
      <div className="token__section">
        <div className="token__wrapper">
          <div className="token__container-card">
            <div
              className="token__container-cardInfo"
              style={{ height: "200px" }}
            >
              <p className="bottom-space-sm" />
              <div className="row" style={{ flexFlow: "column" }}>
                <div
                  className="row"
                  style={{
                    display: "flex",
                    flexFlow: "column",
                    alignItems: "center",
                  }}
                >
                  
                  <img
                    src="images/web/solana1.png"
                    width="150px"
                    alt="bscscan-logo"
                  />
                </div>
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    textAlign: "center",
                    letterSpacing: "0.75em",
                    margin: "20px 20px 20px 20px",
                  }}
                >
                  <i>MEME</i><b>TOKEN</b>
                </h2>
                <h2
                  style={{
                    fontSize: "35px",
                    fontWeight: "500",
                    textAlign: "center",
                    letterSpacing: "0.5em",
                    margin: "5px",
                  }}
                >
                  <i>WHITE</i> PAPER
                </h2>
              </div>
            </div>
            <div className="bottom-space-sm" />

            <div className="bottom-space-sm" />
            <div
              className="row"
              style={{ flexFlow: "row", alignItems: "center" }}
            >
              <div className="col">
                <h3
                  style={{
                    fontSize: "19px",
                    margin: "0px 0px 0px 0px",
                    opacity: 1,
                    letterSpacing: "0.35em",
                  }}
                >
                  0% BUY
                </h3>
              </div>
              <div className="col">
                <h3
                  style={{
                    fontSize: "19px",
                    margin: "0px 0px 0px 0px",
                    opacity: 1,
                    letterSpacing: "0.35em",
                  }}
                >
                  &emsp;|&emsp;
                </h3>
              </div>
              <div className="col">
                <h3
                  style={{
                    fontSize: "19px",
                    margin: "0px 0px 0px 0px",
                    opacity: 1,
                    letterSpacing: "0.35em",
                  }}
                >
                  SELL 0%
                </h3>
              </div>
            </div>
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col">
              </div>
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                flexFlow: "column",
                alignItems: "center",
              }}
            >
              <div className="mobile-shrink">
                <img
                  src="images/web/allocation.png"
                  width="350px"
                  alt="chart"
                />
              </div>
            </div>
            <div className="bottom-space-md" />
            <div className='row' style={{flexFlow:'column'}}>
          <div className='col'>
            <img src="images/web/doge_spin.gif" width="45px" alt="" style={{margin:'-15px'}} />
          </div>
        </div>

            <p className="bottom-space-xsm" />
            <div className="token__container">
            </div>
            <p className="bottom-space-sm" />
            <div className="row" style={{ flexFlow: "column" }}>
              <h2
                style={{
                  fontSize: "15px",
                  fontWeight: "200",
                  textAlign: "center",
                }}
              >
                READY TO JOIN US ON SOL?
              </h2>
            </div>

            <div className="row">
              <TokenBanners />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
