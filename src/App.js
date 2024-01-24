import './App.css';
import GetAllMessages from './Components/GetAllMessages';
import GetAllPersons from './Components/GetAllPersons';
import MessageByID from './Components/MessageByID';
import PostMessage from './Components/PostMessage';
import PostPerson from './Components/PostPerson';

/* Notes:
  Built to be used with "BarclaysMessageApp" Backend
    Banch: BillsPlayingBranch


  When submitting a message if you enter a name that does not exist, the backend will create a person with that name and no email
  There is no feedback given to the user when posting a message or person and the page must be refreshed to display this new information
*/

function App() {

  return (
    <div className="App">

      <h1>Post Message:</h1>
      <PostMessage />
      <br />

      <h1>Find Message By ID</h1>
      <MessageByID />
      <br />

      <h1>All Messages: </h1>
      <GetAllMessages />
      <br />

      <h1>Add Person:</h1>
      <PostPerson />
      <br />

      <h1>All People:</h1>
      <GetAllPersons />
      <br />

    </div>
  );
}

export default App;
