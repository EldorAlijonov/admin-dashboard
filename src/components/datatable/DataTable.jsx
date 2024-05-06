import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from "../../datatablesource"
import { useState } from "react";
import { Link } from "react-router-dom";
const DataTable = () => {

    const [data, setData] = useState(userRows);
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <Link to="/users/123123" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton">Delete</div>
                    </div>
                );
            },
        },
    ];


    return (
        <div className="dataTable">
            <div className="datatableTitle">
                Add New User
                <Link to="/users/new"
                    className="link">Add User</Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div >
    );
}
export default DataTable;
