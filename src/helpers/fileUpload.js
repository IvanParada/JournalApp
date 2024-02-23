

export const fileUpload = async (file) => {

    if (!file) throw new Error('No existe un archivo a subir')

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dvohh5izj/upload'

    const formData = new FormData()
    formData.append('upload_preset', 'JournalApp')
    formData.append('file', file)

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })

        if(!resp.ok) throw new Error('No se pudo subir imagen')

        const cloudResp = await resp.json()

        return cloudResp.secure_url

    } catch (error) {
        throw new Error(error.message)
    }

}