import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon?: LucideIcon
  iconImage?: string
  title: string
  description: string
  href: string
}

export default function ServiceCard({ icon: Icon, iconImage, title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group bg-brand-white rounded-[30px] p-8 shadow-sm border border-brand-gray hover:border-brand-orange/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col border-t-4 border-t-brand-gray hover:border-t-brand-orange">
      <div className="mb-6">
        {iconImage ? (
          <img src={iconImage} alt={title} width={72} height={72} className="object-contain w-[72px] h-[72px] group-hover:scale-110 transition-transform duration-300" />
        ) : Icon ? (
          <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300">
            <Icon size={28} className="text-brand-orange" />
          </div>
        ) : null}
      </div>
      <h3 className="font-bold text-brand-black text-xl mb-3 group-hover:text-brand-orange transition-colors">{title}</h3>
      <p className="text-brand-darkgray text-sm leading-relaxed flex-1">{description}</p>
      <div className="mt-6 flex items-center gap-2 text-brand-orange font-bold text-sm">
        Les mer <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-200" />
      </div>
    </Link>
  )
}
