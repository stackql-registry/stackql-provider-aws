--- 
title: backup_access_points
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_access_points
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

Creates, updates, deletes, gets or lists a <code>backup_access_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backup_access_points" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.backup_access_points" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_backup_access_point"
    values={[
        { label: 'describe_backup_access_point', value: 'describe_backup_access_point' },
        { label: 'list_backup_access_points', value: 'list_backup_access_points' }
    ]}
>
<TabItem value="describe_backup_access_point">

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
<TabItem value="list_backup_access_points">

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
    <td><a href="#describe_backup_access_point"><CopyableCode code="describe_backup_access_point" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-access_point_arn"><code>access_point_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns metadata about a backup access point, including its status and the details of the underlying Amazon S3 access point. After a backup access point reaches the AVAILABLE status, use this operation to retrieve the Amazon S3 access point ARN and alias that you need to read the backup data.</td>
</tr>
<tr>
    <td><a href="#list_backup_access_points"><CopyableCode code="list_backup_access_points" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns a list of the backup access points in your account and Region.</td>
</tr>
<tr>
    <td><a href="#create_backup_access_point"><CopyableCode code="create_backup_access_point" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RecoveryPointArn"><code>RecoveryPointArn</code></a></td>
    <td></td>
    <td>Creates a backup access point for an Amazon S3 recovery point. A backup access point provides on-demand, read-only access to the backup data in a recovery point through an Amazon S3 access point, without initiating a restore. While a backup access point is active for a recovery point, Backup pauses lifecycle transitions and blocks deletion of that recovery point.</td>
</tr>
<tr>
    <td><a href="#delete_backup_access_point"><CopyableCode code="delete_backup_access_point" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-access_point_arn"><code>access_point_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a backup access point. This deletes the underlying Amazon S3 access point and, if no other backup access points remain for the recovery point, resumes lifecycle transitions for that recovery point. Always delete backup access points using this operation rather than deleting the underlying Amazon S3 access point directly.</td>
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
<tr id="parameter-access_point_arn">
    <td><CopyableCode code="access_point_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the backup access point to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
    defaultValue="describe_backup_access_point"
    values={[
        { label: 'describe_backup_access_point', value: 'describe_backup_access_point' },
        { label: 'list_backup_access_points', value: 'list_backup_access_points' }
    ]}
>
<TabItem value="describe_backup_access_point">

Returns metadata about a backup access point, including its status and the details of the underlying Amazon S3 access point. After a backup access point reaches the AVAILABLE status, use this operation to retrieve the Amazon S3 access point ARN and alias that you need to read the backup data.

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
FROM aws.backup.backup_access_points
WHERE access_point_arn = '{{ access_point_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_backup_access_points">

Returns a list of the backup access points in your account and Region.

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
FROM aws.backup.backup_access_points
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_backup_access_point"
    values={[
        { label: 'create_backup_access_point', value: 'create_backup_access_point' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_backup_access_point">

Creates a backup access point for an Amazon S3 recovery point. A backup access point provides on-demand, read-only access to the backup data in a recovery point through an Amazon S3 access point, without initiating a restore. While a backup access point is active for a recovery point, Backup pauses lifecycle transitions and blocks deletion of that recovery point.

```sql
INSERT INTO aws.backup.backup_access_points (
AccessPointMetadata,
AccessPointPolicy,
Name,
RecoveryPointArn,
Tags,
region
)
SELECT 
'{{ AccessPointMetadata }}',
'{{ AccessPointPolicy }}',
'{{ Name }}',
'{{ RecoveryPointArn }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
access_point_arn,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: backup_access_points
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the backup_access_points resource.
    - name: AccessPointMetadata
      value: "{{ AccessPointMetadata }}"
    - name: AccessPointPolicy
      value: "{{ AccessPointPolicy }}"
    - name: Name
      value: "{{ Name }}"
    - name: RecoveryPointArn
      value: "{{ RecoveryPointArn }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_backup_access_point"
    values={[
        { label: 'delete_backup_access_point', value: 'delete_backup_access_point' }
    ]}
>
<TabItem value="delete_backup_access_point">

Deletes a backup access point. This deletes the underlying Amazon S3 access point and, if no other backup access points remain for the recovery point, resumes lifecycle transitions for that recovery point. Always delete backup access points using this operation rather than deleting the underlying Amazon S3 access point directly.

```sql
DELETE FROM aws.backup.backup_access_points
WHERE access_point_arn = '{{ access_point_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
