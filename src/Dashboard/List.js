import React, { useState, useEffect } from "react";
import data from "../Data/employee.json";
import { Button, MantineProvider } from "@mantine/core";

function List() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    try {
      setJsonData(data);
    } catch (error) {
      console.error("Error loading JSON data:", error);
      setJsonData([]);
    }
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {jsonData.length > 0 ? (
        <ul className="grid grid-cols-5 gap-5">
          {jsonData.map((item) => (
            <li
              key={item.id}
              className="p-4 border rounded overflow-hidden hover:shadow-lg transition-shadow duration-400 bg-gradient-to-br from-rose-300 to-green-300 bg-gray-200"
            >
              <div className="font-bold text-blue-500">Name:</div>{" "}
              {/* Apply blue text color */}
              <div>
                {item.firstName} {item.lastName}
              </div>
              <div className="font-bold text-blue-500">Email:</div>{" "}
              {/* Apply blue text color */}
              <div>{item.email}</div>
              <div className="font-bold text-blue-500">Salary:</div>{" "}
              {/* Apply blue text color */}
              <div>{item.salary}</div>
              <div className="font-bold text-blue-500">Date:</div>{" "}
              {/* Apply blue text color */}
              <div>{item.date}</div>
              <div className="font-bold text-blue-500">Position:</div>{" "}
              {/* Apply blue text color */}
              <div>{item.position}</div>
            </li>
          ))}
          <MantineProvider>
            <Button
              variant="gradient"
              gradient={{ from: "blue", to: "rgba(50, 252, 23, 1)", deg: 90 }}
            >
              Add
            </Button>
          </MantineProvider>
        </ul>
      ) : (
        <div>
          Error loading JSON data. Please check the file path and format.
        </div>
      )}
    </div>
  );
}

export default List;
