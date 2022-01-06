import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../Redux/apiCalls";

export default function ProductList() {
  const { products } = useSelector(state => state.product)
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    deleteProduct(dispatch, id)
  };
  useEffect(() => {
    getProducts(dispatch)
  }, [dispatch])

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={`https://lh3.google.com/u/0/d/${params.row.img}`} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "inStock",
      headerName: "InStock",
      width: 120,
      renderCell: (params) => <>{params.row.inStock ? "Oui" : "Non"}</>
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
      renderCell: (params) => <>{`${params.row.price}€`}</>
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];


  return (
    <div className="productList">
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
