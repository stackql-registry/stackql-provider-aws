--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
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

Creates, updates, deletes, gets or lists a <code>policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.verifiedpermissions.policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_policy"
    values={[
        { label: 'get_policy', value: 'get_policy' },
        { label: 'batch_get_policy', value: 'batch_get_policy' },
        { label: 'list_policies', value: 'list_policies' }
    ]}
>
<TabItem value="get_policy">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the policy, if one was assigned when the policy was created or last updated. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>The action that a policy permits or forbids. For example, &#123;"actions": &#91;&#123;"actionId": "ViewPhoto", "actionType": "PhotoFlash::Action"&#125;, &#123;"entityID": "SharePhoto", "entityType": "PhotoFlash::Action"&#125;&#93;&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the policy was originally created.</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td>The definition of the requested policy.</td>
</tr>
<tr>
    <td><CopyableCode code="effect" /></td>
    <td><code>string</code></td>
    <td>The effect of the decision that a policy returns to an authorization request. For example, "effect": "Permit". (Permit, Forbid)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the policy was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="policyId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the policy that you want information about. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyStoreId" /></td>
    <td><code>string</code></td>
    <td>The ID of the policy store that contains the policy that you want information about. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyType" /></td>
    <td><code>string</code></td>
    <td>The type of the policy. (STATIC, TEMPLATE_LINKED)</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>object</code></td>
    <td>Contains the identifier of an entity, including its ID and type. This data type is used as a request parameter for IsAuthorized operation, and as a response parameter for the CreatePolicy, GetPolicy, and UpdatePolicy operations. Example: &#123;"entityId":"string","entityType":"string"&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>Contains the identifier of an entity, including its ID and type. This data type is used as a request parameter for IsAuthorized operation, and as a response parameter for the CreatePolicy, GetPolicy, and UpdatePolicy operations. Example: &#123;"entityId":"string","entityType":"string"&#125;</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="batch_get_policy">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Information about the policies from the request that resulted in an error. These results are returned in the order they were requested.</td>
</tr>
<tr>
    <td><CopyableCode code="results" /></td>
    <td><code>array</code></td>
    <td>Information about the policies listed in the request that were successfully returned. These results are returned in the order they were requested.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_policies">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the policy, if one was assigned when the policy was created or last updated. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>The action that a policy permits or forbids. For example, &#123;"actions": &#91;&#123;"actionId": "ViewPhoto", "actionType": "PhotoFlash::Action"&#125;, &#123;"entityID": "SharePhoto", "entityType": "PhotoFlash::Action"&#125;&#93;&#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td>The policy definition of an item in the list of policies returned.</td>
</tr>
<tr>
    <td><CopyableCode code="effect" /></td>
    <td><code>string</code></td>
    <td>The effect of the decision that a policy returns to an authorization request. For example, "effect": "Permit". (Permit, Forbid)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the policy was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="policyId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the policy you want information about. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyStoreId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the policy store where the policy you want information about is stored. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyType" /></td>
    <td><code>string</code></td>
    <td>The type of the policy. This is one of the following values: STATIC TEMPLATE_LINKED (STATIC, TEMPLATE_LINKED)</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>object</code></td>
    <td>Contains the identifier of an entity, including its ID and type. This data type is used as a request parameter for IsAuthorized operation, and as a response parameter for the CreatePolicy, GetPolicy, and UpdatePolicy operations. Example: &#123;"entityId":"string","entityType":"string"&#125;</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>Contains the identifier of an entity, including its ID and type. This data type is used as a request parameter for IsAuthorized operation, and as a response parameter for the CreatePolicy, GetPolicy, and UpdatePolicy operations. Example: &#123;"entityId":"string","entityType":"string"&#125;</td>
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
    <td><a href="#get_policy"><CopyableCode code="get_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified policy.</td>
</tr>
<tr>
    <td><a href="#batch_get_policy"><CopyableCode code="batch_get_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a group (batch) of policies. The BatchGetPolicy operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission verifiedpermissions:GetPolicy in their IAM policies.</td>
</tr>
<tr>
    <td><a href="#list_policies"><CopyableCode code="list_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of all policies stored in the specified policy store.</td>
</tr>
<tr>
    <td><a href="#create_policy"><CopyableCode code="create_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyStoreId"><code>policyStoreId</code></a>, <a href="#parameter-definition"><code>definition</code></a></td>
    <td></td>
    <td>Creates a Cedar policy and saves it in the specified policy store. You can create either a static policy or a policy linked to a policy template. To create a static policy, provide the Cedar policy text in the StaticPolicy section of the PolicyDefinition. To create a policy that is dynamically linked to a policy template, specify the policy template ID and the principal and resource to associate with this policy in the templateLinked section of the PolicyDefinition. If the policy template is ever updated, any policies linked to the policy template automatically use the updated template. Creating a policy causes it to be validated against the schema in the policy store. If the policy doesn't pass validation, the operation fails and the policy isn't stored. Verified Permissions is eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.</td>
</tr>
<tr>
    <td><a href="#update_policy"><CopyableCode code="update_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyStoreId"><code>policyStoreId</code></a>, <a href="#parameter-policyId"><code>policyId</code></a></td>
    <td></td>
    <td>Modifies a Cedar static policy in the specified policy store. You can change only certain elements of the UpdatePolicyDefinition parameter. You can directly update only static policies. To change a template-linked policy, you must update the template instead, using UpdatePolicyTemplate. If policy validation is enabled in the policy store, then updating a static policy causes Verified Permissions to validate the policy against the schema in the policy store. If the updated static policy doesn't pass validation, the operation fails and the update isn't stored. When you edit a static policy, you can change only certain elements of a static policy: The action referenced by the policy. A condition clause, such as when and unless. You can't change these elements of a static policy: Changing a policy from a static policy to a template-linked policy. Changing the effect of a static policy from permit or forbid. The principal referenced by a static policy. The resource referenced by a static policy. To update a template-linked policy, you must update the template instead. Verified Permissions is eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.</td>
</tr>
<tr>
    <td><a href="#delete_policy"><CopyableCode code="delete_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified policy from the policy store. This operation is idempotent; if you specify a policy that doesn't exist, the request response returns a successful HTTP 200 status code.</td>
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
    defaultValue="get_policy"
    values={[
        { label: 'get_policy', value: 'get_policy' },
        { label: 'batch_get_policy', value: 'batch_get_policy' },
        { label: 'list_policies', value: 'list_policies' }
    ]}
>
<TabItem value="get_policy">

Retrieves information about the specified policy.

```sql
SELECT
name,
actions,
createdDate,
definition,
effect,
lastUpdatedDate,
policyId,
policyStoreId,
policyType,
principal,
resource
FROM aws.verifiedpermissions.policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="batch_get_policy">

Retrieves information about a group (batch) of policies. The BatchGetPolicy operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission verifiedpermissions:GetPolicy in their IAM policies.

```sql
SELECT
errors,
results
FROM aws.verifiedpermissions.policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_policies">

Returns a paginated list of all policies stored in the specified policy store.

```sql
SELECT
name,
actions,
createdDate,
definition,
effect,
lastUpdatedDate,
policyId,
policyStoreId,
policyType,
principal,
resource
FROM aws.verifiedpermissions.policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_policy"
    values={[
        { label: 'create_policy', value: 'create_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_policy">

Creates a Cedar policy and saves it in the specified policy store. You can create either a static policy or a policy linked to a policy template. To create a static policy, provide the Cedar policy text in the StaticPolicy section of the PolicyDefinition. To create a policy that is dynamically linked to a policy template, specify the policy template ID and the principal and resource to associate with this policy in the templateLinked section of the PolicyDefinition. If the policy template is ever updated, any policies linked to the policy template automatically use the updated template. Creating a policy causes it to be validated against the schema in the policy store. If the policy doesn't pass validation, the operation fails and the policy isn't stored. Verified Permissions is eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.

```sql
INSERT INTO aws.verifiedpermissions.policies (
clientToken,
policyStoreId,
definition,
name,
region
)
SELECT 
'{{ clientToken }}',
'{{ policyStoreId }}' /* required */,
'{{ definition }}' /* required */,
'{{ name }}',
'{{ region }}'
RETURNING
actions,
createdDate,
effect,
lastUpdatedDate,
policyId,
policyStoreId,
policyType,
principal,
resource
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the policies resource.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an ConflictException error. Verified Permissions recognizes a ClientToken for eight hours. After eight hours, the next request with the same parameters performs the operation again regardless of the value of ClientToken.
    - name: policyStoreId
      value: "{{ policyStoreId }}"
      description: |
        Specifies the PolicyStoreId of the policy store you want to store the policy in. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example: ID: PSEXAMPLEabcdefg111111 Alias name: policy-store-alias/example-policy-store To view aliases, use ListPolicyStoreAliases.
    - name: definition
      description: |
        A structure that specifies the policy type and content to use for the new policy. You must include either a static or a templateLinked element. The policy content must be written in the Cedar policy language.
      value:
        static:
          description: "{{ description }}"
          statement: "{{ statement }}"
        templateLinked:
          policyTemplateId: "{{ policyTemplateId }}"
          principal:
            entityType: "{{ entityType }}"
            entityId: "{{ entityId }}"
          resource:
            entityType: "{{ entityType }}"
            entityId: "{{ entityId }}"
    - name: name
      value: "{{ name }}"
      description: |
        Specifies a name for the policy that is unique among all policies within the policy store. You can use the name in place of the policy ID in API operations that reference the policy. The name must be prefixed with name/. If you specify a name that is already associated with another policy in the policy store, you receive a ConflictException error.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_policy"
    values={[
        { label: 'update_policy', value: 'update_policy' }
    ]}
>
<TabItem value="update_policy">

Modifies a Cedar static policy in the specified policy store. You can change only certain elements of the UpdatePolicyDefinition parameter. You can directly update only static policies. To change a template-linked policy, you must update the template instead, using UpdatePolicyTemplate. If policy validation is enabled in the policy store, then updating a static policy causes Verified Permissions to validate the policy against the schema in the policy store. If the updated static policy doesn't pass validation, the operation fails and the update isn't stored. When you edit a static policy, you can change only certain elements of a static policy: The action referenced by the policy. A condition clause, such as when and unless. You can't change these elements of a static policy: Changing a policy from a static policy to a template-linked policy. Changing the effect of a static policy from permit or forbid. The principal referenced by a static policy. The resource referenced by a static policy. To update a template-linked policy, you must update the template instead. Verified Permissions is eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.

```sql
UPDATE aws.verifiedpermissions.policies
SET 
policyStoreId = '{{ policyStoreId }}',
policyId = '{{ policyId }}',
definition = '{{ definition }}',
name = '{{ name }}'
WHERE 
region = '{{ region }}' --required
AND policyStoreId = '{{ policyStoreId }}' --required
AND policyId = '{{ policyId }}' --required
RETURNING
actions,
createdDate,
effect,
lastUpdatedDate,
policyId,
policyStoreId,
policyType,
principal,
resource;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_policy"
    values={[
        { label: 'delete_policy', value: 'delete_policy' }
    ]}
>
<TabItem value="delete_policy">

Deletes the specified policy from the policy store. This operation is idempotent; if you specify a policy that doesn't exist, the request response returns a successful HTTP 200 status code.

```sql
DELETE FROM aws.verifiedpermissions.policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
