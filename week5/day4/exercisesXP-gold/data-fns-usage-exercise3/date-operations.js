import { format, addDays } from "date-fns";
function displayDate() {
  const now = new Date();
  const add5days = format(addDays(now, 5), "dd/MM/yyyy");
  const theDate = format(now, "dd/MM/yyyy");
  console.log(add5days);
}
export default displayDate
