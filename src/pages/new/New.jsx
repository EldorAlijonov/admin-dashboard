import { Navbar, Sidebar } from "../../components";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./new.scss";
import { useState } from "react";
const New = (props) => {
    const { inputs, title } = props;

    const [file, setFile] = useState("");


    console.log(file);
    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="img" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input type="file" id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>
                            {inputs.map((e) => (
                                <div className="formInput" key={e.id}>
                                    <label>{e.label}</label>
                                    <input type={e.type} placeholder={e.placeholder} />
                                </div>
                            ))}
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default New;