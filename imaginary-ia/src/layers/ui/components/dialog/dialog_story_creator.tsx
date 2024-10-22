import { DialogPanel } from '@headlessui/react'
import {FC} from 'react'
import { Title_Container } from '../../containers/title_container'

interface Dialog_Component_Props {
  //Props
  close: () => void
}

export const Dialog_Story_Creator : FC<Dialog_Component_Props> = ({close}) => {
  return (
    <div className="bg-black rounded-lg p-8">
      <Title_Container title="Continua tu historia" />
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
