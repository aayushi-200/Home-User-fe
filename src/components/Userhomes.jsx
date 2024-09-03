import { useState } from "react";
import AddPropertyModal from "./AddPropertyModel";

const Userhomes = () => {
  // const properties = [
  //   {
  //     street_address: "89701 E Pine Street",
  //     state: "CA",
  //     zip: "90210",
  //     sqft: "3500",
  //     beds: 4,
  //     bath: 3,
  //     list_price: "$1,200,000",
  //   },
  //   {
  //     street_address: "123 Main St",
  //     state: "TX",
  //     zip: "73301",
  //     sqft: "2500",
  //     beds: 3,
  //     bath: 2,
  //     list_price: "$850,000",
  //   },
  //   {
  //     street_address: "456 Oak Dr",
  //     state: "NY",
  //     zip: "10001",
  //     sqft: "1800",
  //     beds: 2,
  //     bath: 1,
  //     list_price: "$600,000",
  //   },
  //   // Add more property data as needed
  // ];


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [properties, setProperties] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addProperty = (propertyDetails) => {
    setProperties([...properties, propertyDetails]);
  };
  return (
    <>
      <div className="bg-slate-200 h-screen">
        <div className="p-5">
          <button className="bg-blue-500 text-white px-6 py-3" onClick={openModal}>Add Home</button>
        </div>

        <AddPropertyModal isOpen={isModalOpen} onClose={closeModal} onAddProperty={addProperty} />

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-3 px-4 text-left bg-gray-100 font-semibold text-gray-700 border-b">
                  Street Address
                </th>
                <th className="py-3 px-4 text-left bg-gray-100 font-semibold text-gray-700 border-b">
                  State
                </th>
                <th className="py-3 px-4 text-left bg-gray-100 font-semibold text-gray-700 border-b">
                  ZIP
                </th>
                <th className="py-3 px-4 text-left bg-gray-100 font-semibold text-gray-700 border-b">
                  SqFt
                </th>
                <th className="py-3 px-4 text-left bg-gray-100 font-semibold text-gray-700 border-b">
                  Beds
                </th>
                <th className="py-3 px-4 text-left bg-gray-100 font-semibold text-gray-700 border-b">
                  Bath
                </th>
                <th className="py-3 px-4 text-left bg-gray-100 font-semibold text-gray-700 border-b">
                  List Price
                </th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4 text-gray-900">
                    {property.street_address}
                  </td>
                  <td className="py-3 px-4 text-gray-900">{property.state}</td>
                  <td className="py-3 px-4 text-gray-900">{property.zip}</td>
                  <td className="py-3 px-4 text-gray-900">{property.sqft}</td>
                  <td className="py-3 px-4 text-gray-900">{property.beds}</td>
                  <td className="py-3 px-4 text-gray-900">{property.bath}</td>
                  <td className="py-3 px-4 text-gray-900">
                    {property.list_price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Userhomes;
