import { useState } from "react";
import axios from "axios";

const Header = () => {
    const [content, setContent] = useState<string>('');
    const [important, setImportant] = useState<boolean>(false);
  
    const handleSubmit = async () => {
      const response = await axios.post('http://127.0.0.1:3001/api/notes', {
        content,
        important,
        date: new Date().toISOString()
      });
  
      if (response.status === 200) {
        setContent('');
        setImportant(false);
        window.location.reload();
      }
    }
    return (
    <div className="w-full">
        <div style={styles.title}>
            <h1 style={{fontSize: 30}}>Notes App</h1>
        </div>
        <div style={styles.inputContainer}>
            <input type="checkbox" style={styles.checkbox}  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImportant(e.target.checked)}/>
            <input type="text" style={styles.textInput} placeholder="Enter your note here" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContent(e.target.value)}/>
            <button onClick={handleSubmit} style={styles.button}>Add</button>
        </div>
    </div>);
}

const styles = {
    title: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      fontWeight: 'bold'
    },
    inputContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
      padding: '0.5rem'
    },
    checkbox: {
      height: '2.3rem',
      width: '2.3rem',
    },
    textInput: {
      height: '2.3rem',
      width: '22rem',
      padding: '0.5rem',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#3d3d3d'
    },
    button: {
      height: '3.2rem',
      width: '7rem',
      borderRadius: '5px',
      backgroundColor: '#c3073f',
      color: '#fff',
      border: 'none'
    }
}

export default Header;