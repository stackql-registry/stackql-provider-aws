--- 
title: resource_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_policies
  - comprehend
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

Creates, updates, deletes, gets or lists a <code>resource_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.comprehend.resource_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_resource_policy"
    values={[
        { label: 'describe_resource_policy', value: 'describe_resource_policy' }
    ]}
>
<TabItem value="describe_resource_policy">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the policy was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyRevisionId" /></td>
    <td><code>string</code></td>
    <td>The revision ID of the policy. Each time you modify a policy, Amazon Comprehend assigns a new revision ID, and it deletes the prior version of the policy. (pattern: &lt;code&gt;&#91;0-9A-Fa-f&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourcePolicy" /></td>
    <td><code>string</code></td>
    <td>The JSON body of the resource-based policy. (pattern: &lt;code&gt;&#91;\u0009\u000A\u000D\u0020-\u00FF&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_resource_policy"><CopyableCode code="describe_resource_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of the policy.</td>
</tr>
<tr>
    <td><a href="#put_resource_policy"><CopyableCode code="put_resource_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-ResourcePolicy"><code>ResourcePolicy</code></a></td>
    <td></td>
    <td>Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their account.</td>
</tr>
<tr>
    <td><a href="#delete_resource_policy"><CopyableCode code="delete_resource_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a resource-based policy that is attached to a custom model.</td>
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
    defaultValue="describe_resource_policy"
    values={[
        { label: 'describe_resource_policy', value: 'describe_resource_policy' }
    ]}
>
<TabItem value="describe_resource_policy">

Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of the policy.

```sql
SELECT
CreationTime,
LastModifiedTime,
PolicyRevisionId,
ResourcePolicy
FROM aws.comprehend.resource_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_resource_policy"
    values={[
        { label: 'put_resource_policy', value: 'put_resource_policy' }
    ]}
>
<TabItem value="put_resource_policy">

Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their account.

```sql
REPLACE aws.comprehend.resource_policies
SET 
ResourceArn = '{{ ResourceArn }}',
ResourcePolicy = '{{ ResourcePolicy }}',
PolicyRevisionId = '{{ PolicyRevisionId }}'
WHERE 
region = '{{ region }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required
AND ResourcePolicy = '{{ ResourcePolicy }}' --required
RETURNING
PolicyRevisionId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource_policy"
    values={[
        { label: 'delete_resource_policy', value: 'delete_resource_policy' }
    ]}
>
<TabItem value="delete_resource_policy">

Deletes a resource-based policy that is attached to a custom model.

```sql
DELETE FROM aws.comprehend.resource_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
