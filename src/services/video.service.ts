import { realEstateVideosData } from "../database/videos.data"
import type { VideoModel } from "../models/VideoModel"

export const VideoService = {
    getRandomVideos,
}

function getRandomVideos(amount: number): VideoModel[]{
    const videos : VideoModel[] = []
    for(let i=0; i<amount; i++){
      videos.push(realEstateVideosData
        [Math.floor(Math.random() * realEstateVideosData.length)])
    }
    return videos
} 