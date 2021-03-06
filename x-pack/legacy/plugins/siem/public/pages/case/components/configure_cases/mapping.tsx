/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React, { useCallback } from 'react';
import styled from 'styled-components';

import {
  EuiDescribedFormGroup,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiButtonEmpty,
} from '@elastic/eui';

import * as i18n from './translations';

import { FieldMapping } from './field_mapping';
import { CasesConfigurationMapping } from '../../../../containers/case/configure/types';

interface MappingProps {
  disabled: boolean;
  updateConnectorDisabled: boolean;
  mapping: CasesConfigurationMapping[] | null;
  onChangeMapping: (newMapping: CasesConfigurationMapping[]) => void;
  setEditFlyoutVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const EuiButtonEmptyExtended = styled(EuiButtonEmpty)`
  font-size: 12px;
  height: 24px;
`;

const MappingComponent: React.FC<MappingProps> = ({
  disabled,
  updateConnectorDisabled,
  mapping,
  onChangeMapping,
  setEditFlyoutVisibility,
}) => {
  const onClick = useCallback(() => setEditFlyoutVisibility(true), []);

  return (
    <EuiDescribedFormGroup
      fullWidth
      title={<h3>{i18n.FIELD_MAPPING_TITLE}</h3>}
      description={i18n.FIELD_MAPPING_DESC}
    >
      <EuiFormRow fullWidth>
        <EuiFlexGroup justifyContent="flexEnd">
          <EuiFlexItem grow={false} className="euiFormLabel">
            <EuiButtonEmptyExtended onClick={onClick} disabled={updateConnectorDisabled}>
              {i18n.UPDATE_CONNECTOR}
            </EuiButtonEmptyExtended>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFormRow>
      <FieldMapping disabled={disabled} mapping={mapping} onChangeMapping={onChangeMapping} />
    </EuiDescribedFormGroup>
  );
};

export const Mapping = React.memo(MappingComponent);
