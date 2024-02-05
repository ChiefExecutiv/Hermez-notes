import React, { useState, useEffect } from 'react';
import './Table.css';

// ... (previous code)

const MyTable = () => {
    const [selectedRow, setSelectedRow] = useState(null);
    const [tableData, setTableData] = useState(() => {
      const savedData = localStorage.getItem('tableData');
      return savedData ? JSON.parse(savedData) : [
        { task: 'Task -1', title: 'Finish homework', priority: 'High', checked: false },
        { task: 'Task -2', title: 'Read a book', priority: 'Medium', checked: false },
      ];
    });
  
    useEffect(() => {
      localStorage.setItem('tableData', JSON.stringify(tableData));
    }, [tableData]);
  
    const handleRowClick = (index) => {
      setSelectedRow(index === selectedRow ? null : index);
    };
  
    const handleAddRow = (title, priority) => {
      const task = `Task -${tableData.length + 1}`;
      const newTableData = [...tableData, { task, title, priority, checked: false }];
      setTableData(newTableData);
    };
  
    const handleDeleteRow = (index) => {
      const newTableData = tableData.filter((_, i) => i !== index);
      setTableData(newTableData);
      setSelectedRow(null);
    };
  
    const handleCheckboxChange = (index) => {
      const newTableData = [...tableData];
      newTableData[index].checked = !newTableData[index].checked;
      setTableData(newTableData);
    };
  
    return (
      <div className="table-container">
        <table className="my-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Title</th>
              <th>Priority</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr
                key={index}
                className={`${selectedRow === index ? 'selected-row' : ''} ${item.checked ? 'checked-row' : ''}`}
                onClick={() => handleRowClick(index)}
              >
                <td>
                  <input type="checkbox" checked={item.checked} onChange={() => handleCheckboxChange(index)} />
                  {item.task}
                </td>
                <td>{item.title}</td>
                <td>{item.priority}</td>
                <td>
                  <button onClick={() => handleDeleteRow(index)} className='dltBtn'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='userDiv'>
          <label>Title:</label>
          <input type="text" id="titleInput" className='Input'/>
  
          <label>Priority:</label>
          <select id="priorityInput" className="priority-select">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
  
          <button
            onClick={() => {
              const title = document.getElementById('titleInput').value;
              const priority = document.getElementById('priorityInput').value;
              handleAddRow(title, priority);
            }}
            className='addBtn'
          >
            Add Row
          </button>
        </div>
      </div>
    );
  }
  
  export default MyTable;
  
  