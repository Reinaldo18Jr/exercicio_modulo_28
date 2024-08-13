import { useState } from "react";

import styles from "../Form/Form.module.css";

const Form = () => {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [resultado, setResultado] = useState("");

    const calcularImc = () => {
        const imc = peso / (altura * altura);
        setResultado(imc.toFixed(2));
    };

    return (
        <form className={styles.form}>
            <h2 className={styles.titulo}>Peso</h2>
            <input 
                className={styles.input}
                value={peso}
                onChange={(evento) => setPeso(evento.target.value)}
                type="number"
                placeholder="Peso em Kg"
            />
            <h2 className={styles.titulo}>Altura</h2>
            <input 
                className={styles.input}
                value={altura}
                onChange={(evento) => setAltura(evento.target.value)}
                type="number"
                placeholder="Altura em Metros"
            />
            <button 
                className={styles.btn}
                type="button" 
                onClick={calcularImc()}
                >
                    Calcular
                </button>
                {resultado && (
                    <div>
                        <p>
                            Seu IMC é de: {resultado} <br />
                            - Menor que 16: Magreza grave <br />
                            - Entre 16 e 16,9: Magreza moderada <br />
                            - Entre 17 e 18,5: Magreza leve <br />
                            - Entre 18,6 e 24,9: Peso ideal <br />
                            - Entre 25 e 29,9: Sobrepeso <br />
                            - Entre 30 e 34,9: Obesidade grau I <br />
                            - Entre 35 e 39,9: Obesidade grau II <br />
                        </p>
                    </div>
                )}
            </form>
        );
    };

export default Form;