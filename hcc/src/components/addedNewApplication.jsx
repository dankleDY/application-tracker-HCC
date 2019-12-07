import React, { Component } from "react";
import Box from "./applicationBox";
import Header from "./applicationHeader";
import Container from "react-bootstrap/Container";
import { container } from "../styles/styles.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { withRouter } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

class addedNewApplication extends Component {
  state = {
    alert: true,
    boxes: [
      {
        id: 0,
        title: "Upcoming",
        clsn: "applicationBox upcoming",
        applications: [
          {
            company: "Amazon",
            position: "SDE",
            status: "Onsite",
            date: "2020-01-26",
            portal: "URL",
            resume: "URL"
          },
          {
            company: "J.P.Morgan",
            position: "Actuary",
            status: "Phone Interview",
            date: "2019-1-28",
            portal: "URL",
            resume: "URL"
          }
        ]
      },
      {
        id: 1,
        title: "Pending",
        clsn: "applicationBox pending",
        applications: [
          {
            company: "Duke 597",
            position: "TA",
            status: "Onsite",
            date: "2019-11-20",
            portal: "URL",
            resume: "URL"
          },
          {
            company: "Nike",
            position: "Sales",
            status: "Phone Interview",
            date: "2019-11-11",
            portal: "URL",
            resume: "URL"
          },
          {
            company: "Citrix",
            position: "SDE",
            status: "Video Interview",
            date: "2019-12-01",
            portal: "URL",
            resume: "URL"
          }
        ]
      },
      {
        id: 2,
        title: "Done",
        clsn: "applicationBox done",
        applications: [
          {
            company: "Facebook",
            position: "PM",
            status: "Offer",
            date: "2019-10-4",
            portal: "URL",
            resume: "URL"
          },
          {
            company: "Bloomberg",
            position: "SDE",
            status: "Rejected",
            date: "2019-09-08",
            portal: "URL",
            resume: "URL"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <Container style={container}>
        <Jumbotron className="jbt">
          {this.renderAlert()}
          <Header />
          {this.state.boxes.map(box => (
            <Box key={box.id} box={box}></Box>
          ))}
        </Jumbotron>
      </Container>
    );
  }

  renderAlert = () => {
    if (this.state.alert) {
      return (
        <Alert key={1} variant="success" style={{ width: "25%" }}>
          New application added!
          <button onClick={this.toggleAlert} className="btn-success btn-xs m-2">
            X
          </button>
        </Alert>
      );
    }
  };

  toggleAlert = prevState => {
    this.setState(prevState => ({ alert: !prevState.alert }));
  };
}

export default withRouter(addedNewApplication);
