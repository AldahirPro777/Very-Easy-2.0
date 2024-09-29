import { useState, useEffect } from "react";
import axios from "axios";

import Task from "./Task.jsx";
import Exam from "./Exam.jsx";
import Project from "./Project.jsx";

function Cards() {
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
      } catch (err) {
        console.error("Error del Front-end", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Exam exams={exams} />
      <Task tasks={tasks} />
      <Project projects={projects} />

      <div className="card card-task">
        <div className="card-head">
          <h2>fghjkkgh</h2>
        </div>
        <div className="card-body">
          <p>Descripción:</p>
          <p>Materia: </p>
          <p>Fecha de entrega: </p>

          <div className="datos-extra">
            <p>Maestro: </p>
            <p>Link de recursos: </p>
            <p>Nivel de importancia: </p>
            <p>Etiquetas:</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
