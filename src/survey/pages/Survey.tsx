import "./Survey.css";
import {Container, FormControl, FormLabel} from "@mui/material";
import {AutoReporte} from "./AutoReporte.tsx";
import {ChronicPainGrade} from "./ChronicPainGrade.tsx";



export function Survey(){
    return (
        <>
            <Container>
                <form>
                    <AutoReporte/>
                    <ChronicPainGrade/>



                    <FormControl>
                        <FormLabel className={"form__label"}>

                        </FormLabel>
                    </FormControl>


                </form>
            </Container>

        </>
    );
}