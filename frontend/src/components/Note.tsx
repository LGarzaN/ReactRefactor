
interface Note {
    id: number,
    content: string,
    important: boolean,
    date: string
}

const NoteComponent = (note: Note) => {
    const formatDate = (date: string) => {
        const date2 = new Date(date);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date2.toLocaleDateString('en-US', options);
        return formattedDate;
    }
    return (
        <div style={styles.card}>
            <div style={{...styles.cardHeader, flexDirection: 'row'}}>
                <p>{formatDate(note.date)}</p>
                {note.important && <p style={styles.important}>Important!</p>}
            </div>
            <hr />
            <div style={styles.content}>
                <p>{note.content}</p>
            </div>
        </div>
    )
}

const styles = {
    card: {
        width: '35%',
        padding: '1rem',
        borderRadius: '5px',
        backgroundColor: '#950740',
        minHeight: '8rem'
    },
    cardHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    important: {
        color: 'white',
        fontsize: 30,
        fontweight: 'bold',
    },
    content: {
        padding: '1rem',
        color: '#fff'
    }
}

export default NoteComponent
