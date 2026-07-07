--- 
title: resource_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_policies
  - payment_cryptography
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.payment_cryptography.resource_policies" /></td></tr>
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
    <td><CopyableCode code="Policy" /></td>
    <td><code>string</code></td>
    <td>The resource-based policy attached to the key, in JSON format. (pattern: &lt;code&gt;&#91;\u0009\u000A\u000D\u0020-\u00FF&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The KeyARN of the key. (pattern: &lt;code&gt;arn:aws:payment-cryptography:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;1,16&#125;-&#91;0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:key/&#91;0-9a-zA-Z&#93;&#123;16,64&#125;&lt;/code&gt;)</td>
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
    <td>Returns the resource-based policy attached to an Amazon Web Services Payment Cryptography key. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: PutResourcePolicy DeleteResourcePolicy</td>
</tr>
<tr>
    <td><a href="#put_resource_policy"><CopyableCode code="put_resource_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Attaches or replaces a resource-based policy on an Amazon Web Services Payment Cryptography key. A resource-based policy can grant cross-account access to your key. If the policy would grant public access, the request fails with a PublicPolicyException. To remove a resource-based policy from a key, use DeleteResourcePolicy. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: GetResourcePolicy DeleteResourcePolicy</td>
</tr>
<tr>
    <td><a href="#delete_resource_policy"><CopyableCode code="delete_resource_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the resource-based policy attached to an Amazon Web Services Payment Cryptography key. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: PutResourcePolicy GetResourcePolicy</td>
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

Returns the resource-based policy attached to an Amazon Web Services Payment Cryptography key. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: PutResourcePolicy DeleteResourcePolicy

```sql
SELECT
Policy,
ResourceArn
FROM aws.payment_cryptography.resource_policies
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

Attaches or replaces a resource-based policy on an Amazon Web Services Payment Cryptography key. A resource-based policy can grant cross-account access to your key. If the policy would grant public access, the request fails with a PublicPolicyException. To remove a resource-based policy from a key, use DeleteResourcePolicy. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: GetResourcePolicy DeleteResourcePolicy

```sql
REPLACE aws.payment_cryptography.resource_policies
SET 
ResourceArn = '{{ ResourceArn }}',
Policy = '{{ Policy }}'
WHERE 
region = '{{ region }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required
RETURNING
Policy,
ResourceArn;
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

Removes the resource-based policy attached to an Amazon Web Services Payment Cryptography key. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: PutResourcePolicy GetResourcePolicy

```sql
DELETE FROM aws.payment_cryptography.resource_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
