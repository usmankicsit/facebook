import { TextEllipsis } from "@/components/shared";
import { Avatar, Button, Card, Tag } from "@/components/ui";
import { ICONS, FACEBOOK_API_PREFIX } from "@/constants/app.constant";
import dayjs from "dayjs";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Attachment from "./Attachment";

const UNSUPPORTED_LANGUAGE = "unsupported_language";

const setBorder = (flag) => {
  switch (String(flag).toLowerCase()) {
    case "abusive":
      return "red";
    case "positive":
      return "green";
    case "negative":
      return "orange";
    default:
      return "gray";
  }
};

const capitalizeFirstLetter = (word) => {
  if (!word) return "";
  if (word === UNSUPPORTED_LANGUAGE) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const CommentSection = (props) => {
  const { data } = props;
  const { socialmedia, theme } = useSelector((state) => state);
  const { themeColor } = theme;
  const { socialMediaPages } = socialmedia;

  const [comment, setComment] = useState({});

  useEffect(() => {
    if (data.id) {
      setComment(data);
    }
  }, [data]);

  const page = _.find(
    socialMediaPages.pages,
    (pages) => pages.pageId === comment.pageId
  );

  const gotoPost = () => {
    window.open(`${FACEBOOK_API_PREFIX}/${comment.postId}`);
  };

  return (
    <Card
      customBorder
      footerClass="p-0"
      bodyClass="flex flex-col pt-2 pb-0 px-0 gap-2"
      className={`border-2 border-${setBorder(
        comment.flag
      )}-400 dark:border-2 dark:border-${setBorder(
        comment.flag
      )}-600 overflow-hidden`}
      footer={
        <div className="flex items-center sm:items-end justify-between gap-2">
          <div className="flex items-center">
            {comment?.id && (
              <Attachment postId={comment.postId} pageId={comment.pageId} />
            )}
            <div className="flex flex-col items-start gap-1 p-2">
              <div className="flex items-center gap-1">
                <Avatar
                  size={16}
                  shape="circle"
                  src={page?.profilePic || ICONS[page?.SocialMediaType.name]}
                />
                <b>{page?.name}</b>
              </div>
              <TextEllipsis
                maxTextCount={100}
                className="hidden sm:block"
                text={comment?.Post?.postText}
              />
            </div>
          </div>

          <div className="flex gap-2 items-center p-2">
            <Button size="xs" variant="twoTone" onClick={gotoPost}>
              Link
            </Button>
          </div>
        </div>
      }
    >
      <div className="flex gap-2 items-center justify-between px-2">
        <div className="flex gap-2 items-center justify-start">
          {comment.flag && (
            <Tag
              className={`w-fit bg-${setBorder(
                comment.flag
              )}-100 text-${setBorder(comment.flag)}-600 dark:bg-${setBorder(
                comment.flag
              )}-100 dark:text-${setBorder(
                comment.flag
              )}-600 border-0 rounded-full`}
            >
              {capitalizeFirstLetter(comment.flag)}
            </Tag>
          )}
          {comment.question && (
            <Tag
              className={`w-fit bg-blue-100 text-blue-600 dark:text-blue-600 dark:bg-blue-100 border-0 rounded-full`}
            >
              Question
            </Tag>
          )}
        </div>
      </div>
      <p className="text-black dark:text-gray-100 px-2">{comment.comment}</p>
      <div className="grid sm:grid-cols-2 items-center justify-between px-2 gap-2">
        <div className="flex items-center gap-2 text-xs">
          <b className={`text-${themeColor}-600 dark:text-${themeColor}-400`}>
            {comment?.from?.name}
          </b>
          |
          <b className="text-gray-400">
            {dayjs(comment?.createdAt).format("YYYY-MM-DD")}
          </b>
        </div>
      </div>
    </Card>
  );
};

export default CommentSection;
