/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateCategory } from "../../../store/categoriesSlice";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

// eslint-disable-next-line react/prop-types
export default function UpdateForm({ category }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const dispatch = useDispatch();

  //Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Vui lòng nhập tên"),
  });
  //   console.log(category);

  // formik
  const formik = useFormik({
    initialValues: {
      name: category.name,
      img: "product-img1.png",
    },
    onSubmit: (values) => {
      dispatch(
        updateCategory({
          categoryId: category.id,
          newData: { name: values.name, img: values.img },
        })
      );
      //   onAddFormSubmit();
      handleOpen();
      alert("Chỉnh sửa danh mục thành công");
    },
  });
  console.log(category.name);

  return (
    <div className="w-1/6">
      <PencilSquareIcon className="h-5 w-5" onClick={handleOpen} />
      <Dialog open={open} handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader>Update category</DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <DialogBody divider>
            <div className="grid gap-6">
              <Input label={category.id} disabled />
              <Input
                label="Name"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="outlined" color="red" onClick={handleOpen}>
              close
            </Button>
            <Button
              type="submit"
              variant="gradient"
              color="green"
              onSubmit={formik.handleSubmit}
            >
              submit
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
}
