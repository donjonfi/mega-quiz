export class Question {
  constructor(
    public question: string,
    public propositions: string[],
    public solution: string | number,
    public illustration: string | undefined,
    public video: string | undefined,
    public audio: string | undefined,
    public bonus: string | undefined,
    public options: ('noletter' | 'picsol' | 'picright' | '2col')[] = []
  ) { }
}