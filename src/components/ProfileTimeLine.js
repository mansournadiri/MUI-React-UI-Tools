import { Typography, Stack } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Person as PersonIcon } from "@mui/icons-material";
import "../assets/css/Portfolio.css";

export const ProfileTimeLine = ({ data }) => {
  const TimeLine = data?.map((item) => {
    return (
      <TimelineItem key={item.id}>
        <TimelineSeparator>
          <TimelineDot variant="outline" sx={{ color: "primary.main" }} />
          {item.connector ? <TimelineConnector /> : null}
        </TimelineSeparator>
        <TimelineContent>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="button">{item.title}:</Typography>
            <Typography variant="body2" color="gray">
              {item.value}
            </Typography>
          </Stack>
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
          mt: "-30px",
        },
      }}
    >
      <TimelineItem sx={{ ml: "-12px" }}>
        <TimelineSeparator sx={{ mt: "-40px;" }}>
          <TimelineDot
            sx={{ backgroundColor: "primary.main", color: "text.primary" }}
          >
            <PersonIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
      </TimelineItem>
      {TimeLine}
    </Timeline>
  );
};
