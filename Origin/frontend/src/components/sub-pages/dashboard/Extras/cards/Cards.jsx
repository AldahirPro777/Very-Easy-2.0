import { useState, useEffect } from "react";
import axios from "axios";

import Task from "./Task.jsx";
import Exam from "./Exam.jsx";
import Project from "./Project.jsx";

function Cards() {
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [exams, setExams] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:7777/api/dashboard/allcards"
        );

        const { tasks, exams, projects } = res.data;

        setTasks(tasks);
        setExams(exams);
        setProjects(projects);
        setError(null);
      } catch (err) {
        console.error("Error del Front-end", err);
        setError(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {error ? (
        <p>Mendaje de error:{error.message}</p>
      ) : (
        <>
          <Exam exams={exams} />
          <Task tasks={tasks} />
          <Project projects={projects} />
        </>
      )}
    </div>
  );
}

export default Cards;
