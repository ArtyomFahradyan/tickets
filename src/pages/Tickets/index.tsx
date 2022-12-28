import React, { useEffect, useState } from "react";
import { Button, Typography, Menu, message } from "antd";
import { DeleteOutlined, ShareAltOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useTicketsActions, TicketsSelectors } from "@redux";
import { getTickets } from "requests";
import {
  FeedWrapper,
  FeedsList,
  FeedItem,
  FeedContent,
  FeedTitle,
  CreatButtonWrapper,
  UserNameAndDateWrapper,
  StyledDropdown,
  ContentWrapper,
} from "./styles";

const { Text } = Typography;

function Tickets() {
  const { setTickets } = useTicketsActions();
  const tickets = useSelector(TicketsSelectors.getTickets);

  useEffect(() => {
    const fetchFeeds = async () => {
      // const feeds = await getFeeds();
      // setFeeds(feeds);
    };
    fetchFeeds();
  }, []);

  const handleRemove = async (id?: string) => {
    // await removeFeed(id);
    // message.success(t("removed"));
    // setFeeds(feeds.filter((feed) => feed._id !== id));
  };

  // return (
  //   <FeedWrapper>
  //     <div>
  //       <CreatButtonWrapper>
  //         <Button onClick={showModal}>{t("createFeed")}</Button>
  //       </CreatButtonWrapper>
  //
  //       <FeedsList>
  //         {feeds.map(({ content, title, createdBy, createdAt, _id }) => {
  //           return (
  //             <FeedItem key={_id}>
  //               <FeedTitle>
  //                 <UserAvatar
  //                   firstname={createdBy?.firstName}
  //                   lastname={createdBy?.lastName}
  //                 />
  //                 <UserNameAndDateWrapper>
  //                   <Text>
  //                     {createdBy?.firstName + " " + createdBy?.lastName}
  //                   </Text>
  //                   <Text type="secondary">
  //                     {dayjs(createdAt).format("YYYY MMM DD HH:mm")}
  //                   </Text>
  //                 </UserNameAndDateWrapper>
  //                 <StyledDropdown
  //                   overlay={
  //                     <Menu>
  //                       {user?._id === createdBy?._id && (
  //                         <Menu.Item
  //                           key={1}
  //                           onClick={() => handleRemove(_id)}
  //                           icon={<DeleteOutlined />}
  //                         >
  //                           {t("remove")}
  //                         </Menu.Item>
  //                       )}
  //                       <Menu.Item key={2} icon={<ShareAltOutlined />}>
  //                         {t("share")}
  //                       </Menu.Item>
  //                     </Menu>
  //                   }
  //                 />
  //               </FeedTitle>
  //               <FeedContent>
  //                 <div>
  //                   <Text strong>{title}</Text>
  //                 </div>
  //                 <ContentWrapper>
  //                   <Text>{content}</Text>
  //                 </ContentWrapper>
  //               </FeedContent>
  //             </FeedItem>
  //           );
  //         })}
  //       </FeedsList>
  //     </div>
  //     <CreateFeedModal
  //       isModalVisible={isModalVisible}
  //       setIsModalVisible={setIsModalVisible}
  //     />
  //   </FeedWrapper>
  // );

  return <div>Working</div>;
}

export default Tickets;
