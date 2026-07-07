--- 
title: effective_deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - effective_deployments
  - greengrassv2
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

Creates, updates, deletes, gets or lists an <code>effective_deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="effective_deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrassv2.effective_deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_effective_deployments"
    values={[
        { label: 'list_effective_deployments', value: 'list_effective_deployments' }
    ]}
>
<TabItem value="list_effective_deployments">

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
    <td><CopyableCode code="coreDeviceExecutionStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the deployment job on the Greengrass core device. IN_PROGRESS – The deployment job is running. QUEUED – The deployment job is in the job queue and waiting to run. FAILED – The deployment failed. For more information, see the statusDetails field. COMPLETED – The deployment to an IoT thing was completed successfully. TIMED_OUT – The deployment didn't complete in the allotted time. CANCELED – The deployment was canceled by the user. REJECTED – The deployment was rejected. For more information, see the statusDetails field. SUCCEEDED – The deployment to an IoT thing group was completed successfully. (IN_PROGRESS, QUEUED, FAILED, COMPLETED, TIMED_OUT, CANCELED, REJECTED, SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the deployment was created, expressed in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentName" /></td>
    <td><code>string</code></td>
    <td>The name of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the deployment job.</td>
</tr>
<tr>
    <td><CopyableCode code="iotJobArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IoT job that applies the deployment to target devices. (pattern: &lt;code&gt;arn:&#91;^:&#93;*:iot:&#91;^:&#93;+:&#91;0-9&#93;+:job/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="iotJobId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IoT job that applies the deployment to target devices.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the deployment job was last modified, expressed in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td>The reason code for the update, if the job was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="statusDetails" /></td>
    <td><code>object</code></td>
    <td>The status details that explain why a deployment has an error. This response will be null if the deployment is in a success state.</td>
</tr>
<tr>
    <td><CopyableCode code="targetArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the target IoT thing or thing group. (pattern: &lt;code&gt;arn:&#91;^:&#93;*:iot:&#91;^:&#93;*:&#91;0-9&#93;+:(thing|thinggroup)/.+&lt;/code&gt;)</td>
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
    <td><a href="#list_effective_deployments"><CopyableCode code="list_effective_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-core_device_thing_name"><code>core_device_thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a paginated list of deployment jobs that IoT Greengrass sends to Greengrass core devices.</td>
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
<tr id="parameter-core_device_thing_name">
    <td><CopyableCode code="core_device_thing_name" /></td>
    <td><code>string</code></td>
    <td>The name of the core device. This is also the name of the IoT thing.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per paginated request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_effective_deployments"
    values={[
        { label: 'list_effective_deployments', value: 'list_effective_deployments' }
    ]}
>
<TabItem value="list_effective_deployments">

Retrieves a paginated list of deployment jobs that IoT Greengrass sends to Greengrass core devices.

```sql
SELECT
coreDeviceExecutionStatus,
creationTimestamp,
deploymentId,
deploymentName,
description,
iotJobArn,
iotJobId,
modifiedTimestamp,
reason,
statusDetails,
targetArn
FROM aws.greengrassv2.effective_deployments
WHERE core_device_thing_name = '{{ core_device_thing_name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
