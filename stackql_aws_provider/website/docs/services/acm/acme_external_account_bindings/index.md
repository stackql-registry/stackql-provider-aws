--- 
title: acme_external_account_bindings
hide_title: false
hide_table_of_contents: false
keywords:
  - acme_external_account_bindings
  - acm
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

Creates, updates, deletes, gets or lists an <code>acme_external_account_bindings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="acme_external_account_bindings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.acm.acme_external_account_bindings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_acme_external_account_binding"
    values={[
        { label: 'describe_acme_external_account_binding', value: 'describe_acme_external_account_binding' },
        { label: 'list_acme_external_account_bindings', value: 'list_acme_external_account_bindings' }
    ]}
>
<TabItem value="describe_acme_external_account_binding">

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
    <td><CopyableCode code="acme_endpoint_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ACME endpoint. (pattern: &lt;code&gt;arn:aws&#91;a-z-&#93;*:acm:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:acme-endpoint/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="acme_external_account_binding_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ACME external account binding. (pattern: &lt;code&gt;arn:aws&#91;a-z-&#93;*:acm:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:acme-endpoint/&#91;a-zA-Z0-9-&#93;+/acme-external-account-binding/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the external account binding was created.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the external account binding expires.</td>
</tr>
<tr>
    <td><CopyableCode code="last_used_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the external account binding was last used.</td>
</tr>
<tr>
    <td><CopyableCode code="revoked_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the external account binding was revoked.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role associated with the external account binding. (pattern: &lt;code&gt;arn:aws&#91;a-z-&#93;*:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the external account binding was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_acme_external_account_bindings">

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
    <td><CopyableCode code="acme_endpoint_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ACME endpoint. (pattern: &lt;code&gt;arn:aws&#91;a-z-&#93;*:acm:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:acme-endpoint/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="acme_external_account_binding_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ACME external account binding. (pattern: &lt;code&gt;arn:aws&#91;a-z-&#93;*:acm:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:acme-endpoint/&#91;a-zA-Z0-9-&#93;+/acme-external-account-binding/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the external account binding was created.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the external account binding expires.</td>
</tr>
<tr>
    <td><CopyableCode code="last_used_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the external account binding was last used.</td>
</tr>
<tr>
    <td><CopyableCode code="revoked_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the external account binding was revoked.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role associated with the external account binding. (pattern: &lt;code&gt;arn:aws&#91;a-z-&#93;*:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the external account binding was last updated.</td>
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
    <td><a href="#describe_acme_external_account_binding"><CopyableCode code="describe_acme_external_account_binding" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed metadata about the specified external account binding, including the associated IAM role, expiration time, and usage history.</td>
</tr>
<tr>
    <td><a href="#list_acme_external_account_bindings"><CopyableCode code="list_acme_external_account_bindings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of external account bindings for the specified ACME endpoint.</td>
</tr>
<tr>
    <td><a href="#create_acme_external_account_binding"><CopyableCode code="create_acme_external_account_binding" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AcmeEndpointArn"><code>AcmeEndpointArn</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates an external account binding (EAB) for an ACME endpoint. An EAB provides credentials that authorize an ACME client to register an account with the endpoint. Each EAB is associated with an IAM role that controls what certificate operations the ACME client can perform.</td>
</tr>
<tr>
    <td><a href="#revoke_acme_external_account_binding"><CopyableCode code="revoke_acme_external_account_binding" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AcmeExternalAccountBindingArn"><code>AcmeExternalAccountBindingArn</code></a></td>
    <td></td>
    <td>Revokes an external account binding, preventing new ACME accounts from being registered using this binding. Existing ACME accounts that were previously registered using the binding are not affected and must be revoked separately.</td>
</tr>
<tr>
    <td><a href="#delete_acme_external_account_binding"><CopyableCode code="delete_acme_external_account_binding" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an external account binding. Previously fetched credentials for this binding will no longer be usable for account registration. A deleted binding cannot be recovered.</td>
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
    defaultValue="describe_acme_external_account_binding"
    values={[
        { label: 'describe_acme_external_account_binding', value: 'describe_acme_external_account_binding' },
        { label: 'list_acme_external_account_bindings', value: 'list_acme_external_account_bindings' }
    ]}
>
<TabItem value="describe_acme_external_account_binding">

Returns detailed metadata about the specified external account binding, including the associated IAM role, expiration time, and usage history.

```sql
SELECT
acme_endpoint_arn,
acme_external_account_binding_arn,
created_at,
expires_at,
last_used_at,
revoked_at,
role_arn,
updated_at
FROM aws.acm.acme_external_account_bindings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_acme_external_account_bindings">

Retrieves a list of external account bindings for the specified ACME endpoint.

```sql
SELECT
acme_endpoint_arn,
acme_external_account_binding_arn,
created_at,
expires_at,
last_used_at,
revoked_at,
role_arn,
updated_at
FROM aws.acm.acme_external_account_bindings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_acme_external_account_binding"
    values={[
        { label: 'create_acme_external_account_binding', value: 'create_acme_external_account_binding' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_acme_external_account_binding">

Creates an external account binding (EAB) for an ACME endpoint. An EAB provides credentials that authorize an ACME client to register an account with the endpoint. Each EAB is associated with an IAM role that controls what certificate operations the ACME client can perform.

```sql
INSERT INTO aws.acm.acme_external_account_bindings (
IdempotencyToken,
AcmeEndpointArn,
RoleArn,
Expiration,
Tags,
region
)
SELECT 
'{{ IdempotencyToken }}',
'{{ AcmeEndpointArn }}' /* required */,
'{{ RoleArn }}' /* required */,
'{{ Expiration }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
external_account_binding
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: acme_external_account_bindings
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the acme_external_account_bindings resource.
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
      description: |
        A unique, case-sensitive identifier to ensure idempotency of the request.
    - name: AcmeEndpointArn
      value: "{{ AcmeEndpointArn }}"
      description: |
        The Amazon Resource Name (ARN) of the ACME endpoint.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM role to associate with the external account binding.
    - name: Expiration
      description: |
        The expiration configuration for the external account binding.
      value:
        Value: {{ Value }}
        Type: "{{ Type }}"
    - name: Tags
      description: |
        One or more tags to associate with the external account binding.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="revoke_acme_external_account_binding"
    values={[
        { label: 'revoke_acme_external_account_binding', value: 'revoke_acme_external_account_binding' }
    ]}
>
<TabItem value="revoke_acme_external_account_binding">

Revokes an external account binding, preventing new ACME accounts from being registered using this binding. Existing ACME accounts that were previously registered using the binding are not affected and must be revoked separately.

```sql
UPDATE aws.acm.acme_external_account_bindings
SET 
AcmeExternalAccountBindingArn = '{{ AcmeExternalAccountBindingArn }}'
WHERE 
region = '{{ region }}' --required
AND AcmeExternalAccountBindingArn = '{{ AcmeExternalAccountBindingArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_acme_external_account_binding"
    values={[
        { label: 'delete_acme_external_account_binding', value: 'delete_acme_external_account_binding' }
    ]}
>
<TabItem value="delete_acme_external_account_binding">

Deletes an external account binding. Previously fetched credentials for this binding will no longer be usable for account registration. A deleted binding cannot be recovered.

```sql
DELETE FROM aws.acm.acme_external_account_bindings
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
