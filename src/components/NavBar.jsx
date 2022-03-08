import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "../api";

const NavBar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    api.fetchTopics().then((topicList) => {
      setTopics(topicList);
    });
  }, [topics]);

  return (
    <div>
      <div>
        {topics.map((topic) => {
          return (
            <Link
              className="navBar"
              key={topic.slug}
              to={`/topics/${topic.slug}`}
            >
              {topic.slug}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
