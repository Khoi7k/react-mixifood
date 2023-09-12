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
import { categoriesSelector } from "../../../store/selector";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  deleteCategory,
  fetchCategories,
} from "../../../store/categoriesSlice";
import { TrashIcon } from "@heroicons/react/24/solid";
import AddFormCate from "./AddForm";
import UpdateForm from "./UpdateForm";

export default function Categories() {
  const dispatch = useDispatch();
  const [dataChanged, setDataChanged] = useState(false);

  const handleDeleteCate = (id) => {
    const uConfirm = confirm("Bạn muốn xóa danh mục này ?");
    if (uConfirm) {
      dispatch(deleteCategory(id));
    } else {
      console.log("khong xoa");
    }
  };

  const handleAddFormSubmit = () => {
    setDataChanged(true);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dataChanged]);

  const listCate = useSelector(categoriesSelector);
  return (
    <div className="flex flex-col gap-4 mx-auto my-12">
      <Typography variant="h1">Categories</Typography>
      {listCate.status === "idle" && (
        <>
        <AddFormCate onAddFormSubmit={handleAddFormSubmit} />
          <TableContainer component={Paper}>
            <Table sx={{ width: 1000 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Image</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listCate.data.map((cate) => (
                  <TableRow
                    key={cate.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {cate.id}
                    </TableCell>
                    <TableCell align="center">{cate.name}</TableCell>
                    <TableCell align="center">
                      <img
                        className="w-1/4 mx-auto"
                        alt="img"
                        src={`/src/assets/images/${cate.img}`}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <div className="flex gap-5 justify-center">
                        <UpdateForm category={cate} />
                        <TrashIcon
                          className="h-5 w-5"
                          onClick={() => {
                            handleDeleteCate(cate.id);
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
