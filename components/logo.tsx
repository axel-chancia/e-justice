import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant?: "default" | "white"
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export default function Logo({ variant = "default", showText = true, size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 32, height: 32, textClass: "text-lg" },
    md: { width: 40, height: 40, textClass: "text-xl" },
    lg: { width: 48, height: 48, textClass: "text-2xl" },
  }

  const { width, height, textClass } = sizes[size]

  return (
    <Link href="/" className="flex items-center">
      <div className="relative">
        <Image src="/logo.png" alt="E-Justice GA Logo" width={width} height={height} className="object-contain" />
      </div>
      {showText && (
        <span className={`${textClass} font-bold ml-2 ${variant === "white" ? "text-white" : "text-primary"}`}>
          E-Justice GA
        </span>
      )}
    </Link>
  )
}

