import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Jane D', salary: 3000, increase: false, rise: false, id: 2},
                {name: 'Mike J', salary: 5000, increase: false, rise: false, id: 3}
            ],
            term: '',
            errors: { name: '', salary: '' },
            alertMessage: '',  // Сообщение уведомления
            alertType: '', // Тип (успех/ошибка)
            filter: 'all' // Возможные значения: 'all', 'rise', 'highSalary'
        };
        this.maxId = 4;  
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return{
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        if (name.trim() === '' || salary.trim() === '') {
            this.setState({
                errors: {
                    name: name.trim() === '' ? 'Поле не должно быть пустым' : '',
                    salary: salary.trim() === '' ? 'Поле не должно быть пустым' : ''
                },
                alertMessage: 'Ошибка! Поля не должны быть пустыми',
                alertType: 'error'
            });
    
            setTimeout(() => this.setState({ alertMessage: '', alertType: '' }), 3000);
            return;
        }
    
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: Date.now()
        };
    
        this.setState(({ data }) => ({
            data: [...data, newItem],
            errors: { name: '', salary: '' },
            alertMessage: 'Сотрудник успешно добавлен!',
            alertType: 'success'
        }));
    
        setTimeout(() => this.setState({ alertMessage: '', alertType: '' }), 3000);
    };

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }


    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item =>{
            return item.name.indexOf(term) > -1
        });
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterData = (data, filter) => {
        switch (filter) {
            case 'rise':
                return data.filter(item => item.rise); 
            case 'highSalary':
                return data.filter(item => item.salary > 1000); 
            default:
                return data; 
        }
    };

    setFilter = (filterType) => {
        this.setState({ filter: filterType });
    };

    onSalaryUpdate = (id, newSalary) => {
        this.setState(({ data }) => {
            return {
                data: data.map(item =>
                    item.id === id ? { ...item, salary: newSalary } : item 
                )
            };
        });
    };

    render() {
        const { data, term, alertMessage, alertType, filter } = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const searchedData = this.searchEmp(data, term);
        const visibleData = this.filterData(searchedData, filter);
        return(
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
    
                <div className='search-panel'>
                    <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                    <AppFilter   onFilterSelect={this.setFilter}/>
                </div>

                {alertMessage && (
                    <div className={`alert ${alertType} show`}>
                    {alertMessage}
                 </div>
                )}

                <EmployeesList 
                    data = {visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onSalaryUpdate={this.onSalaryUpdate}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        );    
    }
}

export default App;