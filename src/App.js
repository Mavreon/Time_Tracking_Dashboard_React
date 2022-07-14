import React, {useState} from "react";
import Container from "./UI/Container";
import { Helmet } from "react-helmet";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";

const data = [
  {
    "title": "Work",
    "color": "hsl(15, 100%, 70%)",
    "icon" : "/public/images/icon-work.svg",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "color": "hsl(195, 74%, 62%)",
    "icon" : "/public/images/icon-play.svg",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "color": "hsl(348, 100%, 68%)",
    "icon" : "/public/images/icon-study.svg",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "color": "hsl(145, 58%, 55%)",
    "icon" : "/public/images/icon-exercise.svg",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "color": "hsl(264, 64%, 52%)",
    "icon" : "/public/images/icon-social.svg",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "color": "hsl(43, 84%, 65%)",
    "icon" : "/public/images/icon-self-care.svg",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
];
function App() {
  const [selectedFilter, setSelectedFilter] = useState('daily');
  
  const SelectFilter = (filter)=>{
    setSelectedFilter(filter);
  };
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Time Tracking Dashboard</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>

      <Profile onSelectFilter = {SelectFilter}/>
      <Dashboard data = {data} filter={selectedFilter}/>
    </Container>
  );
}

export default App;
