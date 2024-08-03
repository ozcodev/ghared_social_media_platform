import React from 'react'
import { Button, ButtonProps } from './ui/button'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

interface LoadingButtonPoprs extends ButtonProps{
    loading : boolean
}

export default function LoadingButton ({
    loading, 
    disabled,
    className,
    ...props
}: LoadingButtonPoprs){
  return (
    <Button disabled={ loading ||disabled } className={cn("flex items-center gap-2", className)} {...props}>
        {loading && <Loader2 className='size-5 animate-spin'/>}
        {props.children}
    </Button>
  )
}
