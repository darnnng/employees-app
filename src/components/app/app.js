import './app.css'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import {Component} from 'react'

class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            data : [
                {name:'Alex' , salary:2000, increase: true,rise:true, id:1},
                {name:'Mike' , salary:3500, increase: false,rise:false, id:2},
                {name:'Kie' , salary:1600, increase: true,rise:false, id:3} 
            ],
            term:'',
            filter:'all'
        }
        this.maxId=4;
    }

    deleteItem=(id)=> {
        this.setState(({data})=>{
            return {
                data:data.filter(item=> item.id!==id)
            }
        })
    }

    addItem=(name,salary)=> {

        const newItem={
            name:name,
            salary:salary,
            increase:false,
            rise:false,
            id:this.maxId++
        }

        this.setState(({data})=>{
           const newArr=[...data, newItem]
           return {
            data:newArr
           }
        })
    }

    onToggleProp=(id,prop)=>{
      
            this.setState(({data})=>({
                data:data.map(item=>{
                    if (item.id===id) {
                        return {...item,[prop]:!item[prop]}
                    }
                    return item;
                })
            }))
        }

    searchEmp=(items,term)=>{
        if (term.length===0) {
            return items;
        }

        return items.filter(item=>{
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch=(term)=> {
        this.setState({term:term});
    }

    filterData=(items,filter)=>{
        switch (filter) {
            case 'rise':
                return items.filter(item=>item.rise);
            case 'more1000':
                return items.filter(item=>item.salary>=1000);
            default:
                return items;
        }
    }

    onFilterSelect=(filter)=>{
        this.setState({filter})
    }

    onChangeSalary=(salary,name)=>{
        this.setState(({data})=>({
            data:data.map(item=>{
                if (item.name===name) {
                return {...item,salary:salary.replace(/\D/g, '')}}
                return item;
            })
        }))
    }

  

    render()  {

        const {data,term,filter}=this.state;
        const employees=this.state.data.length;
        const employeesRise=this.state.data.filter(item=>item.increase).length;
        const visibleData=this.filterData(this.searchEmp(data,term),filter);
        
        return (
            <div className="app">
                <AppInfo employees={employees} employeesRise={employeesRise}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployersList data={visibleData} onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} onChangeSalary={this.onChangeSalary}
                />
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        );
    }
    }

export default App;