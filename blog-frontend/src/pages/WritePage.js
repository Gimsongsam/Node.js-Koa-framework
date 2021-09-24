import React from 'react';
import styled from 'styled-components';
// import Editor from '../components/write/Editor';
import Responsive from '../components/common/Responsive';
// import TagBox from '../components/write/TagBox';
import WriteActionButtons from '../components/write/WriteActionButton';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';

const Content = styled(Responsive)`
    padding-bottom: 0.25rem;
`

const WritePage = () => {
    return (
        <Content>
            <EditorContainer />
            <TagBoxContainer />
            <WriteActionButtons />
        </Content>
    );
};

export default WritePage;