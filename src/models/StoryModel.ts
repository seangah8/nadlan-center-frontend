
export interface StoryModel {
    id: string
    title: string
    description: string
    imageUrl: string
    category: {name: string, color: string, textColor: string}
    autor: string
    date: string
}