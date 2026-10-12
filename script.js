// ========================================
// 1. MENU DE NAVIGATION
// ========================================
const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");
menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fermer le menu" : "Ouvrir le menu"
    );
});
// Fermer le menu après avoir choisi une rubrique.
navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    });
});
// ========================================
// 2. HISTOIRES PERSONNELLES
// ========================================
const stories = {
    resistance: {
        category: "ENGAGEMENT & RÉSISTANCE",
        title: "Une vie, un engagement",
        description:
            "Cette rubrique est destinée à présenter le parcours " +
            "documenté d'une femme ayant participé à la Résistance. " +
            "La version finale pourra comprendre une biographie, " +
            "des archives, des repères chronologiques et des " +
            "sources historiques vérifiées."
    },
    memoire: {
        category: "PARCOURS PERSONNEL",
        title: "Une histoire à transmettre",
        description:
            "Cette rubrique permettra de découvrir un parcours " +
            "individuel replacé dans son contexte historique. " +
            "Elle pourra réunir des éléments biographiques, " +
            "des photographies et des témoignages authentifiés."
    },
    archives: {
        category: "TÉMOIGNAGES & ARCHIVES",
        title: "Les traces du passé",
        description:
            "Cette rubrique présentera des documents d'archives " +
            "et expliquera leur contexte, leur provenance et " +
            "ce qu'ils permettent de comprendre. Les documents " +
            "seront accompagnés de références vérifiables."
    }
};
// ========================================
// 3. OUVERTURE DES FENÊTRES
// ========================================
const storyDialog = document.getElementById("story-dialog");
const dialogCategory = document.getElementById("dialog-category");
const dialogTitle = document.getElementById("dialog-title");
const dialogDescription = document.getElementById("dialog-description");
const dialogClose = document.getElementById("dialog-close");
document.querySelectorAll("[data-story]").forEach((button) => {
    button.addEventListener("click", () => {
        const storyId = button.dataset.story;
        const story = stories[storyId];
        if (!story) {
            return;
        }
        dialogCategory.textContent = story.category;
        dialogTitle.textContent = story.title;
        dialogDescription.textContent = story.description;
        storyDialog.showModal();
    });
});
// Fermer la fenêtre avec le bouton.
dialogClose.addEventListener("click", () => {
    storyDialog.close();
});
// Fermer la fenêtre en cliquant à l'extérieur.
storyDialog.addEventListener("click", (event) => {
    if (event.target === storyDialog) {
        storyDialog.close();
    }
});
// ========================================
// 4. BOUTON D'EXPLORATION
// ========================================
const exploreButton = document.getElementById("explore-button");
exploreButton.addEventListener("click", () => {
    alert(
        "Bienvenue dans le concept du parcours immersif.\n\n" +
        "La prochaine étape du prototype sera de créer " +
        "un environnement 3D explorable depuis le navigateur."
    );
});
// ========================================
// 5. ANNÉE ET INFORMATIONS DU PROTOTYPE
// ========================================
console.log(
    "Mémorial numérique de Romainville — " +
    "prototype de médiation historique."
);
