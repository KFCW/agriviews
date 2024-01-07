import "./style.css"
import { FaUser } from "react-icons/fa";


interface DataClient {
  name: string;
  email: string;
  tel: number;
  date: string; // Format : "jour/mois/année"
}

const dataClients: DataClient[] = [
  {
    name: "Client1",
    email: "client1@example.com",
    tel: 1234567890,
    date: "01/01/2022",
  },
  {
    name: "Client2",
    email: "client2@example.com",
    tel: 9876543210,
    date: "15/02/2022",
  },
  {
    name: "Client3",
    email: "client3@example.com",
    tel: 5555555555,
    date: "28/03/2022",
  },
  {
    name: "Client4",
    email: "client4@example.com",
    tel: 9998887777,
    date: "12/04/2022",
  },
  {
    name: "Client5",
    email: "client5@example.com",
    tel: 1231231234,
    date: "24/05/2022",
  },
  {
    name: "Client6",
    email: "client6@example.com",
    tel: 7778889999,
    date: "06/06/2022",
  },
  {
    name: "Client7",
    email: "client7@example.com",
    tel: 3334445555,
    date: "17/07/2022",
  },
  {
    name: "Client8",
    email: "client8@example.com",
    tel: 6667778888,
    date: "29/08/2022",
  },
  {
    name: "Client9",
    email: "client9@example.com",
    tel: 1112223333,
    date: "11/09/2022",
  },
  {
    name: "Client10",
    email: "client10@example.com",
    tel: 4445556666,
    date: "23/10/2022",
  },

];



const DashClient = () => {
  return (
    <div className="container__client">
    <div className="head__client">
      <input type="text" name="search_user" placeholder="Recherche..." />
      <div className="num_client">
      <FaUser />
        <p>Nombre de producteurs : {dataClients.length}</p>
      </div>
    </div>
    <table className="table">
      <thead>
        <tr>
          <th>
            Nom
          </th>
          <th>
            Email
          </th>
          <th>
            Téléphone
          </th>
          <th>
            Date
          </th>
        </tr>
      </thead>
      <tbody>
          {
             dataClients.map( (item, index) => (
              <tr key={index}>
                <td className="td__input">{item.name}</td>
                <td>{item.email}</td>
                <td>{item.tel}</td>
                <td>{item.date}</td>
              </tr>
            ) )
       
          }
      </tbody>
    </table>
  </div>
  )
}

export default DashClient
