import {CardList} from "./components/CardList";
import {SearchBox} from "./components/SearchBox";
import {Component} from "react";

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ""
        }
        console.log("constructor()")
    }

    componentDidMount = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        if (this.state.robots.length === 0) {
            return <h1 className={"text-2xl"}>Loading...</h1>
        }

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className={"text-center text-5xl font-bold p-10"}>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobots}/>
                </header>
            </div>
        );
    }
}

export default App;
