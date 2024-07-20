import Heading from "../Components/Heading";
import { ColorSwapper } from "../Components/UI/ColorSwapper";

export default function Projects() {
  return (
    <div>
      <Heading title="Projects" />

      <article className="w-2/3 mx-auto md:w-1/2">
        <ColorSwapper>
          <ColorSwapper.Portal />

          <ColorSwapper.Group className="relative">
            <ColorSwapper.Block activeClass="w-full">
              <div className="flex items-center justify-center px-8 pb-16 text-xl text-center text-zinc-300 rounded-xl">
                Below you'll find the projects I'm most proud to have worked on.
                I've poured many, many hours of my life into these, and I hope
                they've made the world a little bit better of a place.
              </div>
            </ColorSwapper.Block>

            <ColorSwapper.Block activeClass="w-full bg-neutral-900">
              <div className="h-72"></div>
            </ColorSwapper.Block>

            <ColorSwapper.Block activeClass="w-full bg-purple-800">
              <div className="flex flex-col justify-center px-16 py-16 mb-16 space-y-8 bg-neutral-800 lg:py-24 min-h-96 rounded-xl text-zinc-200">
                <a
                  href="https://flashbook.co"
                  target="_blank"
                  className="flex items-center text-3xl font-semibold group font-nav md:text-4xl lg:text-5xl text-gold"
                >
                  <img
                    src="/images/flashbook.png"
                    className="w-2/3"
                    alt="Flashbook logo"
                  />
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="hidden w-6 h-6 group-hover:inline group-hover:animate-pulse"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                  </span>
                </a>
                <div className="text-lg font-medium [text-wrap:balance] md:text-xl lg:text-2xl font-heading">
                  The art gallery for tattoo artists and tattoo enthusiasts to
                  find their next project
                </div>
              </div>
            </ColorSwapper.Block>

            <ColorSwapper.Block activeClass="w-full bg-purple-600">
              <div className="flex flex-col items-end justify-center px-16 py-16 mb-16 space-y-8 bg-purple-800 lg:py-24 min-h-96 rounded-xl text-zinc-200">
                <div>
                  <a
                    href="https://fitcheck.me"
                    target="_blank"
                    className="flex items-end space-x-4 text-3xl font-semibold group font-nav md:text-4xl lg:text-5xl"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden w-6 h-6 group-hover:inline group-hover:animate-pulse"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </span>
                    <span className="ml-2">FitCheck</span>
                  </a>
                </div>

                <div className="text-lg font-medium text-right [text-wrap:balance] md:text-xl lg:text-2xl font-heading">
                  Can't decide on what to wear to a big event? Let the internet
                  vote on your top two outfits!
                </div>
              </div>
            </ColorSwapper.Block>

            <ColorSwapper.Block activeClass="w-full bg-white">
              <div className="flex flex-col justify-center px-16 py-16 mb-16 space-y-8 bg-purple-600 lg:py-24 min-h-96 rounded-xl text-zinc-200">
                <a
                  href="https://stubsquad.com"
                  target="_blank"
                  className="flex items-center space-x-4 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 291.369 50.48"
                    className="w-36 sm:w-48 md:w-64 lg:w-96"
                    fill="currentColor"
                  >
                    <title>StubSquad logo</title>
                    <desc>
                      A graphic of the StubSquad logo in stylized typography
                    </desc>
                    <path
                      d="M353.816-1049.234v-7.319l-4.504-5.317H332.11l-4.503 5.317v12.698l4.503 5.317h12.636v12.698h-8.132v-7.256h-9.007v7.256l4.503 5.317h17.202l4.504-5.317v-12.698l-4.504-5.317h-12.698v-12.698h8.132v7.319zM356.005-1061.87v8.007l5.317-2.69h3.816v30.713l-2.69 5.317h14.45l-2.752-5.317v-30.713h3.878l5.254 2.69v-8.007zM401.731-1061.87l2.69 5.317v30.713h-8.132v-30.713l2.69-5.317h-14.45l2.69 5.317v30.713l4.566 5.317h17.14l4.504-5.317v-30.713l2.752-5.317zM446.269-1056.553l-4.504-5.317h-24.333l2.752 5.317v30.713l-2.752 5.317h24.333l4.504-5.317v-11.071l-3.628-4.254 3.628-4.253zm-17.077 30.713v-12.698h8.069v12.698zm0-18.015v-12.698h8.069v12.698zM489.68-1049.234v-7.319l-4.504-5.317h-17.202l-4.504 5.317v12.698l4.504 5.317h12.636v12.698h-8.132v-7.256h-9.008v7.256l4.504 5.317h17.202l4.504-5.317v-12.698l-4.504-5.317h-12.698v-12.698h8.132v7.319zM519.642-1025.84v-30.713l-4.503-5.317h-17.202l-4.504 5.317v30.713l4.504 5.317h6.693l4.253 9.133h9.008l-7.256-9.133h4.504zm-17.202 0v-30.713h8.195v30.713zM539.034-1061.87l2.69 5.317v30.713h-8.132v-30.713l2.69-5.317h-14.45l2.69 5.317v30.713l4.566 5.317h17.14l4.503-5.317v-30.713l2.752-5.317zM585.823-1025.84l-5.442-30.713 1.751-5.317H560.74l1.814 5.317-5.442 30.713-3.628 5.317h11.698l1.626-9.195h9.32l1.564 9.195h11.76zm-14.387-30.213 3.753 21.018h-7.444zM614.472-1061.87h-24.396l2.69 5.317v30.713l-2.69 5.317h24.396l4.504-5.317v-30.713zm-12.698 36.03v-30.713h8.194v30.713z"
                      transform="translate(-327.607 1061.87)"
                    />
                  </svg>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="hidden w-6 h-6 group-hover:inline group-hover:animate-pulse"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                  </span>
                </a>
                <div className="text-lg font-medium [text-wrap:balance] md:text-xl lg:text-2xl font-heading">
                  StubSquad is the one-stop-shop for people who share a set of
                  season tickets to their favorite sports team.
                </div>
              </div>
            </ColorSwapper.Block>

            <ColorSwapper.Block activeClass="w-full bg-slate-800">
              <div className="flex flex-col items-end justify-center px-16 py-16 mb-16 space-y-8 bg-white lg:py-24 min-h-96 rounded-xl text-zinc-900">
                <a
                  href="https://fortunavista.com"
                  target="_blank"
                  className="w-full text-3xl font-bold tracking-tight text-right uppercase group md:text-4xl lg:text-5xl font-fv"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="hidden w-6 h-6 group-hover:inline group-hover:animate-pulse"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                  </span>
                  Fortuna Vista
                </a>
                <div className="text-lg font-medium text-right [text-wrap:balance] md:text-xl lg:text-2xl font-heading">
                  As a landscape photographer, I needed a place to post my
                  photos but I wasn't happy with any of the available site
                  options and so I built my own platform from scratch.
                </div>
              </div>
            </ColorSwapper.Block>
            <ColorSwapper.Block activeClass="w-full bg-black">
              <div className="flex flex-col justify-center px-16 py-16 mb-16 space-y-8 lg:py-24 bg-slate-800 min-h-96 rounded-xl text-slate-200">
                <a
                  href="https://github.com/nexxai/LGTVMessenger"
                  target="_blank"
                  className="w-full text-3xl font-bold md:text-4xl lg:text-5xl font-lgtv group"
                >
                  LG TV Messenger
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="hidden w-6 h-6 group-hover:inline group-hover:animate-pulse"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                  </span>
                </a>
                <div className="text-lg font-medium [text-wrap:balance] md:text-xl lg:text-2xl font-heading">
                  This open source, web-based remote control for LG Smart TVs
                  allows the user to send messages directly to a compatible TV,
                  great for avoiding yelling across the house.
                </div>
              </div>
            </ColorSwapper.Block>
            <ColorSwapper.Block activeClass="w-full bg-zinc-800">
              <div className="flex flex-col items-center justify-center px-16 py-16 mb-16 space-y-8 bg-black lg:py-24 min-h-96 rounded-xl text-slate-200">
                <a
                  href="https://github.com/nexxai/"
                  target="_blank"
                  className="flex items-end justify-end w-full text-right group"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="hidden w-6 h-6 group-hover:inline group-hover:animate-pulse"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                  </span>

                  {/* <!-- GitHub logo --> */}
                  <svg
                    viewBox="0 0 480.24533 129.87469"
                    className="w-24 ml-4 sm:w-36 md:w-52"
                    fill="currentColor"
                  >
                    <defs id="defs1" />
                    <g id="g1" transform="translate(-87.747871,226.02544)">
                      <path
                        id="path10"
                        d="m 180.2452,-170.43874 h -40.356 c -1.04133,0 -1.88533,0.84533 -1.88533,1.888 v 19.72933 c 0,1.04133 0.844,1.88933 1.88533,1.88933 h 15.74267 v 24.51334 c 0,0 -3.53467,1.20533 -13.308,1.20533 -11.52933,0 -27.636,-4.21333 -27.636,-39.632 0,-35.424 16.772,-40.08533 32.51733,-40.08533 13.63067,0 19.50133,2.39867 23.23867,3.55467 1.17466,0.36 2.26,-0.808 2.26,-1.85067 l 4.50133,-19.064 c 0,-0.48667 -0.16533,-1.07467 -0.72,-1.47333 -1.51733,-1.08134 -10.77467,-6.26134 -34.16133,-6.26134 -26.94,0 -54.575999,11.46134 -54.575999,66.56267 0,55.10133 31.639999,63.312002 58.302659,63.312002 22.076,0 35.468,-9.433342 35.468,-9.433342 0.552,-0.30533 0.612,-1.076 0.612,-1.43066 v -61.536 c 0,-1.04267 -0.844,-1.888 -1.88533,-1.888"
                      />
                      <path
                        id="path11"
                        d="m 388.22386,-219.42407 c 0,-1.04934 -0.832,-1.89734 -1.87466,-1.89734 h -22.72267 c -1.03733,0 -1.88133,0.848 -1.88133,1.89734 0,0.005 0.007,43.91333 0.007,43.91333 h -35.42 v -43.91333 c 0,-1.04934 -0.83466,-1.89734 -1.87466,-1.89734 H 301.7362 c -1.03333,0 -1.87733,0.848 -1.87733,1.89734 v 118.90399 c 0,1.049342 0.844,1.902672 1.87733,1.902672 h 22.72134 c 1.04,0 1.87466,-0.85333 1.87466,-1.902672 v -50.85866 h 35.42 c 0,0 -0.0627,50.85466 -0.0627,50.85866 0,1.049342 0.84266,1.902672 1.88266,1.902672 h 22.776 c 1.04134,0 1.87334,-0.85333 1.876,-1.902672 v -118.90399"
                      />
                      <path
                        id="path12"
                        d="m 223.12387,-203.82141 c 0,-8.18133 -6.55867,-14.79333 -14.652,-14.79333 -8.08534,0 -14.65067,6.612 -14.65067,14.79333 0,8.17467 6.56533,14.804 14.65067,14.804 8.09333,0 14.652,-6.62933 14.652,-14.804"
                      />
                      <path
                        id="path13"
                        d="m 221.49987,-125.60141 c 0,-3.048 0,-54.88667 0,-54.88667 0,-1.04266 -0.84134,-1.89466 -1.88,-1.89466 h -22.652 c -1.03867,0 -1.968,1.072 -1.968,2.11333 0,0 0,66.04667 0,78.636 0,2.310672 1.44,2.998672 3.30266,2.998672 0,0 9.66934,0 20.408,0 2.24,0 2.78934,-1.1 2.78934,-3.036002 0,-4.21467 0,-20.72667 0,-23.93067"
                      />
                      <path
                        id="path14"
                        d="m 474.57986,-182.20408 h -22.548 c -1.03333,0 -1.876,0.85334 -1.876,1.90134 v 58.30266 c 0,0 -5.72933,4.19067 -13.86,4.19067 -8.12933,0 -10.28667,-3.68933 -10.28667,-11.65067 0,-7.97066 0,-50.84266 0,-50.84266 0,-1.048 -0.84,-1.90134 -1.876,-1.90134 h -22.88533 c -1.032,0 -1.87866,0.85334 -1.87866,1.90134 0,0 0,31.048 0,54.69333 0,23.64667 13.17866,29.430672 31.30799,29.430672 14.87467,0 26.86667,-8.216002 26.86667,-8.216002 0,0 0.57067,4.33066 0.82933,4.844002 0.25734,0.512 0.93067,1.02933 1.65867,1.02933 l 14.55867,-0.0653 c 1.032,0 1.87866,-0.85334 1.87866,-1.897342 l -0.008,-79.81866 c 0,-1.048 -0.84133,-1.90134 -1.88133,-1.90134"
                      />
                      <path
                        id="path15"
                        d="m 527.31586,-117.88141 c -7.82133,-0.23733 -13.12667,-3.78667 -13.12667,-3.78667 v -37.65466 c 0,0 5.23334,-3.208 11.65467,-3.78134 8.12,-0.72666 15.944,1.72534 15.944,21.096 0,20.42534 -3.53067,24.45734 -14.472,24.12667 z m 8.89333,-66.99333 c -12.80666,0 -21.51733,5.71466 -21.51733,5.71466 v -40.26399 c 0,-1.04934 -0.84,-1.89734 -1.87467,-1.89734 h -22.788 c -1.036,0 -1.87733,0.848 -1.87733,1.89734 v 118.90399 c 0,1.049342 0.84133,1.902672 1.88,1.902672 0.003,0 15.80533,0 15.81067,0 0.712,0 1.25066,-0.36667 1.64933,-1.00933 0.39333,-0.640002 0.96,-5.482672 0.96,-5.482672 0,0 9.31733,8.829332 26.956,8.829332 20.70933,0 32.58533,-10.502662 32.58533,-47.153332 0,-36.652 -18.968,-41.44133 -31.784,-41.44133"
                      />
                      <path
                        id="path16"
                        d="M 286.80653,-182.39341 H 269.7612 c 0,0 -0.0253,-22.51333 -0.0253,-22.51733 0,-0.85333 -0.44,-1.27867 -1.42534,-1.27867 H 245.0839 c -0.904,0 -1.388,0.39734 -1.388,1.26534 v 23.26933 c 0,0 -11.64,2.80933 -12.428,3.03733 -0.78267,0.22667 -1.36,0.94933 -1.36,1.812 v 14.62267 c 0,1.052 0.84,1.9 1.87866,1.9 h 11.90934 c 0,0 0,15.29466 0,35.17866 0,26.129342 18.328,28.696002 30.69466,28.696002 5.652,0 12.412,-1.81466 13.528,-2.22666 0.67467,-0.248 1.06667,-0.948 1.06667,-1.705342 l 0.02,-16.08666 c 0,-1.048 -0.88667,-1.89734 -1.884,-1.89734 -0.99467,0 -3.53467,0.404 -6.15067,0.404 -8.37333,0 -11.20933,-3.892 -11.20933,-8.932 0,-5.03466 -0.001,-33.43066 -0.001,-33.43066 h 17.04666 c 1.03867,0 1.88,-0.848 1.88,-1.9 v -18.316 c 0,-1.04934 -0.84133,-1.89467 -1.88,-1.89467"
                      />
                    </g>
                  </svg>
                </a>
                <div className="text-lg font-medium text-right [text-wrap:balance] md:text-xl lg:text-2xl font-heading">
                  I deeply believe in the spirit of free information sharing and
                  so I work really hard to contribute to open source projects
                  when I have the ability and skill. There is no better feeling
                  than the rush of an accepted PR in a popular project.
                </div>
              </div>
            </ColorSwapper.Block>
          </ColorSwapper.Group>
        </ColorSwapper>
        <div className="h-[50vh]"></div>
      </article>
    </div>
  );
}
