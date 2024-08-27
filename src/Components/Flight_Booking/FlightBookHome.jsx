import React, { useState } from "react";
import Header from "../header/Header";
import { LuPlaneTakeoff, LuPlaneLanding, LuCalendarDays } from "react-icons/lu";

const FlightBookHome = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");

  const locations = ["Chennai", "Bengaluru", "Kochi", "Delhi"];

  // Filter out the 'fromLocation' from the second dropdown options
  const filteredLocations = locations.filter(
    (location) => location !== fromLocation
  );

  return (
    <div>
      <Header />
      <section>
        <div>
          <form>
            {/* From Select */}
            <div class="col-auto">
              <label class="sr-only" for="inlineFormInputGroup">
                From
              </label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <LuPlaneTakeoff />
                  </div>
                </div>
                <select
                  className="form-control"
                  id="fromSelect"
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                >
                  <option value="" disabled>
                    Select Departure
                  </option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>{" "}
              </div>
            </div>

            {/* To Select */}
            <div class="col-auto">
              <label class="sr-only" for="inlineFormInputGroup">
                To
              </label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <LuPlaneLanding />
                  </div>
                </div>
                <select
                  className="form-control"
                  id="toSelect"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  disabled={!fromLocation} // Disable until "from" is selected
                >
                  <option value="" disabled>
                    Select Destination
                  </option>
                  {filteredLocations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>{" "}
              </div>
            </div>

            {/*  */}
            <div class="col-auto">
              <label class="sr-only" for="inlineFormInputGroup">
                Departure
              </label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <LuCalendarDays />
                  </div>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroup"
                  placeholder="Username"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FlightBookHome;
