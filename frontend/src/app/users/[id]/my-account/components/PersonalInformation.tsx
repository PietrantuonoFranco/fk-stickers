"use client"

import { useEffect, useState } from "react"

export default function PersonalInformation() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [editingField, setEditingField] = useState<string | null>(null);

  const userData = {
    username: "MessiGoat",
    email: "email@example.com",
    name: "Lionel",
    surname: "Messi"
  };

  useEffect(() => {
    setDefaultData();
  }, []);

  const setDefaultData = () => {
    setUsername(userData.username);
    setEmail(userData.email);
    setName(userData.name);
    setSurname(userData.surname);

    setEditingField(null);
  }

  const changeField = (fieldId: string) => {
    setEditingField(fieldId === editingField ? null : fieldId);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    switch(field) {
      case 'username':
        setUsername(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'name':
        setName(e.target.value);
        break;
      case 'surname':
        setSurname(e.target.value);
        break;
    }
  }

  const handleSubmit = () => {

  }

  return (
    <div className="h-110 my-6 mx-8 border-1 border-gray-200 shadow-md bg-white rounded-2xl w-full py-10 px-12">
      <div className="h-full flex flex-col">
        <div>
          <h2 className="text-3xl font-bold text-fk-dark-gray">Personal information</h2>
        </div>

        <div className="w-full h-[1px] bg-gray-200 my-6"></div>

        <div className="grid grid-cols-2 gap-y-8 gap-x-12">
          {/* Username Field */}
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium text-gray-700">
              Username
            </label>
            <div className="flex items-center space-x-2">
              <input
                id="username"
                value={username}
                readOnly={editingField !== 'username'}
                onChange={(e) => handleInputChange(e, 'username')}
                className={`w-full rounded-md pl-3 pr-12 py-2 text-fk-dark-gray border border-gray-300 ${
                  editingField === 'username' 
                    ? 'ring-2 ring-fk-lila shadow-md' 
                    : 'hover:shadow-sm hover:ring-1 hover:ring-gray-200'
                } focus:outline-none focus:ring-2 focus:ring-fk-lila focus:shadow-md`}
              />
              
              <button onClick={() => changeField("username")} className="secondary-button aspect-square w-11 h-11 rounded-md flex items-center justify-center duration-300 transition-all">
                {/* Edit icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.172 19.828L19.828 8.172c.546-.546.818-.818.964-1.112a2 2 0 0 0 0-1.776c-.146-.295-.418-.567-.964-1.112c-.545-.546-.817-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.566.418-1.112.964L4.172 15.828c-.579.578-.868.867-1.02 1.235C3 17.43 3 17.839 3 18.657V21h2.343c.818 0 1.226 0 1.594-.152c.367-.152.656-.442 1.235-1.02M12 21h6M14.5 5.5l4 4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="flex items-center space-x-2">
              <div className="relative w-full">
                {/* Email icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                    <path d="m2 6l6.913 3.917c2.549 1.444 3.625 1.444 6.174 0L22 6" />
                    <path d="M2.016 13.476c.065 3.065.098 4.598 1.229 5.733c1.131 1.136 2.705 1.175 5.854 1.254c1.94.05 3.862.05 5.802 0c3.149-.079 4.723-.118 5.854-1.254c1.131-1.135 1.164-2.668 1.23-5.733c.02-.986.02-1.966 0-2.952c-.066-3.065-.099-4.598-1.23-5.733c-1.131-1.136-2.705-1.175-5.854-1.254a115 115 0 0 0-5.802 0c-3.149.079-4.723.118-5.854 1.254c-1.131 1.135-1.164 2.668-1.23 5.733a69 69 0 0 0 0 2.952" />
                  </g>
                </svg>

                <input
                  id="email"
                  value={email}
                  readOnly={editingField !== 'email'}
                  onChange={(e) => handleInputChange(e, 'email')}
                  className={`w-full rounded-md pl-10 pr-12 py-2 text-fk-dark-gray border border-gray-300 ${
                    editingField === 'email' 
                      ? 'ring-2 ring-fk-lila shadow-md' 
                      : 'hover:shadow-sm hover:ring-1 hover:ring-gray-200'
                  } focus:outline-none focus:ring-2 focus:ring-fk-lila focus:shadow-md`}
                />
              </div>
              <button onClick={() => changeField("email")} className="secondary-button aspect-square w-11 h-11 rounded-md flex items-center justify-center duration-300 transition-all">
                {/* Edit icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.172 19.828L19.828 8.172c.546-.546.818-.818.964-1.112a2 2 0 0 0 0-1.776c-.146-.295-.418-.567-.964-1.112c-.545-.546-.817-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.566.418-1.112.964L4.172 15.828c-.579.578-.868.867-1.02 1.235C3 17.43 3 17.839 3 18.657V21h2.343c.818 0 1.226 0 1.594-.152c.367-.152.656-.442 1.235-1.02M12 21h6M14.5 5.5l4 4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="flex items-center space-x-2">
              <input
                id="name"
                value={name}
                readOnly={editingField !== 'name'}
                onChange={(e) => handleInputChange(e, 'name')}
                className={`w-full rounded-md pl-3 pr-12 py-2 text-fk-dark-gray border border-gray-300 ${
                  editingField === 'name' 
                    ? 'ring-2 ring-fk-lila shadow-md' 
                    : 'hover:shadow-sm hover:ring-1 hover:ring-gray-200'
                } focus:outline-none focus:ring-2 focus:ring-fk-lila focus:shadow-md`}
              />
              
              <button onClick={() => changeField("name")} className="secondary-button aspect-square w-11 h-11 rounded-md flex items-center justify-center duration-300 transition-all">
                {/* Edit icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.172 19.828L19.828 8.172c.546-.546.818-.818.964-1.112a2 2 0 0 0 0-1.776c-.146-.295-.418-.567-.964-1.112c-.545-.546-.817-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.566.418-1.112.964L4.172 15.828c-.579.578-.868.867-1.02 1.235C3 17.43 3 17.839 3 18.657V21h2.343c.818 0 1.226 0 1.594-.152c.367-.152.656-.442 1.235-1.02M12 21h6M14.5 5.5l4 4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Surname Field */}
          <div className="space-y-2">
            <label htmlFor="surname" className="text-sm font-medium text-gray-700">
              Surname
            </label>
            <div className="flex items-center space-x-2">
              <input
                id="surname"
                value={surname}
                readOnly={editingField !== 'surname'}
                onChange={(e) => handleInputChange(e, 'surname')}
                className={`w-full rounded-md pl-3 pr-12 py-2 text-fk-dark-gray border border-gray-300 ${
                  editingField === 'surname' 
                    ? 'ring-2 ring-fk-lila shadow-md' 
                    : 'hover:shadow-sm hover:ring-1 hover:ring-gray-200'
                } focus:outline-none focus:ring-2 focus:ring-fk-lila focus:shadow-md`}
              />
              
              <button onClick={() => changeField("surname")} className="secondary-button aspect-square w-11 h-11 rounded-md flex items-center justify-center duration-300 transition-all">
                {/* Edit icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.172 19.828L19.828 8.172c.546-.546.818-.818.964-1.112a2 2 0 0 0 0-1.776c-.146-.295-.418-.567-.964-1.112c-.545-.546-.817-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.566.418-1.112.964L4.172 15.828c-.579.578-.868.867-1.02 1.235C3 17.43 3 17.839 3 18.657V21h2.343c.818 0 1.226 0 1.594-.152c.367-.152.656-.442 1.235-1.02M12 21h6M14.5 5.5l4 4" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex items-end justify-end space-x-3">
          <button onClick={() => setDefaultData()} className="cancel-button px-4 py-2 rounded-md duration-300 transition-all">Cancel</button>
              
          <button onClick={() => handleSubmit()} className="main-button px-4 py-2 rounded-md duration-300 transition-all">Save Changes</button>
        </div>
      </div>
    </div>
  )
}
