import React, { Component } from 'react';

class Article extends Component {
    constructor() {
        super();
        this.state = { status: "1er" };
    }

    componentDidMount() {
        const { status } = this.state;
        console.log("El componente en botón se ha montado");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState);
    }

    render() {
        return (
            <article>
                <h2>COMPONENTE ARTICLE</h2>
                <p>Descripción  del articulo</p>
                <p>{this.state.status} Estado</p>
                <button onClick={() => this.setState({ status: "2do" })}>Cambiar</button>
                <p>↑ muesta en console log el estado de ciclo de vida ↑</p>
            </article>
        )
    }
}

export default Article;