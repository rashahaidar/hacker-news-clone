import React,{useEffect,useState} from 'react';
import {getStory} from '../services/hackernewsApi'
import {StoryWrapper,StoryTitle,StoryMeta,StoryMetaElemet} from '../styles/StoryStyles'
import {mapTime} from '../mappers/mapTime'

export const Story=({storyId})=>{
const [story,setStory]=useState([])
useEffect(()=>{
getStory(storyId).then(resp=>resp && resp.url && setStory(resp))
},[]);

return story && story.url ?(
    <StoryWrapper data-id="story">
    <>
    <StoryTitle>
    <a href={story.url}>{story.title}</a>
    </StoryTitle>

     <StoryMeta>
         <span  data-id="story-by" >
             <StoryMetaElemet color="#000">By:</StoryMetaElemet>{story.by}
         </span>
         <span data-id="story-time"> 
         <StoryMetaElemet color="#000">Posted:</StoryMetaElemet>
         {mapTime(story.time)}
         </span>
    </StoryMeta> 

    </>
    </StoryWrapper>
    ):null;
};
