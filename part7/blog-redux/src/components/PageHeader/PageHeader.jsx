import Navbar from "../Navbar/Navbar";

const PageHeader = () => {
  return (
    <div className="bg-gray-100 shadow-md">
      <Navbar />
      <div className="max-w-6xl mx-auto px-8 py-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Blogs App
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
