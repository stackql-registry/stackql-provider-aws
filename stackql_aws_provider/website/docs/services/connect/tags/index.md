--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - connect
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tags_for_resource"
    values={[
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' }
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
    <td><CopyableCode code="tags" /></td>
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
    <td><a href="#list_tags_for_resource"><CopyableCode code="list_tags_for_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the tags for the specified resource. For sample policies that use tags, see Amazon Connect Identity-Based Policy Examples in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#untag_contact"><CopyableCode code="untag_contact" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-contact_id"><code>contact_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified tags from the contact resource. For more information about this API is used, see Set up granular billing for a detailed view of your Amazon Connect usage.</td>
</tr>
<tr>
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-tags"><code>tags</code></a></td>
    <td></td>
    <td>Adds the specified tags to the specified resource. Some of the supported resource types are agents, routing profiles, queues, quick connects, flows, agent statuses, hours of operation, phone numbers, security profiles, and task templates. For a complete list, see Tagging resources in Amazon Connect. For sample policies that use tags, see Amazon Connect Identity-Based Policy Examples in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#tag_contact"><CopyableCode code="tag_contact" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContactId"><code>ContactId</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a></td>
    <td></td>
    <td>Adds the specified tags to the contact resource. For more information about this API is used, see Set up granular billing for a detailed view of your Amazon Connect usage.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-tagKeys"><code>tagKeys</code></a></td>
    <td>Removes the specified tags from the specified resource.</td>
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
<tr id="parameter-TagKeys">
    <td><CopyableCode code="TagKeys" /></td>
    <td><code>array</code></td>
    <td>A list of tag keys. Existing tags on the contact whose keys are members of this list will be removed.</td>
</tr>
<tr id="parameter-contact_id">
    <td><CopyableCode code="contact_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the contact in this instance of Amazon Connect.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-resource_arn">
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource.</td>
</tr>
<tr id="parameter-tagKeys">
    <td><CopyableCode code="tagKeys" /></td>
    <td><code>array</code></td>
    <td>The tag keys.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_tags_for_resource"
    values={[
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' }
    ]}
>
<TabItem value="list_tags_for_resource">

Lists the tags for the specified resource. For sample policies that use tags, see Amazon Connect Identity-Based Policy Examples in the Amazon Connect Administrator Guide.

```sql
SELECT
tags
FROM aws.connect.tags
WHERE resource_arn = '{{ resource_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="untag_contact"
    values={[
        { label: 'untag_contact', value: 'untag_contact' },
        { label: 'tag_resource', value: 'tag_resource' },
        { label: 'tag_contact', value: 'tag_contact' },
        { label: 'untag_resource', value: 'untag_resource' }
    ]}
>
<TabItem value="untag_contact">

Removes the specified tags from the contact resource. For more information about this API is used, see Set up granular billing for a detailed view of your Amazon Connect usage.

```sql
UPDATE aws.connect.tags
SET 
-- No updatable properties
WHERE 
contact_id = '{{ contact_id }}' --required
AND instance_id = '{{ instance_id }}' --required
AND TagKeys = '{{ TagKeys }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="tag_resource">

Adds the specified tags to the specified resource. Some of the supported resource types are agents, routing profiles, queues, quick connects, flows, agent statuses, hours of operation, phone numbers, security profiles, and task templates. For a complete list, see Tagging resources in Amazon Connect. For sample policies that use tags, see Amazon Connect Identity-Based Policy Examples in the Amazon Connect Administrator Guide.

```sql
UPDATE aws.connect.tags
SET 
tags = '{{ tags }}'
WHERE 
resource_arn = '{{ resource_arn }}' --required
AND region = '{{ region }}' --required
AND tags = '{{ tags }}' --required;
```
</TabItem>
<TabItem value="tag_contact">

Adds the specified tags to the contact resource. For more information about this API is used, see Set up granular billing for a detailed view of your Amazon Connect usage.

```sql
UPDATE aws.connect.tags
SET 
ContactId = '{{ ContactId }}',
InstanceId = '{{ InstanceId }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND ContactId = '{{ ContactId }}' --required
AND InstanceId = '{{ InstanceId }}' --required;
```
</TabItem>
<TabItem value="untag_resource">

Removes the specified tags from the specified resource.

```sql
UPDATE aws.connect.tags
SET 
-- No updatable properties
WHERE 
resource_arn = '{{ resource_arn }}' --required
AND region = '{{ region }}' --required
AND tagKeys = '{{ tagKeys}}';
```
</TabItem>
</Tabs>
