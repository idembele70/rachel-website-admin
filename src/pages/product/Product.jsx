import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Product() {
    const id = useLocation().pathname.split(/\//)[2]

    const { _id, title, inStock, img } = useSelector(state => state.product.products.find(
        ({ _id }) => _id === id
    ))

    const [data, setdata] = useState({
        title,
        inStock: inStock ? "yes" : "no",
        img
    })
    const handleUpdate = (e) => {
        const { name, value } = e.target
        switch (name) {
            case "title":
                setdata(d => ({ ...d, [name]: value }))
                break;
            case "inStock":
                console.log(name);
                setdata(d => ({ ...d, "inStock": value}))
                break;
            default:
                break;
        }
    }


    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={`https://lh3.google.com/u/0/d/${img}`} alt="" className="productInfoImg" />
                        <span className="productName">{title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{` ${_id}`}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">{inStock ? "Oui" : "Non"}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input name="title" type="text" value={data.title} onChange={handleUpdate} />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock" value={data.inStock} onchange={handleUpdate}>
                            <option name="inStock" value="yes">Yes</option>
                            <option name="inStock" value="no">No</option>
                        </select>
                        {/*  <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select> */}
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={`https://lh3.google.com/u/0/d/${img}`} alt="" className="productUploadImg" />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

