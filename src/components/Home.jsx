import { useState } from "react";
import Modal from "./Modal";

const Home = () => {
  const AllUsers = [
    {
      id: "1",
      title: "user1",
    },
    {
      id: "2",
      title: "user2",
    },
    {
      id: "3",
      title: "user3",
    },
    {
      id: "4",
      title: "user4",
    },
    {
      id: "5",
      title: "user5",
    },
  ];

  const cardDetails = [
    {
      id: 1,
      title: "7726 Jcobson Square",
      ListPrice: "791202",
      state: "Arizona",
      zip: "99876",
      sqft: "8668767",
      Beds: "1",
      Bath: "3",
    },
    {
      id: 2,
      title: "7726 Jcobson Square",
      ListPrice: "791202",
      state: "Arizona",
      zip: "99876",
      sqft: "8668767",
      Beds: "1",
      Bath: "3",
    },
    {
      id: 3,
      title: "7726 Jcobson Square",
      ListPrice: "791202",
      state: "Arizona",
      zip: "99876",
      sqft: "8668767",
      Beds: "1",
      Bath: "3",
    },
    {
      id: 4,
      title: "7726 Jcobson Square",
      ListPrice: "791202",
      state: "Arizona",
      zip: "99876",
      sqft: "8668767",
      Beds: "1",
      Bath: "3",
    },
    {
      id: 5,
      title: "7726 Jcobson Square",
      ListPrice: "791202",
      state: "Arizona",
      zip: "99876",
      sqft: "8668767",
      Beds: "1",
      Bath: "3",
    },
    {
      id: 6,
      title: "7726 Jcobson Square",
      ListPrice: "791202",
      state: "Arizona",
      zip: "99876",
      sqft: "8668767",
      Beds: "1",
      Bath: "3",
    },
    {
      id: 7,
      title: "7726 Jcobson Square",
      ListPrice: "791202",
      state: "Arizona",
      zip: "99876",
      sqft: "8668767",
      Beds: "1",
      Bath: "3",
    },
    {
      id: 7,
      title: "7726 Jcobson Square",
      ListPrice: "791202",
      state: "Arizona",
      zip: "99876",
      sqft: "8668767",
      Beds: "1",
      Bath: "3",
    },
    {
      id: 7,
      title: "7726 Jcobson Square",
      ListPrice: "791202",
      state: "Arizona",
      zip: "99876",
      sqft: "8668767",
      Beds: "1",
      Bath: "3",
    },
    {
      id: 7,
      title: "7726 Jcobson Square",
      ListPrice: "791202",
      state: "Arizona",
      zip: "99876",
      sqft: "8668767",
      Beds: "1",
      Bath: "3",
    },
    {
      id: 7,
      title: "7726 Jcobson Square",
      ListPrice: "791202",
      state: "Arizona",
      zip: "99876",
      sqft: "8668767",
      Beds: "1",
      Bath: "3",
    },
    {
      id: 7,
      title: "7726 Jcobson Square",
      ListPrice: "791202",
      state: "Arizona",
      zip: "99876",
      sqft: "8668767",
      Beds: "1",
      Bath: "3",
    },
    {
      id: 7,
      title: "7726 Jcobson Square",
      ListPrice: "791202",
      state: "Arizona",
      zip: "99876",
      sqft: "8668767",
      Beds: "1",
      Bath: "3",
    },
    {
      id: 7,
      title: "7726 Jcobson Square",
      ListPrice: "791202",
      state: "Arizona",
      zip: "99876",
      sqft: "8668767",
      Beds: "1",
      Bath: "3",
    },
    {
      id: 7,
      title: "7726 Jcobson Square",
      ListPrice: "791202",
      state: "Arizona",
      zip: "99876",
      sqft: "8668767",
      Beds: "1",
      Bath: "3",
    },
    {
      id: 7,
      title: "7726 Jcobson Square",
      ListPrice: "791202",
      state: "Arizona",
      zip: "99876",
      sqft: "8668767",
      Beds: "1",
      Bath: "3",
    },
    {
      id: 7,
      title: "7726 Jcobson Square",
      ListPrice: "791202",
      state: "Arizona",
      zip: "99876",
      sqft: "8668767",
      Beds: "1",
      Bath: "3",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editRowData, setEditRowData] = useState(null);
  const [users, setUsers] = useState([
    { name: "user7", checked: false },
    { name: "user3", checked: true },
    { name: "user10", checked: false },
    { name: "user6", checked: false },
    { name: "user2", checked: false },
    { name: "user5", checked: true },
    { name: "user4", checked: false },
    { name: "user9", checked: true },
    { name: "user8", checked: false },
    { name: "user1", checked: false },
  ]);

  const openModal = (row) => {
    setEditRowData(row);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const handleSave = (updatedUsers) => {
    setUsers(updatedUsers);
  };
  return (
    <>
      <div className="bg-slate-200">
        <div className="flex justify-center gap-4  pt-5">
          <label className="text-2xl font-semibold font-sans" htmlFor="users">
            Select User :{" "}
          </label>
          <select
            name="users"
            id="users"
            defaultValue=""
            className="px-3 border-2 border-slate-500"
          >
            <option value="" disabled className="text-xl">
              Select
            </option>
            {AllUsers &&
              AllUsers.map((user) => (
                <option key={user.id} value={user?.id} className="text-xl">
                  {user?.title}
                </option>
              ))}
          </select>
        </div>

        <div className="m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {cardDetails &&
            cardDetails.map((card) => (
              <div
                key={card.id}
                className="bg-white min-w-[220px] max-w-[300px] p-5 rounded-md drop-shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="font-semibold">List Price : ${card.ListPrice}</p>
                <p className="font-semibold">state : {card.state}</p>
                <p className="font-semibold">Zip : {card.zip}</p>
                <p className="font-semibold">Sqft : {card.sqft}</p>
                <p className="font-semibold">Beds : {card.Beds}</p>
                <p className="font-semibold">Baths : {card.Bath}</p>
                <div className="flex justify-center mt-3">
                  <button
                    className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700"
                    onClick={() => openModal(card)}
                  >
                    Edit Users
                  </button>
                </div>
              </div>
            ))}
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          users={users}
          onSave={handleSave}
        />
      </div>
    </>
  );
};

export default Home;
