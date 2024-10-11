import React from "react";
import { Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

export const ResumeTimeLine = ({ title, items, icon }) => {
  const TimeLine = items?.map((item, index) => {
    return (
      <TimelineItem key={index}>
        <TimelineSeparator>
          <TimelineDot variant="outline" sx={{ color: "primary.main" }} />
          {item.connector ? <TimelineConnector /> : null}
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">{item.title}</Typography>
          <Typography variant="subtitle2" color="gray">
            {item.date}
          </Typography>
          <Typography variant="body">{item.description}</Typography>
        </TimelineContent>
      </TimelineItem>
    );
  });
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem sx={{ ml: "-12px" }}>
        <TimelineSeparator>
          <TimelineDot
            sx={{ backgroundColor: "primary.main", color: "text.primary" }}
          >
            {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">{title}</Typography>
        </TimelineContent>
      </TimelineItem>
      {TimeLine}
    </Timeline>
  );
};
