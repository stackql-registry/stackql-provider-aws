--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - sqs
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sqs.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#tag_queue"><CopyableCode code="tag_queue" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QueueUrl"><code>QueueUrl</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td></td>
    <td>Add cost allocation tags to the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS Queues in the Amazon SQS Developer Guide. When you use queue tags, keep the following guidelines in mind: Adding more than 50 tags to a queue isn't recommended. Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings. Tags are case-sensitive. A new tag with a key identical to that of an existing tag overwrites the existing tag. For a full list of tag restrictions, see Quotas related to queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.</td>
</tr>
<tr>
    <td><a href="#untag_queue"><CopyableCode code="untag_queue" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QueueUrl"><code>QueueUrl</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a></td>
    <td></td>
    <td>Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="tag_queue"
    values={[
        { label: 'tag_queue', value: 'tag_queue' },
        { label: 'untag_queue', value: 'untag_queue' }
    ]}
>
<TabItem value="tag_queue">

Add cost allocation tags to the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS Queues in the Amazon SQS Developer Guide. When you use queue tags, keep the following guidelines in mind: Adding more than 50 tags to a queue isn't recommended. Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings. Tags are case-sensitive. A new tag with a key identical to that of an existing tag overwrites the existing tag. For a full list of tag restrictions, see Quotas related to queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

```sql
UPDATE aws.sqs.tags
SET 
QueueUrl = '{{ QueueUrl }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND QueueUrl = '{{ QueueUrl }}' --required
AND Tags = '{{ Tags }}' --required;
```
</TabItem>
<TabItem value="untag_queue">

Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS Queues in the Amazon SQS Developer Guide. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

```sql
UPDATE aws.sqs.tags
SET 
QueueUrl = '{{ QueueUrl }}',
TagKeys = '{{ TagKeys }}'
WHERE 
region = '{{ region }}' --required
AND QueueUrl = '{{ QueueUrl }}' --required
AND TagKeys = '{{ TagKeys }}' --required;
```
</TabItem>
</Tabs>
