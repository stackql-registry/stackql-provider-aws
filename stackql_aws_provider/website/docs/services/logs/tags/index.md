--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - logs
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tags_for_resource"
    values={[
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' },
        { label: 'list_tags_log_group', value: 'list_tags_log_group' }
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
    <td>The list of tags associated with the requested resource.&gt;</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tags_log_group">

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
    <td>The tags for the log group.</td>
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
    <td>Displays the tags associated with a CloudWatch Logs resource. Currently, log groups and destinations support tagging.</td>
</tr>
<tr>
    <td><a href="#list_tags_log_group"><CopyableCode code="list_tags_log_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The ListTagsLogGroup operation is on the path to deprecation. We recommend that you use ListTagsForResource instead. Lists the tags for the specified log group.</td>
</tr>
<tr>
    <td><a href="#tag_log_group"><CopyableCode code="tag_log_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logGroupName"><code>logGroupName</code></a>, <a href="#parameter-tags"><code>tags</code></a></td>
    <td></td>
    <td>The TagLogGroup operation is on the path to deprecation. We recommend that you use TagResource instead. Adds or updates the specified tags for the specified log group. To list the tags for a log group, use ListTagsForResource. To remove tags, use UntagResource. For more information about tags, see Tag Log Groups in Amazon CloudWatch Logs in the Amazon CloudWatch Logs User Guide. CloudWatch Logs doesn't support IAM policies that prevent users from assigning specified tags to log groups using the aws:Resource/key-name or aws:TagKeys condition keys. For more information about using tags to control access, see Controlling access to Amazon Web Services resources using tags.</td>
</tr>
<tr>
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-tags"><code>tags</code></a></td>
    <td></td>
    <td>Assigns one or more tags (key-value pairs) to the specified CloudWatch Logs resource. Currently, the only CloudWatch Logs resources that can be tagged are log groups and destinations. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can use the TagResource action with a resource that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a CloudWatch Logs resource.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-tagKeys"><code>tagKeys</code></a></td>
    <td></td>
    <td>Removes one or more tags from the specified resource.</td>
</tr>
<tr>
    <td><a href="#untag_log_group"><CopyableCode code="untag_log_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logGroupName"><code>logGroupName</code></a>, <a href="#parameter-tags"><code>tags</code></a></td>
    <td></td>
    <td>The UntagLogGroup operation is on the path to deprecation. We recommend that you use UntagResource instead. Removes the specified tags from the specified log group. To list the tags for a log group, use ListTagsForResource. To add tags, use TagResource. When using IAM policies to control tag management for CloudWatch Logs log groups, the condition keys aws:Resource/key-name and aws:TagKeys cannot be used to restrict which tags users can assign.</td>
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
        { label: 'list_tags_log_group', value: 'list_tags_log_group' }
    ]}
>
<TabItem value="list_tags_for_resource">

Displays the tags associated with a CloudWatch Logs resource. Currently, log groups and destinations support tagging.

```sql
SELECT
tags
FROM aws.logs.tags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tags_log_group">

The ListTagsLogGroup operation is on the path to deprecation. We recommend that you use ListTagsForResource instead. Lists the tags for the specified log group.

```sql
SELECT
tags
FROM aws.logs.tags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="tag_log_group"
    values={[
        { label: 'tag_log_group', value: 'tag_log_group' },
        { label: 'tag_resource', value: 'tag_resource' },
        { label: 'untag_resource', value: 'untag_resource' }
    ]}
>
<TabItem value="tag_log_group">

The TagLogGroup operation is on the path to deprecation. We recommend that you use TagResource instead. Adds or updates the specified tags for the specified log group. To list the tags for a log group, use ListTagsForResource. To remove tags, use UntagResource. For more information about tags, see Tag Log Groups in Amazon CloudWatch Logs in the Amazon CloudWatch Logs User Guide. CloudWatch Logs doesn't support IAM policies that prevent users from assigning specified tags to log groups using the aws:Resource/key-name or aws:TagKeys condition keys. For more information about using tags to control access, see Controlling access to Amazon Web Services resources using tags.

```sql
UPDATE aws.logs.tags
SET 
logGroupName = '{{ logGroupName }}',
tags = '{{ tags }}'
WHERE 
region = '{{ region }}' --required
AND logGroupName = '{{ logGroupName }}' --required
AND tags = '{{ tags }}' --required;
```
</TabItem>
<TabItem value="tag_resource">

Assigns one or more tags (key-value pairs) to the specified CloudWatch Logs resource. Currently, the only CloudWatch Logs resources that can be tagged are log groups and destinations. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can use the TagResource action with a resource that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a CloudWatch Logs resource.

```sql
UPDATE aws.logs.tags
SET 
resourceArn = '{{ resourceArn }}',
tags = '{{ tags }}'
WHERE 
region = '{{ region }}' --required
AND resourceArn = '{{ resourceArn }}' --required
AND tags = '{{ tags }}' --required;
```
</TabItem>
<TabItem value="untag_resource">

Removes one or more tags from the specified resource.

```sql
UPDATE aws.logs.tags
SET 
resourceArn = '{{ resourceArn }}',
tagKeys = '{{ tagKeys }}'
WHERE 
region = '{{ region }}' --required
AND resourceArn = '{{ resourceArn }}' --required
AND tagKeys = '{{ tagKeys }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="untag_log_group"
    values={[
        { label: 'untag_log_group', value: 'untag_log_group' }
    ]}
>
<TabItem value="untag_log_group">

The UntagLogGroup operation is on the path to deprecation. We recommend that you use UntagResource instead. Removes the specified tags from the specified log group. To list the tags for a log group, use ListTagsForResource. To add tags, use TagResource. When using IAM policies to control tag management for CloudWatch Logs log groups, the condition keys aws:Resource/key-name and aws:TagKeys cannot be used to restrict which tags users can assign.

```sql
EXEC aws.logs.tags.untag_log_group 
@region='{{ region }}' --required 
@@json=
'{
"logGroupName": "{{ logGroupName }}", 
"tags": "{{ tags }}"
}'
;
```
</TabItem>
</Tabs>
