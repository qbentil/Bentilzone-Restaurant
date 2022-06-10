import {motion} from 'framer-motion';
import {GrFormPreviousLink, GrFormNextLink} from 'react-icons/gr';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
export const Title = ({ title }: { title: string }) => {
  return (
    <p className="text-2xl text-headingColor font-semi-bold capitalize relative before:absolute before:rounded before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
      {title}
    </p>
  );
};

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center">
      <ul className="flex justify-center">
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={`${
                currentPage === page ? "bg-orange-600" : "bg-transparent"
              }`}
            >
              <button className="px-2 py-1" onClick={() => onPageChange(page)}>
                {page}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const PrevNext = ({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) => {
  return (
    <div className="hidden md:flex items-center gap-3">
      <motion.div whileTap={{scale:1.1}} onClick={onPrev} className="w-8 h-8 rounded-lg bg-orange-400 flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-all duration-100 ease-in-out hover:shadow-lg">
          <MdChevronLeft className = "text-lg text-white" />
      </motion.div>
      <motion.div whileTap={{scale:1.1}} onClick = {onNext} className="w-8 h-8 rounded-lg bg-orange-400 flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-all duration-100 ease-in-out hover:shadow-lg">
          <MdChevronRight className = "text-lg text-white" />
      </motion.div>
    </div>
  );
};
