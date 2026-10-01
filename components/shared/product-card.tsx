import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import Title from './title';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

type Props = {
    className?:string;
    id:string;
    name:string;
    category:string;
    desc:string;
    price:number;
    image:string;
}

function ProductCard({
    id,
    name,
    desc,
    price,
    image
}: Props) {
  return (
    <div className={''}>
        <Link className={'flex flex-col justify-between w-[325px] min-h-[430px]'} href={`/product/${id}`}>
        <div className="bg-primary-foreground flex justify-center p-6 rounded-lg h-100" style={{maxHeight: 240, maxWidth:285}}>
            <img src={image || '/undefined.png'} alt="" width={311} height={251}/>
        </div>
        <Title text={name}></Title>
        <p>{desc}</p>
        <div className="flex justify-between">
            <span>от {price} руб.</span>
            <Button>
                <Plus></Plus>
                Добавить
            </Button>
        </div>
        </Link>
    </div>
  )
}

export default ProductCard        