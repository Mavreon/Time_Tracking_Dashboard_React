import React, {useState} from "react";
import Container from "./UI/Container";
import { Helmet } from "react-helmet";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import workIcon from './images/icon-work.svg';
import playIcon from './images/icon-play.svg';
import studyIcon from './images/icon-study.svg';
import exerciseIcon from './images/icon-exercise.svg';
import socialIcon from './images/icon-social.svg';
import selfcareIcon from './images/icon-self-care.svg';

const data = [
  {
    "title": "Work",
    "color": "hsl(15, 100%, 70%)",
    "icon" :  workIcon,
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
    "icon" : playIcon,
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
    "icon" : studyIcon,
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
    "icon" : exerciseIcon,
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
    "icon" : socialIcon,
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
    "icon" : selfcareIcon,
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
