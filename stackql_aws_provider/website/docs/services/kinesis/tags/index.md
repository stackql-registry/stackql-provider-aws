--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - kinesis
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesis.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tags_for_resource"
    values={[
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' },
        { label: 'list_tags_for_stream', value: 'list_tags_for_stream' }
    ]}
>
<TabItem value="list_tags_for_resource">

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
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>An array of tags associated with the specified Kinesis resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tags_for_stream">

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
    <td><CopyableCode code="HasMoreTags" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, more tags are available. To request additional tags, set ExclusiveStartTagKey to the key of the last tag returned.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags associated with StreamName, starting with the first tag after ExclusiveStartTagKey and up to the specified Limit.</td>
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
    <td><a href="#list_tags_for_resource"><CopyableCode code="list_tags_for_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all tags added to the specified Kinesis resource. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources. For more information about tagging Kinesis resources, see Tag your Amazon Kinesis Data Streams resources.</td>
</tr>
<tr>
    <td><a href="#list_tags_for_stream"><CopyableCode code="list_tags_for_stream" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the tags for the specified Kinesis data stream. This operation has a limit of five transactions per second per account. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-ResourceARN"><code>ResourceARN</code></a></td>
    <td></td>
    <td>Removes tags from the specified Kinesis resource. Removed tags are deleted and can't be recovered after this operation completes successfully.</td>
</tr>
<tr>
    <td><a href="#remove_tags_from_stream"><CopyableCode code="remove_tags_from_stream" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a></td>
    <td></td>
    <td>Removes tags from the specified Kinesis data stream. Removed tags are deleted and cannot be recovered after this operation successfully completes. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. If you specify a tag that does not exist, it is ignored. RemoveTagsFromStream has a limit of five transactions per second per account.</td>
</tr>
<tr>
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceARN"><code>ResourceARN</code></a></td>
    <td></td>
    <td>Adds or updates tags for the specified Kinesis resource. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources. You can assign up to 50 tags to a Kinesis resource.</td>
</tr>
<tr>
    <td><a href="#add_tags_to_stream"><CopyableCode code="add_tags_to_stream" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds or updates tags for the specified Kinesis data stream. You can assign up to 50 tags to a data stream. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. If tags have already been assigned to the stream, AddTagsToStream overwrites any existing tags that correspond to the specified tag keys. AddTagsToStream has a limit of five transactions per second per account.</td>
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
    defaultValue="list_tags_for_resource"
    values={[
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' },
        { label: 'list_tags_for_stream', value: 'list_tags_for_stream' }
    ]}
>
<TabItem value="list_tags_for_resource">

List all tags added to the specified Kinesis resource. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources. For more information about tagging Kinesis resources, see Tag your Amazon Kinesis Data Streams resources.

```sql
SELECT
Tags
FROM aws.kinesis.tags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tags_for_stream">

Lists the tags for the specified Kinesis data stream. This operation has a limit of five transactions per second per account. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API.

```sql
SELECT
HasMoreTags,
Tags
FROM aws.kinesis.tags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="untag_resource"
    values={[
        { label: 'untag_resource', value: 'untag_resource' },
        { label: 'remove_tags_from_stream', value: 'remove_tags_from_stream' },
        { label: 'tag_resource', value: 'tag_resource' },
        { label: 'add_tags_to_stream', value: 'add_tags_to_stream' }
    ]}
>
<TabItem value="untag_resource">

Removes tags from the specified Kinesis resource. Removed tags are deleted and can't be recovered after this operation completes successfully.

```sql
UPDATE aws.kinesis.tags
SET 
TagKeys = '{{ TagKeys }}',
ResourceARN = '{{ ResourceARN }}',
StreamId = '{{ StreamId }}'
WHERE 
region = '{{ region }}' --required
AND TagKeys = '{{ TagKeys }}' --required
AND ResourceARN = '{{ ResourceARN }}' --required;
```
</TabItem>
<TabItem value="remove_tags_from_stream">

Removes tags from the specified Kinesis data stream. Removed tags are deleted and cannot be recovered after this operation successfully completes. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. If you specify a tag that does not exist, it is ignored. RemoveTagsFromStream has a limit of five transactions per second per account.

```sql
UPDATE aws.kinesis.tags
SET 
StreamName = '{{ StreamName }}',
TagKeys = '{{ TagKeys }}',
StreamARN = '{{ StreamARN }}',
StreamId = '{{ StreamId }}'
WHERE 
region = '{{ region }}' --required
AND TagKeys = '{{ TagKeys }}' --required;
```
</TabItem>
<TabItem value="tag_resource">

Adds or updates tags for the specified Kinesis resource. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources. You can assign up to 50 tags to a Kinesis resource.

```sql
UPDATE aws.kinesis.tags
SET 
Tags = '{{ Tags }}',
ResourceARN = '{{ ResourceARN }}',
StreamId = '{{ StreamId }}'
WHERE 
region = '{{ region }}' --required
AND ResourceARN = '{{ ResourceARN }}' --required;
```
</TabItem>
<TabItem value="add_tags_to_stream">

Adds or updates tags for the specified Kinesis data stream. You can assign up to 50 tags to a data stream. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API. If tags have already been assigned to the stream, AddTagsToStream overwrites any existing tags that correspond to the specified tag keys. AddTagsToStream has a limit of five transactions per second per account.

```sql
UPDATE aws.kinesis.tags
SET 
StreamName = '{{ StreamName }}',
Tags = '{{ Tags }}',
StreamARN = '{{ StreamARN }}',
StreamId = '{{ StreamId }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
