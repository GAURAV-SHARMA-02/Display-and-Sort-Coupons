import React from "react";

const LeftContainer = () => {
  return (
    <div className="App-left">
      <div className="card card-left" style={{ width: "22rem" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item card-left">
            <strong>Store Categories</strong>
          </li>
          <li className="list-group-item ">
            <div class="form-check bold">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Fashion
              </label>
            </div>
            <hr />
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Food & Dining
              </label>
            </div>
            <hr />
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Mobile & Tablets
              </label>
            </div>
            <hr />
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Travel
              </label>
            </div>
            <hr />
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Beauty & Health
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftContainer;
