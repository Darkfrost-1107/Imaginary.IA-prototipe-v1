"use client"
import { Preview } from '@/layers/core/cuento/preview'
import {FC, useEffect, useState} from 'react'
import { Preview_Card_Container } from '../containers/preview_card_congainer'
import { async_cuentos_read_templates } from '@/layers/core/cuento/utility'
import { Button_Container } from '../containers/button_container'
import { Text_Ball_Container } from '../containers/text_ball_container'

interface PageProps {
  //Props
}

export const Story_Template_Viewer : FC<PageProps> = () => {

  const [cuentos, setCuentos] = useState<Preview[]>([])
  const [page, setPage] = useState<number>(0)
  useEffect(() => {
    async_cuentos_read_templates(page,(stories) => {
      setCuentos(stories)
    })
  },[page])
 
    function next(){
      setPage(page + 1)
    }

    function previous(){
      setPage(page - 1)
    }

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {cuentos.map((elem) => 
          <Preview_Card_Container preview={elem} />
        )}
      </div>
      <div className="flex">
        <Button_Container label="Anterior" onClick={ () => {
          previous()
        }}/>
        <Text_Ball_Container text={page + 1}/>
        <Button_Container label="Siguiente" onClick={ () => {
          next()
        }}/>
      </div>
    </div>
  )
}
