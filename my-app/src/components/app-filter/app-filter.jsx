import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
    render() {
        const { onFilterSelect } = this.props; 

        return (
            <div className="btn-group">
                <button type="button"
                        className="btn btn-light"
                        onClick={() => onFilterSelect('all')}>
                    Все сотрудники
                </button>
                <button type="button"
                        className="btn btn-outline-light"
                        onClick={() => onFilterSelect('rise')}>
                    На повышение
                </button>
                <button type="button"
                        className="btn btn-outline-light"
                        onClick={() => onFilterSelect('highSalary')}>
                    З/П больше 1000$
                </button>
            </div>
        );
    }
}

export default AppFilter;