--- 
title: key_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - key_policies
  - kms
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

Creates, updates, deletes, gets or lists a <code>key_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="key_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kms.key_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_key_policy"
    values={[
        { label: 'get_key_policy', value: 'get_key_policy' }
    ]}
>
<TabItem value="get_key_policy">

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
    <td>A key policy document in JSON format. (pattern: &lt;code&gt;&#91;\u0009\u000A\u000D\u0020-\u00FF&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyName" /></td>
    <td><code>string</code></td>
    <td>The name of the key policy. The only valid value is default. (pattern: &lt;code&gt;&#91;\w&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_key_policy"><CopyableCode code="get_key_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a key policy attached to the specified KMS key. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:GetKeyPolicy (key policy) Related operations: PutKeyPolicy Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#put_key_policy"><CopyableCode code="put_key_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a></td>
    <td></td>
    <td>Attaches a key policy to the specified KMS key. For more information about key policies, see Key Policies in the Key Management Service Developer Guide. For help writing and formatting a JSON policy document, see the IAM JSON Policy Reference in the Identity and Access Management User Guide . For examples of adding a key policy in multiple programming languages, see Use PutKeyPolicy with an Amazon Web Services SDK or CLI in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:PutKeyPolicy (key policy) Related operations: GetKeyPolicy Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#list_key_policies"><CopyableCode code="list_key_policies" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a></td>
    <td></td>
    <td>Gets the names of the key policies that are attached to a KMS key. This operation is designed to get policy names that you can use in a GetKeyPolicy operation. However, the only valid policy name is default. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:ListKeyPolicies (key policy) Related operations: GetKeyPolicy PutKeyPolicy Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
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
    defaultValue="get_key_policy"
    values={[
        { label: 'get_key_policy', value: 'get_key_policy' }
    ]}
>
<TabItem value="get_key_policy">

Gets a key policy attached to the specified KMS key. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:GetKeyPolicy (key policy) Related operations: PutKeyPolicy Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
SELECT
Policy,
PolicyName
FROM aws.kms.key_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_key_policy"
    values={[
        { label: 'put_key_policy', value: 'put_key_policy' }
    ]}
>
<TabItem value="put_key_policy">

Attaches a key policy to the specified KMS key. For more information about key policies, see Key Policies in the Key Management Service Developer Guide. For help writing and formatting a JSON policy document, see the IAM JSON Policy Reference in the Identity and Access Management User Guide . For examples of adding a key policy in multiple programming languages, see Use PutKeyPolicy with an Amazon Web Services SDK or CLI in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:PutKeyPolicy (key policy) Related operations: GetKeyPolicy Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
REPLACE aws.kms.key_policies
SET 
KeyId = '{{ KeyId }}',
PolicyName = '{{ PolicyName }}',
Policy = '{{ Policy }}',
BypassPolicyLockoutSafetyCheck = {{ BypassPolicyLockoutSafetyCheck }}
WHERE 
region = '{{ region }}' --required
AND KeyId = '{{ KeyId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_key_policies"
    values={[
        { label: 'list_key_policies', value: 'list_key_policies' }
    ]}
>
<TabItem value="list_key_policies">

Gets the names of the key policies that are attached to a KMS key. This operation is designed to get policy names that you can use in a GetKeyPolicy operation. However, the only valid policy name is default. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:ListKeyPolicies (key policy) Related operations: GetKeyPolicy PutKeyPolicy Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.key_policies.list_key_policies 
@region='{{ region }}' --required 
@@json=
'{
"KeyId": "{{ KeyId }}", 
"Limit": {{ Limit }}, 
"Marker": "{{ Marker }}"
}'
;
```
</TabItem>
</Tabs>
