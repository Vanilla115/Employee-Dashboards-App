

import EmployeesListItem from "../employees-list-item/employeess-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp, onSalaryUpdate}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onSalaryUpdate={onSalaryUpdate}/>
        )
    })

    return (
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default EmployeesList;