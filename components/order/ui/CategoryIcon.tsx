"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Category } from "@prisma/client";
import { use } from "react";

type CategoryIconProps = {
  category: Category;
};

export default function CategoryIcon({ category }: CategoryIconProps) {
  const params = useParams();
  return (
    <div
      className={`${category.slug === params.category ? 'bg-amber-100':''}  flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
    >
      {/* tamanio de lass imagenes de las categorias se metio al div para manejar una posicion relativa */}
      <div className="w-16 h-16 relative">
        <Image fill src={`/icon_${category.slug}.svg`} alt="Image Category" />
      </div>
      <Link className="text-xl font-bold" href={`/order/${category.slug}`}>
        {category.name}




      </Link>
    </div>
  );
}
