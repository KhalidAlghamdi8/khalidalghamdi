import './projects.scss'
import ProjList from "../../ProjectList/projList";

import {
  featuredDataScience,
  webPortfolio,
  apisPortfolio,
  otherPortfolio,
} from "../../data";
import {useEffect, useState} from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import {Button} from "@material-ui/core";

export default function Project() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "data science",
      title: "Data Science",
      link: [],
    },
    {
      id: "web",
      title: "Web App",
      link: [],
    },
    {
      id: "apis",
      title: "APIs",
      link: [],
    },
    {
      id: "others",
      title: "Others",
      link: [],
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "data science":
        setData(featuredDataScience);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "apis":
        setData(apisPortfolio);
        break;
      case "others":
        setData(otherPortfolio);
        break;
      default:
        setData(featuredDataScience);
    }
  }, [selected]);

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <ProjList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            link={item.link}
          />
        ))}
      </ul>
      <div className="container">

        {data.map((d) => (
          <div className="item">
            <h3>{d.title}</h3>
            <div className="btn">
            <Button className="btn-3" href={d.link}><GitHubIcon /></Button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}