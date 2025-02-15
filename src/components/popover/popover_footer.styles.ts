/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { css } from '@emotion/react';
import {
  euiFontSize,
  euiPaddingSize,
  EuiPaddingSize,
  logicalCSS,
} from '../../global_styling';
import { UseEuiTheme } from '../../services';

export const euiPopoverFooterStyles = (
  euiThemeContext: UseEuiTheme,
  panelPadding: EuiPaddingSize
) => {
  const { euiTheme } = euiThemeContext;
  // If the popover's containing panel has padding applied,
  // ensure the title expands to cover that padding and
  const panelPaddingSize = euiPaddingSize(euiThemeContext, panelPadding);

  return {
    // Base
    euiPopoverFooter: css`
      ${euiFontSize(euiThemeContext, 's')};
      ${logicalCSS('border-top', euiTheme.border.thin)};
      // Negative margins for panel padding
      margin: ${panelPaddingSize} -${panelPaddingSize} -${panelPaddingSize};
    `,
  };
};
