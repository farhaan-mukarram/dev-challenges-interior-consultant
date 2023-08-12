import { type PropsWithChildren, type FunctionComponent } from "react";

const Container: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full bg-primary drop-shadow-[0_2px_25px_rgba(0,0,0,0.1)]">
      <section className="px-3 py-5 mx-auto lg:px-20 lg:py-12 max-w-7xl">
        {children}
      </section>
    </div>
  );
};

export default Container;
