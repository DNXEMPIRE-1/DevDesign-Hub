import { GithubIcon, ProductHuntIcon, TwitterIcon } from "./icons/footericons";

export default function Footer() {
  return (
    <footer className=" bg-[#0093ed]">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between flex-wrap gap-2">
        <span className="text-md text-white sm:text-center">
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://swapnilsparsh.github.io"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Dennis Nzioki on Github"
              className="text-[#00253a]"
            >
              {" "}
              Swapnil
            </a>{" "}
            &
            <a
              href="https://jatinyadav.netlify.app  "
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Jatin Yadav on Github"
              className="text-[#00253a]"
            >
              {" "}
              Jatin
            </a>
          </p>
        </span>
        <ul className="flex flex-wrap items-center text-md justify-center text-white">
          <a
            className="hover:underline me-4 md:me-6"
            href="https://github.com/DNXEMPIRE-1/DevDesign-Hub"
            target="_blank"
          >
            <GithubIcon />
          </a>
          <a
            className="hover:underline me-4 md:me-6"
            href="https://twitter.com/dnx_empire"
            target="_blank"
          >
            <TwitterIcon />
          </a>
          <a
            className="hover:underline me-4 md:me-6"
            href="https://www.producthunt.com/products/developer-empire"
            target="_blank"
          >
            <ProductHuntIcon />
          </a>
        </ul>
      </div>
    </footer>
  );
}
