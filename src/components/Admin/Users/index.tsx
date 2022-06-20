import React from "react";

const Users = () => {
  return (
    <div className="w-full h-full border flex border-gray-300  rounded-lg p-4 flex-col gap-4">
      <table className="divide-y divide-gray-300 w-full" id="dataTable">
        <thead className="bg-orange-600 text-white">
          <tr>
            <th className="px-6 py-2 text-xs">ID</th>
            <th className="px-6 py-2 text-xs">Photo</th>
            <th className="px-6 py-2 text-xs">Email</th>
            <th className="px-6 py-2 text-xs">Created_at</th>
            <th className="px-6 py-2 text-xs">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-500">
          <tr className="whitespace-nowrap">
            <td className="px-6 py-4 text-sm text-center text-gray-500">1</td>
            <td className="px-6 py-4 text-center">
              <div className="text-sm text-gray-900">Jon doe</div>
            </td>
            <td className="px-6 py-4 text-center">
              <div className="text-sm text-gray-500">jhondoe@example.com</div>
            </td>
            <td className="px-6 py-4 text-sm text-center text-gray-500">
              2021-1-12
            </td>
            <td className="px-6 py-4 text-center flex gap-3 items-center justify-center">
              <p className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full">
                Edit
              </p>
              <p className="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full">
                Delete
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
