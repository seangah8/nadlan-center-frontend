import type { StoryModel } from "../models/StoryModel"
import { realEstateStoriesData } from "../database/stories.data"

export const StoryService = {
    getRandomStories,
    getStoriesFromCategory
}

function getRandomStories(amount: number): StoryModel[]{
    const stories : StoryModel[] = []
    for(let i=0; i<amount; i++){
      stories.push(realEstateStoriesData
        [Math.floor(Math.random() * realEstateStoriesData.length)])
    }
    return stories
} 

function getStoriesFromCategory(amount : number, categoryName: string) : StoryModel[]{
  const stories = [];

  for (const story of realEstateStoriesData) {
    if (story.category.name === categoryName) {
      stories.push(story);
      if (stories.length === amount) break;
    }
  }

  return stories
}