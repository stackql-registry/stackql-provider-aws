--- 
title: stages
hide_title: false
hide_table_of_contents: false
keywords:
  - stages
  - apigatewayv2
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

Creates, updates, deletes, gets or lists a <code>stages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigatewayv2.stages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_stage"
    values={[
        { label: 'get_stage', value: 'get_stage' },
        { label: 'get_stages', value: 'get_stages' }
    ]}
>
<TabItem value="get_stage">

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
    <td><CopyableCode code="AccessLogSettings" /></td>
    <td><code>object</code></td>
    <td>Settings for logging access in a stage.</td>
</tr>
<tr>
    <td><CopyableCode code="ApiGatewayManaged" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoDeploy" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</td>
</tr>
<tr>
    <td><CopyableCode code="ClientCertificateId" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the stage was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultRouteSettings" /></td>
    <td><code>object</code></td>
    <td>Represents a collection of route settings.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentId" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;0-1024&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="LastDeploymentStatusMessage" /></td>
    <td><code>string</code></td>
    <td>Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the stage was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="RouteSettings" /></td>
    <td><code>object</code></td>
    <td>Route settings for the stage, by routeKey.</td>
</tr>
<tr>
    <td><CopyableCode code="StageName" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-128&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="StageVariables" /></td>
    <td><code>object</code></td>
    <td>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match &#91;A-Za-z0-9-._~:/?#&=,&#93;+.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags. Each tag element is associated with a given resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_stages">

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
    <td><CopyableCode code="AccessLogSettings" /></td>
    <td><code>object</code></td>
    <td>Settings for logging access in a stage.</td>
</tr>
<tr>
    <td><CopyableCode code="ApiGatewayManaged" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoDeploy" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether updates to an API automatically trigger a new deployment. The default value is false.</td>
</tr>
<tr>
    <td><CopyableCode code="ClientCertificateId" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the stage was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultRouteSettings" /></td>
    <td><code>object</code></td>
    <td>Represents a collection of route settings.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentId" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;0-1024&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="LastDeploymentStatusMessage" /></td>
    <td><code>string</code></td>
    <td>Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the stage was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="RouteSettings" /></td>
    <td><code>object</code></td>
    <td>Route settings for the stage, by routeKey.</td>
</tr>
<tr>
    <td><CopyableCode code="StageName" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-128&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="StageVariables" /></td>
    <td><code>object</code></td>
    <td>A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match &#91;A-Za-z0-9-._~:/?#&=,&#93;+.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags. Each tag element is associated with a given resource.</td>
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
    <td><a href="#get_stage"><CopyableCode code="get_stage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-stage_name"><code>stage_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a Stage.</td>
</tr>
<tr>
    <td><a href="#get_stages"><CopyableCode code="get_stages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets the Stages for an API.</td>
</tr>
<tr>
    <td><a href="#create_stage"><CopyableCode code="create_stage" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StageName"><code>StageName</code></a></td>
    <td></td>
    <td>Creates a Stage for an API.</td>
</tr>
<tr>
    <td><a href="#update_stage"><CopyableCode code="update_stage" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-stage_name"><code>stage_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a Stage.</td>
</tr>
<tr>
    <td><a href="#delete_stage"><CopyableCode code="delete_stage" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-stage_name"><code>stage_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Stage.</td>
</tr>
<tr>
    <td><a href="#delete_access_log_settings"><CopyableCode code="delete_access_log_settings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-stage_name"><code>stage_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.</td>
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
<tr id="parameter-api_id">
    <td><CopyableCode code="api_id" /></td>
    <td><code>string</code></td>
    <td>The API identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-stage_name">
    <td><CopyableCode code="stage_name" /></td>
    <td><code>string</code></td>
    <td>The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>string</code></td>
    <td>The maximum number of elements to be returned for this resource.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next page of elements from this collection. Not valid for the last element of the collection.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_stage"
    values={[
        { label: 'get_stage', value: 'get_stage' },
        { label: 'get_stages', value: 'get_stages' }
    ]}
>
<TabItem value="get_stage">

Gets a Stage.

```sql
SELECT
AccessLogSettings,
ApiGatewayManaged,
AutoDeploy,
ClientCertificateId,
CreatedDate,
DefaultRouteSettings,
DeploymentId,
Description,
LastDeploymentStatusMessage,
LastUpdatedDate,
RouteSettings,
StageName,
StageVariables,
Tags
FROM aws.apigatewayv2.stages
WHERE api_id = '{{ api_id }}' -- required
AND stage_name = '{{ stage_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_stages">

Gets the Stages for an API.

```sql
SELECT
AccessLogSettings,
ApiGatewayManaged,
AutoDeploy,
ClientCertificateId,
CreatedDate,
DefaultRouteSettings,
DeploymentId,
Description,
LastDeploymentStatusMessage,
LastUpdatedDate,
RouteSettings,
StageName,
StageVariables,
Tags
FROM aws.apigatewayv2.stages
WHERE api_id = '{{ api_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_stage"
    values={[
        { label: 'create_stage', value: 'create_stage' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_stage">

Creates a Stage for an API.

```sql
INSERT INTO aws.apigatewayv2.stages (
AccessLogSettings,
AutoDeploy,
ClientCertificateId,
DefaultRouteSettings,
DeploymentId,
Description,
RouteSettings,
StageName,
StageVariables,
Tags,
api_id,
region
)
SELECT 
'{{ AccessLogSettings }}',
{{ AutoDeploy }},
'{{ ClientCertificateId }}',
'{{ DefaultRouteSettings }}',
'{{ DeploymentId }}',
'{{ Description }}',
'{{ RouteSettings }}',
'{{ StageName }}' /* required */,
'{{ StageVariables }}',
'{{ Tags }}',
'{{ api_id }}',
'{{ region }}'
RETURNING
AccessLogSettings,
ApiGatewayManaged,
AutoDeploy,
ClientCertificateId,
CreatedDate,
DefaultRouteSettings,
DeploymentId,
Description,
LastDeploymentStatusMessage,
LastUpdatedDate,
RouteSettings,
StageName,
StageVariables,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: stages
  props:
    - name: api_id
      value: "{{ api_id }}"
      description: Required parameter for the stages resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the stages resource.
    - name: AccessLogSettings
      description: |
        Settings for logging access in a stage.
      value:
        DestinationArn: "{{ DestinationArn }}"
        Format: "{{ Format }}"
    - name: AutoDeploy
      value: {{ AutoDeploy }}
    - name: ClientCertificateId
      value: "{{ ClientCertificateId }}"
      description: |
        The identifier.
    - name: DefaultRouteSettings
      description: |
        Represents a collection of route settings.
      value:
        DataTraceEnabled: {{ DataTraceEnabled }}
        DetailedMetricsEnabled: {{ DetailedMetricsEnabled }}
        LoggingLevel: "{{ LoggingLevel }}"
        ThrottlingBurstLimit: {{ ThrottlingBurstLimit }}
        ThrottlingRateLimit: {{ ThrottlingRateLimit }}
    - name: DeploymentId
      value: "{{ DeploymentId }}"
      description: |
        The identifier.
    - name: Description
      value: "{{ Description }}"
      description: |
        A string with a length between [0-1024].
    - name: RouteSettings
      value: "{{ RouteSettings }}"
      description: |
        The route settings map.
    - name: StageName
      value: "{{ StageName }}"
      description: |
        A string with a length between [1-128].
    - name: StageVariables
      value: "{{ StageVariables }}"
      description: |
        The stage variable map.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Represents a collection of tags associated with the resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_stage"
    values={[
        { label: 'update_stage', value: 'update_stage' }
    ]}
>
<TabItem value="update_stage">

Updates a Stage.

```sql
UPDATE aws.apigatewayv2.stages
SET 
AccessLogSettings = '{{ AccessLogSettings }}',
AutoDeploy = {{ AutoDeploy }},
ClientCertificateId = '{{ ClientCertificateId }}',
DefaultRouteSettings = '{{ DefaultRouteSettings }}',
DeploymentId = '{{ DeploymentId }}',
Description = '{{ Description }}',
RouteSettings = '{{ RouteSettings }}',
StageVariables = '{{ StageVariables }}'
WHERE 
api_id = '{{ api_id }}' --required
AND stage_name = '{{ stage_name }}' --required
AND region = '{{ region }}' --required
RETURNING
AccessLogSettings,
ApiGatewayManaged,
AutoDeploy,
ClientCertificateId,
CreatedDate,
DefaultRouteSettings,
DeploymentId,
Description,
LastDeploymentStatusMessage,
LastUpdatedDate,
RouteSettings,
StageName,
StageVariables,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_stage"
    values={[
        { label: 'delete_stage', value: 'delete_stage' }
    ]}
>
<TabItem value="delete_stage">

Deletes a Stage.

```sql
DELETE FROM aws.apigatewayv2.stages
WHERE api_id = '{{ api_id }}' --required
AND stage_name = '{{ stage_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="delete_access_log_settings"
    values={[
        { label: 'delete_access_log_settings', value: 'delete_access_log_settings' }
    ]}
>
<TabItem value="delete_access_log_settings">

Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.

```sql
EXEC aws.apigatewayv2.stages.delete_access_log_settings 
@api_id='{{ api_id }}' --required, 
@stage_name='{{ stage_name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
