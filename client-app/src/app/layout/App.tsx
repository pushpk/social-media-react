import React, { Component, Fragment, useEffect, useState } from "react";
import "../layout/style.css";
import axios from "axios";
import { Container, Header, Icon, List } from "semantic-ui-react";
import { IActivity } from "../models/activity";
import { NavBar } from "../features/nav/NavBar";
import { ActivityDashboard } from "../features/activities/dashbboard/ActivityDashboard";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard activities={activities} />
      </Container>
    </Fragment>
  );
};

export default App;
