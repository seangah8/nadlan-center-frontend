import type { StoryModel } from "../models/StoryModel"
import { realEstateStoriesData } from "../database/stories.data"

export const utilService = {
    getRandomStories
}

function getRandomStories(amount: number): StoryModel[]{
    const stories : StoryModel[] = []
    for(let i=0; i<amount; i++){
      stories.push(realEstateStoriesData
        [Math.floor(Math.random() * realEstateStoriesData.length)])
    }
    return stories
} 