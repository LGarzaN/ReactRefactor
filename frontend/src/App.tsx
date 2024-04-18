import { useEffect, useState } from "react"
import axios from "axios"
import NoteComponent from "./components/Note";
import Header from "./components/Header";

interface Note {
  id: number,
  content: string,
  important: boolean,
  date: string
}

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = () => {
      axios.get('http://127.0.0.1:3001/api/notes')
        .then(response => {
          console.log(response.data);
          setNotes(response.data);
        }).catch(error => {
          console.log(error);
        })
      
    }

    fetchNotes();
  }, [])

  return (
    <div style={styles.container}>
        <Header />
      <div style={{...styles.notesContainer, flexDirection: 'column'}}>
        {notes.map((note: Note) => (
          <NoteComponent {...note} key={note.id}/>
        ))}
      </div>

    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#1a1a1d',
    color: '#fff',
    margin: -10,
    padding: '0',
  },
  notesContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem'
  }
}

export default App
