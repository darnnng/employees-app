import './app-info.css';


const AppInfo=({employees,employeesRise})=> {
    return (
        <div className="app-info">
            <h1 className="accounting-title">Accounting of employees in the company </h1>
            <h2 className="total-title">Total number of employees:{employees} </h2>
           
        </div>
    )
}

export default AppInfo;