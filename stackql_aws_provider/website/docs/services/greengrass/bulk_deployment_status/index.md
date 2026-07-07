--- 
title: bulk_deployment_status
hide_title: false
hide_table_of_contents: false
keywords:
  - bulk_deployment_status
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

Creates, updates, deletes, gets or lists a <code>bulk_deployment_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bulk_deployment_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrass.bulk_deployment_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bulk_deployment_status"
    values={[
        { label: 'get_bulk_deployment_status', value: 'get_bulk_deployment_status' }
    ]}
>
<TabItem value="get_bulk_deployment_status">

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
    <td><CopyableCode code="BulkDeploymentMetrics" /></td>
    <td><code>object</code></td>
    <td>Relevant metrics on input records processed during bulk deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="BulkDeploymentStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the bulk deployment. (Initializing, Running, Completed, Stopping, Stopped, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string</code></td>
    <td>The time, in ISO format, when the deployment was created.</td>
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
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tag(s) attached to the resource arn.</td>
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
    <td><a href="#get_bulk_deployment_status"><CopyableCode code="get_bulk_deployment_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bulk_deployment_id"><code>bulk_deployment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the status of a bulk deployment.</td>
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
<tr id="parameter-bulk_deployment_id">
    <td><CopyableCode code="bulk_deployment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the bulk deployment.</td>
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
    defaultValue="get_bulk_deployment_status"
    values={[
        { label: 'get_bulk_deployment_status', value: 'get_bulk_deployment_status' }
    ]}
>
<TabItem value="get_bulk_deployment_status">

Returns the status of a bulk deployment.

```sql
SELECT
BulkDeploymentMetrics,
BulkDeploymentStatus,
CreatedAt,
ErrorDetails,
ErrorMessage,
tags
FROM aws.greengrass.bulk_deployment_status
WHERE bulk_deployment_id = '{{ bulk_deployment_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
