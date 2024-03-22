export const Preloader = () => {
    return (
      <div
        style={{ aspectRatio: "16/9", display: "grid", placeItems: "center" }}
        className="preloader"
      >
        <svg
          style={{ width: "10vw" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <circle
            fill="#FFF500"
            stroke="#FFF500"
            strokeWidth="15"
            r="15"
            cx="35"
            cy="100"
          >
            <animate
              attributeName="cx"
              calcMode="spline"
              dur="2"
              values="35;165;165;35;35"
              keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
              repeatCount="indefinite"
              begin="0"
            ></animate>
          </circle>
          <circle
            fill="#FFF500"
            stroke="#FFF500"
            strokeWidth="15"
            opacity=".8"
            r="15"
            cx="35"
            cy="100"
          >
            <animate
              attributeName="cx"
              calcMode="spline"
              dur="2"
              values="35;165;165;35;35"
              keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
              repeatCount="indefinite"
              begin="0.05"
            ></animate>
          </circle>
          <circle
            fill="#FFF500"
            stroke="#FFF500"
            strokeWidth="15"
            opacity=".6"
            r="15"
            cx="35"
            cy="100"
          >
            <animate
              attributeName="cx"
              calcMode="spline"
              dur="2"
              values="35;165;165;35;35"
              keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
              repeatCount="indefinite"
              begin=".1"
            ></animate>
          </circle>
          <circle
            fill="#FFF500"
            stroke="#FFF500"
            strokeWidth="15"
            opacity=".4"
            r="15"
            cx="35"
            cy="100"
          >
            <animate
              attributeName="cx"
              calcMode="spline"
              dur="2"
              values="35;165;165;35;35"
              keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
              repeatCount="indefinite"
              begin=".15"
            ></animate>
          </circle>
          <circle
            fill="#FFF500"
            stroke="#FFF500"
            strokeWidth="15"
            opacity=".2"
            r="15"
            cx="35"
            cy="100"
          >
            <animate
              attributeName="cx"
              calcMode="spline"
              dur="2"
              values="35;165;165;35;35"
              keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
              repeatCount="indefinite"
              begin=".2"
            ></animate>
          </circle>
        </svg>
      </div>
    );
  };
  