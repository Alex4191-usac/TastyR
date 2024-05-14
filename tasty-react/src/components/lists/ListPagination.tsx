interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  pageRange: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
  pageRange,
}) => {
  const startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
  const endPage = Math.min(totalPages, startPage + pageRange - 1);

  return (
    <div className="flex justify-center items-center space-x-2 pt-5 pb-5">
      <button
        onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)}
        className="px-3 py-1 rounded-full text-white font-semibold bg-black"
      >
        Prev
      </button>
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
        <button
          key={startPage + i}
          onClick={() => setCurrentPage(startPage + i)}
          className={`px-3 py-1 rounded-full text-white font-semibold ${
            currentPage === startPage + i ? 'bg-emerald-400' : 'bg-black'
          }`}
        >
          {startPage + i}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : currentPage)}
        className="px-3 py-1 rounded-full text-white font-semibold bg-black"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
