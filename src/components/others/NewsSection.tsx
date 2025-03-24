import Filter from "../shared/FIlter"
import { SelectComp } from "../shared/Select"

const NewsSection = () => {
  return (
    <div className="">
      <h1 className="text-blue-900 text-xl md:text-3xl font-bold text-center my-2 md:my-5">Events & Notices</h1> 
      <div>
        <h1 className="text-blue-900 text-base md:text-lg">Notices</h1>
        <div className="">
        <div className="sm:hidden w-full px-4 my-6">
        <SelectComp
          items={[
            {
              label: "All",
              value: "products",
            },
            {
              label: "Registration",
              value: "registration",
            },
            {
              label: "Exan Routine",
              value: "examRoutine",
            },
            {
              label: "Exam Center",
              value: "examCenter",
            },
            {
              label: "Results",
              value: "result",
            }
          ]}
          label="Category"
          placeholder="Select Category"
        />
      </div>
      <div className="hidden sm:block mx-10 my-5 text-gray-900">
        <Filter
          filterField="category"
          options={[
            {
              label: "All",
              value: "products",
            },
            {
              label: "Registration",
              value: "registration",
            },
            {
              label: "Exan Routine",
              value: "examRoutine",
            },
            {
              label: "Exam Center",
              value: "examCenter",
            },
            {
              label: "Results",
              value: "result",
            }
          ]}
        />
      </div>
        </div>
      </div>
      <div>
        <h1 className="text-blue-900 text-base md:text-lg">Events</h1>
      </div>
     
    </div>
  )
}
export default NewsSection