/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CoreSetup, Plugin } from 'kibana/public';
import { ManagementSetup } from '../../../../../src/plugins/management/public';

export class ManagementTestPlugin
  implements Plugin<ManagementTestPluginSetup, ManagementTestPluginStart> {
  public setup(core: CoreSetup, { management }: { management: ManagementSetup }) {
    const testSection = management.sections.register({
      id: 'test-section',
      title: 'Test Section',
      euiIconType: 'logoKibana',
      order: 25,
    });

    testSection!.registerApp({
      id: 'test-management',
      title: 'Management Test',
      mount(params) {
        params.setBreadcrumbs([{ text: 'Management Test' }]);
        ReactDOM.render(
          <Router>
            <h1 data-test-subj="test-management-header">Hello from management test plugin</h1>
            <Switch>
              <Route exact path={`${params.basePath}`}>
                <Link to={`${params.basePath}/one`} data-test-subj="test-management-link-one">
                  Link to /one
                </Link>
              </Route>
              <Route path={`${params.basePath}/one`}>
                <Link to={`${params.basePath}`} data-test-subj="test-management-link-basepath">
                  Link to basePath
                </Link>
              </Route>
            </Switch>
          </Router>,
          params.element
        );

        return () => {
          ReactDOM.unmountComponentAtNode(params.element);
        };
      },
    });
    return {};
  }

  public start() {}
  public stop() {}
}

export type ManagementTestPluginSetup = ReturnType<ManagementTestPlugin['setup']>;
export type ManagementTestPluginStart = ReturnType<ManagementTestPlugin['start']>;