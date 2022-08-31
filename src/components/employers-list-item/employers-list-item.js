import './employers-list-item.css'

const EmployersListItem=(props)=> {

    const {name,salary,onDelete,onToggleProp,increase,rise,onChangeSalary   }=props;
    

    let classNames="list-group-item d-flex justify-content-between";
    if (increase) {
        classNames+=" increase";
    }
    if (rise) {
        classNames+=" like";
    }

    return (

        <li className={classNames}>
        <span data-toggle="rise" onClick={onToggleProp} className="list-group-item-label">{name}</span>
        <input type="text" className="list-group-item-input" onChange={(e)=>onChangeSalary(e.currentTarget.value,name)} defaultValue={salary+ ' $'}/>
        <div className='d-flex justify-content-center align-items-center'>
            <button type="button"
            data-toggle="increase"
                className="btn-cookie btn-sm "
                onClick={onToggleProp}>
                <i className="fas fa-cookie"></i>
            </button>

            <button type="button"
                    onClick={onDelete}
                    className="btn-trash btn-sm ">
                <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
        </div>
    </li>
    )
    }
    

export default EmployersListItem;