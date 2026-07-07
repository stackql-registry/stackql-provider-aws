--- 
title: component_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - component_policies
  - imagebuilder
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

Creates, updates, deletes, gets or lists a <code>component_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="component_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.component_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_component_policy"
    values={[
        { label: 'get_component_policy', value: 'get_component_policy' }
    ]}
>
<TabItem value="get_component_policy">

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
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>The component policy.</td>
</tr>
<tr>
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td>The request ID that uniquely identifies this request.</td>
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
    <td><a href="#get_component_policy"><CopyableCode code="get_component_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-componentArn"><code>componentArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a component policy.</td>
</tr>
<tr>
    <td><a href="#put_component_policy"><CopyableCode code="put_component_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-componentArn"><code>componentArn</code></a>, <a href="#parameter-policy"><code>policy</code></a></td>
    <td></td>
    <td>Applies a policy to a component. We recommend that you call the RAM API CreateResourceShare to share resources. If you call the Image Builder API PutComponentPolicy, you must also call the RAM API PromoteResourceShareCreatedFromPolicy in order for the resource to be visible to all principals with whom the resource is shared.</td>
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
<tr id="parameter-componentArn">
    <td><CopyableCode code="componentArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the component whose policy you want to retrieve.</td>
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
    defaultValue="get_component_policy"
    values={[
        { label: 'get_component_policy', value: 'get_component_policy' }
    ]}
>
<TabItem value="get_component_policy">

Gets a component policy.

```sql
SELECT
policy,
requestId
FROM aws.imagebuilder.component_policies
WHERE componentArn = '{{ componentArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_component_policy"
    values={[
        { label: 'put_component_policy', value: 'put_component_policy' }
    ]}
>
<TabItem value="put_component_policy">

Applies a policy to a component. We recommend that you call the RAM API CreateResourceShare to share resources. If you call the Image Builder API PutComponentPolicy, you must also call the RAM API PromoteResourceShareCreatedFromPolicy in order for the resource to be visible to all principals with whom the resource is shared.

```sql
REPLACE aws.imagebuilder.component_policies
SET 
componentArn = '{{ componentArn }}',
policy = '{{ policy }}'
WHERE 
region = '{{ region }}' --required
AND componentArn = '{{ componentArn }}' --required
AND policy = '{{ policy }}' --required
RETURNING
componentArn,
requestId;
```
</TabItem>
</Tabs>
