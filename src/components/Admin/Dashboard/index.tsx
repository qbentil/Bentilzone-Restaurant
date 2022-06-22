import CategoryCards from "./CategoryCards";

const Dashboard = () => {
  return (
    <div className="w-full">
        <div className="grid grid-cols-3 gap-4 p-2">
            <CategoryCards />
            <CategoryCards />
            <CategoryCards />
            <CategoryCards />
        </div>
    </div>
  );
};

export default Dashboard;
