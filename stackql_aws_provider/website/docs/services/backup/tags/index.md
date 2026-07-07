--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tags"
    values={[
        { label: 'list_tags', value: 'list_tags' }
    ]}
>
<TabItem value="list_tags">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>Information about the tags.</td>
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
    <td><a href="#list_tags"><CopyableCode code="list_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns the tags assigned to the resource, such as a target recovery point, backup plan, or backup vault. This operation returns results depending on the resource type used in the value for resourceArn. For example, recovery points of Amazon DynamoDB with Advanced Settings have an ARN (Amazon Resource Name) that begins with arn:aws:backup. Recovery points (backups) of DynamoDB without Advanced Settings enabled have an ARN that begins with arn:aws:dynamodb. When this operation is called and when you include values of resourceArn that have an ARN other than arn:aws:backup, it may return one of the exceptions listed below. To prevent this exception, include only values representing resource types that are fully managed by Backup. These have an ARN that begins arn:aws:backup and they are noted in the Feature availability by resource table.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TagKeyList"><code>TagKeyList</code></a></td>
    <td></td>
    <td>Removes a set of key-value pairs from a recovery point, backup plan, or backup vault identified by an Amazon Resource Name (ARN) This API is not supported for recovery points for resource types including Aurora, Amazon DocumentDB. Amazon EBS, Amazon FSx, Neptune, and Amazon RDS.</td>
</tr>
<tr>
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Assigns a set of key-value pairs to a resource.</td>
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
    <td>The ARN that uniquely identifies the resource.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to be returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_tags"
    values={[
        { label: 'list_tags', value: 'list_tags' }
    ]}
>
<TabItem value="list_tags">

Returns the tags assigned to the resource, such as a target recovery point, backup plan, or backup vault. This operation returns results depending on the resource type used in the value for resourceArn. For example, recovery points of Amazon DynamoDB with Advanced Settings have an ARN (Amazon Resource Name) that begins with arn:aws:backup. Recovery points (backups) of DynamoDB without Advanced Settings enabled have an ARN that begins with arn:aws:dynamodb. When this operation is called and when you include values of resourceArn that have an ARN other than arn:aws:backup, it may return one of the exceptions listed below. To prevent this exception, include only values representing resource types that are fully managed by Backup. These have an ARN that begins arn:aws:backup and they are noted in the Feature availability by resource table.

```sql
SELECT
NextToken,
Tags
FROM aws.backup.tags
WHERE resource_arn = '{{ resource_arn }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="untag_resource"
    values={[
        { label: 'untag_resource', value: 'untag_resource' },
        { label: 'tag_resource', value: 'tag_resource' }
    ]}
>
<TabItem value="untag_resource">

Removes a set of key-value pairs from a recovery point, backup plan, or backup vault identified by an Amazon Resource Name (ARN) This API is not supported for recovery points for resource types including Aurora, Amazon DocumentDB. Amazon EBS, Amazon FSx, Neptune, and Amazon RDS.

```sql
UPDATE aws.backup.tags
SET 
TagKeyList = '{{ TagKeyList }}'
WHERE 
resource_arn = '{{ resource_arn }}' --required
AND region = '{{ region }}' --required
AND TagKeyList = '{{ TagKeyList }}' --required;
```
</TabItem>
<TabItem value="tag_resource">

Assigns a set of key-value pairs to a resource.

```sql
UPDATE aws.backup.tags
SET 
Tags = '{{ Tags }}'
WHERE 
resource_arn = '{{ resource_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
