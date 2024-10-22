import { DialogPanel } from '@headlessui/react'
import {FC, useEffect, useState} from 'react'
import { Subtitle_Container, Title_Container } from '../../containers/title_container'
import { Grid_Layout } from '../../layouts/grid_layout'
import { Panel_Layout } from '../../layouts/panel_layout'
import Image from 'next/image'
import { Cuento } from '@/layers/core/cuento/cuento'
import { Text_Container } from '../../containers/text_container'
import { Cuento_Scene } from '@/layers/core/cuento/cuento_scene'
import { Button_Container } from '../../containers/button_container'

interface Dialog_Component_Props {
  //Props
  close: () => void
  story: Cuento
}

export const Dialog_Story_Creator : FC<Dialog_Component_Props> = ({close, story}) => {

  const [currentStory, updateStory] = useState<Cuento>(story)
  // story.start()
  useEffect(() => {}, [story])
  const [currentScene, updateScene] = useState<Cuento_Scene>()

  // updateScene(story.new_scene(currentScene))

  return (
    <div className="bg-black rounded-lg p-8">
      <Title_Container title="Continua tu historia" />
      <Grid_Layout>
        <Panel_Layout>
          <Image src="/logo.png" alt="" width={512} height={512}/>
        </Panel_Layout>
        <Panel_Layout>
          <Subtitle_Container title="Continua tu historia"/>
          <Text_Container text={currentScene?.content || ""} />
          <div>
            {currentScene?.options.map((elem)=>{
              return (
                <Button_Container 
                  label={elem.label}
                  onClick={() => {
                    story.create_next_scene(elem.label)
                  }} 
                />
              )
            })}
          </div>
        </Panel_Layout>
      </Grid_Layout>
      {/* <DialogTitle className="font-bold">Deactivate account</DialogTitle> */}
      {/* <Description>This will permanently deactivate your account</Description> */}
      {/* <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p> */}
      {/* <div className="flex gap-4">
        <button onClick={() => setOpen(false)}>Cancel</button>
        <button onClick={() => setOpen(false)}>Deactivate</button>
      </div> */}
    </div>
    
  )
}
