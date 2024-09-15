import { faPlus,faRotateBackward, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonDefault from "@/components/Buttons/ButtonDefault";

interface BreadcrumbProps {
  pageName: string;
  linkHref?: string;
  linkText?: string;
  icon?:IconDefinition
}

const Breadcrumb = ({ pageName, linkHref, linkText,icon }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-row items-center justify-between">
      <h2 className="text-[26px] font-bold leading-[30px] text-dark dark:text-white">
        {pageName}
      </h2>

      <div className="flex items-center gap-2">
        {linkHref && linkText ? (
          <ButtonDefault
            label={linkText}
            link={linkHref}
            customClasses="border rounded-full border-primary text-primary py-2 px-4 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={icon ? icon: faPlus} />
          </ButtonDefault>
        ) : null}
      </div>
    </div>
  );
};

export default Breadcrumb;
