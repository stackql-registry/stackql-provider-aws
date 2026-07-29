--- 
title: group_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - group_resources
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

Creates, updates, deletes, gets or lists a <code>group_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="group_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resource_groups.group_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_group_resources"
    values={[
        { label: 'list_group_resources', value: 'list_group_resources' }
    ]}
>
<TabItem value="list_group_resources">

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
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) of a resource. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)*:&#91;a-z0-9\-&#93;*:(&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)+-\d&#123;1&#125;)?:(&#91;0-9&#93;&#123;12&#125;)?:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
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
    <td><a href="#list_group_resources"><CopyableCode code="list_group_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of Amazon resource names (ARNs) of the resources that are members of a specified resource group. Minimum permissions To run this command, you must have the following permissions: resource-groups:ListGroupResources cloudformation:DescribeStacks cloudformation:ListStackResources tag:GetResources</td>
</tr>
<tr>
    <td><a href="#group_resources"><CopyableCode code="group_resources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Group"><code>Group</code></a>, <a href="#parameter-ResourceArns"><code>ResourceArns</code></a></td>
    <td></td>
    <td>Adds the specified resources to the specified group. You can only use this operation with the following groups: AWS::EC2::HostManagement AWS::EC2::CapacityReservationPool AWS::ResourceGroups::ApplicationGroup Other resource group types and resource types are not currently supported by this operation. Minimum permissions To run this command, you must have the following permissions: resource-groups:GroupResources</td>
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
    defaultValue="list_group_resources"
    values={[
        { label: 'list_group_resources', value: 'list_group_resources' }
    ]}
>
<TabItem value="list_group_resources">

Returns a list of Amazon resource names (ARNs) of the resources that are members of a specified resource group. Minimum permissions To run this command, you must have the following permissions: resource-groups:ListGroupResources cloudformation:DescribeStacks cloudformation:ListStackResources tag:GetResources

```sql
SELECT
resource_arn,
resource_type
FROM aws.resource_groups.group_resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="group_resources"
    values={[
        { label: 'group_resources', value: 'group_resources' }
    ]}
>
<TabItem value="group_resources">

Adds the specified resources to the specified group. You can only use this operation with the following groups: AWS::EC2::HostManagement AWS::EC2::CapacityReservationPool AWS::ResourceGroups::ApplicationGroup Other resource group types and resource types are not currently supported by this operation. Minimum permissions To run this command, you must have the following permissions: resource-groups:GroupResources

```sql
EXEC aws.resource_groups.group_resources.group_resources 
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
