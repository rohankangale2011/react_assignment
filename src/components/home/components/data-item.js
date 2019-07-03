import React from 'react';
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
  DataItemWrapper,
  Title,
  SubTitle,
  SubTitleDate,
  StyledList
} from '../home.style';

const RenderItem = React.memo(({title,byline,publishedDate}) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText>
        <Title>{title}</Title>
        <SubTitle>{byline}</SubTitle>
        <SubTitleDate>
          <CalendarTodayIcon />
          <span>{publishedDate}</span>
        </SubTitleDate>
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="Delete">
          <ChevronRightIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
});

export default function DataItem({data}) {
  return (
    <DataItemWrapper>
      <StyledList>
        {data.map(item => (
         <RenderItem 
          key={item.asset_id} 
          title={item.title} 
          byline={item.byline} 
          publishedDate={item.published_date} 
        />
        ))}
      </StyledList>
    </DataItemWrapper>
  );
}