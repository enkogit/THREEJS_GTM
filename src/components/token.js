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
                    src="images/web/bsc1.png"
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
                    margin: "5px 5px 5px 15px",
                  }}
                >
                  <i>BEP-</i><b>20</b>
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
                  <i>LIGHT</i> PAPER
                </h2>
                <a
                  href={
                    "https://bscscan.com/token/0xfa83de3ee9b354f8b7659ab72f642a345982113a"
                  }
                >
                  <h3
                    style={{
                      fontSize: "10px",
                      margin: "5px 0px 0px 0px",
                      opacity: 1,
                    }}
                  >
                    0xfA83De3ee9b354f8b7659AB72F642a345982113a
                  </h3>
                </a>
              </div>
            </div>
            <div
              className="row"
              style={{ flexFlow: "row", alignItems: "center" }}
            >
              <h2
                style={{
                  display: "flex",
                  fontSize: "30px",
                  fontWeight: "800",
                  textAlign: "center",
                }}
              >
                FAIR&emsp;
              </h2>
              <hr width="3" size="50" />
              <h2
                style={{
                  display: "flex",
                  fontSize: "20px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                &emsp;LAUNCHED
              </h2>
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
                  6% BUY
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
                  SELL 7%
                </h3>
              </div>
            </div>
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col">
                <h3
                  style={{
                    fontSize: "12px",
                    margin: "0px 0px 0px 0px",
                    opacity: 1,
                    letterSpacing: "0.2em",
                  }}
                >
                  ◐ 3% REWARD POOL{" "}
                </h3>
              </div>
              <div className="mobile-break">
                <div className="col">
                  <h3
                    style={{
                      fontSize: "12px",
                      margin: "0px 0px 0px 0px",
                      opacity: 1,
                      letterSpacing: "0.35em",
                    }}
                  >
                    &emsp;|&emsp;
                  </h3>
                </div>
              </div>

              <div className="col">
                <h3
                  style={{
                    fontSize: "12px",
                    margin: "0px 0px 0px 0px",
                    opacity: 1,
                    letterSpacing: "0.2em",
                  }}
                >
                  {" "}
                  BUYBACK POOL 3%◑&emsp;
                </h3>
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
            <div
              className="row"
              style={{ flexFlow: "column", alignItems: "center" }}
            >
              <h3 style={{ fontSize: "15px", margin: "2px", opacity: 1 }}>
                HODL minimum 20 MILLION $DOGE-1
              </h3>
              <h3 style={{ fontSize: "12px", margin: "5px", opacity: 1 }}>
                to receive DOGECOIN rewards automatically
              </h3>
            </div>

            <p className="bottom-space-xsm" />
            <div className="token__container">
              <div className="token__container-section">
                <h2 style={{ fontSize: "13px", textAlign: "center" }}>
                  Liquidity:&emsp;All initial liquidity tokens{" "}
                  <a href="https://bscscan.com/token/0x62F16e2556ba09f192C4fAd2a89D96f0f0D802f5#balances">
                    <i> BURNED</i>
                  </a>{" "}
                  🔥
                </h2>
                <h2 style={{ fontSize: "13px", textAlign: "center" }}>
                  Ownership:&emsp;Contract verified and{" "}
                  <a href="https://bscscan.com/tx/0xc2959e06a8430e8b524d2d6b458eef9a9e6ffa9f33e2dbd305ea56f0b843aca0">
                    <i> RENOUNCED</i>
                  </a>{" "}
                  🔒
                </h2>
                <h2 style={{ fontSize: "13px", textAlign: "center" }}>
                  Community:&emsp;No team tokens. Fair launch. 🤝
                </h2>
              </div>
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
                READY TO JOIN US ON BSC?
              </h2>
            </div>

            <div className="row">
              <TokenBanners />
            </div>

            <a
              href="whitepaper/whitepaper.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h2
                style={{
                  fontSize: "10px",
                  fontWeight: "200",
                  textAlign: "center",
                }}
              >
                WHITEPAPER PDF
              </h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
