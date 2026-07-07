--- 
title: refresh_schemas_status
hide_title: false
hide_table_of_contents: false
keywords:
  - refresh_schemas_status
  - dms
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

Creates, updates, deletes, gets or lists a <code>refresh_schemas_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="refresh_schemas_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.refresh_schemas_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_refresh_schemas_status"
    values={[
        { label: 'describe_refresh_schemas_status', value: 'describe_refresh_schemas_status' }
    ]}
>
<TabItem value="describe_refresh_schemas_status">

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
    <td><CopyableCode code="EndpointArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="LastFailureMessage" /></td>
    <td><code>string</code></td>
    <td>The last failure message for the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="LastRefreshDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the schema was last refreshed.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the replication instance.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the schema. (successful, failed, refreshing)</td>
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
    <td><a href="#describe_refresh_schemas_status"><CopyableCode code="describe_refresh_schemas_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the status of the RefreshSchemas operation.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_refresh_schemas_status"
    values={[
        { label: 'describe_refresh_schemas_status', value: 'describe_refresh_schemas_status' }
    ]}
>
<TabItem value="describe_refresh_schemas_status">

Returns the status of the RefreshSchemas operation.

```sql
SELECT
EndpointArn,
LastFailureMessage,
LastRefreshDate,
ReplicationInstanceArn,
Status
FROM aws.dms.refresh_schemas_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
