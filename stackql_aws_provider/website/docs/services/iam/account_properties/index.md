--- 
title: account_properties
hide_title: false
hide_table_of_contents: false
keywords:
  - account_properties
  - iam
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

Creates, updates, deletes, gets or lists an <code>account_properties</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_properties" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.account_properties" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account_properties"
    values={[
        { label: 'get_account_properties', value: 'get_account_properties' }
    ]}
>
<TabItem value="get_account_properties">

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
    <td><CopyableCode code="properties" /></td>
    <td><code>string</code></td>
    <td>A map of account property key-value pairs. Keys are in the format Namespace/PropertyName.</td>
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
    <td><a href="#get_account_properties"><CopyableCode code="get_account_properties" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the account-level properties for the caller's Amazon Web Services account. Account properties are configuration settings that control account-wide IAM features such as Role Manager. The service returns properties as key-value pairs in Namespace/PropertyName format. Each namespace groups related configuration settings. Use PutAccountProperties to modify these properties.</td>
</tr>
<tr>
    <td><a href="#put_account_properties"><CopyableCode code="put_account_properties" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Properties"><code>Properties</code></a></td>
    <td>Sets account-level properties for the caller's Amazon Web Services account. Account properties are configuration settings that control account-wide IAM features such as Role Manager. Specify properties as key-value pairs in Namespace/PropertyName format. All properties in a single request must belong to the same namespace. Use GetAccountProperties to view the current properties.</td>
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
<tr id="parameter-Properties">
    <td><CopyableCode code="Properties" /></td>
    <td><code>object</code></td>
    <td>A map of property key-value pairs to set. All keys must belong to the same namespace. Each key uses the format Namespace/PropertyName. The key must contain exactly one / separating the namespace from the property name, and cannot start or end with /. The service validates each value based on the property key's expected type. For example, boolean properties expect true or false.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_account_properties"
    values={[
        { label: 'get_account_properties', value: 'get_account_properties' }
    ]}
>
<TabItem value="get_account_properties">

Retrieves the account-level properties for the caller's Amazon Web Services account. Account properties are configuration settings that control account-wide IAM features such as Role Manager. The service returns properties as key-value pairs in Namespace/PropertyName format. Each namespace groups related configuration settings. Use PutAccountProperties to modify these properties.

```sql
SELECT
properties
FROM aws.iam.account_properties
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_account_properties"
    values={[
        { label: 'put_account_properties', value: 'put_account_properties' }
    ]}
>
<TabItem value="put_account_properties">

Sets account-level properties for the caller's Amazon Web Services account. Account properties are configuration settings that control account-wide IAM features such as Role Manager. Specify properties as key-value pairs in Namespace/PropertyName format. All properties in a single request must belong to the same namespace. Use GetAccountProperties to view the current properties.

```sql
REPLACE aws.iam.account_properties
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND Properties = '{{ Properties}}';
```
</TabItem>
</Tabs>
