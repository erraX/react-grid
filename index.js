/**
 * @file ReactGrid
 * @author niminjie(niminjie@baidu.com)
 *
 */

import _ from 'lodash'
import React, { Compnent, PropTypes } from 'react'
import cx from 'classnames'
import { autobind } from 'core-decorators'
import GridItem from './GridItem'

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

    renderChildren() {
        const { children } = this.props

        return children.map((child, idx) => 
            <GridItem
                key         = {`griditem_${idx}`}
                idx         = {idx}
                x           = {0}
                y           = {0}
                onDragStart = {this.handleDragStart}
                onDragMove  = {this.handleDragMove}
                onDragEnd   = {this.handleDragEnd}
            >
                {child}
            </GridItem>
        )
    }

    render() {
        const { gridHeight, gridWidth } = this.props

        const gridStyle = {
            height: gridHeight,
            width: gridWidth,
            display: 'inline-block',
        }

        return (
            <div
                className = {this.className}
                style     = {gridStyle}
            >
                {this.renderChildren()}
            </div>
        )
    }
}
