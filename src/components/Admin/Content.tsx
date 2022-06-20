
const Content = ({ pageTitle, Element }: { pageTitle: string, Element:JSX.Element }) => {
  return (
    <div className="flex flex-col w-[80%] h-screen px-2">
      <div className="text-xl font-bold text-gray-600 border-b-2 border-orange-200 pt-6 pb-2 px-6">
        {pageTitle}
      </div>
      <div className="flex-1 my-2 mx-6 border-8 border-gray-200 rounded-xl border-dotted overflow-y-scroll scrollbar-hidden">{Element}</div>
      
    </div>
  );
};
export default Content;