/* eslint-disable no-unused-vars */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { productsSelector } from "../../../store/selector";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, fetchProducts } from "../../../store/productsSlice";
import { TrashIcon } from "@heroicons/react/24/solid";
import UpdateFormPro from "./UpdateForm";
import AddFormPro from "./AddForm";
export default function Products() {
  const [dataChanged, setDataChanged] = useState(false);

  const dispatch = useDispatch();

  const handleAddFormSubmit = () => {
    setDataChanged(true);
  };

  const handleDeletePro = (id) => {
    const uConfirm = confirm("Bạn muốn xóa sản phẩm này ?");
    if (uConfirm) {
      dispatch(deleteProduct(id));
    } else {
      console.log("khong xoa");
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dataChanged]);

  const listPro = useSelector(productsSelector);
  // console.log(listPro);
  return (
    <div className="flex flex-col gap-4 mx-auto my-12">
      <Typography variant="h1">Products</Typography>
      {listPro.status === "idle" && (
        <>
          <AddFormPro onAddFormSubmit={handleAddFormSubmit} />
          <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 1000 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Img</TableCell>
                  <TableCell align="center">Feature</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listPro.data.map((pro) => (
                  <TableRow
                    key={pro.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {pro.id}
                    </TableCell>
                    <TableCell align="center">{pro.name}</TableCell>
                    <TableCell align="center">
                      {pro.price.toLocaleString()}đ
                    </TableCell>
                    <TableCell>
                      <img
                        className="w-1/4 mx-auto"
                        alt="img"
                        src={`/src/assets/images/${pro.img}`}
                      />
                    </TableCell>
                    <TableCell align="center">{pro.feature}</TableCell>
                    <TableCell align="center">
                      <div className="flex gap-2">
                        <UpdateFormPro product={pro}/>
                        <TrashIcon
                          className="h-5 w-5"
                          onClick={() => {
                            handleDeletePro(pro.id);
                          }}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
}
