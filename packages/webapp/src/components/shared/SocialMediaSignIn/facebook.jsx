import {
  Avatar,
  Badge,
  Button,
  Card,
  Notification,
  toast,
} from "@/components/ui";
import {
  SOCIALMEDIA_META_DATA,
  SOCIAL_MEDIA_TYPES,
} from "@/constants/app.constant";
import {
  getLongLivedToken,
  getUserInfo,
} from "@/services/socialmedia-apis/facebook";
import {
  getFacebookAccounts,
  saveSocialMediaMetaData,
} from "@/services/socialmedia-meta";
import { setAnalyticsFilter } from "@/store/analytics/filters";
import { setLoggedInUser } from "@/store/auth/userSlice";
import { setFacebookDetail } from "@/store/socialmedia/facebookSlice";
import { setSocialMediaPages } from "@/store/socialmedia/socialmediaPagesSlice";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const CONNECTED = "connected";
const { FACEBOOK } = SOCIALMEDIA_META_DATA;

const PERMISSIONS = [
  "pages_show_list",
  "pages_read_engagement",
  "pages_manage_posts",
  "public_profile",
  "instagram_basic",
  "pages_read_user_content",
  "instagram_content_publish",
  "read_insights",
  "instagram_manage_insights",
  "business_management",
  "pages_manage_metadata",
  "pages_manage_engagement",
];

const Facebook = (props) => {
  const { checkOnlineStatus, useLoading } = props;
  const { globalLoading, setGlobalLoading, setMessage } = useLoading;
  const dispatch = useDispatch();
  const { meta, socialmedia } = useSelector((state) => state);
  const { selectedCompany } = meta;
  const { facebook } = socialmedia;
  const { t } = useTranslation();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(false);

  // useEffect(() => {
  //   if (checkOnlineStatus) {
  //     getFacebookProfileData(false, facebook);
  //   }
  // }, []);

  // const signInFacebook = () => {
  //   if (!isOnline && !globalLoading) {
  //     FB.login(
  //       function (response) {
  //         if (response.status === CONNECTED) {
  //           getLongLivedAccessToken(
  //             response?.authResponse.accessToken,
  //             response?.authResponse.userID
  //           );
  //         } else {
  //           loader(false);
  //         }
  //       },
  //       {
  //         scope: _.join(PERMISSIONS, ","),
  //         return_scopes: true,
  //       }
  //     );
  //   }
  // };

  // const getLongLivedAccessToken = async (access_token, userId) => {
  //   const params = {
  //     grant_type: "fb_exchange_token",
  //     client_id: FACEBOOK.APP_ID,
  //     client_secret: FACEBOOK.APP_SECRET,
  //     fb_exchange_token: access_token,
  //   };
  //   const response = await getLongLivedToken(params);
  //   const meta = {
  //     access_token: response?.access_token,
  //     userId,
  //   };
  //   dispatch(setFacebookDetail(meta));
  //   getFacebookProfileData(true, meta);
  //   getSocialMediaPages(userId, response?.access_token);
  // };

  const loader = (value = false) => {
    setLoading(value);
    setGlobalLoading(value);
    if (!value) {
      setTimeout(() => {
        setMessage(null);
      }, 700);
    }
  };

  const getSocialMediaPages = async (userId, access_token) => {
    loader(true);
    setMessage(t("label.fetching-pages"));
    try {
      const response = await getFacebookAccounts(userId, { access_token });
      const facebookPages = _.map(response.data, (row) => ({
        userId,
        value: row.id,
        pageId: row.id,
        name: row.name,
        label: row.name,
        companyId: selectedCompany,
        access_token: row.access_token,
        meta: { business: row.business },
        socialMediaType: SOCIAL_MEDIA_TYPES.FACEBOOK,
      }));
      await saveMetaData(facebookPages);
    } catch (error) {
      loader(false);
    }
  };

  const saveMetaData = async (pages = []) => {
    const response = await saveSocialMediaMetaData(pages);
    dispatch(setLoggedInUser(response.data?.user));
    dispatch(setSocialMediaPages(response.data?.socialMediaPages));
    loader(false);
  };

  const signOutFacebook = async () => {
    FB.getLoginStatus(async function (response) {
      // FB.logout();
      dispatch(
        setFacebookDetail({
          access_token: null,
          userId: null,
        })
      );
      dispatch(setAnalyticsFilter({ type: "selectedPage", payload: null }));
      toast.push(
        <Notification
          closable
          duration={3000}
          title={profile.name}
          customIcon={
            <Avatar shape="circle" src={profile.picture?.data?.url} />
          }
        >
          Logged Out from Facebook!
        </Notification>
      );
      setIsOnline(false);
      setProfile(null);
    });
  };

  const getFacebookProfileData = async (showToast, meta) => {
    const { userId, access_token } = meta;
    if (access_token) {
      try {
        const response = await getUserInfo(userId, { access_token });
        setIsOnline(true);
        setProfile(response);
        if (showToast) {
          toast.push(
            <Notification
              closable
              duration={3000}
              title={response.name}
              // customIcon={
              //   <Avatar shape="circle" src={response.picture.data.url} />
              // }
            >
              {`Logged In to Facebook as ${response.name}!`}
            </Notification>
          );
        }
      } catch (error) {
        toast.push(
          <Notification className="mb-4" type="danger">
            {error.message}
          </Notification>
        );
      }
    }
  };

  return (
    <div className="flex gap-2 items-center max-w-screen-sm w-full">
      <Avatar
        shape="circle"
        size={50}
        src={profile?.picture?.data?.url || "/img/fb-circle.svg"}
      />

      <Card
        className="overflow-hidden w-full"
        bodyClass="p-0 flex items-center justify-between w-full p-2 hover:shadow-md"
      >
        <div className="flex flex-col items-start">
          {profile ? (
            <b className="text-sm flex items-center relative">
              <img
                src="/img/fb-circle.svg"
                height={18}
                width={18}
                className="mr-1"
              />
              {profile?.name}
            </b>
          ) : (
            <b className="text-sm text-center">Facebook</b>
          )}

          {isOnline ? (
            <div className="flex gap-2 items-center">
              <Badge innerClass="bg-emerald-400" />
              <span>online</span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <Badge innerClass="bg-gray-300" />
              <span>offline</span>
            </div>
          )}
        </div>
        {isOnline ? (
          <Button
            size="xs"
            variant="twoTone"
            loading={loading}
            onClick={signOutFacebook}
          >
            logout
          </Button>
        ) : (
          <Button
            size="xs"
            variant="solid"
            loading={loading}
            // onClick={signInFacebook}
            disabled={globalLoading}
          >
            signin
          </Button>
        )}
      </Card>
    </div>
  );
};

export default Facebook;
