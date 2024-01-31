"use client";
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart';
import Image from 'next/image';

import {
    Sheet,
    
    SheetContent,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"
import { Button } from './ui/button';

function ShoppingCartModel() {

    const {cartCount,handleCartClick,shouldDisplayCart,cartDetails,removeItem,totalPrice}=useShoppingCart();
    // console.log(cartDetails);

    function handleCheckoutClick() {

        
    }

    
  return (
    <Sheet onOpenChange={handleCartClick} open={shouldDisplayCart}>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
      </SheetHeader>
     <div className='h-full flex flex-col justify-between'>
        <div className='mt-8 flex-1 over-flow-y-auto'>
            <ul className='-my-6 divide-y divide-gray-200'>
                {cartCount === 0?(
                    <h1 className='text-4xl'>You dont have Any items</h1>
                ):(
                    <>
                    {Object.values(cartDetails ?? {}).map((entry)=>(
                        <li key={entry.id} className='flex py-6'>
                            <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-100'>
                                <Image
                                src={entry.image as string}
                                alt="pic"
                                width={100}
                                height={100}
                                 />

                            </div>

                            <div className='ml-4 flex flex-1 flex-col'>
                                <div>
                                    <div className='flex justify-between text-base font-medium  text-gray-900'>
                                        <h3>{entry.name}</h3>
                                        <p className='ml-4'>${entry.price}</p>

                                    </div>
                                    <p className='mt-1 line-clamp-2 text-sm text-gray-500'>{entry.description}</p>
                                </div>

                                <div className='flex flex-1 items-end justify-between text-sm'>
                                    <p className='text-gray-500'>QTY: {entry.quantity}</p>
                                    <div className='flex'>
                                        <button onClick={()=>removeItem(entry.id)} className='font-medium text-primary hover:text-primary/80'>Remove</button>
                                    </div>
                                
                                </div>

                            </div>

                           


                        </li>

                    ))}
                    </>
                )}
            </ul>
        </div>

         {/* bottem area */}
         <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout.
            </p>

            <div className="mt-6">
              <Button onClick={handleCheckoutClick} className="w-full">
                Checkout
              </Button>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                OR{" "}
                <button
                  onClick={() => handleCartClick()}
                  className=" font-medium text-primary hover:text-primary/80"
                >
                  Continue Shopping
                </button>
              </p>
            </div>
     </div>

     </div>

       
     

      
    </SheetContent>
    
    
  </Sheet>
  )
}

export default ShoppingCartModel;