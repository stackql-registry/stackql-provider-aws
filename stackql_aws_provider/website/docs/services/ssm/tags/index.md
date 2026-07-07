--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - ssm
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.tags" /></td></tr>
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
    <td><CopyableCode code="TagList" /></td>
    <td><code>array</code></td>
    <td>A list of tags.</td>
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
    <td>Returns a list of the tags assigned to the specified resource. For information about the ID format for each supported resource type, see AddTagsToResource.</td>
</tr>
<tr>
    <td><a href="#add_tags_to_resource"><CopyableCode code="add_tags_to_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td></td>
    <td>Adds or overwrites one or more tags for the specified resource. Tags are metadata that you can assign to your automations, documents, managed nodes, maintenance windows, Parameter Store parameters, and patch baselines. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. For example, you could define a set of tags for your account's managed nodes that helps you track each node's owner and stack level. For example: Key=Owner,Value=DbAdmin Key=Owner,Value=SysAdmin Key=Owner,Value=Dev Key=Stack,Value=Production Key=Stack,Value=Pre-Production Key=Stack,Value=Test Most resources can have a maximum of 50 tags. Automations can have a maximum of 5 tags. We recommend that you devise a set of tag keys that meets your needs for each resource type. Using a consistent set of tag keys makes it easier for you to manage your resources. You can search and filter the resources based on the tags you add. Tags don't have any semantic meaning to and are interpreted strictly as a string of characters. For more information about using tags with Amazon Elastic Compute Cloud (Amazon EC2) instances, see Tag your Amazon EC2 resources in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#remove_tags_from_resource"><CopyableCode code="remove_tags_from_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a></td>
    <td></td>
    <td>Removes tag keys from the specified resource.</td>
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
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' }
    ]}
>
<TabItem value="list_tags_for_resource">

Returns a list of the tags assigned to the specified resource. For information about the ID format for each supported resource type, see AddTagsToResource.

```sql
SELECT
TagList
FROM aws.ssm.tags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_tags_to_resource"
    values={[
        { label: 'add_tags_to_resource', value: 'add_tags_to_resource' },
        { label: 'remove_tags_from_resource', value: 'remove_tags_from_resource' }
    ]}
>
<TabItem value="add_tags_to_resource">

Adds or overwrites one or more tags for the specified resource. Tags are metadata that you can assign to your automations, documents, managed nodes, maintenance windows, Parameter Store parameters, and patch baselines. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. For example, you could define a set of tags for your account's managed nodes that helps you track each node's owner and stack level. For example: Key=Owner,Value=DbAdmin Key=Owner,Value=SysAdmin Key=Owner,Value=Dev Key=Stack,Value=Production Key=Stack,Value=Pre-Production Key=Stack,Value=Test Most resources can have a maximum of 50 tags. Automations can have a maximum of 5 tags. We recommend that you devise a set of tag keys that meets your needs for each resource type. Using a consistent set of tag keys makes it easier for you to manage your resources. You can search and filter the resources based on the tags you add. Tags don't have any semantic meaning to and are interpreted strictly as a string of characters. For more information about using tags with Amazon Elastic Compute Cloud (Amazon EC2) instances, see Tag your Amazon EC2 resources in the Amazon EC2 User Guide.

```sql
UPDATE aws.ssm.tags
SET 
ResourceType = '{{ ResourceType }}',
ResourceId = '{{ ResourceId }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND ResourceType = '{{ ResourceType }}' --required
AND ResourceId = '{{ ResourceId }}' --required
AND Tags = '{{ Tags }}' --required;
```
</TabItem>
<TabItem value="remove_tags_from_resource">

Removes tag keys from the specified resource.

```sql
UPDATE aws.ssm.tags
SET 
ResourceType = '{{ ResourceType }}',
ResourceId = '{{ ResourceId }}',
TagKeys = '{{ TagKeys }}'
WHERE 
region = '{{ region }}' --required
AND ResourceType = '{{ ResourceType }}' --required
AND ResourceId = '{{ ResourceId }}' --required
AND TagKeys = '{{ TagKeys }}' --required;
```
</TabItem>
</Tabs>
