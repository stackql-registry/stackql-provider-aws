--- 
title: principal_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - principal_policies
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

Creates, updates, deletes, gets or lists a <code>principal_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="principal_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.principal_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_principal_policies"
    values={[
        { label: 'list_principal_policies', value: 'list_principal_policies' }
    ]}
>
<TabItem value="list_principal_policies">

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
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The policy ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_name" /></td>
    <td><code>string</code></td>
    <td>The policy name. (pattern: &lt;code&gt;&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_principal_policies"><CopyableCode code="list_principal_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amzn-iot-principal"><code>x-amzn-iot-principal</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-isAscendingOrder"><code>isAscendingOrder</code></a></td>
    <td>Lists the policies attached to the specified principal. If you use an Cognito identity, the ID must be in AmazonCognito Identity format. Note: This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use ListAttachedPolicies instead. Requires permission to access the ListPrincipalPolicies action.</td>
</tr>
<tr>
    <td><a href="#attach_principal_policy"><CopyableCode code="attach_principal_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-policy_name"><code>policy_name</code></a>, <a href="#parameter-x-amzn-iot-principal"><code>x-amzn-iot-principal</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Attaches the specified policy to the specified principal (certificate or other credential). Note: This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use AttachPolicy instead. Requires permission to access the AttachPrincipalPolicy action.</td>
</tr>
<tr>
    <td><a href="#detach_principal_policy"><CopyableCode code="detach_principal_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-policy_name"><code>policy_name</code></a>, <a href="#parameter-x-amzn-iot-principal"><code>x-amzn-iot-principal</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified policy from the specified certificate. Note: This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use DetachPolicy instead. Requires permission to access the DetachPrincipalPolicy action.</td>
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
<tr id="parameter-policy_name">
    <td><CopyableCode code="policy_name" /></td>
    <td><code>string</code></td>
    <td>The name of the policy to detach.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amzn-iot-principal">
    <td><CopyableCode code="x-amzn-iot-principal" /></td>
    <td><code>string</code></td>
    <td>The principal. Valid principals are CertificateArn (arn:aws:iot:region:accountId:cert/certificateId), thingGroupArn (arn:aws:iot:region:accountId:thinggroup/groupName) and CognitoId (region:id).</td>
</tr>
<tr id="parameter-isAscendingOrder">
    <td><CopyableCode code="isAscendingOrder" /></td>
    <td><code>boolean</code></td>
    <td>Specifies the order for results. If true, results are returned in ascending creation order.</td>
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
    defaultValue="list_principal_policies"
    values={[
        { label: 'list_principal_policies', value: 'list_principal_policies' }
    ]}
>
<TabItem value="list_principal_policies">

Lists the policies attached to the specified principal. If you use an Cognito identity, the ID must be in AmazonCognito Identity format. Note: This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use ListAttachedPolicies instead. Requires permission to access the ListPrincipalPolicies action.

```sql
SELECT
policy_arn,
policy_name
FROM aws.iot.principal_policies
WHERE `x-amzn-iot-principal` = '{{ x-amzn-iot-principal }}' -- required
AND region = '{{ region }}' -- required
AND marker = '{{ marker }}'
AND pageSize = '{{ pageSize }}'
AND isAscendingOrder = '{{ isAscendingOrder }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_principal_policy"
    values={[
        { label: 'attach_principal_policy', value: 'attach_principal_policy' }
    ]}
>
<TabItem value="attach_principal_policy">

Attaches the specified policy to the specified principal (certificate or other credential). Note: This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use AttachPolicy instead. Requires permission to access the AttachPrincipalPolicy action.

```sql
UPDATE aws.iot.principal_policies
SET 
-- No updatable properties
WHERE 
policy_name = '{{ policy_name }}' --required
AND `x-amzn-iot-principal` = '{{ x-amzn-iot-principal }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="detach_principal_policy"
    values={[
        { label: 'detach_principal_policy', value: 'detach_principal_policy' }
    ]}
>
<TabItem value="detach_principal_policy">

Removes the specified policy from the specified certificate. Note: This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use DetachPolicy instead. Requires permission to access the DetachPrincipalPolicy action.

```sql
EXEC aws.iot.principal_policies.detach_principal_policy 
@policy_name='{{ policy_name }}' --required, 
@x-amzn-iot-principal='{{ x-amzn-iot-principal }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
