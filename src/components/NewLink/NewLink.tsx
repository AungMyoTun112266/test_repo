import Link from "next/link";
import ButtonDefault from "../Buttons/ButtonDefault";

interface BreadcrumbProps {
  pageName: string;
}

const NewLink = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-[26px] font-bold leading-[30px] text-dark dark:text-white mb-3 sm:mb-0">
        {pageName}
      </h2>

      <nav>
        <ButtonDefault
          label="Add Student"
          link="/students/new"
          customClasses="border rounded-full border-primary text-primary py-[11px] px-6 flex items-center gap-2"
        >
          <svg
            className="fill-current"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 2V7H14V2H10ZM16 7H18C19.1046 7 20 7.89543 20 9V12C20 13.1046 19.1046 14 18 14H6C4.89543 14 4 13.1046 4 12V9C4 7.89543 4.89543 7 6 7H8V2H10V7H14V2H16V7ZM18 16H15V20H13V16H11V20H9V16H6C4.89543 16 4 16.8954 4 18V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V18C20 16.8954 19.1046 16 18 16Z"
              fill="currentColor"
            />
          </svg>
        </ButtonDefault>
      </nav>
    </div>
  );
};

export default NewLink;
