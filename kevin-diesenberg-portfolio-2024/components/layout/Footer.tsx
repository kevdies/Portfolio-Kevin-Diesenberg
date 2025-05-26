"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border py-xl px-md">
      <div className="container mx-auto max-w-7xl text-center space-y-xs">
        <p className="text-textMuted">
          &copy; {new Date().getFullYear()} Kevin Diesenberg. All rights
          reserved.
        </p>
        <p className="text-textDim text-sm">
          Built with Next.js, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
