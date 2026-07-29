--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - firehose
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.firehose.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tags_for_delivery_stream"
    values={[
        { label: 'list_tags_for_delivery_stream', value: 'list_tags_for_delivery_stream' }
    ]}
>
<TabItem value="list_tags_for_delivery_stream">

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
    <td><CopyableCode code="has_more_tags" /></td>
    <td><code>boolean</code></td>
    <td>If this is true in the response, more tags are available. To list the remaining tags, set ExclusiveStartTagKey to the key of the last tag returned and call ListTagsForDeliveryStream again.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags associated with DeliveryStreamName, starting with the first tag after ExclusiveStartTagKey and up to the specified Limit.</td>
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
    <td><a href="#list_tags_for_delivery_stream"><CopyableCode code="list_tags_for_delivery_stream" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the tags for the specified Firehose stream. This operation has a limit of five transactions per second per account.</td>
</tr>
<tr>
    <td><a href="#untag_delivery_stream"><CopyableCode code="untag_delivery_stream" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeliveryStreamName"><code>DeliveryStreamName</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a></td>
    <td></td>
    <td>Removes tags from the specified Firehose stream. Removed tags are deleted, and you can't recover them after this operation successfully completes. If you specify a tag that doesn't exist, the operation ignores it. This operation has a limit of five transactions per second per account.</td>
</tr>
<tr>
    <td><a href="#tag_delivery_stream"><CopyableCode code="tag_delivery_stream" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeliveryStreamName"><code>DeliveryStreamName</code></a></td>
    <td></td>
    <td>Adds or updates tags for the specified Firehose stream. A tag is a key-value pair that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the Firehose stream. For more information about tags, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide. Each Firehose stream can have up to 50 tags. This operation has a limit of five transactions per second per account.</td>
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
    defaultValue="list_tags_for_delivery_stream"
    values={[
        { label: 'list_tags_for_delivery_stream', value: 'list_tags_for_delivery_stream' }
    ]}
>
<TabItem value="list_tags_for_delivery_stream">

Lists the tags for the specified Firehose stream. This operation has a limit of five transactions per second per account.

```sql
SELECT
has_more_tags,
tags
FROM aws.firehose.tags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="untag_delivery_stream"
    values={[
        { label: 'untag_delivery_stream', value: 'untag_delivery_stream' },
        { label: 'tag_delivery_stream', value: 'tag_delivery_stream' }
    ]}
>
<TabItem value="untag_delivery_stream">

Removes tags from the specified Firehose stream. Removed tags are deleted, and you can't recover them after this operation successfully completes. If you specify a tag that doesn't exist, the operation ignores it. This operation has a limit of five transactions per second per account.

```sql
UPDATE aws.firehose.tags
SET 
DeliveryStreamName = '{{ DeliveryStreamName }}',
TagKeys = '{{ TagKeys }}'
WHERE 
region = '{{ region }}' --required
AND DeliveryStreamName = '{{ DeliveryStreamName }}' --required
AND TagKeys = '{{ TagKeys }}' --required;
```
</TabItem>
<TabItem value="tag_delivery_stream">

Adds or updates tags for the specified Firehose stream. A tag is a key-value pair that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the Firehose stream. For more information about tags, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide. Each Firehose stream can have up to 50 tags. This operation has a limit of five transactions per second per account.

```sql
UPDATE aws.firehose.tags
SET 
DeliveryStreamName = '{{ DeliveryStreamName }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND DeliveryStreamName = '{{ DeliveryStreamName }}' --required;
```
</TabItem>
</Tabs>
