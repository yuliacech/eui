/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { FunctionComponent, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { CommonProps } from '../../common';

export interface EuiPageContentHeaderSectionProps
  extends CommonProps,
    HTMLAttributes<HTMLDivElement> {}

/**
 * **DEPRECATED**
 * Use EuiPageHeader instead
 */
export const EuiPageContentHeaderSection_Deprecated: FunctionComponent<EuiPageContentHeaderSectionProps> = ({
  children,
  className,
  ...rest
}) => {
  const classes = classNames('euiPageContentHeaderSection', className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
