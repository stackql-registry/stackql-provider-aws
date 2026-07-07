--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
  - clouddirectory
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

Creates, updates, deletes, gets or lists a <code>policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.clouddirectory.policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="lookup_policy"
    values={[
        { label: 'lookup_policy', value: 'lookup_policy' }
    ]}
>
<TabItem value="lookup_policy">

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
    <td><CopyableCode code="Path" /></td>
    <td><code>string</code></td>
    <td>The path that is referenced from the root.</td>
</tr>
<tr>
    <td><CopyableCode code="Policies" /></td>
    <td><code>array</code></td>
    <td>List of policy objects.</td>
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
    <td><a href="#lookup_policy"><CopyableCode code="lookup_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all policies from the root of the Directory to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the ObjectIdentifier for such objects. If policies are present, it returns ObjectIdentifier, policyId, and policyType. Paths that don't lead to the root from the target object are ignored. For more information, see Policies.</td>
</tr>
<tr>
    <td><a href="#attach_policy"><CopyableCode code="attach_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PolicyReference"><code>PolicyReference</code></a>, <a href="#parameter-ObjectReference"><code>ObjectReference</code></a></td>
    <td></td>
    <td>Attaches a policy object to a regular object. An object can have a limited number of attached policies.</td>
</tr>
<tr>
    <td><a href="#detach_policy"><CopyableCode code="detach_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PolicyReference"><code>PolicyReference</code></a>, <a href="#parameter-ObjectReference"><code>ObjectReference</code></a></td>
    <td></td>
    <td>Detaches a policy from an object.</td>
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
<tr id="parameter-x-amz-data-partition">
    <td><CopyableCode code="x-amz-data-partition" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is associated with the Directory where both objects reside. For more information, see arns.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="lookup_policy"
    values={[
        { label: 'lookup_policy', value: 'lookup_policy' }
    ]}
>
<TabItem value="lookup_policy">

Lists all policies from the root of the Directory to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the ObjectIdentifier for such objects. If policies are present, it returns ObjectIdentifier, policyId, and policyType. Paths that don't lead to the root from the target object are ignored. For more information, see Policies.

```sql
SELECT
Path,
Policies
FROM aws.clouddirectory.policies
WHERE `x-amz-data-partition` = '{{ x-amz-data-partition }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_policy"
    values={[
        { label: 'attach_policy', value: 'attach_policy' }
    ]}
>
<TabItem value="attach_policy">

Attaches a policy object to a regular object. An object can have a limited number of attached policies.

```sql
UPDATE aws.clouddirectory.policies
SET 
PolicyReference = '{{ PolicyReference }}',
ObjectReference = '{{ ObjectReference }}'
WHERE 
`x-amz-data-partition` = '{{ x-amz-data-partition }}' --required
AND region = '{{ region }}' --required
AND PolicyReference = '{{ PolicyReference }}' --required
AND ObjectReference = '{{ ObjectReference }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="detach_policy"
    values={[
        { label: 'detach_policy', value: 'detach_policy' }
    ]}
>
<TabItem value="detach_policy">

Detaches a policy from an object.

```sql
EXEC aws.clouddirectory.policies.detach_policy 
@x-amz-data-partition='{{ x-amz-data-partition }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"PolicyReference": "{{ PolicyReference }}", 
"ObjectReference": "{{ ObjectReference }}"
}'
;
```
</TabItem>
</Tabs>
