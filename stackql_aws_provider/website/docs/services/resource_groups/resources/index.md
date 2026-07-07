--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resource_groups.resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_resources"
    values={[
        { label: 'search_resources', value: 'search_resources' }
    ]}
>
<TabItem value="search_resources">

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
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) of a resource. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)*:&#91;a-z0-9\-&#93;*:(&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)+-\d&#123;1&#125;)?:(&#91;0-9&#93;&#123;12&#125;)?:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type of a resource, such as AWS::EC2::Instance. (pattern: &lt;code&gt;AWS::&#91;a-zA-Z0-9&#93;+::\w+&lt;/code&gt;)</td>
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
    <td><a href="#search_resources"><CopyableCode code="search_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of Amazon Web Services resource identifiers that matches the specified query. The query uses the same format as a resource query in a CreateGroup or UpdateGroupQuery operation. Minimum permissions To run this command, you must have the following permissions: resource-groups:SearchResources cloudformation:DescribeStacks cloudformation:ListStackResources tag:GetResources</td>
</tr>
<tr>
    <td><a href="#ungroup_resources"><CopyableCode code="ungroup_resources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Group"><code>Group</code></a>, <a href="#parameter-ResourceArns"><code>ResourceArns</code></a></td>
    <td></td>
    <td>Removes the specified resources from the specified group. This operation works only with static groups that you populated using the GroupResources operation. It doesn't work with any resource groups that are automatically populated by tag-based or CloudFormation stack-based queries. Minimum permissions To run this command, you must have the following permissions: resource-groups:UngroupResources</td>
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
    defaultValue="search_resources"
    values={[
        { label: 'search_resources', value: 'search_resources' }
    ]}
>
<TabItem value="search_resources">

Returns a list of Amazon Web Services resource identifiers that matches the specified query. The query uses the same format as a resource query in a CreateGroup or UpdateGroupQuery operation. Minimum permissions To run this command, you must have the following permissions: resource-groups:SearchResources cloudformation:DescribeStacks cloudformation:ListStackResources tag:GetResources

```sql
SELECT
ResourceArn,
ResourceType
FROM aws.resource_groups.resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="ungroup_resources"
    values={[
        { label: 'ungroup_resources', value: 'ungroup_resources' }
    ]}
>
<TabItem value="ungroup_resources">

Removes the specified resources from the specified group. This operation works only with static groups that you populated using the GroupResources operation. It doesn't work with any resource groups that are automatically populated by tag-based or CloudFormation stack-based queries. Minimum permissions To run this command, you must have the following permissions: resource-groups:UngroupResources

```sql
EXEC aws.resource_groups.resources.ungroup_resources 
@region='{{ region }}' --required 
@@json=
'{
"Group": "{{ Group }}", 
"ResourceArns": "{{ ResourceArns }}"
}'
;
```
</TabItem>
</Tabs>
