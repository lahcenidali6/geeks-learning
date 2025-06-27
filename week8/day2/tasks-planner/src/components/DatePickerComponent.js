import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useDispatch } from "react-redux"
import { setDate } from "../redux/actions"

export default function DatePickerComponent({ selectedDate }) {
  const dispatch = useDispatch()

  return (
    <DatePicker
      selected={new Date(selectedDate)}
      onChange={(date) =>
        dispatch(setDate(date.toISOString().split("T")[0]))
      }
      className="form-control"
    />
  )
}
