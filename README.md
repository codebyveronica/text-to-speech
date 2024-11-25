# Text-to-Speech Converter

This project is a **text-to-speech converter** built using JavaScript's **Web Speech API**. It allows users to convert text into audio using the voices available in the browser. The interface is simple and user-friendly, offering features to select different voices, control playback, and validate user input.

---

## Features

- **Voice Selection:**  
  A `select` dropdown lets users choose from the available voices in their browser for text playback.

- **Speech Playback:**  
  The **Play** button starts reading the text from the `textarea`. If playback was previously paused, the **Play** button resumes from where it stopped.

- **Pause Speech:**  
  A **Pause** button allows users to temporarily stop the speech playback.

- **Reset Speech:**  
  The **Reset** button stops the speech playback entirely and clears the `textarea`.

- **Input Validation:**  
  If the **Play** button is clicked with an empty `textarea`, an error message is displayed in a `span` element.

---

## Technologies Used

- **HTML5:** To structure the user interface.  
- **CSS3:** To style the page elements.  
- **JavaScript:** To implement the logic for text-to-speech conversion using the **Web Speech API**.

---

## How It Works

1. **Select a Voice:**  
   Use the dropdown menu to choose one of the available voices in the browser.

2. **Enter Text:**  
   Type the text you want to convert into audio in the text input area.

3. **Start Speech:**  
   Click the **Play** button to start playing the speech. If no text is entered, an error message will appear.

4. **Pause or Reset:**  
   Use the **Pause** button to temporarily stop playback or the **Reset** button to stop playback and clear the text.

---

## Notes

- The project uses the Web Speech API, which may vary in support and availability depending on the browser. For the best experience, we recommend using Google Chrome or Microsoft Edge.
- Ensure your browser is configured to allow speech-related APIs.

---

## Contributing

- Contributions are welcome! Feel free to open an issue or submit a pull request with suggestions and improvements.
