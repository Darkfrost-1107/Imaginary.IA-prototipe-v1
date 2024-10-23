class SpeechMaker {
  static instance: SpeechMaker;
  constructor() {
    this.speech = new Speech();
  }

  async speak(text: string) {
    this.speech.speak(text);
  }
}