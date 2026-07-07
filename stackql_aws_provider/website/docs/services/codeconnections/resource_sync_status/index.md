--- 
title: resource_sync_status
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_sync_status
  - codeconnections
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

Creates, updates, deletes, gets or lists a <code>resource_sync_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_sync_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeconnections.resource_sync_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_sync_status"
    values={[
        { label: 'get_resource_sync_status', value: 'get_resource_sync_status' }
    ]}
>
<TabItem value="get_resource_sync_status">

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
    <td><CopyableCode code="DesiredState" /></td>
    <td><code>object</code></td>
    <td>The desired state of the Amazon Web Services resource for the sync status with the Git repository.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestSuccessfulSync" /></td>
    <td><code>object</code></td>
    <td>The latest successful sync for the sync status with the Git repository.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestSync" /></td>
    <td><code>object</code></td>
    <td>The latest sync for the sync status with the Git repository, whether successful or not.</td>
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
    <td><a href="#get_resource_sync_status"><CopyableCode code="get_resource_sync_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the status of the sync with the Git repository for a specific Amazon Web Services resource.</td>
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
    defaultValue="get_resource_sync_status"
    values={[
        { label: 'get_resource_sync_status', value: 'get_resource_sync_status' }
    ]}
>
<TabItem value="get_resource_sync_status">

Returns the status of the sync with the Git repository for a specific Amazon Web Services resource.

```sql
SELECT
DesiredState,
LatestSuccessfulSync,
LatestSync
FROM aws.codeconnections.resource_sync_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
