import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

interface IUserAddress {
  street: string;
  zipcode: string;
}

interface IUser {
  id: number;
  username: string;
  email: string;
  address: IUserAddress;
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

const fetchUsers = async () => {
  const api = 'https://jsonplaceholder.typicode.com/users';
  const { data } = await axios.get<IUser[]>(api);
  return data;
};

const getCustomer = (customer: any) => {
  console.log(customer);
};

function Users() {
  const [users, setUsers] = useState<IUser[]>([]);

  // run when page was loaded
  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <>
      <h1>Customers</h1>
      <div className='customers'>
        {users.map((user: IUser) => (
          <article onClick={getCustomer} className='customer' key={user.id}>
            <h3>{user.username}</h3>
            <p>{user.company.name}</p>
          </article>
        ))}
      </div>
    </>
  );
}

export default Users;
