import "./list.scss"
import { DataTable, Navbar, Sidebar } from "../../components/"
const List = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <DataTable />
            </div>
        </div>
    );
}

export default List;