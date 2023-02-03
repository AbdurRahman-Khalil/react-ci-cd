import React from 'react'
import QRCode from 'react-qr-code'
import { useState } from 'react'
import './QRCodeGenerator.css'

const QRCodeGenerator = () => {
    const [text, setText] = useState('')

    const gen_qr_code = (e) => {
        setText(e.target.value)
    }
    
    return (
        <div className='container-fluid d-flex justify-content-center align-items-center pt-1'>
            <div className='App container d-flex flex-column p-4 px-5 pe-5 text-center'>
                <h1 className='fw-bolder mt-2'>QR_Code Generator</h1>
                <hr />
                <div className='content mt-2'>
                    <h3 className='fw-bold'>Type or paste any url or text to generate it's QR Code</h3>
                    <input className='form-control mx-auto fw-bold mt-4 mb-5 pb-2' type='text' id='type' name='type'
                        value={text} onChange={gen_qr_code} placeholder="Type... to generate QRCode of your url" />
                    <QRCode className='qrcode p-2 mb-3' value={text} />
                </div>
            </div>
        </div>
    )
}

export default QRCodeGenerator;