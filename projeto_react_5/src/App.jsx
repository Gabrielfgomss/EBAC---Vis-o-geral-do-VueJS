import { useState } from 'react';
import styles from './app.module.css';

function App() {
    const [IMC, setIMC] = useState({
        peso: 0,
        altura: 0,
        resultado: 0
    })
    const resultado = IMC.peso/((IMC.altura/100)*(IMC.altura/100))
    return (
    <main>
        <h1>Calculadora de IMC</h1>
        <div>
            <div>
                <form className={styles.form}>
                    <input 
                        type="text" 
                        placeholder="Insira seu peso"
                        onChange={
                            evento => setIMC(prevState => ({
                                    ...prevState,
                                    peso: evento.target.value
                                })
                            )}
                        />
                    <input 
                        type="text" 
                        placeholder="Insira sua altura sem decimal"
                        onChange={
                            evento => setIMC(prevState => ({
                                    ...prevState,
                                    altura: evento.target.value
                                })
                            )}
                        />
                </form>
                <h2>Resultado</h2>
                <div className={styles.resultado}>
                    {resultado.toFixed(1)}
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td 
                        className={
                            `${resultado < 18.5 ? 
                                styles.emEvidencia : 
                                ''
                            }`
                        }>
                            Abaixo de 18,5
                        </td>
                        <td>Magreza</td>
                    </tr>
                    <tr>
                        <td 
                        className={
                            `${resultado >= 18.5 && 
                                resultado < 25 ? 
                                styles.emEvidencia : 
                                ''
                            }`
                        }>
                            18,5 - 24,9
                        </td>
                        <td>Normal</td>
                    </tr>
                    <tr>
                        <td 
                        className={
                            `${resultado >= 25 &&
                                resultado < 30? 
                                styles.emEvidencia : 
                                ''
                            }`
                        }>
                            25,0 - 29,9
                        </td>
                        <td>Sobrepeso</td>
                    </tr>
                    <tr>
                        <td 
                        className={
                            `${resultado >= 30 &&
                                resultado < 35? 
                                styles.emEvidencia : 
                                ''
                            }`
                        }>
                            30,0 - 34,9</td>
                        <td>Obesidade</td>
                    </tr>
                    <tr>
                    <td 
                        className={
                            `${resultado >= 35 &&
                                resultado < 40? 
                                styles.emEvidencia : 
                                ''
                            }`
                        }>
                            35,0 - 39,9
                        </td>
                        <td>Obesidade Severa</td>
                    </tr>
                    <tr>
                    <td 
                        className={
                            `${resultado > 40 ? 
                                styles.emEvidencia : 
                                ''
                            }`
                        }>
                            Acima de 40,0
                        </td>
                        <td>Obesidade Mórbida</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
)
}

export default App
