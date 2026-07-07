--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - resource_groups
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resource_groups.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tags"
    values={[
        { label: 'get_tags', value: 'get_tags' }
    ]}
>
<TabItem value="get_tags">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>TheAmazon resource name (ARN) of the tagged resource group. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)*:resource-groups:&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)+-\d&#123;1&#125;:&#91;0-9&#93;&#123;12&#125;:group/(&#91;a-zA-Z0-9_\.-&#93;&#123;1,300&#125;|&#91;a-zA-Z0-9_\.-&#93;&#123;1,150&#125;/&#91;a-z0-9&#93;&#123;26&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the specified resource group.</td>
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
    <td><a href="#get_tags"><CopyableCode code="get_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of tags that are associated with a resource group, specified by an Amazon resource name (ARN). Minimum permissions To run this command, you must have the following permissions: resource-groups:GetTags</td>
</tr>
<tr>
    <td><a href="#cancel_tag_sync_task"><CopyableCode code="cancel_tag_sync_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TaskArn"><code>TaskArn</code></a></td>
    <td></td>
    <td>Cancels the specified tag-sync task. Minimum permissions To run this command, you must have the following permissions: resource-groups:CancelTagSyncTask on the application group resource-groups:DeleteGroup</td>
</tr>
<tr>
    <td><a href="#start_tag_sync_task"><CopyableCode code="start_tag_sync_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Group"><code>Group</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates a new tag-sync task to onboard and sync resources tagged with a specific tag key-value pair to an application. To start a tag-sync task, you need a resource tagging role. The resource tagging role grants permissions to tag and untag applications resources and must include a trust policy that allows Resource Groups to assume the role and perform resource tagging tasks on your behalf. For instructions on creating a tag-sync task, see Create a tag-sync using the Resource Groups API in the Amazon Web Services Service Catalog AppRegistry Administrator Guide. Minimum permissions To run this command, you must have the following permissions: resource-groups:StartTagSyncTask on the application group resource-groups:CreateGroup iam:PassRole on the role provided in the request</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) of the resource group whose tags you want to retrieve.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_tags"
    values={[
        { label: 'get_tags', value: 'get_tags' }
    ]}
>
<TabItem value="get_tags">

Returns a list of tags that are associated with a resource group, specified by an Amazon resource name (ARN). Minimum permissions To run this command, you must have the following permissions: resource-groups:GetTags

```sql
SELECT
Arn,
Tags
FROM aws.resource_groups.tags
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_tag_sync_task"
    values={[
        { label: 'cancel_tag_sync_task', value: 'cancel_tag_sync_task' },
        { label: 'start_tag_sync_task', value: 'start_tag_sync_task' }
    ]}
>
<TabItem value="cancel_tag_sync_task">

Cancels the specified tag-sync task. Minimum permissions To run this command, you must have the following permissions: resource-groups:CancelTagSyncTask on the application group resource-groups:DeleteGroup

```sql
EXEC aws.resource_groups.tags.cancel_tag_sync_task 
@region='{{ region }}' --required 
@@json=
'{
"TaskArn": "{{ TaskArn }}"
}'
;
```
</TabItem>
<TabItem value="start_tag_sync_task">

Creates a new tag-sync task to onboard and sync resources tagged with a specific tag key-value pair to an application. To start a tag-sync task, you need a resource tagging role. The resource tagging role grants permissions to tag and untag applications resources and must include a trust policy that allows Resource Groups to assume the role and perform resource tagging tasks on your behalf. For instructions on creating a tag-sync task, see Create a tag-sync using the Resource Groups API in the Amazon Web Services Service Catalog AppRegistry Administrator Guide. Minimum permissions To run this command, you must have the following permissions: resource-groups:StartTagSyncTask on the application group resource-groups:CreateGroup iam:PassRole on the role provided in the request

```sql
EXEC aws.resource_groups.tags.start_tag_sync_task 
@region='{{ region }}' --required 
@@json=
'{
"Group": "{{ Group }}", 
"TagKey": "{{ TagKey }}", 
"TagValue": "{{ TagValue }}", 
"ResourceQuery": "{{ ResourceQuery }}", 
"RoleArn": "{{ RoleArn }}"
}'
;
```
</TabItem>
</Tabs>
