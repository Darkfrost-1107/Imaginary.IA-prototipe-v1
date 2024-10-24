import { Preview } from '@/layers/core/cuento/preview'
import {FC} from 'react'
import { Dialog_Component } from '../components/dialog/dialog_component'
import { Cuento } from '@/layers/core/cuento/cuento'
import { Dialog_Story_Creator } from '../components/dialog/dialog_story_creator'

interface Preview_Props {
  //Props
  preview: Preview
}

export const Preview_Card_Container : FC<Preview_Props> = ({preview}) => {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
      <a href="#">
        <img className="rounded-t-lg aspect-square" src={preview.record.imagen?.url || "/logo.png"} alt="" />
      </a>
      <div className="p-4">
        <a href="#">
          <h5 className="mb-2 text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {preview.record.titulo}
          </h5>
        </a>
        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {preview.record.synopsis}
        </p> */}
        <Dialog_Component 
          label="Ver Cuento"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {({close} : {close: () => void}) => {
                let story = new Cuento( preview )
                return(
                  <Dialog_Story_Creator close={close} story={story} create={false} />
                )
              }
              }
        </Dialog_Component>
      </div>
    </div>
  )
}
