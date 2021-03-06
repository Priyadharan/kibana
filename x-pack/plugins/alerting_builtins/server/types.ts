/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { Logger, ScopedClusterClient } from '../../../../src/core/server';
import { PluginSetupContract as AlertingSetup } from '../../alerting/server';
import { getService as getServiceIndexThreshold } from './alert_types/index_threshold';

export { Logger, IRouter } from '../../../../src/core/server';

export {
  PluginSetupContract as AlertingSetup,
  AlertType,
  AlertExecutorOptions,
} from '../../alerting/server';

// this plugin's dependendencies
export interface AlertingBuiltinsDeps {
  alerting: AlertingSetup;
}

// external service exposed through plugin setup/start
export interface IService {
  indexThreshold: ReturnType<typeof getServiceIndexThreshold>;
}

// version of service for internal use
export interface Service extends IService {
  logger: Logger;
}

export type CallCluster = ScopedClusterClient['callAsCurrentUser'];
