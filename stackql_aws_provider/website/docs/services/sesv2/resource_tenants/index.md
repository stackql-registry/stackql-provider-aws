--- 
title: resource_tenants
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_tenants
  - sesv2
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

Creates, updates, deletes, gets or lists a <code>resource_tenants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_tenants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.resource_tenants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resource_tenants"
    values={[
        { label: 'list_resource_tenants', value: 'list_resource_tenants' }
    ]}
>
<TabItem value="list_resource_tenants">

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
    <td><CopyableCode code="AssociatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the resource was associated with the tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="TenantId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the tenant associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="TenantName" /></td>
    <td><code>string</code></td>
    <td>The name of a tenant. The name can contain up to 64 alphanumeric characters, including letters, numbers, hyphens (-) and underscores (_) only.</td>
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
    <td><a href="#list_resource_tenants"><CopyableCode code="list_resource_tenants" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all tenants associated with a specific resource. This operation returns a list of tenants that are associated with the specified resource. This is useful for understanding which tenants are currently using a particular resource such as an email identity, configuration set, or email template.</td>
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
    defaultValue="list_resource_tenants"
    values={[
        { label: 'list_resource_tenants', value: 'list_resource_tenants' }
    ]}
>
<TabItem value="list_resource_tenants">

List all tenants associated with a specific resource. This operation returns a list of tenants that are associated with the specified resource. This is useful for understanding which tenants are currently using a particular resource such as an email identity, configuration set, or email template.

```sql
SELECT
AssociatedTimestamp,
ResourceArn,
TenantId,
TenantName
FROM aws.sesv2.resource_tenants
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
