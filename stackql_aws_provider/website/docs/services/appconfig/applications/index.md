--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - appconfig
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appconfig.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="get_application">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The application ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The application name.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_applications">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The application ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The application name.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_application"><CopyableCode code="get_application" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an application.</td>
</tr>
<tr>
    <td><a href="#list_applications"><CopyableCode code="list_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-next_token"><code>next_token</code></a></td>
    <td>Lists all applications in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_application"><CopyableCode code="create_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an application. In AppConfig, an application is simply an organizational construct like a folder. This organizational construct has a relationship with some unit of executable code. For example, you could create an application called MyMobileApp to organize and manage configuration data for a mobile application installed by your users.</td>
</tr>
<tr>
    <td><a href="#update_application"><CopyableCode code="update_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an application.</td>
</tr>
<tr>
    <td><a href="#delete_application"><CopyableCode code="delete_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an application.</td>
</tr>
<tr>
    <td><a href="#stop_deployment"><CopyableCode code="stop_deployment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-deployment_number"><code>deployment_number</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Allow-Revert"><code>Allow-Revert</code></a></td>
    <td>Stops a deployment. This API action works only on deployments that have a status of DEPLOYING, unless an AllowRevert parameter is supplied. If the AllowRevert parameter is supplied, the status of an in-progress deployment will be ROLLED_BACK. The status of a completed deployment will be REVERTED. AppConfig only allows a revert within 72 hours of deployment completion.</td>
</tr>
<tr>
    <td><a href="#start_deployment"><CopyableCode code="start_deployment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeploymentStrategyId"><code>DeploymentStrategyId</code></a>, <a href="#parameter-ConfigurationProfileId"><code>ConfigurationProfileId</code></a>, <a href="#parameter-ConfigurationVersion"><code>ConfigurationVersion</code></a></td>
    <td></td>
    <td>Starts a deployment. AppConfig Agent supports deploying feature flag or free-form configuration data to specific segments or individual users during a gradual rollout. Entity-based gradual deployments ensure that once a user or segment receives a configuration version, they continue to receive that same version throughout the deployment period, regardless of which compute resource serves their requests. For more information, see Using AppConfig Agent for user-based or entity-based gradual deployments</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The application ID.</td>
</tr>
<tr id="parameter-deployment_number">
    <td><CopyableCode code="deployment_number" /></td>
    <td><code>integer</code></td>
    <td>The sequence number of the deployment.</td>
</tr>
<tr id="parameter-environment_id">
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The environment ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Allow-Revert">
    <td><CopyableCode code="Allow-Revert" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean that enables AppConfig to rollback a COMPLETED deployment to the previous configuration version. This action moves the deployment to a status of REVERTED.</td>
</tr>
<tr id="parameter-max_results">
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.</td>
</tr>
<tr id="parameter-next_token">
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token to start the list. Next token is a pagination token generated by AppConfig to describe what page the previous List call ended on. For the first List request, the nextToken should not be set. On subsequent calls, the nextToken parameter should be set to the previous responses nextToken value. Use this token to get the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="get_application">

Retrieves information about an application.

```sql
SELECT
description,
id,
name
FROM aws.appconfig.applications
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_applications">

Lists all applications in your Amazon Web Services account.

```sql
SELECT
description,
id,
name
FROM aws.appconfig.applications
WHERE region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND next_token = '{{ next_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application"
    values={[
        { label: 'create_application', value: 'create_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application">

Creates an application. In AppConfig, an application is simply an organizational construct like a folder. This organizational construct has a relationship with some unit of executable code. For example, you could create an application called MyMobileApp to organize and manage configuration data for a mobile application installed by your users.

```sql
INSERT INTO aws.appconfig.applications (
Name,
Description,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
description,
id,
name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: applications
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the applications resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_application"
    values={[
        { label: 'update_application', value: 'update_application' }
    ]}
>
<TabItem value="update_application">

Updates an application.

```sql
UPDATE aws.appconfig.applications
SET 
Name = '{{ Name }}',
Description = '{{ Description }}'
WHERE 
application_id = '{{ application_id }}' --required
AND region = '{{ region }}' --required
RETURNING
description,
id,
name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application"
    values={[
        { label: 'delete_application', value: 'delete_application' }
    ]}
>
<TabItem value="delete_application">

Deletes an application.

```sql
DELETE FROM aws.appconfig.applications
WHERE application_id = '{{ application_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop_deployment"
    values={[
        { label: 'stop_deployment', value: 'stop_deployment' },
        { label: 'start_deployment', value: 'start_deployment' }
    ]}
>
<TabItem value="stop_deployment">

Stops a deployment. This API action works only on deployments that have a status of DEPLOYING, unless an AllowRevert parameter is supplied. If the AllowRevert parameter is supplied, the status of an in-progress deployment will be ROLLED_BACK. The status of a completed deployment will be REVERTED. AppConfig only allows a revert within 72 hours of deployment completion.

```sql
EXEC aws.appconfig.applications.stop_deployment 
@application_id='{{ application_id }}' --required, 
@environment_id='{{ environment_id }}' --required, 
@deployment_number='{{ deployment_number }}' --required, 
@region='{{ region }}' --required, 
@Allow-Revert={{ Allow-Revert }}
;
```
</TabItem>
<TabItem value="start_deployment">

Starts a deployment. AppConfig Agent supports deploying feature flag or free-form configuration data to specific segments or individual users during a gradual rollout. Entity-based gradual deployments ensure that once a user or segment receives a configuration version, they continue to receive that same version throughout the deployment period, regardless of which compute resource serves their requests. For more information, see Using AppConfig Agent for user-based or entity-based gradual deployments

```sql
EXEC aws.appconfig.applications.start_deployment 
@application_id='{{ application_id }}' --required, 
@environment_id='{{ environment_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"DeploymentStrategyId": "{{ DeploymentStrategyId }}", 
"ConfigurationProfileId": "{{ ConfigurationProfileId }}", 
"ConfigurationVersion": "{{ ConfigurationVersion }}", 
"Description": "{{ Description }}", 
"Tags": "{{ Tags }}", 
"KmsKeyIdentifier": "{{ KmsKeyIdentifier }}", 
"DynamicExtensionParameters": "{{ DynamicExtensionParameters }}", 
"LatestDeploymentNumber": {{ LatestDeploymentNumber }}
}'
;
```
</TabItem>
</Tabs>
