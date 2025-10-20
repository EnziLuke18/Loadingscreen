import svgPaths from "./svg-gvrh4ey6f0";

function Frame1() {
  return (
    <div className="absolute h-[135px] left-[calc(50%+0.435px)] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[270px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 270 135">
        <g id="Frame 1">
          <path d={svgPaths.p13e459f0} fill="var(--fill-0, #8D21E1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function LoadingPage() {
  return (
    <div className="bg-[#fbf6ff] relative size-full" data-name="Loading page">
      <Frame1 />
    </div>
  );
}
