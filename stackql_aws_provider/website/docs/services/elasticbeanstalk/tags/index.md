--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - elasticbeanstalk
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.tags" /></td></tr>
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
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The key of the tag.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value of the tag.</td>
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
    <td><a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs. Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see Tagging Application Resources.</td>
</tr>
<tr>
    <td><a href="#update_tags_for_resource"><CopyableCode code="update_tags_for_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TagsToAdd"><code>TagsToAdd</code></a>, <a href="#parameter-TagsToRemove"><code>TagsToRemove</code></a></td>
    <td>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: TagsToAdd for tags to add or update, and TagsToRemove. Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see Tagging Application Resources. If you create a custom IAM user policy to control permission to this operation, specify one of the following two virtual actions (or both) instead of the API operation name: elasticbeanstalk:AddTags Controls permission to call UpdateTagsForResource and pass a list of tags to add in the TagsToAdd parameter. elasticbeanstalk:RemoveTags Controls permission to call UpdateTagsForResource and pass a list of tag keys to remove in the TagsToRemove parameter. For details about creating a custom user policy, see Creating a Custom User Policy.</td>
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
<tr id="parameter-ResourceArn">
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resouce to be updated. Must be the ARN of an Elastic Beanstalk resource.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-TagsToAdd">
    <td><CopyableCode code="TagsToAdd" /></td>
    <td><code>array</code></td>
    <td>A list of tags to add or update. If a key of an existing tag is added, the tag's value is updated. Specify at least one of these parameters: TagsToAdd, TagsToRemove.</td>
</tr>
<tr id="parameter-TagsToRemove">
    <td><CopyableCode code="TagsToRemove" /></td>
    <td><code>array</code></td>
    <td>A list of tag keys to remove. If a tag key doesn't exist, it is silently ignored. Specify at least one of these parameters: TagsToAdd, TagsToRemove.</td>
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

Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs. Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see Tagging Application Resources.

```sql
SELECT
key,
value
FROM aws.elasticbeanstalk.tags
WHERE ResourceArn = '{{ ResourceArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_tags_for_resource"
    values={[
        { label: 'update_tags_for_resource', value: 'update_tags_for_resource' }
    ]}
>
<TabItem value="update_tags_for_resource">

Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: TagsToAdd for tags to add or update, and TagsToRemove. Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see Tagging Application Resources. If you create a custom IAM user policy to control permission to this operation, specify one of the following two virtual actions (or both) instead of the API operation name: elasticbeanstalk:AddTags Controls permission to call UpdateTagsForResource and pass a list of tags to add in the TagsToAdd parameter. elasticbeanstalk:RemoveTags Controls permission to call UpdateTagsForResource and pass a list of tag keys to remove in the TagsToRemove parameter. For details about creating a custom user policy, see Creating a Custom User Policy.

```sql
UPDATE aws.elasticbeanstalk.tags
SET 
-- No updatable properties
WHERE 
ResourceArn = '{{ ResourceArn }}' --required
AND region = '{{ region }}' --required
AND TagsToAdd = '{{ TagsToAdd}}'
AND TagsToRemove = '{{ TagsToRemove}}';
```
</TabItem>
</Tabs>
