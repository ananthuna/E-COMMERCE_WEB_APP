import { Box } from '@mui/material'
import React from 'react'
import TreeView from '@mui/lab/TreeView'
import TreeItem from '@mui/lab/TreeItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

function TreeGraph() {
    const tree = [
        { id: '1', childs: ['2', '3', '4'], parent: null, name: 'all' },
        { id: '2', childs: [], parent: '1', name: 'smart watch' },
        { id: '3', childs: [], parent: '1', name: 'mobile' },
        { id: '4', childs: [], parent: '1', name: 'laptop' }
    ]

    function TreeGraph({ nodes }) {
        return (
            <>
                {
                    tree.map((node, index) =>
                        node.parent === null && <TreeItem nodeId={node.id} label={node.name}>
                            <SubTree id={node.id} />
                        </TreeItem>

                    )
                }
            </>
        )
    }

    function SubTree({ id }) {
        const parent = ['2', '3', '4']
        return (
            <>
                {
                    parent.length > 0 && parent.map((id, index) =>
                        tree.map((node, i) =>
                            node.id === id &&
                            <TreeItem nodeId={node.id} label={node.name}></TreeItem>
                        )
                    )
                }
            </>
        )
    }

    return (
        <Box>
            <TreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
            >

                <TreeGraph />

            </TreeView>
        </Box>
    )
}

export default TreeGraph