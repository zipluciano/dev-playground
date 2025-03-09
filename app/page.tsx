"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string;
  description: string;
  done: boolean;
};

const DEFAULT_TODO: Todo = { id: "", description: "", done: false };

export default function Home() {
  const [task, setTask] = useState<Todo>(DEFAULT_TODO);
  const [tasks, setTasks] = useState<Todo[]>([]);

  return (
    <div className="w-[80%] h-full  mx-auto self-center p-4">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Add a todo"
          className="input w-full"
          value={task.description}
          onChange={e => setTask({ id: uuidv4(), description: e.target.value, done: false })}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            if (!!task.description) {
              setTasks(prev => [...prev, task]);
              setTask(DEFAULT_TODO);
            }
          }}
        >
          Add
        </button>
      </div>
      {!!tasks.length && (
        <div>
          <div className="divider">Todos</div>
          <ul>
            {tasks.map(({ id, description, done }) => (
              <div key={id} className="group transition">
                <div className="flex gap-2 items-center">
                  <button
                    className="btn btn-circle btn-sm w-0 group-hover:w-8 opacity-0 duration-300 group-hover:opacity-100 transition-all"
                    onClick={() => {
                      const newTasks = tasks.filter(taskItem => taskItem.id !== id);

                      setTasks(newTasks);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0,0,256,256"
                    >
                      <g
                        className="fill-error"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                      >
                        <g transform="scale(8.53333,8.53333)">
                          <path d="M13,3c-0.26757,-0.00363 -0.52543,0.10012 -0.71593,0.28805c-0.1905,0.18793 -0.29774,0.44436 -0.29774,0.71195h-5.98633c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h18c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587h-5.98633c0,-0.26759 -0.10724,-0.52403 -0.29774,-0.71195c-0.1905,-0.18793 -0.44836,-0.29168 -0.71593,-0.28805zM6,8v16c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-16z"></path>
                        </g>
                      </g>
                    </svg>
                  </button>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success"
                    onClick={() => {
                      const newTasks = tasks.map(taskItem =>
                        taskItem.id === id ? { ...taskItem, done: !taskItem.done } : taskItem
                      );

                      setTasks(newTasks);
                    }}
                  />
                  <li>
                    <p className={`break-all ${done && "line-through"}`}>{description}</p>
                  </li>
                </div>
                <div className="divider my-2" />
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
