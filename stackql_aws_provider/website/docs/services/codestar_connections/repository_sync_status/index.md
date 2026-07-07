--- 
title: repository_sync_status
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_sync_status
  - codestar_connections
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

Creates, updates, deletes, gets or lists a <code>repository_sync_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repository_sync_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codestar_connections.repository_sync_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_repository_sync_status"
    values={[
        { label: 'get_repository_sync_status', value: 'get_repository_sync_status' }
    ]}
>
<TabItem value="get_repository_sync_status">

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
    <td><CopyableCode code="Events" /></td>
    <td><code>array</code></td>
    <td>The events associated with a specific sync attempt.</td>
</tr>
<tr>
    <td><CopyableCode code="StartedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of a specific sync attempt.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of a specific sync attempt. The following are valid statuses: INITIATED - A repository sync attempt has been created and will begin soon. IN_PROGRESS - A repository sync attempt has started and work is being done to reconcile the branch. SUCCEEDED - The repository sync attempt has completed successfully. FAILED - The repository sync attempt has failed. QUEUED - The repository sync attempt didn't execute and was queued. (FAILED, INITIATED, IN_PROGRESS, SUCCEEDED, QUEUED)</td>
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
    <td><a href="#get_repository_sync_status"><CopyableCode code="get_repository_sync_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about the sync status for a repository. A repository sync uses Git sync to push and pull changes from your remote repository.</td>
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
    defaultValue="get_repository_sync_status"
    values={[
        { label: 'get_repository_sync_status', value: 'get_repository_sync_status' }
    ]}
>
<TabItem value="get_repository_sync_status">

Returns details about the sync status for a repository. A repository sync uses Git sync to push and pull changes from your remote repository.

```sql
SELECT
Events,
StartedAt,
Status
FROM aws.codestar_connections.repository_sync_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
