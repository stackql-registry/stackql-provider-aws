--- 
title: auth_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - auth_policies
  - vpc_lattice
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

Creates, updates, deletes, gets or lists an <code>auth_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="auth_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.vpc_lattice.auth_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_auth_policy"
    values={[
        { label: 'get_auth_policy', value: 'get_auth_policy' }
    ]}
>
<TabItem value="get_auth_policy">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the auth policy was created, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the auth policy was last updated, in ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>The auth policy.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the auth policy. The auth policy is only active when the auth type is set to AWS_IAM. If you provide a policy, then authentication and authorization decisions are made based on this policy and the client's IAM policy. If the auth type is NONE, then any auth policy that you provide remains inactive. For more information, see Create a service network in the Amazon VPC Lattice User Guide. (Active, Inactive)</td>
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
    <td><a href="#get_auth_policy"><CopyableCode code="get_auth_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_identifier"><code>resource_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the auth policy for the specified service or service network.</td>
</tr>
<tr>
    <td><a href="#put_auth_policy"><CopyableCode code="put_auth_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-resource_identifier"><code>resource_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policy"><code>policy</code></a></td>
    <td></td>
    <td>Creates or updates the auth policy. The policy string in JSON must not contain newlines or blank lines. For more information, see Auth policies in the Amazon VPC Lattice User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_auth_policy"><CopyableCode code="delete_auth_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-resource_identifier"><code>resource_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified auth policy. If an auth is set to AWS_IAM and the auth policy is deleted, all requests are denied. If you are trying to remove the auth policy completely, you must set the auth type to NONE. If auth is enabled on the resource, but no auth policy is set, all requests are denied.</td>
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
<tr id="parameter-resource_identifier">
    <td><CopyableCode code="resource_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_auth_policy"
    values={[
        { label: 'get_auth_policy', value: 'get_auth_policy' }
    ]}
>
<TabItem value="get_auth_policy">

Retrieves information about the auth policy for the specified service or service network.

```sql
SELECT
createdAt,
lastUpdatedAt,
policy,
state
FROM aws.vpc_lattice.auth_policies
WHERE resource_identifier = '{{ resource_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_auth_policy"
    values={[
        { label: 'put_auth_policy', value: 'put_auth_policy' }
    ]}
>
<TabItem value="put_auth_policy">

Creates or updates the auth policy. The policy string in JSON must not contain newlines or blank lines. For more information, see Auth policies in the Amazon VPC Lattice User Guide.

```sql
REPLACE aws.vpc_lattice.auth_policies
SET 
policy = '{{ policy }}'
WHERE 
resource_identifier = '{{ resource_identifier }}' --required
AND region = '{{ region }}' --required
AND policy = '{{ policy }}' --required
RETURNING
policy,
state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_auth_policy"
    values={[
        { label: 'delete_auth_policy', value: 'delete_auth_policy' }
    ]}
>
<TabItem value="delete_auth_policy">

Deletes the specified auth policy. If an auth is set to AWS_IAM and the auth policy is deleted, all requests are denied. If you are trying to remove the auth policy completely, you must set the auth type to NONE. If auth is enabled on the resource, but no auth policy is set, all requests are denied.

```sql
DELETE FROM aws.vpc_lattice.auth_policies
WHERE resource_identifier = '{{ resource_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
