--- 
title: stack_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - stack_policies
  - cloudformation
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

Creates, updates, deletes, gets or lists a <code>stack_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stack_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.stack_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_stack_policy"
    values={[
        { label: 'get_stack_policy', value: 'get_stack_policy' }
    ]}
>
<TabItem value="get_stack_policy">

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
    <td><CopyableCode code="line_items" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#get_stack_policy"><CopyableCode code="get_stack_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null value is returned.</td>
</tr>
<tr>
    <td><a href="#set_stack_policy"><CopyableCode code="set_stack_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-StackPolicyBody"><code>StackPolicyBody</code></a>, <a href="#parameter-StackPolicyURL"><code>StackPolicyURL</code></a></td>
    <td>Sets a stack policy for a specified stack.</td>
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
<tr id="parameter-StackName">
    <td><CopyableCode code="StackName" /></td>
    <td><code>string</code></td>
    <td>The name or unique stack ID that you want to associate a policy with.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-StackPolicyBody">
    <td><CopyableCode code="StackPolicyBody" /></td>
    <td><code>string</code></td>
    <td>Structure that contains the stack policy body. For more information, see Prevent updates to stack resources in the CloudFormation User Guide. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both.</td>
</tr>
<tr id="parameter-StackPolicyURL">
    <td><CopyableCode code="StackPolicyURL" /></td>
    <td><code>string</code></td>
    <td>Location of a file that contains the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an Amazon S3 bucket in the same Amazon Web Services Region as the stack. The location for an Amazon S3 bucket must start with https:​//. URLs from S3 static websites are not supported. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_stack_policy"
    values={[
        { label: 'get_stack_policy', value: 'get_stack_policy' }
    ]}
>
<TabItem value="get_stack_policy">

Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null value is returned.

```sql
SELECT
line_items
FROM aws.cloudformation.stack_policies
WHERE StackName = '{{ StackName }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_stack_policy"
    values={[
        { label: 'set_stack_policy', value: 'set_stack_policy' }
    ]}
>
<TabItem value="set_stack_policy">

Sets a stack policy for a specified stack.

```sql
UPDATE aws.cloudformation.stack_policies
SET 
-- No updatable properties
WHERE 
StackName = '{{ StackName }}' --required
AND region = '{{ region }}' --required
AND StackPolicyBody = '{{ StackPolicyBody}}'
AND StackPolicyURL = '{{ StackPolicyURL}}';
```
</TabItem>
</Tabs>
