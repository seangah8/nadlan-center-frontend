import { realEstatePodcastsData } from "../database/potcast.data"
import type { PodcastModel } from "../models/PodcastModel"

export const PodcastService = {
    getRandomPodcast,
}

function getRandomPodcast(amount: number): PodcastModel[]{
    const podcasts : PodcastModel[] = []
    for(let i=0; i<amount; i++){
      podcasts.push(realEstatePodcastsData
        [Math.floor(Math.random() * realEstatePodcastsData.length)])
    }
    return podcasts
} 