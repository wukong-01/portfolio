import Image, { type StaticImageData } from "next/image";
import { HiPhoto } from "react-icons/hi2";

type PhotoTileProps = {
  src?: StaticImageData | string;
  alt?: string;
  /** Tailwind aspect class, e.g. "aspect-[4/5]". Used when no explicit width/height. */
  ratio?: string;
  /** Tailwind width class, e.g. "w-full", "w-[240px]". */
  width?: string;
  /** Tailwind height class, e.g. "h-[300px]". */
  height?: string;
  /** Tailwind background class for the placeholder fill, e.g. "bg-slate-200". */
  bgClass?: string;
  /** Tailwind rounded class. */
  rounded?: string;
  /** Tailwind border class — defaults to a 3px white border. */
  borderClass?: string;
  /** Tailwind shadow class. */
  shadowClass?: string;
  /** Extra classes appended to the wrapper. */
  className?: string;
  /** Extra classes for the inner <Image> (object-position, etc.). */
  imageClassName?: string;
  /** next/image sizes attribute. */
  sizes?: string;
  /** next/image priority flag. */
  priority?: boolean;
};

export function PhotoTile({
  src,
  alt = "",
  ratio,
  width = "w-full",
  height,
  bgClass = "bg-slate-200",
  rounded = "rounded-2xl",
  borderClass = "border-[3px] border-white",
  shadowClass = "shadow-[0_14px_30px_-22px_rgba(15,23,42,0.35)]",
  className = "",
  imageClassName = "object-cover object-top",
  sizes = "(max-width: 768px) 30vw, 240px",
  priority = false,
}: PhotoTileProps) {
  const sizingClasses = [width, height, ratio].filter(Boolean).join(" ");
  const wrapperClasses =
    `relative overflow-hidden ${rounded} ${borderClass} ${shadowClass} ${bgClass} ${sizingClasses} ${className} transition-transform duration-500 ease-out hover:scale-[1.04] hover:rotate-1`.trim();

  if (src) {
    return (
      <div className={wrapperClasses}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={imageClassName} />
      </div>
    );
  }

  return (
    <div className={wrapperClasses}>
      <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle,rgba(15,23,42,0.12)_1px,transparent_1.4px)] [background-size:14px_14px]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-slate-400">
        <HiPhoto className="text-2xl" />
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Photo</span>
      </div>
    </div>
  );
}
