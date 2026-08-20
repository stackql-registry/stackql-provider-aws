--- 
title: acme_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - acme_accounts
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

Creates, updates, deletes, gets or lists an <code>acme_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="acme_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.acm.acme_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_acme_account"
    values={[
        { label: 'describe_acme_account', value: 'describe_acme_account' },
        { label: 'list_acme_accounts', value: 'list_acme_accounts' }
    ]}
>
<TabItem value="describe_acme_account">

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
    <td><CopyableCode code="account_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the ACME account.</td>
</tr>
<tr>
    <td><CopyableCode code="acme_external_account_binding_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the external account binding associated with this ACME account. (pattern: &lt;code&gt;arn:aws&#91;a-z-&#93;*:acm:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:acme-endpoint/&#91;a-zA-Z0-9-&#93;+/acme-external-account-binding/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contacts" /></td>
    <td><code>array</code></td>
    <td>The contact information for the ACME account.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the ACME account was created.</td>
</tr>
<tr>
    <td><CopyableCode code="public_key_thumbprint" /></td>
    <td><code>string</code></td>
    <td>The thumbprint of the public key associated with the ACME account.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the ACME account. (VALID, DEACTIVATED, REVOKED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_acme_accounts">

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
    <td><CopyableCode code="account_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the ACME account.</td>
</tr>
<tr>
    <td><CopyableCode code="acme_external_account_binding_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the external account binding associated with this ACME account. (pattern: &lt;code&gt;arn:aws&#91;a-z-&#93;*:acm:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:acme-endpoint/&#91;a-zA-Z0-9-&#93;+/acme-external-account-binding/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contacts" /></td>
    <td><code>array</code></td>
    <td>The contact information for the ACME account.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the ACME account was created.</td>
</tr>
<tr>
    <td><CopyableCode code="public_key_thumbprint" /></td>
    <td><code>string</code></td>
    <td>The thumbprint of the public key associated with the ACME account.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the ACME account. (VALID, DEACTIVATED, REVOKED)</td>
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
    <td><a href="#describe_acme_account"><CopyableCode code="describe_acme_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed metadata about the specified ACME account, including its status, public key thumbprint, and associated external account binding.</td>
</tr>
<tr>
    <td><a href="#list_acme_accounts"><CopyableCode code="list_acme_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of ACME accounts registered with the specified ACME endpoint. ACME accounts are created when clients use external account binding credentials to register.</td>
</tr>
<tr>
    <td><a href="#revoke_acme_account"><CopyableCode code="revoke_acme_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AcmeEndpointArn"><code>AcmeEndpointArn</code></a>, <a href="#parameter-AccountUrl"><code>AccountUrl</code></a></td>
    <td></td>
    <td>Revokes an ACME account, preventing it from requesting or revoking certificates. This operation is irreversible.</td>
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
    defaultValue="describe_acme_account"
    values={[
        { label: 'describe_acme_account', value: 'describe_acme_account' },
        { label: 'list_acme_accounts', value: 'list_acme_accounts' }
    ]}
>
<TabItem value="describe_acme_account">

Returns detailed metadata about the specified ACME account, including its status, public key thumbprint, and associated external account binding.

```sql
SELECT
account_url,
acme_external_account_binding_arn,
contacts,
created_at,
public_key_thumbprint,
status
FROM aws.acm.acme_accounts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_acme_accounts">

Retrieves a list of ACME accounts registered with the specified ACME endpoint. ACME accounts are created when clients use external account binding credentials to register.

```sql
SELECT
account_url,
acme_external_account_binding_arn,
contacts,
created_at,
public_key_thumbprint,
status
FROM aws.acm.acme_accounts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="revoke_acme_account"
    values={[
        { label: 'revoke_acme_account', value: 'revoke_acme_account' }
    ]}
>
<TabItem value="revoke_acme_account">

Revokes an ACME account, preventing it from requesting or revoking certificates. This operation is irreversible.

```sql
UPDATE aws.acm.acme_accounts
SET 
AcmeEndpointArn = '{{ AcmeEndpointArn }}',
AccountUrl = '{{ AccountUrl }}'
WHERE 
region = '{{ region }}' --required
AND AcmeEndpointArn = '{{ AcmeEndpointArn }}' --required
AND AccountUrl = '{{ AccountUrl }}' --required;
```
</TabItem>
</Tabs>
