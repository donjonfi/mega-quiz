import { Question } from './question.model';

export class Quiz {
  constructor(
    public titre: string,
    public assets_folder: string,
    public audio_titre: string | undefined,
    public audio_solution: string | undefined,
    public questions: Question[] = [],
  ) { }
}
