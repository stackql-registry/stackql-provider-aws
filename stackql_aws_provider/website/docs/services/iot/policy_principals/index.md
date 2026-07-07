--- 
title: policy_principals
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_principals
  - iot
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

Creates, updates, deletes, gets or lists a <code>policy_principals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policy_principals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.policy_principals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_policy_principals"
    values={[
        { label: 'list_policy_principals', value: 'list_policy_principals' }
    ]}
>
<TabItem value="list_policy_principals">

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
    <td><CopyableCode code="principal" /></td>
    <td><code>string</code></td>
    <td>The descriptions of the principals.</td>
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
    <td><a href="#list_policy_principals"><CopyableCode code="list_policy_principals" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amzn-iot-policy"><code>x-amzn-iot-policy</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-isAscendingOrder"><code>isAscendingOrder</code></a></td>
    <td>Lists the principals associated with the specified policy. Note: This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use ListTargetsForPolicy instead. Requires permission to access the ListPolicyPrincipals action.</td>
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
<tr id="parameter-x-amzn-iot-policy">
    <td><CopyableCode code="x-amzn-iot-policy" /></td>
    <td><code>string</code></td>
    <td>The policy name.</td>
</tr>
<tr id="parameter-isAscendingOrder">
    <td><CopyableCode code="isAscendingOrder" /></td>
    <td><code>boolean</code></td>
    <td>Specifies the order for results. If true, the results are returned in ascending creation order.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results.</td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer</code></td>
    <td>The result page size.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_policy_principals"
    values={[
        { label: 'list_policy_principals', value: 'list_policy_principals' }
    ]}
>
<TabItem value="list_policy_principals">

Lists the principals associated with the specified policy. Note: This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use ListTargetsForPolicy instead. Requires permission to access the ListPolicyPrincipals action.

```sql
SELECT
principal
FROM aws.iot.policy_principals
WHERE `x-amzn-iot-policy` = '{{ x-amzn-iot-policy }}' -- required
AND region = '{{ region }}' -- required
AND marker = '{{ marker }}'
AND pageSize = '{{ pageSize }}'
AND isAscendingOrder = '{{ isAscendingOrder }}'
;
```
</TabItem>
</Tabs>
