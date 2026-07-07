--- 
title: recovery_points_by_legal_holds
hide_title: false
hide_table_of_contents: false
keywords:
  - recovery_points_by_legal_holds
  - backup
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

Creates, updates, deletes, gets or lists a <code>recovery_points_by_legal_holds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recovery_points_by_legal_holds" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.recovery_points_by_legal_holds" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_recovery_points_by_legal_hold"
    values={[
        { label: 'list_recovery_points_by_legal_hold', value: 'list_recovery_points_by_legal_hold' }
    ]}
>
<TabItem value="list_recovery_points_by_legal_hold">

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
    <td><CopyableCode code="BackupVaultName" /></td>
    <td><code>string</code></td>
    <td>The name of the backup vault (the logical container in which backups are stored). (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;&#123;2,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RecoveryPointArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the parent (composite) recovery point.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies a saved resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services resource type that is saved as a recovery point. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_\.&#93;&#123;1,50&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#list_recovery_points_by_legal_hold"><CopyableCode code="list_recovery_points_by_legal_hold" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-legal_hold_id"><code>legal_hold_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>This action returns recovery point ARNs (Amazon Resource Names) of the specified legal hold.</td>
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
<tr id="parameter-legal_hold_id">
    <td><CopyableCode code="legal_hold_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the legal hold.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of resource list items to be returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next item following a partial list of returned resources. For example, if a request is made to return MaxResults number of resources, NextToken allows you to return more items in your list starting at the location pointed to by the next token.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_recovery_points_by_legal_hold"
    values={[
        { label: 'list_recovery_points_by_legal_hold', value: 'list_recovery_points_by_legal_hold' }
    ]}
>
<TabItem value="list_recovery_points_by_legal_hold">

This action returns recovery point ARNs (Amazon Resource Names) of the specified legal hold.

```sql
SELECT
BackupVaultName,
RecoveryPointArn,
ResourceArn,
ResourceType
FROM aws.backup.recovery_points_by_legal_holds
WHERE legal_hold_id = '{{ legal_hold_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
