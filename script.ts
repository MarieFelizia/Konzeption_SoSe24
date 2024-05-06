// Definiere eine Schnittstelle für Timeline-Einträge
interface TimelineEntry {
    date: string;
    title: string;
    description: string;
    imageUrl: string;
}

// Funktion zum Hinzufügen eines Timeline-Eintrags
function addTimelineEntry(entry: TimelineEntry): void {
    const timeline = document.getElementById('timeline');

    if (timeline) {
        const entryElement = document.createElement('div');
        entryElement.classList.add('timeline-entry');

        const dateElement = document.createElement('div');
        dateElement.classList.add('timeline-date');
        dateElement.textContent = entry.date;

        const contentElement = document.createElement('div');
        contentElement.classList.add('timeline-content');

        const titleElement = document.createElement('h3');
        titleElement.textContent = entry.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = entry.description;

        const imageElement = document.createElement('img');
        imageElement.src = entry.imageUrl;
        imageElement.alt = entry.title;

        contentElement.appendChild(titleElement);
        contentElement.appendChild(descriptionElement);
        contentElement.appendChild(imageElement);

        entryElement.appendChild(dateElement);
        entryElement.appendChild(contentElement);

        timeline.appendChild(entryElement);
    }
}

// Beispiel-Timeline-Einträge
const timelineEntries: TimelineEntry[] = [
    {
        date: 'April 2024',
        title: 'Ereignis 1',
        description: 'Beschreibung für Ereignis 1',
        imageUrl: 'path/to/image1.jpg'
    },
    {
        date: 'Mai 2024',
        title: 'Ereignis 2',
        description: 'Beschreibung für Ereignis 2',
        imageUrl: 'path/to/image2.jpg'
    }
];

// Füge die Beispiel-Timeline-Einträge hinzu
timelineEntries.forEach(addTimelineEntry);
