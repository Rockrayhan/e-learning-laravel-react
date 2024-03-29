import React, { Component } from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const ChatApp = () => {
  return (
    <div>
      <FacebookProvider appId="1122430098459896" chatSupport>
        <CustomChat pageId="104208581503659" minimized={true} />
      </FacebookProvider>
    </div>
  );
};

export default ChatApp;
