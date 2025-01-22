import Card from "@mui/material/Card";
import {CardContent, CardHeader,Button} from "@mui/material";
import "./home.css";

export function Home(){
    return(
        <>

                <Card variant="outlined" className={"home__card"}>
                    <CardHeader title=""/>

                    <CardContent className={"initial__window__paragraph"}>
                        <h2>ASOCIACIÓN ENTRE LAS EXPERIENCIAS ADVERSAS ANTES DE LOS 18 AÑOS DE EDAD Y LA PRESENCIA DE
                            DOLOR CRÓNICO EN ADULTAS PERUANAS USUARIAS DE REDES SOCIALES DURANTE LOS AÑOS 2024 -
                            2025 </h2>
                        <p>
                            A usted se le está invitando a participar de este proyecto de investigación el cual busca
                            determinar si hay una asociación entre las experiencias adversas antes de los 18 años de
                            edad y la presencia de dolor crónico en adultas peruanas usuarias de redes sociales durante
                            los años 2024 - 2025. El dolor crónico es ‘’una experiencia sensorial y emocional
                            desagradable, asociada a daño tisular real o potencial o descrita en términos de aquel
                            daño’’ que puede tener varios orígenes como neuropático, nociceptivo y/o psicógeno.
                        </p>
                        <p>
                            En el presente documento de consentimiento informado usted encontrará información importante
                            relacionada a la finalidad del estudio, lo que se le pedirá a usted que haga, los riesgos
                            y/o beneficios de su participación, entre otros aspectos que le permitirán decidir si
                            participa o no. Lea detenidamente este documento y siéntase usted con la libertad de hacer
                            las preguntas que considere necesarias.
                        </p>
                        <ol>
                            <li>Justificación del estudio</li>
                            <p> Este estudio nos va a informar si usted tiene dolor crónico y nos va a permitir
                                cuantificarlas, posteriormente, también vamos a medir las experiencias adversas antes de
                                los 18 años y relacionar estas dos variables.</p>

                            <li>Procedimientos del estudio</li>
                            <p>Les daremos una encuesta en línea que durará entre 10-15 minutos, si la persona está de
                                acuerdo, que presione ''sí'' para continuar con el cuestionario.</p>

                            <li>Riesgos</li>
                            <p>El estudio no presenta riesgos mayores, sin embargo, algunas preguntas podrían resultar
                                incómodas para algunos participantes.</p>

                            <li>Beneficios</li>
                            <p>La encuesta será anónima a menos que el participante quiera saber sus resultados, para
                                estos fines, puede dejar su correo. Además, proporcionaremos número de contacto para
                                salud mental a los participantes y los que no decidan participar por igual.</p>

                            <li>Confidencialidad de la información</li>
                            <p>Este cuestionario se hará de forma anónima, a menos que el participante quiera recibir
                                los resultados de la investigación en él.</p>

                            <li>Contacto en caso de consultas o comentarios</li>
                        </ol>


                        <h4>Contacto con los investigadores</h4>
                        <p>Para comunicarse con los investigadores de este estudio, podrá hacerlo con:</p>
                        <ul>
                            <li className={"study__members"}> Alexia Gabriela del Castillo Bueno</li>
                            <li className={"study__members"}>Melani Leslie Tolentino Vila</li>
                        </ul>
                        <p>Correos:</p>
                        <p>
                            <a href={"mailto:U202112903@upc.edu.pe"}>U202112903@upc.edu.pe</a>, <a
                            href={"mailto:U202113315@upc.edu.pe"}>U202113315@upc.edu.pe</a>
                        </p>

                        <h4>Contacto con el asesor</h4>
                        <p>Para contactar al asesor de este estudio puede escribir al Dr. Germán Felipe Alvarado Cutipa Flores al correo electrónico <a href={"mailto:pcmegalv@upc.edu.pe"}>pcmegalv@upc.edu.pe</a> </p>

                        <h4>Contacto con Subcomité de Ética en Investigación – Facultad de Ciencias de la Salud</h4>

                        <p>Si usted tiene alguna duda sobre el estudio o siente que sus derechos fueron vulnerados, puede contactar a la Presidenta del Sub Comité de Ética en Investigación de la Universidad Peruana de Ciencias Aplicadas, al teléfono 313-3333, anexo 2702 o al correo electrónico comite.etica.salud@upc.edu.pe </p>
                        <p>El subcomité de ética en investigación está conformado por personas externas al proyecto de investigación, cuya función es velar que se respete la dignidad y derecho de los participantes, según el diseño y desarrollo de la investigación.</p>

                        <h4>Derecho a retirarse</h4>
                        <p>Usted podrá retirarse en cualquier momento del estudio,<span className={"bold__paragraph"}>está en su derecho </span>  a hacerlo sin dar ninguna explicación al respecto.</p>

                        <Button variant="contained"> Siguiente</Button>
                    </CardContent>
                </Card>

        </>
    )
}