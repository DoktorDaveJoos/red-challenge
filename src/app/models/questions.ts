export interface IQuestion {
  owner: {
    profile_image: string
  },
  is_answered: boolean,
  title: string
}

export interface IQuestionCollection {
  items: Array<IQuestion>
}

export interface IQuestionMap {
  identifier: string,
  questions: IQuestionCollection
}
