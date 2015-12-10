import React from 'react'
import IconList from './icons/index';

export default class Icon extends React.Component {

    constructor(props){
        super(props)

        IconList.setSVG();
    }

    setClassNames (){
        let defaultClass = 'icon'
        let classNames = [defaultClass]
        this.props.className && classNames.push(`${this.props.className}`)
        this.props.color && classNames.push(`${defaultClass}--${this.props.color}`)
        this.props.size && classNames.push(`${defaultClass}--${this.props.size}`)
        return classNames.join(' ')
    }

    render (){
        let Icon = IconList.getSVG(this.props.name);
        if (!Icon){
            let error = new Error();
            error.name = 'IconError';
            error.message = `ICON ${this.props.name} NOT FOUND`
            throw error
        }
        return (
            <Icon className={this.setClassNames(this.props)} aria-label={this.props.label} />
        )
    }

}

Icon.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    color: React.PropTypes.string,
    size: React.PropTypes.oneOf(['small', 'medium', 'large'])
};
