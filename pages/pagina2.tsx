import { useState } from 'react'
import Layout from "../layouts/Layout"
import styled from '@emotion/styled'


const Label = styled.label`
    font-size: 30px;
    font-family: sans-serif;
`


const Input = styled.input`
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
`


const Parrafo = styled<any>("p")`
    font-size: ${({s}) => s ? s : "20"}px;
    font-family: sans-serif;
    margin-bottom: 60px;
`


const pagina2 = () => {
    const [fontSize, setFontSize] = useState(20)


    return (
        <Layout>
            <Label>Introduce el font size</Label>
            <Input
                value={fontSize}
                type="number" 
                onChange={(e: any) => setFontSize(e.target.value)}
            />

            <Parrafo s={fontSize}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deserunt nulla odio dolorum! Architecto, deleniti ducimus. Incidunt nihil iste totam minima tenetur odio accusamus, expedita quas voluptates, sint voluptas sequi!
            </Parrafo>
            <Parrafo s={fontSize}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deserunt nulla odio dolorum! Architecto, deleniti ducimus. Incidunt nihil iste totam minima tenetur odio accusamus, expedita quas voluptates, sint voluptas sequi!
            </Parrafo>
            <Parrafo s={fontSize}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deserunt nulla odio dolorum! Architecto, deleniti ducimus. Incidunt nihil iste totam minima tenetur odio accusamus, expedita quas voluptates, sint voluptas sequi!
            </Parrafo>
        </Layout>
    )
}

export default pagina2
