import "./Survey.css";
import {Container, FormControl, FormLabel} from "@mui/material";
import {AutoReporte} from "./AutoReporte.tsx";
import {ChronicPainGrade} from "./ChronicPainGrade.tsx";
import {FiRST} from "./FiRST.tsx";
import {ACE} from "./ACE.tsx";
import {PHQ2} from "./PHQ-2.tsx";
import {IPAQ} from "./IPAQ.tsx";
import {CalidadDeSueño} from "./CalidadDeSueño.tsx";



export function Survey(){
    return (
        <>
            <Container>
                <form>
                    1
                    <AutoReporte/>
                    2
                    <ChronicPainGrade/>
                    3
                    <FiRST/>
                    4
                    <ACE/>
                    5
                    <PHQ2/>
                    6
                    <IPAQ/>
                    7
                    <CalidadDeSueño/>
                    <label>email</label>
                    <input type={"email"}/>




                    <FormControl>
                        <FormLabel className={"form__label"}>

                        </FormLabel>
                    </FormControl>


                </form>
            </Container>

        </>
    );
}