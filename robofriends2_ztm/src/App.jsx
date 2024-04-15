import {CardList} from "./Components/CardList";
import {robots} from "./robots";
import {SearchBox} from "./Components/SearchBox";
import {Component} from "react";
import {Width} from "./Components/Width";
import {Scroll} from "./Components/Scroll";


class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
        console.log("constructor");
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }

    const
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })


        return (
            <div className={"bg-gradient-to-r from-rose-100 to-teal-100 max-h-full"}>
                <Width/>
                <p id={"width"}></p>
                <div className={"fixed top-0.5 w-full  bg-gradient-to-r from-rose-100 to-teal-100 h-64"}>
                    <h1 className={"text-center text-6xl font-bold my-10 text-gray-800"}>Robot Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                </div>
                <div className={"mt-64"}>
                    <Scroll>
                        <CardList robots={filterRobots}/>
                    </Scroll>
                </div>


            </div>
        );
    }
}

export default App;