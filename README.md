# ChatBot Projekt

Dieses Projekt stellt einen einfachen Web-Chatbot bereit, der mit OpenAI's GPT-4-Modell kommuniziert. Du kannst dem Chatbot Fragen stellen, und er wird mit einer einfachen Antwort reagieren. Das Frontend ist in HTML und JavaScript geschrieben, und es nutzt die OpenAI API, um die Antworten zu generieren.

## Voraussetzungen

- Ein OpenAI API-Schlüssel, um Anfragen an das GPT-Modell zu stellen.
- Ein Webbrowser, um das Projekt lokal auszuführen.

## Projektstruktur

- **index.html**: Das Frontend des Chatbots, das eine einfache Benutzeroberfläche bietet.
- **script.js**: Die JavaScript-Datei, die für die Kommunikation mit der OpenAI API verantwortlich ist und die Nachrichten im Chatfenster darstellt.

## Setup

### 1. Erhalte deinen OpenAI API-Schlüssel

Um mit dem Chatbot zu interagieren, benötigst du einen API-Schlüssel von OpenAI. Du kannst einen Schlüssel auf der [OpenAI API-Seite](https://platform.openai.com/account/api-keys) anfordern.

### 2. Konfiguriere die API im Code

Im **script.js**-Code findest du den Abschnitt, in dem der API-Schlüssel gesetzt ist:

```javascript
const apiKey = 'DEIN_API_SCHLÜSSEL';
```

Ersetze `'DEIN_API_SCHLÜSSEL'` mit deinem tatsächlichen API-Schlüssel.

### 3. Öffne das Projekt im Browser

- Lade die Dateien **index.html** und **script.js** auf deinen lokalen Rechner.
- Öffne die **index.html**-Datei in deinem bevorzugten Webbrowser.

## Funktionsweise

1. Wenn du eine Nachricht in das Eingabefeld eingibst und den "Fragen"-Button klickst, wird die Nachricht an das JavaScript übergeben.
2. Die Funktion `postChatMessage()` fügt die Nachricht im Chatverlauf hinzu und ruft dann die Funktion `askChatGPT()` auf.
3. `askChatGPT()` sendet die Benutzeranfrage an die OpenAI API und wartet auf die Antwort.
4. Sobald die Antwort von GPT-4 zurückkommt, wird sie im Chatverlauf angezeigt.

## Features

- **Einfache Benutzeroberfläche**: Du kannst Fragen stellen und sofort eine Antwort erhalten.
- **Interaktive Kommunikation**: Das System beantwortet Fragen in einfachen und klaren Sätzen.
- **Anpassbar**: Du kannst die Systemnachricht im API-Aufruf anpassen, um die Antworten des Chatbots zu beeinflussen.

## Probleme und Lösungen

- **Fehler beim Laden der API-Antwort**: Wenn ein Fehler auftritt, wird eine Fehlermeldung im Browser angezeigt.
- **API-Schlüssel Fehler**: Stelle sicher, dass der API-Schlüssel korrekt ist und du genügend API-Guthaben hast.

## Verbesserungsideen

- **Benutzeroberfläche erweitern**: Du könntest das Design der Seite anpassen und mehr Interaktivität hinzufügen (z. B. Buttons oder Kategorien von Antworten).
- **Sprachunterstützung**: Es könnte eine Funktion zur Unterstützung mehrerer Sprachen oder anderer Modelle von OpenAI hinzugefügt werden.
