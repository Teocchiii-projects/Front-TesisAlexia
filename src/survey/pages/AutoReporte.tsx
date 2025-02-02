import "./Pages.css"
import {Container} from "@mui/material";

export function AutoReporte(){
    return(
        <>
            <h2>Auto Reporte</h2>
            <form>
                <Container className={"form__container"}>

                    <Container className={"question"}>
                        <label>¿Cuenta usted con antecedente de traumatismo(s) severo(s) previo(s) como caídas,
                            golpes o
                            accidentes en los últimos 6 meses?
                        </label>
                        <Container>
                            <input type="radio" name="traumatismo" value="Si"/>Sí
                            <input type="radio" name="traumatismo" value="No"/>No
                        </Container>
                    </Container>

                    <Container className={"question"}>
                        <label>Edad</label>
                        <Container>
                            <input type="number" name="edad"/>
                        </Container>
                    </Container>

                    <Container className={"question"}>
                        <label>
                            ¿Cuenta usted con algún diagnóstico de depresión actual brindado por algún médico?
                        </label>
                        <Container>
                            <input type="radio" name="traumatismo" value="Si"/>Sí
                            <input type="radio" name="traumatismo" value="No"/>No
                        </Container>
                    </Container>

                    <Container className={"question"}>
                        <label>
                            ¿Cuenta usted con diagnóstico de fibromialgia actual brindado por algún médico?
                        </label>
                        <Container>
                            <input type="radio" name="fibromialgia" value="Si"/>Sí
                            <input type="radio" name="fibromialgia" value="No"/>No
                        </Container>
                    </Container>

                    <Container className={"question"}>
                        <label>
                            ¿Cuenta usted con diagnóstico de Trastorno de Ansiedad Generalizada actual brindado por
                            algún
                            médico?
                        </label>
                        <Container>
                            <input type="radio" name="traumatismo" value="Si"/>Sí
                            <input type="radio" name="traumatismo" value="No"/>No
                        </Container>
                    </Container>


                </Container>


            </form>

        </>
    )
}
