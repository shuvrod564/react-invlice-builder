import InvoiceForm from "../../components/InvoiceForm"
import InvoicePreview from "../../components/InvoicePreview"

 
const Invoice = () => {
    return (
        <>
            <main className="flex p-5">
                <div className="container mx-auto">
                    <div className="flex flex-wrap flex-row">
                        <div className=" lg:w-[40%] w-full lg:pr-5">
                            <h1 className="text-4xl font-bold text-black mb-5">Invoice Details</h1>

                            <InvoiceForm />
                        </div>
                        <div className=" lg:w-[60%] w-full lg:pl-5">
                            <InvoicePreview />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Invoice