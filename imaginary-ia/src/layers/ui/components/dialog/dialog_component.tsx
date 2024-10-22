import {FC, useState} from 'react'
import { Dialog, DialogPanel, DialogTitle, Description } from '@headlessui/react'
import { Button_Container } from '../../containers/button_container'
interface DialogProps {
  //Props
  label: string
  children : any
}

export const Dialog_Component : FC<DialogProps> = ({label}) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  function swap(){
    setOpen(!isOpen)
  }
  return (
    <>
      <Button_Container onClick={swap} label={label} />
      <Dialog open={isOpen} onClose={() => setOpen(true)} className="relative z-50" >
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/20">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
              <DialogTitle className="font-bold">Deactivate account</DialogTitle>
              <Description>This will permanently deactivate your account</Description>
              <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
              <div className="flex gap-4">
                <button onClick={() => setOpen(false)}>Cancel</button>
                <button onClick={() => setOpen(false)}>Deactivate</button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
    </>
  )
}
