import { type PropsWithChildren, type FunctionComponent } from "react";

const Container: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full bg-primary  drop-shadow-[0_2px_25px_rgba(0,0,0,0.1)]">
      <section className="flex flex-col justify-between min-h-screen px-3 py-5 mx-auto sm:px-14 lg:pt-20 lg:px-20 max-w-7xl">
        {children}
      </section>
    </div>
  );
};

export default Container;
