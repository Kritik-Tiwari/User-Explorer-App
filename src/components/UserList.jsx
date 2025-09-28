import React from "react";
import UserCard from "./UserCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // delays between each card
    },
  },
};

const UserList = ({ users }) => {
  return (
    <motion.div
      className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </motion.div>
  );
};

export default UserList;
