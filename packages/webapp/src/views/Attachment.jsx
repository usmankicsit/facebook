import {
  NO_IMAGE_URL,
  SOCIAL_MEDIA_CONTENT_TYPES,
  SOCIAL_MEDIA_TYPES,
  TARGET_LINK_PARAM,
} from "@/constants/app.constant";
import { getPostAttachment } from "@/services/socialmedia-apis/facebook";
import _ from "lodash";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Attachment = (props) => {
  if (!props)
    return (
      <div className="overflow-hidden w-full h-full max-w-[70px] max-h-[70px]">
        <img src={NO_IMAGE_URL} />
      </div>
    );
  const { postId, pageId } = props;

  const { t } = useTranslation();

  const { socialmedia } = useSelector((state) => state);
  const { socialMediaPages } = socialmedia;

  const socialMediaPage = _.find(
    socialMediaPages?.pages,
    (row) => row.pageId === pageId
  );

  const { access_token, SocialMediaType } = socialMediaPage;
  const socialMediaType = SocialMediaType.name;

  const [file, setFile] = useState(null);

  useEffect(() => {
    if (!file) {
      getPostInfoData();
    }
  }, []);

  const getPostInfoData = async () => {
    const options = {};
    options.access_token = access_token;
    switch (socialMediaType) {
      // ----- FACEBOOK --------------------
      case SOCIAL_MEDIA_TYPES.FACEBOOK: {
        options.fields = "attachments{media,type,target}";
        const response = await getPostAttachment(postId, options);

        const data = response.data?.attachments?.data?.[0];
        const type = SOCIAL_MEDIA_CONTENT_TYPES[data?.type];

        let url = "";

        if (type === "video") {
          url = data?.media?.source;
        }
        if (type === "photo") {
          url = data?.media?.image?.src;
        }
        if (type === "share") {
          const params = new URLSearchParams(data?.target?.url);
          const link = params.get(TARGET_LINK_PARAM);
          url = {
            link,
            image: data?.media?.image?.src,
          };
        }
        setFile({ type, url });
        break;
      }
    }
  };

  return useMemo(
    () => (
      <div className="overflow-hidden w-full h-full max-w-[70px] max-h-[70px]">
        {file?.type === "video" && (
          <div className="relative">
            <video src={file?.url} className="h-full object-cover" />
          </div>
        )}
        {file?.type === "photo" && (
          <img src={file?.url} className="h-full cursor-pointer object-cover" />
        )}
        {file?.type === "share" && (
          <img
            src={file?.url?.image}
            className="h-full cursor-pointer object-cover"
          />
        )}
        {!file?.type && (
          <img
            src={NO_IMAGE_URL}
            className="h-full cursor-pointer object-cover"
          />
        )}
      </div>
    ),
    [file, t]
  );
};

export default Attachment;
