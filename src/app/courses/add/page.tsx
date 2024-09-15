import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { faRotateBackward} from "@fortawesome/free-solid-svg-icons";
import CourseForm from "@/components/Courses/CourseForm";

export const metadata: Metadata = {
  title: "Next.js Form Layout Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Layout page for NextAdmin Dashboard Kit",
};

const AddCourse = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full">
        <Breadcrumb pageName="Course" linkHref="/courses" linkText="Course List" icon={faRotateBackward}/>
          <CourseForm />
      </div>

    </DefaultLayout>
  );
};

export default AddCourse;
