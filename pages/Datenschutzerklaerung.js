
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Link } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Helmet from "views/component/UI/Helmet";
// import { images } from 'views/helpers/constants/ImageConstant';

const Datenschutzerklaerung = () => {

    return (
        <>
            <Helmet title='Privacy & Policy - Blackpool' description='' />
            <Box className='contact-main'>
                <Box className="contact-banner">
                    <Typography variant='h2'>Datenschutz</Typography>
                </Box>
            </Box>
            <Box className="bg-black">
                <Box className="container">
                    <Box className="privacy-policy-main">
                        <Box className="w-70" style={{ margin: '0 auto' }}>
                            <Typography variant='p' className='text-left site-text'>
                                Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                BlackPool e. K.
                            </Typography>
                            <Typography variant='p' className='text-left site-text'>
                                Geibelplatz 1
                            </Typography>
                            <Typography variant='p' className='text-left site-text'>
                                30173 Hannover
                            </Typography>
                            <Typography variant='p' className='text-left site-text'>
                                E-Mail-Adresse: info@blackpool-hannover.de
                            </Typography>
                            <Typography variant='h2' className='text-left site-sub-heading pt-20 fsi-22'>
                                Ihre Betroffenenrechte
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:
                            </Typography>
                            <List
                                className='skill-items w-100i'
                                sx={{ width: '100%' }}
                                aria-label="contacts"
                                style={{ width: '100%', margin: '0 auto' }}
                            >
                                <ListItem disablePadding>
                                    <ListItemIcon style={{ minWidth: '35px' }} >
                                        <StarIcon className='icon-white' />
                                    </ListItemIcon>
                                    <ListItemText className='list-item'>
                                        Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),
                                    </ListItemText>
                                </ListItem>
                                <ListItem disablePadding >
                                    <ListItemIcon style={{ minWidth: '35px' }} >
                                        <StarIcon className='icon-white' />
                                    </ListItemIcon>
                                    <ListItemText className='list-item'>
                                        Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),
                                    </ListItemText>
                                </ListItem>
                                <ListItem disablePadding >
                                    <ListItemIcon style={{ minWidth: '35px' }} >
                                        <StarIcon className='icon-white' />
                                    </ListItemIcon>
                                    <ListItemText className='list-item'>
                                        Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),
                                    </ListItemText>
                                </ListItem>
                                <ListItem disablePadding >
                                    <ListItemIcon style={{ minWidth: '35px' }} >
                                        <StarIcon className='icon-white' />
                                    </ListItemIcon>
                                    <ListItemText className='list-item'>
                                        Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),
                                    </ListItemText>
                                </ListItem>
                                <ListItem disablePadding >
                                    <ListItemIcon style={{ minWidth: '35px' }} >
                                        <StarIcon className='icon-white' />
                                    </ListItemIcon>
                                    <ListItemText className='list-item'>
                                        Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und
                                    </ListItemText>
                                </ListItem>
                                <ListItem disablePadding >
                                    <ListItemIcon style={{ minWidth: '35px' }} >
                                        <StarIcon className='icon-white' />
                                    </ListItemIcon>
                                    <ListItemText className='list-item'>
                                        Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <Typography variant='p' className='text-left site-text'>
                                Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
                            </Typography>
                            <Typography variant='p' className='text-left site-text'>
                                Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.
                            </Typography>
                            <Typography variant='p' className='text-left site-text'>
                                Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <Link href='https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html' className='color-white' style={{ textDecoration: 'underline' }} >
                                    https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html
                                </Link>
                            </Typography>
                            <Typography variant='h2' className='text-left site-sub-heading pt-20 fsi-22'>
                                Erfassung allgemeiner Informationen beim Besuch unserer Website
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Art und Zweck der Verarbeitung:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder anderweitig Informationen übermitteln, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches. Sie werden insbesondere zu folgenden Zwecken verarbeitet:
                            </Typography>
                            <List
                                className='skill-items w-100i'
                                sx={{ width: '100%' }}
                                aria-label="contacts"
                                style={{ width: '100%', margin: '0 auto' }}
                            >
                                <ListItem disablePadding>
                                    <ListItemIcon style={{ minWidth: '35px' }} >
                                        <StarIcon className='icon-white' />
                                    </ListItemIcon>
                                    <ListItemText className='list-item'>
                                        Sicherstellung eines problemlosen Verbindungsaufbaus der Website,
                                    </ListItemText>
                                </ListItem>
                                <ListItem disablePadding >
                                    <ListItemIcon style={{ minWidth: '35px' }} >
                                        <StarIcon className='icon-white' />
                                    </ListItemIcon>
                                    <ListItemText className='list-item'>
                                        Sicherstellung einer reibungslosen Nutzung unserer Website,
                                    </ListItemText>
                                </ListItem>
                                <ListItem disablePadding >
                                    <ListItemIcon style={{ minWidth: '35px' }} >
                                        <StarIcon className='icon-white' />
                                    </ListItemIcon>
                                    <ListItemText className='list-item'>
                                        Auswertung der Systemsicherheit und -stabilität sowie
                                    </ListItemText>
                                </ListItem>
                                <ListItem disablePadding >
                                    <ListItemIcon style={{ minWidth: '35px' }} >
                                        <StarIcon className='icon-white' />
                                    </ListItemIcon>
                                    <ListItemText className='list-item'>
                                        zur Optimierung unserer Website.
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Informationen dieser Art werden von uns ggfs. anonymisiert statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu optimieren.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Rechtsgrundlage und berechtigtes Interesse:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Empfänger:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Webseite als Auftragsverarbeiter tätig werden.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Speicherdauer:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht mehr erforderlich sind. Dies ist für die Daten, die der Bereitstellung der Website dienen, grundsätzlich der Fall, wenn die jeweilige Sitzung beendet ist.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Bereitstellung vorgeschrieben oder erforderlich:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne die IP-Adresse ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt sein. Aus diesem Grund ist ein Widerspruch ausgeschlossen.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Cookies
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Wie viele andere Webseiten verwenden wir auch so genannte „Cookies“. Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Webseite besuchen.
                                Sie können Sie einzelne Cookies oder den gesamten Cookie-Bestand löschen. Darüber hinaus erhalten Sie Informationen und Anleitungen, wie diese Cookies gelöscht oder deren Speicherung vorab blockiert werden können. Je nach Anbieter Ihres Browsers finden Sie die notwendigen Informationen unter den nachfolgenden Links:
                            </Typography>
                            <List
                                className='skill-items w-100i'
                                sx={{ width: '100%' }}
                                aria-label="contacts"
                                style={{ width: '100%', margin: '0 auto' }}
                            >
                                <ListItem disablePadding>
                                    <ListItemIcon style={{ minWidth: '35px' }} >
                                        <StarIcon className='icon-white' />
                                    </ListItemIcon>
                                    <ListItemText className='list-item'>
                                        Mozilla Firefox: <Link href='https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen' className='color-white' style={{ textDecoration: 'underline' }} > https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen</Link>
                                    </ListItemText>
                                </ListItem>
                                <ListItem disablePadding >
                                    <ListItemIcon style={{ minWidth: '35px' }} >
                                        <StarIcon className='icon-white' />
                                    </ListItemIcon>
                                    <ListItemText className='list-item'>
                                        Internet Explorer: <Link href='https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies' className='color-white' style={{ textDecoration: 'underline' }} >https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies</Link>
                                    </ListItemText>
                                </ListItem>
                                <ListItem disablePadding >
                                    <ListItemIcon style={{ minWidth: '35px' }} >
                                        <StarIcon className='icon-white' />
                                    </ListItemIcon>
                                    <ListItemText className='list-item'>
                                        Google Chrome: <Link href='https://support.google.com/accounts/answer/61416?hl=de' className='color-white' style={{ textDecoration: 'underline' }} >https://support.google.com/accounts/answer/61416?hl=de</Link>
                                    </ListItemText>
                                </ListItem>
                                <ListItem disablePadding >
                                    <ListItemIcon style={{ minWidth: '35px' }} >
                                        <StarIcon className='icon-white' />
                                    </ListItemIcon>
                                    <ListItemText className='list-item'>
                                        Opera: <Link href='http://www.opera.com/de/help' className='color-white' style={{ textDecoration: 'underline' }} >http://www.opera.com/de/help</Link>
                                    </ListItemText>
                                </ListItem>
                                <ListItem disablePadding >
                                    <ListItemIcon style={{ minWidth: '35px' }} >
                                        <StarIcon className='icon-white' />
                                    </ListItemIcon>
                                    <ListItemText className='list-item'>
                                        Safari: <Link href='https://support.apple.com/kb/PH17191?locale=de_DE&viewlocale=de_DE' className='color-white' style={{ textDecoration: 'underline' }} >https://support.apple.com/kb/PH17191?locale=de_DE&viewlocale=de_DE</Link>
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Speicherdauer und eingesetzte Cookies:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Soweit Sie uns durch Ihre Browsereinstellungen oder Zustimmung die Verwendung von Cookies erlauben, können folgende Cookies auf unseren Webseiten zum Einsatz kommen:
                            </Typography>
                            <Typography variant='h2' className='text-left site-sub-heading pt-20 fsi-22'>
                                Technisch notwendige Cookies
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Art und Zweck der Verarbeitung:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Wir setzen Cookies ein, um unsere Website nutzerfreundlicher zu gestalten. Einige Elemente unserer Internetseite erfordern es, dass der aufrufende Browser auch nach einem Seitenwechsel identifiziert werden kann.

                                Der Zweck der Verwendung technisch notwendiger Cookies ist, die Nutzung von Websites für die Nutzer zu vereinfachen. Einige Funktionen unserer Internetseite können ohne den Einsatz von Cookies nicht angeboten werden. Für diese ist es erforderlich, dass der Browser auch nach einem Seitenwechsel wiedererkannt wird.

                                Für folgende Anwendungen benötigen wir Cookies:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Rechtsgrundlage und berechtigtes Interesse:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an einer nutzerfreundlichen Gestaltung unserer Website.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Empfänger:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Website als Auftragsverarbeiter tätig werden.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Bereitstellung vorgeschrieben oder erforderlich:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne diese Daten ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt sein.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Widerspruch
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Lesen Sie dazu die Informationen über Ihr Widerspruchsrecht nach Art. 21 DSGVO weiter unten.
                            </Typography>
                            <Typography variant='h2' className='text-left site-sub-heading pt-20 fsi-22'>
                                Technisch nicht notwendige Cookies
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Des Weiteren setzen wir Cookies ein, um das Angebot auf unserer Website besser auf die Interessen unserer Besucher abzustimmen oder auf Basis statistischer Auswertungen allgemein zu verbessern.

                                Welche Anbieter Cookies setzen, entnehmen Sie bitte den unten aufgeführten Informationen zu den eingesetzten Darstellungs-, Tracking-, Remarketing- und Webanalyse-Technologien.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Rechtsgrundlage:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Rechtsgrundlage für diese Verarbeitungen ist jeweils Ihre Einwilligung, Art. 6 Abs. 1 lit. a DSGVO.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Empfänger:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Website als Auftragsverarbeiter tätig werden.

                                Weitere Empfänger entnehmen Sie bitte den unten aufgeführten Informationen zu den eingesetzten Darstellungs-, Tracking-, Remarketing- und Webanalyse-Technologien.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Drittlandtransfer:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Informationen hierzu entnehmen Sie bitte aus den Auflistungen der einzelnen Darstellungs-, Tracking-, Remarketing- und Webanalyse-Anbietern.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Bereitstellung vorgeschrieben oder erforderlich:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Natürlich können Sie unsere Website grundsätzlich auch ohne Cookies betrachten. Webbrowser sind regelmäßig so eingestellt, dass sie Cookies akzeptieren. Im Allgemeinen können Sie die Verwendung von Cookies jederzeit über die Einstellungen Ihres Browsers deaktivieren (siehe Widerruf der Einwilligung).

                                Bitte beachten Sie, dass einzelne Funktionen unserer Website möglicherweise nicht funktionieren, wenn Sie die Verwendung von Cookies deaktiviert haben.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Widerruf der Einwilligung:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Sie können Ihre Einwilligung jederzeit über unser Cookie-Consent-Tool widerrufen.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Profiling:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Inwiefern wir das Verhalten von Websitebesuchern mit pseudonymisierten Nutzerprofilen analysieren, entnehmen Sie bitte den unten aufgeführten Informationen zu den eingesetzten Darstellungs-, Tracking-, Remarketing- und Webanalyse-Technologien.
                            </Typography>
                            <Typography variant='h2' className='text-left site-sub-heading pt-20 fsi-22'>
                                Registrierung auf unserer Website
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Art und Zweck der Verarbeitung:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Für die Registrierung auf unserer Website benötigen wir einige personenbezogene Daten, die über eine Eingabemaske an uns übermittelt werden. Zum Zeitpunkt der Registrierung werden zusätzlich folgende Daten erhoben: Ihre Registrierung ist für das Bereithalten bestimmter Inhalte und Leistungen auf unserer Website erforderlich.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Rechtsgrundlage:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt auf Grundlage einer Einwilligung des Nutzers (Art. 6 Abs. 1 lit. a DSGVO).
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Empfänger:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Website als Auftragsverarbeiter tätig werden.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Speicherdauer:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Daten werden in diesem Zusammenhang nur verarbeitet, solange die entsprechende Einwilligung vorliegt.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Bereitstellung vorgeschrieben oder erforderlich:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig, allein auf Basis Ihrer Einwilligung. Ohne die Bereitstellung Ihrer personenbezogenen Daten können wir Ihnen keinen Zugang auf unsere angebotenen Inhalte gewähren.
                            </Typography>
                            <Typography variant='h2' className='text-left site-sub-heading pt-20 fsi-22'>
                                Kontaktformular
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Art und Zweck der Verarbeitung:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer validen E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist optional.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Rechtsgrundlage:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).
                                Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine unkomplizierte Kontaktaufnahme ermöglichen. Ihre gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.
                                Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt die Verarbeitung der in das Kontaktformular eingegebenen Daten zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Empfänger:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Empfänger der Daten sind ggf. Auftragsverarbeiter.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Speicherdauer:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht.
                                Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den gesetzlichen Aufbewahrungsfristen nach HGB und löschen Ihre Daten nach Ablauf dieser Fristen.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Bereitstellung vorgeschrieben oder erforderlich:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir können Ihre Anfrage jedoch nur bearbeiten, sofern Sie uns Ihren Namen, Ihre E-Mail-Adresse und den Grund der Anfrage mitteilen.
                            </Typography>
                            <Typography variant='h2' className='text-left site-sub-heading pt-20 fsi-22'>
                                Verwendung von Google Analytics
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Soweit Sie ihre Einwilligung gegeben haben, wird auf dieser Website Google Analytics eingesetzt, ein Webanalysedienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA (nachfolgend: „Google“). Google Analytics verwendet sog. „Cookies“, also Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Webseite durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Aufgrund der Aktivierung der IP-Anonymisierung auf diesen Webseiten, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.

                                Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter <Link href='https://www.google.com/analytics/terms/de.html' className='color-white' style={{ textDecoration: 'underline' }} >https://www.google.com/analytics/terms/de.html</Link> und unter <Link href='https://policies.google.com/?hl=de.' className='color-white' style={{ textDecoration: 'underline' }} >https://policies.google.com/?hl=de.</Link>

                                Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Webseite auszuwerten, um Reports über die Webseitenaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Webseitenbetreiber zu erbringen.

                                Die von uns gesendeten und mit Cookies, Nutzerkennungen (z. B. User-ID) oder Werbe-IDs verknüpften Daten werden nach 14 Monaten automatisch gelöscht. Die Löschung von Daten, deren Aufbewahrungsdauer erreicht ist, erfolgt automatisch einmal im Monat.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Widerruf der Einwilligung:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Sie können das Tracking durch Google Analytics auf unserer Website unterbinden, indem Sie <Link href='https://www.activemind.de/datenschutz/generatoren/datenschutzerklaerung/ergebnis/' className='color-white' style={{ textDecoration: 'underline' }} >diesen Link anklicken.</Link> Dabei wird ein Opt-out-Cookie auf Ihrem Gerät installiert. Damit wird die Erfassung durch Google Analytics für diese Website und für diesen Browser zukünftig verhindert, solange das Cookie in Ihrem Browser installiert bleibt.

                                Sie können darüber hinaus die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können.

                                Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <Link href='https://tools.google.com/dlpage/gaoptout?hl=de' className='color-white' style={{ textDecoration: 'underline' }} >Browser Add On zur Deaktivierung von Google Analytics.</Link>
                            </Typography>
                            <Typography variant='h2' className='text-left site-sub-heading pt-20 fsi-22'>
                                Verwendung von Scriptbibliotheken (Google Webfonts)
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website „Google Web Fonts“ der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; nachfolgend „Google“) zur Darstellung von Schriften.
                                Weitere Informationen zu Google Web Fonts finden Sie unter <Link href='https://developers.google.com/fonts/faq' className='color-white' style={{ textDecoration: 'underline' }} >https://developers.google.com/fonts/faq</Link> und in der Datenschutzerklärung von Google: <Link href='https://www.google.com/policies/privacy/.' className='color-white' style={{ textDecoration: 'underline' }} >https://www.google.com/policies/privacy/.</Link>
                            </Typography>
                            <Typography variant='h2' className='text-left site-sub-heading pt-20 fsi-22'>
                                Verwendung von Typekit-Webschriftarten von Adobe Fonts
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Wir setzen Typekit-Webschriftarten von Adobe Fonts zur visuellen Gestaltung unserer Website ein. Adobe Fonts ist ein Dienst der Adobe Systems Software Ireland Companies (4-6 Riverwalk, Citywest Business Campus, Dublin 24, Republic of Ireland; nachfolgend „Adobe“), der uns den Zugriff auf eine Schriftartenbibliothek gewährt.

                                Zur Einbindung der von uns benutzten Schriftarten muss Ihr Browser eine Verbindung zu einem Server von Adobe in den USA aufbauen und die für unsere Website benötigte Schriftart herunterladen. Adobe erhält hierdurch die Information, dass von Ihrer IP-Adresse unsere Website aufgerufen wurde.

                                Weitere Informationen zu Adobe Fonts finden Sie in den Datenschutzhinweisen von Adobe Fonts, die Sie hier abrufen können: <Link href='https://www.adobe.com/de/privacy/policies/adobe-fonts.html' className='color-white' style={{ textDecoration: 'underline' }} >https://www.adobe.com/de/privacy/policies/adobe-fonts.html</Link>

                                Wenn Ihr Browser Web Fonts nicht unterstützt, oder Sie Ihre Einwilligung nicht erteilen, wird eine Standardschrift von Ihrem Computer genutzt.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Widerruf der Einwilligung:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Vom Anbieter wird derzeit keine Möglichkeit für einen einfachen Opt-out oder ein Blockieren der Datenübertragung angeboten. Wenn Sie eine Nachverfolgung Ihrer Aktivitäten auf unserer Website verhindern wollen, widerrufen Sie bitte im Cookie-Consent-Tool Ihre Einwilligung für die entsprechende Cookie-Kategorie oder alle technisch nicht notwendigen Cookies und Datenübertragungen. In diesem Fall können Sie unsere Website jedoch ggfs. nicht oder nur eingeschränkt nutzen.
                            </Typography>
                            <Typography variant='h2' className='text-left site-sub-heading pt-20 fsi-22'>
                                Google AdWords
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Unsere Website nutzt das Google Conversion-Tracking. Betreibergesellschaft der Dienste von Google AdWords ist die Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Sind Sie über eine von Google geschaltete Anzeige auf unsere Webseite gelangt, wird von Google Adwords ein Cookie auf Ihrem Rechner gesetzt. Das Cookie für Conversion-Tracking wird gesetzt, wenn ein Nutzer auf eine von Google geschaltete Anzeige klickt.

                                Besucht der Nutzer bestimmte Seiten unserer Website und das Cookie ist noch nicht abgelaufen, können wir und Google erkennen, dass der Nutzer auf die Anzeige geklickt hat und zu dieser Seite weitergeleitet wurde. Jeder Google AdWords-Kunde erhält ein anderes Cookie. Cookies können somit nicht über die Websites von AdWords-Kunden nachverfolgt werden. Die mithilfe des Conversion-Cookies eingeholten Informationen dienen dazu, Conversion-Statistiken für AdWords-Kunden zu erstellen, die sich für Conversion-Tracking entschieden haben. Die Kunden erfahren die Gesamtanzahl der Nutzer, die auf ihre Anzeige geklickt haben und zu einer mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Sie erhalten jedoch keine Informationen, mit denen sich Nutzer persönlich identifizieren lassen.

                                Nähere Informationen über die Datenverarbeitung durch Google können Sie den Google-Datenschutzhinweisen entnehmen: <Link href='https://policies.google.com/privacy' className='color-white' style={{ textDecoration: 'underline' }} >https://policies.google.com/privacy.</Link> Dort können Sie im Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen verändern.
                            </Typography>
                            <Typography variant='h2' className='text-left site-sub-heading pt-20 fsi-22'>
                                Widerruf der Einwilligung:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Vom Anbieter wird derzeit keine Möglichkeit für einen einfachen Opt-out oder ein Blockieren der Datenübertragung angeboten. Wenn Sie eine Nachverfolgung Ihrer Aktivitäten auf unserer Website verhindern wollen, widerrufen Sie bitte im Cookie-Consent-Tool Ihre Einwilligung für die entsprechende Cookie-Kategorie oder alle technisch nicht notwendigen Cookies und Datenübertragungen. In diesem Fall können Sie unsere Website jedoch ggfs. nicht oder nur eingeschränkt nutzen.
                            </Typography>
                            <Typography variant='h2' className='text-left site-sub-heading pt-20 fsi-22'>
                                Einsatz von Google Remarketing
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Diese Website verwendet die Remarketing-Funktion der Google Inc. Betreibergesellschaft der Dienste von Google Remarketing ist die Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (nachfolgend „Google“).

                                Die Funktion dient dazu, Websitebesuchern innerhalb des Google-Werbenetzwerks interessenbezogene Werbeanzeigen zu präsentieren. Im Browser des Websitebesuchers wird ein sog. „Cookie“ gespeichert, der es ermöglicht, den Besucher wiederzuerkennen, wenn dieser Webseiten aufruft, die dem Werbenetzwerk von Google angehören. Auf diesen Seiten können dem Besucher Werbeanzeigen präsentiert werden, die sich auf Inhalte beziehen, die der Besucher zuvor auf Webseiten aufgerufen hat, die die Remarketing Funktion von Google verwenden.

                                Nähere Informationen über die Datenverarbeitung durch Google können Sie den Google-Datenschutzhinweisen entnehmen: <Link href='https://policies.google.com/privacy' className='color-white' style={{ textDecoration: 'underline' }} >https://policies.google.com/privacy</Link>. Dort können Sie im Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen verändern.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Widerruf der Einwilligung:
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Vom Anbieter wird derzeit keine Möglichkeit für einen einfachen Opt-out oder ein Blockieren der Datenübertragung angeboten. Wenn Sie eine Nachverfolgung Ihrer Aktivitäten auf unserer Website verhindern wollen, widerrufen Sie bitte im Cookie-Consent-Tool Ihre Einwilligung für die entsprechende Cookie-Kategorie oder alle technisch nicht notwendigen Cookies und Datenübertragungen. In diesem Fall können Sie unsere Website jedoch ggfs. nicht oder nur eingeschränkt nutzen.
                            </Typography>
                            <Typography variant='h2' className='text-left site-sub-heading pt-20 fsi-22'>
                                SSL-Verschlüsselung
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
                            </Typography>
                            <Typography variant='h2' className='text-left site-sub-heading pt-20 fsi-22'>
                                Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Einzelfallbezogenes Widerspruchsrecht
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.
                                Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 color-white'>
                                Empfänger eines Widerspruchs
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10'>
                                BlackPool e. K.
                            </Typography>
                            <Typography variant='p' className='text-left site-text'>
                                Elvis Gbenado
                            </Typography>
                            <Typography variant='p' className='text-left site-text'>
                                Geibelplatz 1
                            </Typography>
                            <Typography variant='p' className='text-left site-text'>
                                30173 Hannover
                            </Typography>
                            <Typography variant='h2' className='text-left site-sub-heading pt-20 fsi-22'>
                                Änderung unserer Datenschutzbestimmungen
                            </Typography>
                            <Typography variant='p' className='text-left site-text pt-10 pb-50'>
                                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                                Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt, den Experten für <Link href='https://www.activemind.de/datenschutz/datenschutzbeauftragter/' className='color-white' style={{ textDecoration: 'underline' }} >externe Datenschutzbeauftragte</Link> (Version #2020-09-30).
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box >
        </>
    );
};
export default Datenschutzerklaerung;
