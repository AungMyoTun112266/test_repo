import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import TableOne from "@/components/Tables/TableOne";

export const metadata: Metadata = {
  title: "Next.js Profile Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Profile page for NextAdmin Dashboard Kit",
};

const CourseList = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full">
        <Breadcrumb pageName="Course List" linkHref="/courses/add" linkText="Add New Course" />
        <TableOne />
      </div>
    </DefaultLayout>
  );
};

export default CourseList;
