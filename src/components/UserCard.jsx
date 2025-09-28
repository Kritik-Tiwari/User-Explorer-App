import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const UserCard = ({ user }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-5 border border-gray-100 cursor-pointer"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h3>
      <p className="text-gray-600">
        <span className="font-medium">📧 Email:</span> {user.email}
      </p>
      <p className="text-gray-600 mt-1">
        <span className="font-medium">🏢 Company:</span> {user.company.name}
      </p>
    </motion.div>
  );
};

export default UserCard;
