--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - kinesisvideo
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesisvideo.tags" /></td></tr>
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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If you specify this parameter and the result of a ListTagsForResource call is truncated, the response includes a token that you can use in the next request to fetch the next set of tags. (pattern: &lt;code&gt;&#91;a-zA-Z0-9+/=&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of tag keys and values associated with the specified signaling channel.</td>
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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If you specify this parameter and the result of a ListTags call is truncated, the response includes a token that you can use in the next request to fetch the next set of tags. (pattern: &lt;code&gt;&#91;a-zA-Z0-9+/=&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of tag keys and values associated with the specified stream.</td>
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
    <td>Returns a list of tags associated with the specified signaling channel.</td>
</tr>
<tr>
    <td><a href="#list_tags_for_stream"><CopyableCode code="list_tags_for_stream" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of tags associated with the specified stream. In the request, you must specify either the StreamName or the StreamARN.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceARN"><code>ResourceARN</code></a>, <a href="#parameter-TagKeyList"><code>TagKeyList</code></a></td>
    <td></td>
    <td>Removes one or more tags from a signaling channel. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.</td>
</tr>
<tr>
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceARN"><code>ResourceARN</code></a></td>
    <td></td>
    <td>Adds one or more tags to a signaling channel. A tag is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see Using Cost Allocation Tags in the Billing and Cost Management and Cost Management User Guide.</td>
</tr>
<tr>
    <td><a href="#untag_stream"><CopyableCode code="untag_stream" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TagKeyList"><code>TagKeyList</code></a></td>
    <td></td>
    <td>Removes one or more tags from a stream. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored. In the request, you must provide the StreamName or StreamARN.</td>
</tr>
<tr>
    <td><a href="#tag_stream"><CopyableCode code="tag_stream" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds one or more tags to a stream. A tag is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see Using Cost Allocation Tags in the Billing and Cost Management and Cost Management User Guide. You must provide either the StreamName or the StreamARN. This operation requires permission for the KinesisVideo:TagStream action. A Kinesis video stream can support up to 50 tags.</td>
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

Returns a list of tags associated with the specified signaling channel.

```sql
SELECT
next_token,
tags
FROM aws.kinesisvideo.tags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tags_for_stream">

Returns a list of tags associated with the specified stream. In the request, you must specify either the StreamName or the StreamARN.

```sql
SELECT
next_token,
tags
FROM aws.kinesisvideo.tags
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
        { label: 'tag_resource', value: 'tag_resource' },
        { label: 'untag_stream', value: 'untag_stream' },
        { label: 'tag_stream', value: 'tag_stream' }
    ]}
>
<TabItem value="untag_resource">

Removes one or more tags from a signaling channel. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.

```sql
UPDATE aws.kinesisvideo.tags
SET 
ResourceARN = '{{ ResourceARN }}',
TagKeyList = '{{ TagKeyList }}'
WHERE 
region = '{{ region }}' --required
AND ResourceARN = '{{ ResourceARN }}' --required
AND TagKeyList = '{{ TagKeyList }}' --required;
```
</TabItem>
<TabItem value="tag_resource">

Adds one or more tags to a signaling channel. A tag is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see Using Cost Allocation Tags in the Billing and Cost Management and Cost Management User Guide.

```sql
UPDATE aws.kinesisvideo.tags
SET 
ResourceARN = '{{ ResourceARN }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND ResourceARN = '{{ ResourceARN }}' --required;
```
</TabItem>
<TabItem value="untag_stream">

Removes one or more tags from a stream. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored. In the request, you must provide the StreamName or StreamARN.

```sql
UPDATE aws.kinesisvideo.tags
SET 
StreamARN = '{{ StreamARN }}',
StreamName = '{{ StreamName }}',
TagKeyList = '{{ TagKeyList }}'
WHERE 
region = '{{ region }}' --required
AND TagKeyList = '{{ TagKeyList }}' --required;
```
</TabItem>
<TabItem value="tag_stream">

Adds one or more tags to a stream. A tag is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see Using Cost Allocation Tags in the Billing and Cost Management and Cost Management User Guide. You must provide either the StreamName or the StreamARN. This operation requires permission for the KinesisVideo:TagStream action. A Kinesis video stream can support up to 50 tags.

```sql
UPDATE aws.kinesisvideo.tags
SET 
StreamARN = '{{ StreamARN }}',
StreamName = '{{ StreamName }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
