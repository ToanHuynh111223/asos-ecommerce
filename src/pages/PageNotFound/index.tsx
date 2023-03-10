import clsx from "clsx";
import styles from "./PageNotFound.module.scss";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { useLocation } from "react-router-dom";
//import tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const PageNotFound: React.FC = () => {
  let location = useLocation().pathname;
  return (
    <div className={clsx(styles.errorMessage)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="88"
        height="88"
        viewBox="0 0 88 88"
      >
        <g fill="none" fillRule="evenodd">
          <g fill="#FFD95A">
            <path d="M29 0h30v88H29z"></path>
            <path d="M18 6h52v76H18z"></path>
            <path d="M12 12h64v64H12z"></path>
            <path d="M6 18h76v52H6z"></path>
            <path d="M0 30h88v28H0z"></path>
            <g opacity=".6" style={{ mixBlendMode: "multiply" }}>
              <path d="M29 0h30v88H29z"></path>
              <path d="M18 6h52v76H18z"></path>
              <path d="M12 12h64v64H12z"></path>
              <path d="M6 18h76v52H6z"></path>
              <path d="M0 30h88v28H0z"></path>
            </g>
          </g>
          <path fill="#2D2D2D" d="M41 59h6v6h-6z"></path>
          <path
            fill="#2D2D2D"
            d="M41 59h6v6h-6zM47 59h6v6h-6zM53 65h6v6h-6zM29 65h6v6h-6zM35 59h6v6h-6zM18 47h6v6h-6zM64 47h6v6h-6zM24 41h12v6H24zM52 41h12v6H52z"
          ></path>
        </g>
      </svg>
      <div className={clsx(styles.tabList)}>
        <Tabs>
          <TabList>
            {logo.map((img, index) => {
              return (
                index < 10 && (
                  <Tab
                    key={index}
                    style={{
                      padding: "12px",
                      width: "50px",
                      height: "52px",
                      margin: "0 10px",
                    }}
                  >
                    <img
                      src={img.default}
                      alt={`${index}`}
                      style={{ width: "100%" }}
                    />
                  </Tab>
                )
              );
            })}
          </TabList>
          <TabPanel>
            <div className={clsx(styles.content)}>
              <h1>Oh no!</h1>
              <p>
                This page couldn???t be loaded for some reason, give it a retry or
                come back later
              </p>
              <Link to={location.search("men") === 1 ? "/men" : "/women"}>
                Go to homepage
              </Link>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={clsx(styles.content)}>
              <h1>??H NEJ!</h1>
              <p>
                Denne side kunne ikke indl??ses af en eller anden grund. Pr??v
                igen, eller vend tilbage senere
              </p>
              <Link to={location.search("men") === 1 ? "/men" : "/women"}>
                G?? TIL STARTSIDEN
              </Link>
            </div>
          </TabPanel>

          <TabPanel>
            <div className={clsx(styles.content)}>
              <h1>D??SOL??</h1>
              <p>
                Cette page n'a pas pu ??tre charg??e, veuillez essayer ?? nouveau
                ou revenir plus tard
              </p>
              <Link to={location.search("men") === 1 ? "/men" : "/women"}>
                RETOUR ?? LA PAGE D'ACCUEIL
              </Link>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={clsx(styles.content)}>
              <h1>OH NEIN!</h1>
              <p>
                Diese Seite konnte aus irgendeinem Grund nicht geladen werden,
                bitte versuche es erneut oder schau sp??ter nochmal vorbei.
              </p>
              <Link to={location.search("men") === 1 ? "/men" : "/women"}>
                ZUR??CK ZUR STARTSEITE
              </Link>
            </div>
          </TabPanel>

          <TabPanel>
            <div className={clsx(styles.content)}>
              <h1>OH, NO!</h1>
              <p>
                Ci sono problemi nel caricamento della pagina, riprova o torna
                pi?? tardi
              </p>
              <Link to={location.search("men") === 1 ? "/men" : "/women"}>
                VOLVER A P??GINA DE INICIO
              </Link>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={clsx(styles.content)}>
              <h1>OH NEE!</h1>
              <p>
                Deze pagina kan niet geladen worden, probeer het opnieuw of kom
                later terug
              </p>
              <Link to={location.search("men") === 1 ? "/men" : "/women"}>
                ??GA NAAR DE HOMEPAGIN
              </Link>
            </div>
          </TabPanel>

          <TabPanel>
            <div className={clsx(styles.content)}>
              <h1>O NIE!</h1>
              <p>
                Ta strona nie mog??a zosta?? za??adowana z jakiego?? powodu. Spr??buj
                ponownie lub wr???? p????niej
              </p>
              <Link to={location.search("men") === 1 ? "/men" : "/women"}>
                PRZEJD?? DO STRONY G????WNEJ
              </Link>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={clsx(styles.content)}>
              <h1>??, ??????!</h1>
              <p>
                ?????? ???????????????? ????????????-???? ???? ??????????????????????. ?????????????????? ?????????????? ????????????
                ?????? ???????? ??????????
              </p>
              <Link to={location.search("men") === 1 ? "/men" : "/women"}>
                ?????????? ???? ??????????????
              </Link>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={clsx(styles.content)}>
              <h1>??OH NO!</h1>
              <p>
                Por alg??n motivo no hemos podido cargar esta p??gina. Int??ntalo
                de nuevo o vuelve m??s tarde
              </p>
              <Link to={location.search("men") === 1 ? "/men" : "/women"}>
                VOLVER A P??GINA DE INICIO
              </Link>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={clsx(styles.content)}>
              <h1>??H NEJ!</h1>
              <p>
                Av n??gon anledning gick det inte att visa den h??r sidan, testa
                igen eller kom tillbaka senare.
              </p>
              <Link to={location.search("men") === 1 ? "/men" : "/women"}>
                G?? TILL HEMSIDAN
              </Link>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default PageNotFound;
