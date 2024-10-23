"use client"
import { Preview } from '@/layers/core/cuento/preview'
import {FC, useEffect, useState} from 'react'
import { Preview_Card_Container } from '../containers/preview_card_congainer'
import { async_cuentos_read_templates } from '@/layers/core/cuento/utility'

interface PageProps {
  //Props
}

export const Story_Template_Viewer : FC<PageProps> = () => {

  const [cuentos, setCuentos] = useState<Preview[]>([])

  useEffect(() => {
    async_cuentos_read_templates(0,(stories) => {
      setCuentos(stories)
    })
  },[])
 

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {cuentos.map((elem) => 
          <Preview_Card_Container preview={elem} />
        )}
      </div>
    </div>
  )
}
