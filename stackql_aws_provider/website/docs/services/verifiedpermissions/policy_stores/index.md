--- 
title: policy_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_stores
  - verifiedpermissions
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

Creates, updates, deletes, gets or lists a <code>policy_stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policy_stores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.verifiedpermissions.policy_stores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_policy_store"
    values={[
        { label: 'get_policy_store', value: 'get_policy_store' },
        { label: 'list_policy_stores', value: 'list_policy_stores' }
    ]}
>
<TabItem value="get_policy_store">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the policy store. (pattern: &lt;code&gt;arn:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cedarVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the Cedar language used with policies, policy templates, and schemas in this policy store. For more information, see Amazon Verified Permissions upgrade to Cedar v4 FAQ. (CEDAR_2, CEDAR_4)</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the policy store was originally created.</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtection" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the policy store can be deleted. If enabled, the policy store can't be deleted. The default state is DISABLED. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Descriptive text that you can provide to help with identification of the current policy store.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionState" /></td>
    <td><code>object</code></td>
    <td>A structure that contains the encryption configuration for the policy store.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the policy store was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="policyStoreId" /></td>
    <td><code>string</code></td>
    <td>The ID of the policy store; (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The list of tags associated with the policy store.</td>
</tr>
<tr>
    <td><CopyableCode code="validationSettings" /></td>
    <td><code>object</code></td>
    <td>The current validation settings for the policy store.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_policy_stores">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the policy store. (pattern: &lt;code&gt;arn:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Descriptive text that you can provide to help with identification of the current policy store.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the policy store was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="policyStoreId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the policy store. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_policy_store"><CopyableCode code="get_policy_store" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about a policy store.</td>
</tr>
<tr>
    <td><a href="#list_policy_stores"><CopyableCode code="list_policy_stores" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of all policy stores in the calling Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_policy_store"><CopyableCode code="create_policy_store" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-validationSettings"><code>validationSettings</code></a></td>
    <td></td>
    <td>Creates a policy store. A policy store is a container for policy resources. Although Cedar supports multiple namespaces, Verified Permissions currently supports only one namespace per policy store. Verified Permissions is eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.</td>
</tr>
<tr>
    <td><a href="#update_policy_store"><CopyableCode code="update_policy_store" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyStoreId"><code>policyStoreId</code></a>, <a href="#parameter-validationSettings"><code>validationSettings</code></a></td>
    <td></td>
    <td>Modifies the validation setting for a policy store. Verified Permissions is eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.</td>
</tr>
<tr>
    <td><a href="#delete_policy_store"><CopyableCode code="delete_policy_store" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified policy store. This operation is idempotent. If you specify a policy store that does not exist, the request response will still return a successful HTTP 200 status code.</td>
</tr>
<tr>
    <td><a href="#batch_is_authorized"><CopyableCode code="batch_is_authorized" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyStoreId"><code>policyStoreId</code></a>, <a href="#parameter-requests"><code>requests</code></a></td>
    <td></td>
    <td>Makes a series of decisions about multiple authorization requests for one principal or resource. Each request contains the equivalent content of an IsAuthorized request: principal, action, resource, and context. Either the principal or the resource parameter must be identical across all requests. For example, Verified Permissions won't evaluate a pair of requests where bob views photo1 and alice views photo2. Authorization of bob to view photo1 and photo2, or bob and alice to view photo1, are valid batches. The request is evaluated against all policies in the specified policy store that match the entities that you declare. The result of the decisions is a series of Allow or Deny responses, along with the IDs of the policies that produced each decision. The entities of a BatchIsAuthorized API request can contain up to 100 principals and up to 100 resources. The requests of a BatchIsAuthorized API request can contain up to 30 requests. The BatchIsAuthorized operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission verifiedpermissions:IsAuthorized in their IAM policies.</td>
</tr>
<tr>
    <td><a href="#batch_is_authorized_with_token"><CopyableCode code="batch_is_authorized_with_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyStoreId"><code>policyStoreId</code></a>, <a href="#parameter-requests"><code>requests</code></a></td>
    <td></td>
    <td>Makes a series of decisions about multiple authorization requests for one token. The principal in this request comes from an external identity source in the form of an identity or access token, formatted as a JSON web token (JWT). The information in the parameters can also define additional context that Verified Permissions can include in the evaluations. The request is evaluated against all policies in the specified policy store that match the entities that you provide in the entities declaration and in the token. The result of the decisions is a series of Allow or Deny responses, along with the IDs of the policies that produced each decision. The entities of a BatchIsAuthorizedWithToken API request can contain up to 100 resources and up to 99 user groups. The requests of a BatchIsAuthorizedWithToken API request can contain up to 30 requests. The BatchIsAuthorizedWithToken operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission verifiedpermissions:IsAuthorizedWithToken in their IAM policies.</td>
</tr>
<tr>
    <td><a href="#is_authorized"><CopyableCode code="is_authorized" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyStoreId"><code>policyStoreId</code></a></td>
    <td></td>
    <td>Makes an authorization decision about a service request described in the parameters. The information in the parameters can also define additional context that Verified Permissions can include in the evaluation. The request is evaluated against all matching policies in the specified policy store. The result of the decision is either Allow or Deny, along with a list of the policies that resulted in the decision.</td>
</tr>
<tr>
    <td><a href="#is_authorized_with_token"><CopyableCode code="is_authorized_with_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyStoreId"><code>policyStoreId</code></a></td>
    <td></td>
    <td>Makes an authorization decision about a service request described in the parameters. The principal in this request comes from an external identity source in the form of an identity token formatted as a JSON web token (JWT). The information in the parameters can also define additional context that Verified Permissions can include in the evaluation. The request is evaluated against all matching policies in the specified policy store. The result of the decision is either Allow or Deny, along with a list of the policies that resulted in the decision. Verified Permissions validates each token that is specified in a request by checking its expiration date and its signature. Tokens from an identity source user continue to be usable until they expire. Token revocation and resource deletion have no effect on the validity of a token in your policy store</td>
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
    defaultValue="get_policy_store"
    values={[
        { label: 'get_policy_store', value: 'get_policy_store' },
        { label: 'list_policy_stores', value: 'list_policy_stores' }
    ]}
>
<TabItem value="get_policy_store">

Retrieves details about a policy store.

```sql
SELECT
arn,
cedarVersion,
createdDate,
deletionProtection,
description,
encryptionState,
lastUpdatedDate,
policyStoreId,
tags,
validationSettings
FROM aws.verifiedpermissions.policy_stores
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_policy_stores">

Returns a paginated list of all policy stores in the calling Amazon Web Services account.

```sql
SELECT
arn,
createdDate,
description,
lastUpdatedDate,
policyStoreId
FROM aws.verifiedpermissions.policy_stores
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_policy_store"
    values={[
        { label: 'create_policy_store', value: 'create_policy_store' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_policy_store">

Creates a policy store. A policy store is a container for policy resources. Although Cedar supports multiple namespaces, Verified Permissions currently supports only one namespace per policy store. Verified Permissions is eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.

```sql
INSERT INTO aws.verifiedpermissions.policy_stores (
clientToken,
validationSettings,
description,
deletionProtection,
encryptionSettings,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ validationSettings }}' /* required */,
'{{ description }}',
'{{ deletionProtection }}',
'{{ encryptionSettings }}',
'{{ tags }}',
'{{ region }}'
RETURNING
arn,
createdDate,
lastUpdatedDate,
policyStoreId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: policy_stores
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the policy_stores resource.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an ConflictException error. Verified Permissions recognizes a ClientToken for eight hours. After eight hours, the next request with the same parameters performs the operation again regardless of the value of ClientToken.
    - name: validationSettings
      description: |
        Specifies the validation setting for this policy store. Currently, the only valid and required value is Mode. We recommend that you turn on STRICT mode only after you define a schema. If a schema doesn't exist, then STRICT mode causes any policy to fail validation, and Verified Permissions rejects the policy. You can turn off validation by using the UpdatePolicyStore. Then, when you have a schema defined, use UpdatePolicyStore again to turn validation back on.
      value:
        mode: "{{ mode }}"
    - name: description
      value: "{{ description }}"
      description: |
        Descriptive text that you can provide to help with identification of the current policy store.
    - name: deletionProtection
      value: "{{ deletionProtection }}"
      description: |
        Specifies whether the policy store can be deleted. If enabled, the policy store can't be deleted. The default state is DISABLED.
      valid_values: ['ENABLED', 'DISABLED']
    - name: encryptionSettings
      description: |
        Specifies the encryption settings used to encrypt the policy store and their child resources. Allows for the ability to use a customer owned KMS key for encryption of data. This is an optional field to be used when providing a customer-managed KMS key for encryption.
      value:
        kmsEncryptionSettings:
          key: "{{ key }}"
          encryptionContext: "{{ encryptionContext }}"
        default_: "{{ default_ }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        The list of key-value pairs to associate with the policy store.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_policy_store"
    values={[
        { label: 'update_policy_store', value: 'update_policy_store' }
    ]}
>
<TabItem value="update_policy_store">

Modifies the validation setting for a policy store. Verified Permissions is eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.

```sql
UPDATE aws.verifiedpermissions.policy_stores
SET 
policyStoreId = '{{ policyStoreId }}',
validationSettings = '{{ validationSettings }}',
deletionProtection = '{{ deletionProtection }}',
description = '{{ description }}'
WHERE 
region = '{{ region }}' --required
AND policyStoreId = '{{ policyStoreId }}' --required
AND validationSettings = '{{ validationSettings }}' --required
RETURNING
arn,
createdDate,
lastUpdatedDate,
policyStoreId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_policy_store"
    values={[
        { label: 'delete_policy_store', value: 'delete_policy_store' }
    ]}
>
<TabItem value="delete_policy_store">

Deletes the specified policy store. This operation is idempotent. If you specify a policy store that does not exist, the request response will still return a successful HTTP 200 status code.

```sql
DELETE FROM aws.verifiedpermissions.policy_stores
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_is_authorized"
    values={[
        { label: 'batch_is_authorized', value: 'batch_is_authorized' },
        { label: 'batch_is_authorized_with_token', value: 'batch_is_authorized_with_token' },
        { label: 'is_authorized', value: 'is_authorized' },
        { label: 'is_authorized_with_token', value: 'is_authorized_with_token' }
    ]}
>
<TabItem value="batch_is_authorized">

Makes a series of decisions about multiple authorization requests for one principal or resource. Each request contains the equivalent content of an IsAuthorized request: principal, action, resource, and context. Either the principal or the resource parameter must be identical across all requests. For example, Verified Permissions won't evaluate a pair of requests where bob views photo1 and alice views photo2. Authorization of bob to view photo1 and photo2, or bob and alice to view photo1, are valid batches. The request is evaluated against all policies in the specified policy store that match the entities that you declare. The result of the decisions is a series of Allow or Deny responses, along with the IDs of the policies that produced each decision. The entities of a BatchIsAuthorized API request can contain up to 100 principals and up to 100 resources. The requests of a BatchIsAuthorized API request can contain up to 30 requests. The BatchIsAuthorized operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission verifiedpermissions:IsAuthorized in their IAM policies.

```sql
EXEC aws.verifiedpermissions.policy_stores.batch_is_authorized 
@region='{{ region }}' --required 
@@json=
'{
"policyStoreId": "{{ policyStoreId }}", 
"entities": "{{ entities }}", 
"requests": "{{ requests }}"
}'
;
```
</TabItem>
<TabItem value="batch_is_authorized_with_token">

Makes a series of decisions about multiple authorization requests for one token. The principal in this request comes from an external identity source in the form of an identity or access token, formatted as a JSON web token (JWT). The information in the parameters can also define additional context that Verified Permissions can include in the evaluations. The request is evaluated against all policies in the specified policy store that match the entities that you provide in the entities declaration and in the token. The result of the decisions is a series of Allow or Deny responses, along with the IDs of the policies that produced each decision. The entities of a BatchIsAuthorizedWithToken API request can contain up to 100 resources and up to 99 user groups. The requests of a BatchIsAuthorizedWithToken API request can contain up to 30 requests. The BatchIsAuthorizedWithToken operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission verifiedpermissions:IsAuthorizedWithToken in their IAM policies.

```sql
EXEC aws.verifiedpermissions.policy_stores.batch_is_authorized_with_token 
@region='{{ region }}' --required 
@@json=
'{
"policyStoreId": "{{ policyStoreId }}", 
"identityToken": "{{ identityToken }}", 
"accessToken": "{{ accessToken }}", 
"entities": "{{ entities }}", 
"requests": "{{ requests }}"
}'
;
```
</TabItem>
<TabItem value="is_authorized">

Makes an authorization decision about a service request described in the parameters. The information in the parameters can also define additional context that Verified Permissions can include in the evaluation. The request is evaluated against all matching policies in the specified policy store. The result of the decision is either Allow or Deny, along with a list of the policies that resulted in the decision.

```sql
EXEC aws.verifiedpermissions.policy_stores.is_authorized 
@region='{{ region }}' --required 
@@json=
'{
"policyStoreId": "{{ policyStoreId }}", 
"principal": "{{ principal }}", 
"action": "{{ action }}", 
"resource": "{{ resource }}", 
"context": "{{ context }}", 
"entities": "{{ entities }}"
}'
;
```
</TabItem>
<TabItem value="is_authorized_with_token">

Makes an authorization decision about a service request described in the parameters. The principal in this request comes from an external identity source in the form of an identity token formatted as a JSON web token (JWT). The information in the parameters can also define additional context that Verified Permissions can include in the evaluation. The request is evaluated against all matching policies in the specified policy store. The result of the decision is either Allow or Deny, along with a list of the policies that resulted in the decision. Verified Permissions validates each token that is specified in a request by checking its expiration date and its signature. Tokens from an identity source user continue to be usable until they expire. Token revocation and resource deletion have no effect on the validity of a token in your policy store

```sql
EXEC aws.verifiedpermissions.policy_stores.is_authorized_with_token 
@region='{{ region }}' --required 
@@json=
'{
"policyStoreId": "{{ policyStoreId }}", 
"identityToken": "{{ identityToken }}", 
"accessToken": "{{ accessToken }}", 
"action": "{{ action }}", 
"resource": "{{ resource }}", 
"context": "{{ context }}", 
"entities": "{{ entities }}"
}'
;
```
</TabItem>
</Tabs>
