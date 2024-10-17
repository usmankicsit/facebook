import { Container } from "@/components/shared";
import { Card, Button } from "@/components/ui";
import React, { useEffect, useState } from "react";
import { RiDownload2Line } from "react-icons/ri";
import { getFacebookPostComments } from "@/services/socialmedia-apis/facebook";
import { motion } from "framer-motion";
import CommentSection from "./CommentSection";
import _ from "lodash";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsData();
  }, []);

  const getCommentsData = async () => {
    setLoading(true);
    try {
      const response = await getFacebookPostComments();
      setComments(response.data);
    } catch (error) {}
    setLoading(false);
  };

  return (
    <Container className="flex flex-col gap-4">
      <Card bodyClass="flex justify-between items-center">
        <h3>Comment Moderation</h3>
        <Button
          variant="solid"
          size="sm"
          icon={<RiDownload2Line />}
          loading={loading}
        >
          Fetch Comments
        </Button>
      </Card>

      {_.isEmpty(comments) && (
        <Card bodyClass="py-[56px]">
          <h4 className="text-center text-gray-300">No Comments Available</h4>
        </Card>
      )}

      <div className="flex flex-col gap-2">
        {comments?.map((comment) => (
          <motion.div
            key={comment.id}
            className="w-full"
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <CommentSection data={comment} />
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default Home;
