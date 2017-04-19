/**
 * @file ReactGrid
 * @author niminjie(niminjie@baidu.com)
 *
 */

import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import { autobind } from 'core-decorators'
import GridItem from './GridItem'
import LayoutManager from './LayoutManager'

export default class ReactGrid extends Component {

    static defaultProps = {
        cols: 3,
        rows: 3,
        gridHeight: 330,
        gridWidth: 330,
        itemHeight: 100,
        itemWidth: 100,
        itemMarginV: 10,
        itemMarginH: 10,
        onDragStart: _.noop,
        onDragMove: _.noop,
        onDragEnd: _.noop,
    }

    className = 'ReactGrid'

    constructor(props) {
        super(props)

        this.layoutManager = new LayoutManager({
            ...props,
            itemNum: props.children.length,
        })
    }

    @autobind
    handleDragStart() {
    
    }

    @autobind
    handleDragMove() {
    
    }

    @autobind
    handleDragEnd() {
    
    }

    @autobind
    renderGridItem(child, idx) {
        const { itemWidth, itemHeight } = this.props
        const { x, y } = this.layoutManager.getPositionByIdx(idx)

        return (
            <GridItem
                key           = {child.key}
                idx           = {idx}
                x             = {x}
                y             = {y}
                width         = {itemWidth}
                height        = {itemHeight}
                layoutManager = {this.layoutManager}
                onDragStart   = {this.handleDragStart}
                onDragMove    = {this.handleDragMove}
                onDragEnd     = {this.handleDragEnd}
            >
                {child}
            </GridItem>
        )
    }

    renderGridItems() {
        return this.props.children.map(this.renderGridItem)
    }

    getStyle() {
        const { gridHeight, gridWidth } = this.props
        const style = {}

        style.width = gridWidth
        style.height = gridHeight
        style.display = 'inline-block'

        return style
    }

    render() {
        return (
            <div
                className = {this.className}
                style     = {this.getStyle()}
            >
                {this.renderGridItems()}
            </div>
        )
    }
}
