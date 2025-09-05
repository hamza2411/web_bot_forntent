import { Button } from "@nextui-org/react";
import Footer from './component/footer'
import { Input } from "@nextui-org/react";
import Navbar from './component/navbar'
import { Textarea } from '@nextui-org/react';
export default function Example() {
  return (
    <>
     <Navbar/>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-md w-full space-y-8">
          <div>
            
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Joining</h2>
          
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            
            
            <Input placeholder="Name" label="Name " css={{ w: "500px" }} /><br/>
            <Input placeholder=" Email address" label=" Email address " css={{ w: "500px" }}  /><br/>
            <Textarea
            css={{ w: "500px" }}
      label="Messages"
      placeholder="Messages."
    />
          <Button shadow color="gradient" css={{ w: "500px" }} type="submit" auto>
          Submit
        </Button>

           
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}
