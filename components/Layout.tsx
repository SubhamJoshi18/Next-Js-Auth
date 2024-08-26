import React, { ReactNode } from 'react';
import Header from './Header';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Header />
    <div className="layout">{props.children}</div>
    <style jsx global>{`
      html {
        box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        background: #f0f0f0; /* Changed background color */
        color: #333; /* Changed text color */
        line-height: 1.6; /* Adjusted line height for better readability */
      }

      input,
      textarea {
        font-size: 16px;
      }

      button {
        cursor: pointer;
        background-color: #0070f3; /* Added button background color */
        color: #fff; /* Changed button text color */
        border: none; /* Removed default border */
        padding: 0.5rem 1rem; /* Added padding */
        border-radius: 4px; /* Rounded corners */
        transition: background-color 0.3s ease; /* Smooth transition for background color */
      }

      button:hover {
        background-color: #005bb5; /* Darker shade on hover */
      }
    `}</style>
    <style jsx>{`
      .layout {
        padding: 0 2rem;
        max-width: 1200px; /* Added max-width for content */
        margin: 0 auto; /* Centered the content */
        background-color: #fff; /* Added a white background for the layout */
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Added shadow for depth */
        border-radius: 8px; /* Rounded corners for the layout */
        padding: 2rem; /* Increased padding for content */
      }
    `}</style>
  </div>
);

export default Layout;
