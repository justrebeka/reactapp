"use strict";

import React from 'react';

export default class Home extends React.Component{
    render() {
        return (
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-12">
                        <img src="https://scontent.fomr1-1.fna.fbcdn.net/v/t1.0-9/35742249_618368118538068_4089503447903109120_o.jpg?_nc_cat=0&oh=1cf96a14f74dd009941d2595e248810f&oe=5BEA1D25" height="100%" width="100%" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <br/>
                        <h2 id="titlu1">Bani economisiți și timp salvat pe două roți!</h2>
                        <h3 id="subtitlu1">Bicicleta sau trotineta face diferenta</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <img src="https://www.bikecitizens.net/wp-content/uploads/2017/06/canberratransportphoto.jpg" height="100%" width="100%" />
                        </div>
                    <div className="col-md-5">
                        <ul>
                            <li className="lista" id="bullet">Eficiență - Mai rapid ca mașina sau autobuzul</li>
                            <h4>Fie că e oră de vârf sau nu, bicicleta te va duce la destinație înaintea mașinii.
                               Nu rămâi blocat în trafic, nu cauți loc de parcare, nu aștepți în stație, nu te înghesui.<br />
                                Bicicleta e mereu încărcată la capacitate maximă spre deosebire de mașină sau autobuz. Mai eficient
                                de atât nu se poate. </h4>
                            <li className="lista" id="bullet">Economie - Fără costuri de transport</li>
                            <h4>Nu te oprești sa alimentezi, nu cumperi bilet, nu plătesti abonament.
                                Este singurul mijloc de transport pentru care nu ai nevoie de portofel la tine.<br />
                                Într-o singură lună de mers cu bicicleta la servici se vede diferența mare de plăți efectuate pentru combustibil
                                sau pentru alte cheltuieli cu transportul</h4>
                            <li className="lista" id="bullet">Sănătate - Mișcare ușoară zilnică</li>
                            <h4>Problema sănătății se raspandeste mai rapid ca un virus, iar noi nu găsim timp pentru mișcare.
                               Și această problemă este rezolvată cu ajutorul a două roți, fără a investi timp suplimentar.<br />
                               Mașina cheltuie bani și acumuleaza colesterol, în timp ce bicicleta cheltuie colesterol și acumuleaza bani.</h4>
                            <li className="lista" id="bullet">100% ecologic - Sursă de energie naturală</li>
                            <h4>Protejezi natura. Nivelul de poluare este zero, acesta este încă un avantaj pentru sănătate.
                               Mai puțină poluare înseamnă un oraș mai curat și mai sănătos.<br />
                               Nu ne mai interesează standardele euro, acestea sunt pentru cei care umple aerul cu poluanți de la mașina.</h4>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h2> <br /><br/>Mai puține roți, mai multă distracție!</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p> <br />
                            Ești mai vesel - chiar dacă ești supărat, stresat sau deprimat atunci când pleci la plimbare, totul se va schimba în următoarele 30 minute.
                            Activitățile fizice care presupun un efort cel mult moderat vor face organismul să secrete endorfine, fapt care luptă în mod direct 
                            împotriva stresului și depresiei. Pleci cu bicicleta stresat și te întorci o altă persoană!<br /><br />
                            Plăcerea simplă de a te plimba și de a descoperi peisajul, combinată cu faptul că la fiecare ieșire îți simți corpul tot mai pregătit și 
                            dornic pentru pedalare, face din mersul pe bicicletă un sport care ridică moralul. Aceasta ar fi o explicație pentru zâmbetul larg pe 
                            care îl afișează iubitorii acestui sport.<br /><br/>
                            Experții au ajuns la concluzia că mersul regulat pe bicicletă acționează ca un drog care potențează hormonul fericirii, însă fără nici un
                            efect secundar. Ca să nu mai vorbim că, pedalând, îți va fi tot mai puțin poftă de o țigară, de alcool sau ciocolată – adicții periculoase,
                            care te binedispun doar pentru moment, dar care se transformă în vicii pe termen lung. Așa că încalecă pe bicicleta ta și vei observa în
                            scurt timp că nu mai ai nevoie decât de un zâmbet larg pentru a cuceri orașul și poate, mai apoi, lumea întreagă.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src="https://www.lakegeorge.com/whatsnew/wp-content/uploads/sites/5/2016/06/bike-family.jpg" height="100%" width="100%"/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://wtop.com/wp-content/uploads/2017/05/051617_bike_dildine.jpg" height="100%" width="100%" />
                    </div>
                    <div className="col-md-4">
                        <br/>
                        <h2>Spune NU orelor pierdute în trafic </h2><br/>
                        <p> E drept că orașul Cluj nu e cel mai prietenos pentru biciclete, mai ales dacă avem în vedere că uneori este foarte mult de urcat și ritmul
                            este mai scăzut, dar în același timp putem fi bucuroși că totuși ne putem mișca. Șoferii privesc din trafic cum bicicletele și trotinetele
                            trec pe lângă ei și indeferent câți cai au sub capotă, tot nu îi ajută la nimic. Cine are mai mult de două roți, le are spre dezavantajul
                            său.</p>
                    </div>
                    <div className="col-md-4">
                        <img src="http://cdn.sibiu100.ro/wp-content/uploads/2015/06/DSC_4253-750x530.jpg" height="100%" width="100%" />
                    </div>
                </div>

            </div> );

    }
}