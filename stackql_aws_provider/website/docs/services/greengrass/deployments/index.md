--- 
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
  - greengrass
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

Creates, updates, deletes, gets or lists a <code>deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrass.deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_deployments"
    values={[
        { label: 'list_deployments', value: 'list_deployments' }
    ]}
>
<TabItem value="list_deployments">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the deployment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentType" /></td>
    <td><code>string</code></td>
    <td>The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid. (NewDeployment, Redeployment, ResetDeployment, ForceResetDeployment)</td>
</tr>
<tr>
    <td><CopyableCode code="GroupArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the group for this deployment.</td>
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
    <td><a href="#list_deployments"><CopyableCode code="list_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns a history of deployments for the group.</td>
</tr>
<tr>
    <td><a href="#create_deployment"><CopyableCode code="create_deployment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeploymentType"><code>DeploymentType</code></a></td>
    <td><a href="#parameter-X-Amzn-Client-Token"><code>X-Amzn-Client-Token</code></a></td>
    <td>Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.</td>
</tr>
<tr>
    <td><a href="#reset_deployments"><CopyableCode code="reset_deployments" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amzn-Client-Token"><code>X-Amzn-Client-Token</code></a></td>
    <td>Resets a group's deployments.</td>
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
<tr id="parameter-group_id">
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Greengrass group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>string</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or ''null'' if there are no additional results.</td>
</tr>
<tr id="parameter-X-Amzn-Client-Token">
    <td><CopyableCode code="X-Amzn-Client-Token" /></td>
    <td><code>string</code></td>
    <td>A client token used to correlate requests and responses.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_deployments"
    values={[
        { label: 'list_deployments', value: 'list_deployments' }
    ]}
>
<TabItem value="list_deployments">

Returns a history of deployments for the group.

```sql
SELECT
CreatedAt,
DeploymentArn,
DeploymentId,
DeploymentType,
GroupArn
FROM aws.greengrass.deployments
WHERE group_id = '{{ group_id }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_deployment"
    values={[
        { label: 'create_deployment', value: 'create_deployment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_deployment">

Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.

```sql
INSERT INTO aws.greengrass.deployments (
DeploymentId,
DeploymentType,
GroupVersionId,
group_id,
region,
`X-Amzn-Client-Token`
)
SELECT 
'{{ DeploymentId }}',
'{{ DeploymentType }}' /* required */,
'{{ GroupVersionId }}',
'{{ group_id }}',
'{{ region }}',
'{{ X-Amzn-Client-Token }}'
RETURNING
DeploymentArn,
DeploymentId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: deployments
  props:
    - name: group_id
      value: "{{ group_id }}"
      description: Required parameter for the deployments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the deployments resource.
    - name: DeploymentId
      value: "{{ DeploymentId }}"
    - name: DeploymentType
      value: "{{ DeploymentType }}"
      description: |
        The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.
      valid_values: ['NewDeployment', 'Redeployment', 'ResetDeployment', 'ForceResetDeployment']
    - name: GroupVersionId
      value: "{{ GroupVersionId }}"
    - name: X-Amzn-Client-Token
      value: "{{ X-Amzn-Client-Token }}"
      description: A client token used to correlate requests and responses.
      description: A client token used to correlate requests and responses.
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reset_deployments"
    values={[
        { label: 'reset_deployments', value: 'reset_deployments' }
    ]}
>
<TabItem value="reset_deployments">

Resets a group's deployments.

```sql
EXEC aws.greengrass.deployments.reset_deployments 
@group_id='{{ group_id }}' --required, 
@region='{{ region }}' --required, 
@X-Amzn-Client-Token='{{ X-Amzn-Client-Token }}' 
@@json=
'{
"Force": {{ Force }}
}'
;
```
</TabItem>
</Tabs>
