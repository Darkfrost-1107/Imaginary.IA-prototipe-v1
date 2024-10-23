class SpeechMaker {
  static instance: SpeechMaker;
  constructor() {
    if(SpeechMaker.instance){
      return SpeechMaker.instance;
    }
    SpeechMaker.instance = this;
  }
}