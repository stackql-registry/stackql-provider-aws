--- 
title: retirable_grants
hide_title: false
hide_table_of_contents: false
keywords:
  - retirable_grants
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

Creates, updates, deletes, gets or lists a <code>retirable_grants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="retirable_grants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kms.retirable_grants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_retirable_grants"
    values={[
        { label: 'list_retirable_grants', value: 'list_retirable_grants' }
    ]}
>
<TabItem value="list_retirable_grants">

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
    <td><CopyableCode code="Constraints" /></td>
    <td><code>object</code></td>
    <td>A list of key-value pairs that must be present in the encryption context of certain subsequent operations that the grant allows.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the grant was created.</td>
</tr>
<tr>
    <td><CopyableCode code="GrantId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the grant.</td>
</tr>
<tr>
    <td><CopyableCode code="GranteePrincipal" /></td>
    <td><code>string</code></td>
    <td>The identity that gets the permissions in the grant. The GranteePrincipal field in the ListGrants response usually contains the user or role designated as the grantee principal in the grant. However, when the grantee principal in the grant is an Amazon Web Services service, the GranteePrincipal field contains the service principal, which might represent several different grantee principals. (pattern: &lt;code&gt;^&#91;\w+=,.@:/-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IssuingAccount" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account under which the grant was issued. (pattern: &lt;code&gt;^&#91;\w+=,.@:/-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="KeyId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the KMS key to which the grant applies.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The friendly name that identifies the grant. If a name was provided in the CreateGrant request, that name is returned. Otherwise this value is null. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9:/_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Operations" /></td>
    <td><code>array</code></td>
    <td>The list of operations permitted by the grant.</td>
</tr>
<tr>
    <td><CopyableCode code="RetiringPrincipal" /></td>
    <td><code>string</code></td>
    <td>The principal that can retire the grant. (pattern: &lt;code&gt;^&#91;\w+=,.@:/-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#list_retirable_grants"><CopyableCode code="list_retirable_grants" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about all grants in the Amazon Web Services account and Region that have the specified retiring principal. You can specify any principal in your Amazon Web Services account. The grants that are returned include grants for KMS keys in your Amazon Web Services account and other Amazon Web Services accounts. You might use this operation to determine which grants you may retire. To retire a grant, use the RetireGrant operation. For detailed information about grants, including grant terminology, see Grants in KMS in the Key Management Service Developer Guide . For examples of creating grants in several programming languages, see Use CreateGrant with an Amazon Web Services SDK or CLI. Cross-account use: You must specify a principal in your Amazon Web Services account. This operation returns a list of grants where the retiring principal specified in the ListRetirableGrants request is the same retiring principal on the grant. This can include grants on KMS keys owned by other Amazon Web Services accounts, but you do not need kms:ListRetirableGrants permission (or any other additional permission) in any Amazon Web Services account other than your own. Required permissions: kms:ListRetirableGrants (IAM policy) in your Amazon Web Services account. KMS authorizes ListRetirableGrants requests by evaluating the caller account's kms:ListRetirableGrants permissions. The authorized resource in ListRetirableGrants calls is the retiring principal specified in the request. KMS does not evaluate the caller's permissions to verify their access to any KMS keys or grants that might be returned by the ListRetirableGrants call. Related operations: CreateGrant ListGrants RetireGrant RevokeGrant Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
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
    defaultValue="list_retirable_grants"
    values={[
        { label: 'list_retirable_grants', value: 'list_retirable_grants' }
    ]}
>
<TabItem value="list_retirable_grants">

Returns information about all grants in the Amazon Web Services account and Region that have the specified retiring principal. You can specify any principal in your Amazon Web Services account. The grants that are returned include grants for KMS keys in your Amazon Web Services account and other Amazon Web Services accounts. You might use this operation to determine which grants you may retire. To retire a grant, use the RetireGrant operation. For detailed information about grants, including grant terminology, see Grants in KMS in the Key Management Service Developer Guide . For examples of creating grants in several programming languages, see Use CreateGrant with an Amazon Web Services SDK or CLI. Cross-account use: You must specify a principal in your Amazon Web Services account. This operation returns a list of grants where the retiring principal specified in the ListRetirableGrants request is the same retiring principal on the grant. This can include grants on KMS keys owned by other Amazon Web Services accounts, but you do not need kms:ListRetirableGrants permission (or any other additional permission) in any Amazon Web Services account other than your own. Required permissions: kms:ListRetirableGrants (IAM policy) in your Amazon Web Services account. KMS authorizes ListRetirableGrants requests by evaluating the caller account's kms:ListRetirableGrants permissions. The authorized resource in ListRetirableGrants calls is the retiring principal specified in the request. KMS does not evaluate the caller's permissions to verify their access to any KMS keys or grants that might be returned by the ListRetirableGrants call. Related operations: CreateGrant ListGrants RetireGrant RevokeGrant Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
SELECT
Constraints,
CreationDate,
GrantId,
GranteePrincipal,
IssuingAccount,
KeyId,
Name,
Operations,
RetiringPrincipal
FROM aws.kms.retirable_grants
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
