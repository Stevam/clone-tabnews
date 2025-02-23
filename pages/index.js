import React, { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const lowerName = name.toLowerCase().trim();
    const validNames = ['iasmym', 'iasmym santos', 'iasmym santos silveira'];
    if (!name) {
      setMessage('Digite um nome para descobrir se é vc! 😊');
    } else if (validNames.includes(lowerName)) {
      setMessage(
        '✨Acertou !!✨<br />🥰Você é minha fonte de felicidade!!✨<br />✨Cada momento contigo é um presente de Deus que eu agradeço todos os dias!!🌸<br />💕Te amo meu amor!!💖'
      );
    } else {
      setMessage('Sinto muito, não é você... 😔');
    }
    setName('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Digite seu nome:</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Enviar</button>
      </form>
      <p
        style={styles.message}
        dangerouslySetInnerHTML={{ __html: message }}
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #D6A5E5, #B3A0D1)',
    color: '#f4f4f4',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#f4f4f4',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    padding: '10px',
    margin: '10px',
    border: '1px solid #555',
    borderRadius: '5px',
    fontSize: '1rem',
    width: '250px',
    backgroundColor: '#444',
    color: '#f4f4f4',
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '10px',
  },
  message: {
    marginTop: '20px',
    fontSize: '1.2rem',
    color: '#f4f4f4',
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: '300px',
  }
};

export default Home;