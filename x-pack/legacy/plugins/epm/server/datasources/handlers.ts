/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import Boom from 'boom';
import { createDatasource, PackageNotInstalledError } from './index';
import { getClusterAccessor } from '../lib/cluster_access';
import { PluginContext } from '../plugin';
import { getClient } from '../saved_objects';
import { Request, ResponseToolkit } from '../types';

// TODO: duplicated from packages/handlers.ts. unduplicate.
interface Extra extends ResponseToolkit {
  context: PluginContext;
}

interface CreateDatasourceRequest extends Request {
  params: {
    pkgkey: string;
  };
}

export async function handleRequestInstallDatasource(req: CreateDatasourceRequest, extra: Extra) {
  const { pkgkey } = req.params;
  const savedObjectsClient = getClient(req);
  const callCluster = getClusterAccessor(extra.context.esClient, req);

  try {
    const result = await createDatasource({
      savedObjectsClient,
      pkgkey,
      callCluster,
    });

    return result;
  } catch (error) {
    if (error instanceof PackageNotInstalledError) {
      throw new Boom(error, { statusCode: 403 });
    } else {
      return error;
    }
  }
}