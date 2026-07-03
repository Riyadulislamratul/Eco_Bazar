import React from "react";

const PageHeader = ({
  title,
  backgroundImage,
  children,
}) => {
  return (
    <section
      className="relative h-72 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full items-center justify-center flex-col text-white">

        <h1 className="text-5xl font-bold">
          {title}
        </h1>

        <div className="mt-4">
          {children}
        </div>

      </div>
    </section>
  );
};

export default PageHeader;