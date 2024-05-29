import { Box, BoxComponent } from '@strapi/design-system';
import { styled } from 'styled-components';

import { ContentPermission } from '../../../../../../../shared/contracts/permissions';

import { ContentTypeCollapses } from './ContentTypeCollapses';
import { GlobalActions, GlobalActionsProps } from './GlobalActions';

interface ContentTypesProps extends Pick<GlobalActionsProps, 'kind'> {
  isFormDisabled?: boolean;
  layout: ContentPermission;
}

const ContentTypes = ({
  isFormDisabled,
  kind,
  layout: { actions, subjects },
}: ContentTypesProps) => {
  const sortedSubjects = [...subjects].sort((a, b) => a.label.localeCompare(b.label));

  return (
    <StyledBox background="neutral0">
      <GlobalActions actions={actions} kind={kind} isFormDisabled={isFormDisabled} />
      <ContentTypeCollapses
        actions={actions}
        isFormDisabled={isFormDisabled}
        pathToData={kind}
        subjects={sortedSubjects}
      />
    </StyledBox>
  );
};

const StyledBox = styled<BoxComponent>(Box)`
  overflow-x: auto;
`;

export { ContentTypes };
