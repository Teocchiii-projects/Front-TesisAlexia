import "./Pages.css";
import { Container } from "@mui/material";
import { RadioButtonGroup } from "../components/RadioButtonGroupProps.tsx";


export function ChronicPainGrade() {
    return (
        <>
            <h2>Grado de dolor crónico (CPGS: Chronic Pain Grade)</h2>
            <form>
                <Container className="form__container">
                    <Container className="multiple__choice">

                        <Container className="question">

                            <RadioButtonGroup
                                label="El dolor de espalda, de cabeza o facial que siente en este momento."
                                name="Pregunta1"
                                min={1}
                                max={10}
                            />
                            <RadioButtonGroup
                                label="La intensidad del peor dolor de espalda, de cabeza o facial que haya tenido en los últimos 6 meses."
                                name="Pregunta2"
                                min={1}
                                max={10}
                            />
                            <RadioButtonGroup
                                label="El grado medio (promedio) de intensidad del dolor de espalda, de cabeza o facial que ha sentido en los últimos 6 meses (se refiere al dolor típico que tiene cuando experimenta este tipo de molestia)."
                                name="Pregunta3"
                                min={1}
                                max={10}
                            />
                        </Container>


                        <Container className={"question"}>
                            <label>
                                Indique el número de días que, en los últimos <span className={"span__underline"}>6 meses</span>, no ha podido realizar sus actividades habituales (trabajo, escuela o labores del hogar) a causa del dolor de espalda, de cabeza o facial.
                            </label>
                            <ul>
                                <li>
                                    0-6 días: 0 puntos
                                </li>
                                <li>
                                    7-14 días: 1 punto
                                </li>
                                <li>
                                    15-30 días: 2 puntos
                                </li>
                                <li>
                                    &gt;31 días: 3 puntos
                                </li>
                            </ul>

                            <RadioButtonGroup
                                label="Marque a continuación sus puntos según el número de días:"
                                name="Pregunta4"
                                min={1}
                                max={3}
                            />

                        </Container>

                        <Container className={"question"}>
                            <label>
                                Puntúe en una escala que va de 0 a 10, siendo 0 “nada” y 10 “totalmente” las siguientes cuestiones:
                            </label>

                            <RadioButtonGroup
                                label="En los últimos 6 meses, cuánto ha afectado su dolor de espalda, de cabeza o facial a su capacidad para participar en actividades recreativas, sociales y familiares."
                                name="Pregunta5"
                                min={1}
                                max={10}
                            />

                            <RadioButtonGroup
                                label="En los últimos 6 meses, cuánto ha afectado su dolor de espalda, de cabeza o facial a su capacidad para trabajar, incluyendo las labores de la casa."
                                name="Pregunta6"
                                min={1}
                                max={10}
                            />

                        </Container>
                    </Container>
                </Container>
            </form>
        </>
    );
}
