--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - license_manager_user_subscriptions
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager_user_subscriptions.instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_instances"
    values={[
        { label: 'list_instances', value: 'list_instances' }
    ]}
>
<TabItem value="list_instances">

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
    <td><CopyableCode code="IdentityProvider" /></td>
    <td><code>object</code></td>
    <td>Refers to an identity provider.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the EC2 instance, which provides user-based subscriptions.</td>
</tr>
<tr>
    <td><CopyableCode code="LastStatusCheckDate" /></td>
    <td><code>string</code></td>
    <td>The date of the last status check.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerAccountId" /></td>
    <td><code>string</code></td>
    <td>The AWS Account ID of the owner of this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="Products" /></td>
    <td><code>array</code></td>
    <td>A list of provided user-based subscription products.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of an EC2 instance resource.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>The status message for an EC2 instance.</td>
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
    <td><a href="#list_instances"><CopyableCode code="list_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the EC2 instances providing user-based subscriptions.</td>
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
    defaultValue="list_instances"
    values={[
        { label: 'list_instances', value: 'list_instances' }
    ]}
>
<TabItem value="list_instances">

Lists the EC2 instances providing user-based subscriptions.

```sql
SELECT
IdentityProvider,
InstanceId,
LastStatusCheckDate,
OwnerAccountId,
Products,
Status,
StatusMessage
FROM aws.license_manager_user_subscriptions.instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
