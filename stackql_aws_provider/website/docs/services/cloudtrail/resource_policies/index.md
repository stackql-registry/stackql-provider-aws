--- 
title: resource_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_policies
  - cloudtrail
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudtrail.resource_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_policy"
    values={[
        { label: 'get_resource_policy', value: 'get_resource_policy' }
    ]}
>
<TabItem value="get_resource_policy">

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
    <td><CopyableCode code="DelegatedAdminResourcePolicy" /></td>
    <td><code>string</code></td>
    <td>The default resource-based policy that is automatically generated for the delegated administrator of an Organizations organization. This policy will be evaluated in tandem with any policy you submit for the resource. For more information about this policy, see Default resource policy for delegated administrators.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the CloudTrail event data store, dashboard, or channel attached to resource-based policy. Example event data store ARN format: arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE Example dashboard ARN format: arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash Example channel ARN format: arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890 (pattern: &lt;code&gt;^&#91;a-zA-Z0-9._/\-:&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourcePolicy" /></td>
    <td><code>string</code></td>
    <td>A JSON-formatted string that contains the resource-based policy attached to the CloudTrail event data store, dashboard, or channel.</td>
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
    <td><a href="#get_resource_policy"><CopyableCode code="get_resource_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the JSON text of the resource-based policy document attached to the CloudTrail event data store, dashboard, or channel.</td>
</tr>
<tr>
    <td><a href="#put_resource_policy"><CopyableCode code="put_resource_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-ResourcePolicy"><code>ResourcePolicy</code></a></td>
    <td></td>
    <td>Attaches a resource-based permission policy to a CloudTrail event data store, dashboard, or channel. For more information about resource-based policies, see CloudTrail resource-based policy examples in the CloudTrail User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_resource_policy"><CopyableCode code="delete_resource_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the resource-based policy attached to the CloudTrail event data store, dashboard, or channel.</td>
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
    defaultValue="get_resource_policy"
    values={[
        { label: 'get_resource_policy', value: 'get_resource_policy' }
    ]}
>
<TabItem value="get_resource_policy">

Retrieves the JSON text of the resource-based policy document attached to the CloudTrail event data store, dashboard, or channel.

```sql
SELECT
DelegatedAdminResourcePolicy,
ResourceArn,
ResourcePolicy
FROM aws.cloudtrail.resource_policies
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

Attaches a resource-based permission policy to a CloudTrail event data store, dashboard, or channel. For more information about resource-based policies, see CloudTrail resource-based policy examples in the CloudTrail User Guide.

```sql
REPLACE aws.cloudtrail.resource_policies
SET 
ResourceArn = '{{ ResourceArn }}',
ResourcePolicy = '{{ ResourcePolicy }}'
WHERE 
region = '{{ region }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required
AND ResourcePolicy = '{{ ResourcePolicy }}' --required
RETURNING
DelegatedAdminResourcePolicy,
ResourceArn,
ResourcePolicy;
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

Deletes the resource-based policy attached to the CloudTrail event data store, dashboard, or channel.

```sql
DELETE FROM aws.cloudtrail.resource_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
