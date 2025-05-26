import React, { useState } from 'react';

export default function AnamneseInfantil() {
  const [dados, setDados] = useState({ nome: '', idade: '', desenvolvimento: '', equilibrio: '', brincadeiras: '' });

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#6b4fbb' }}>Ficha de Anamnese Infantil</h1>
      <label>Nome da criança:<br />
        <input type="text" value={dados.nome} onChange={e => setDados({ ...dados, nome: e.target.value })} />
      </label><br /><br />
      <label>Idade:<br />
        <input type="text" value={dados.idade} onChange={e => setDados({ ...dados, idade: e.target.value })} />
      </label><br /><br />
      <label>Desenvolvimento motor (ex: sentou aos 6 meses, andou aos 12):<br />
        <textarea value={dados.desenvolvimento} onChange={e => setDados({ ...dados, desenvolvimento: e.target.value })} />
      </label><br /><br />
      <label>Equilíbrio e coordenação:<br />
        <textarea value={dados.equilibrio} onChange={e => setDados({ ...dados, equilibrio: e.target.value })} />
      </label><br /><br />
      <label>Brincadeiras e preferências:<br />
        <textarea value={dados.brincadeiras} onChange={e => setDados({ ...dados, brincadeiras: e.target.value })} />
      </label><br /><br />
      <button onClick={() => window.print()} style={{ background: '#6b4fbb', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '6px' }}>Gerar PDF</button>
    </div>
  );
}
