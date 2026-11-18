function preparerMail() {
    const prenom = document.getElementById('prenom').value.trim();
    const entreprise = document.getElementById('entreprise').value.trim();
    const email = document.getElementById('email').value.trim();
    const inclureProjet = document.getElementById('inclureProjet').checked;

    if (!entreprise || !email) {
        alert("Merci de renseigner au moins l'entreprise et l'e-mail !");
        return;
    }

    // --- TES INFOS PERSONNELLES À COMPLÉTER ---
    const tonNom = "[Ton Prénom et Nom]";
    const tonProgramme = "Étudiant en 3ème année de Global BBA (Spécialisation Finance) - NEOMA BS";
    const tonTelephone = "[Ton Numéro]";
    
    const descriptionProjet = "un outil d'analyse quantitative et fondamentale d'actions que j'ai développé, doté d'un dashboard interactif";
    // ------------------------------------------

    const lienCV = "https://drive.google.com/file/d/1ogtwu_jfZFcSWJsPona2abw6tL6q2Ljp/view?usp=drive_link";
    const lienProjet = "https://n1ghtway.github.io/NP-Finance-Project-/";

    const salutation = prenom ? `Bonjour ${prenom},` : `Bonjour,`;
    
    const paragrapheProjet = inclureProjet 
        ? `Comme évoqué lors de notre échange, je vous partage également ${descriptionProjet} : ${lienProjet} (je serais ravi d'avoir votre retour !)\n\n` 
        : "";

    const objet = `Suite à notre échange - Forum NEOMA Reims - ${tonNom}`;
    
    const message = `${salutation}\n\n` +
                    `Ce fut un plaisir d'échanger avec vous aujourd'hui lors du forum de recrutement à NEOMA Business School (Reims) au sujet des opportunités chez ${entreprise}.\n\n` +
                    `Comme convenu, vous trouverez mon CV directement consultable via ce lien : ${lienCV} (ainsi qu'en pièce jointe).\n\n` +
                    `${paragrapheProjet}` +
                    `Je reste à votre entière disposition pour poursuivre notre discussion.\n\n` +
                    `Bien cordialement,\n` +
                    `${tonNom}\n` +
                    `${tonProgramme}\n` +
                    `${tonTelephone}`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(objet)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
}
