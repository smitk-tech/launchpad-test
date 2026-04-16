import logoUrl from "@/assets/L.svg";

export function BrandLogo() {
  return (
    <img
      src={logoUrl}
      alt="BSP Blueprint"
      className="h-[72px] w-[368px] max-w-full object-contain"
      width={368}
      height={72}
    />
  );
}
