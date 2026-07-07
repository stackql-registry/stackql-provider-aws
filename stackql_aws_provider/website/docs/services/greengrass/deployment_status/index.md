--- 
title: deployment_status
hide_title: false
hide_table_of_contents: false
keywords:
  - deployment_status
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

Creates, updates, deletes, gets or lists a <code>deployment_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployment_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrass.deployment_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_deployment_status"
    values={[
        { label: 'get_deployment_status', value: 'get_deployment_status' }
    ]}
>
<TabItem value="get_deployment_status">

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
    <td><CopyableCode code="DeploymentStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the deployment: ''InProgress'', ''Building'', ''Success'', or ''Failure''.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentType" /></td>
    <td><code>string</code></td>
    <td>The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid. (NewDeployment, Redeployment, ResetDeployment, ForceResetDeployment)</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorDetails" /></td>
    <td><code>array</code></td>
    <td>Error details</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorMessage" /></td>
    <td><code>string</code></td>
    <td>Error message</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the deployment status was updated.</td>
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
    <td><a href="#get_deployment_status"><CopyableCode code="get_deployment_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the status of a deployment.</td>
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
<tr id="parameter-deployment_id">
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the deployment.</td>
</tr>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_deployment_status"
    values={[
        { label: 'get_deployment_status', value: 'get_deployment_status' }
    ]}
>
<TabItem value="get_deployment_status">

Returns the status of a deployment.

```sql
SELECT
DeploymentStatus,
DeploymentType,
ErrorDetails,
ErrorMessage,
UpdatedAt
FROM aws.greengrass.deployment_status
WHERE deployment_id = '{{ deployment_id }}' -- required
AND group_id = '{{ group_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
