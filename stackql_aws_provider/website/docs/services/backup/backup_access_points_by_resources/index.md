--- 
title: backup_access_points_by_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_access_points_by_resources
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

Creates, updates, deletes, gets or lists a <code>backup_access_points_by_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backup_access_points_by_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.backup_access_points_by_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_backup_access_points_by_resource"
    values={[
        { label: 'list_backup_access_points_by_resource', value: 'list_backup_access_points_by_resource' }
    ]}
>
<TabItem value="list_backup_access_points_by_resource">

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
    <td><CopyableCode code="access_point_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the backup access point. (pattern: &lt;code&gt;(arn:aws&#91;a-z-&#93;*:backup:&#91;a-z-\d&#93;+:\d&#123;12&#125;:accesspoint/)&#91;\da-z&#93;&#123;1&#125;&#91;\da-z-&#93;&#123;1,48&#125;&#91;\da-z&#93;&#123;1&#125;(?&lt;!-s3alias)(?&lt;!-ext-s3alias)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="access_point_metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata for the backup access point. After the backup access point reaches the AVAILABLE status, this map contains S3AccessPointArn and S3AccessPointAlias, which you use with standard Amazon S3 read APIs to access the backup data. For continuous recovery points, this map also contains AccessPointInTime (in format 2021-11-27T03:30:27Z). The access point provides access to the content present in the backup at that specific time.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_vault_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the backup vault that contains the recovery point.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_vault_name" /></td>
    <td><code>string</code></td>
    <td>The name of the backup vault that contains the recovery point. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;&#123;2,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the backup access point was created, in Unix format and Coordinated Universal Time (UTC). The value of CreationTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the backup access point. (pattern: &lt;code&gt;&#91;\da-z&#93;&#123;1&#125;&#91;\da-z-&#93;&#123;1,48&#125;&#91;\da-z&#93;&#123;1&#125;(?&lt;!-s3alias)(?&lt;!-ext-s3alias)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_point_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recovery point that the backup access point provides access to. (pattern: &lt;code&gt;(arn:aws&#91;a-z-&#93;*:&#91;a-z-\d&#93;+:&#91;a-z-\d&#93;+:).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource that was backed up, such as an Amazon S3 bucket. (pattern: &lt;code&gt;(arn:aws&#91;a-z-&#93;*:&#91;a-z-\d&#93;+:).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon Web Services resource associated with the recovery point. For example, S3 for Amazon Simple Storage Service.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the backup access point. (AVAILABLE, CREATING, DELETING, DISASSOCIATED, DISASSOCIATING, EXPIRED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A message that provides additional detail about the status of the backup access point, such as the reason a creation or deletion attempt failed.</td>
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
    <td><a href="#list_backup_access_points_by_resource"><CopyableCode code="list_backup_access_points_by_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns the backup access points associated with the specified resource, such as an Amazon S3 bucket.</td>
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
<tr id="parameter-resource_arn">
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource whose backup access points you want to list.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to be returned.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_backup_access_points_by_resource"
    values={[
        { label: 'list_backup_access_points_by_resource', value: 'list_backup_access_points_by_resource' }
    ]}
>
<TabItem value="list_backup_access_points_by_resource">

Returns the backup access points associated with the specified resource, such as an Amazon S3 bucket.

```sql
SELECT
access_point_arn,
access_point_metadata,
backup_vault_arn,
backup_vault_name,
creation_time,
name,
recovery_point_arn,
resource_arn,
resource_type,
status,
status_message
FROM aws.backup.backup_access_points_by_resources
WHERE resource_arn = '{{ resource_arn }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
