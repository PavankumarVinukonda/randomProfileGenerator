import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import JsonData from './MockJsonData.json'
import ReactPaginate from 'react-paginate'



function App() {
  const [users,setUsers] = useState(JsonData.slice(0,50));
  const [pageNumber,setPageNumber] = useState(1);

  const usersPerPage = 10
  const pagesVisted = pageNumber*usersPerPage

  const displayUsers = users.slice(pagesVisted,pagesVisted + usersPerPage)

  const pageCount = Math.ceil(users.length / usersPerPage);
 
  const changePage = ({selected}) => {
    setPageNumber(selected)
  };

  return (
      <div className='bg-container' >
        <div>
        <img src="https://i.imgur.com/kDDFvUp.png" class="rotate" width="100" height="100" />
        <img src="https://i.imgur.com/kDDFvUp.png" class="rotate" width="100" height="100" />
        <img src="https://i.imgur.com/kDDFvUp.png" class="rotate" width="100" height="100" />
        </div>
        <h1 className='user-name'>Random Profiles Generator</h1>
        <ul className='items-container' >
        {
          displayUsers.map(item => 
          <li key={item.id} className='users-container' >
          <h1 className='user-name' >
            Name: {item.firstName}
          </h1>
          <h1 className='user-name' >
            Last Name: {item.lastName}
          </h1>
          <h1 className='user-name' >
            Email: {item.email}
          </h1>
          <p className='user-name' >
            Password: {item.password}
          </p>
          </li>
            
          )
        }
        </ul>

        <ReactPaginate previousLabel={'Previous'}  
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationButtons'}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          activeClassName={"paginationActive"}
        />

        
      </div>

  )
}

export default App;
