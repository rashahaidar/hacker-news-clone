import React ,{useEffect,useState} from 'react';
import {getStoryIds} from '../services/hackernewsApi';
import {Story} from '../components/Story';
import {StoryTitle} from '../styles/StoryStyles'
import {StoriesContainerWrapper,GlobalStyle} from '../styles/StoriesContainersStyles'

export const StoriesContainer=() =>{
    const [storyIds,setStoryIds]=useState([]);
    useEffect(()=>{
   getStoryIds().then(resp=>setStoryIds(resp));
   //getStory(8863).then(resp=>console.log(resp));
},[]);
    return (
    <>
    <GlobalStyle/>
    <StoriesContainerWrapper data-id="stories-container">
    <StoryTitle>
    <h1>Hacker News Stories</h1>
    </StoryTitle>
    {storyIds.map(storyId=><Story key={storyId} storyId={storyId}/>)}
    </StoriesContainerWrapper>
    
    </>
    )
  };