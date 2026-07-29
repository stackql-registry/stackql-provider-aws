--- 
title: policy_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_templates
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

Creates, updates, deletes, gets or lists a <code>policy_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policy_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.verifiedpermissions.policy_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_policy_template"
    values={[
        { label: 'get_policy_template', value: 'get_policy_template' },
        { label: 'list_policy_templates', value: 'list_policy_templates' }
    ]}
>
<TabItem value="get_policy_template">

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
    <td>The name of the policy template, if one was assigned when the policy template was created or last updated. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the policy template was originally created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the policy template.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the policy template was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_store_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the policy store that contains the policy template. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_template_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the policy template. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="statement" /></td>
    <td><code>string</code></td>
    <td>The content of the body of the policy template written in the Cedar policy language.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_policy_templates">

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
    <td>The name of the policy template, if one was assigned when the policy template was created or last updated. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the policy template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description attached to the policy template.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the policy template was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_store_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the policy store that contains the template. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_template_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the policy template. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_policy_template"><CopyableCode code="get_policy_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve the details for the specified policy template in the specified policy store.</td>
</tr>
<tr>
    <td><a href="#list_policy_templates"><CopyableCode code="list_policy_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of all policy templates in the specified policy store.</td>
</tr>
<tr>
    <td><a href="#create_policy_template"><CopyableCode code="create_policy_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyStoreId"><code>policyStoreId</code></a>, <a href="#parameter-statement"><code>statement</code></a></td>
    <td></td>
    <td>Creates a policy template. A template can use placeholders for the principal and resource. A template must be instantiated into a policy by associating it with specific principals and resources to use for the placeholders. That instantiated policy can then be considered in authorization decisions. The instantiated policy works identically to any other policy, except that it is dynamically linked to the template. If the template changes, then any policies that are linked to that template are immediately updated as well. Verified Permissions is eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.</td>
</tr>
<tr>
    <td><a href="#update_policy_template"><CopyableCode code="update_policy_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyStoreId"><code>policyStoreId</code></a>, <a href="#parameter-policyTemplateId"><code>policyTemplateId</code></a>, <a href="#parameter-statement"><code>statement</code></a></td>
    <td></td>
    <td>Updates the specified policy template. You can update only the description and the some elements of the policyBody. Changes you make to the policy template content are immediately (within the constraints of eventual consistency) reflected in authorization decisions that involve all template-linked policies instantiated from this template. Verified Permissions is eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.</td>
</tr>
<tr>
    <td><a href="#delete_policy_template"><CopyableCode code="delete_policy_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified policy template from the policy store. This operation also deletes any policies that were created from the specified policy template. Those policies are immediately removed from all future API responses, and are asynchronously deleted from the policy store.</td>
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
    defaultValue="get_policy_template"
    values={[
        { label: 'get_policy_template', value: 'get_policy_template' },
        { label: 'list_policy_templates', value: 'list_policy_templates' }
    ]}
>
<TabItem value="get_policy_template">

Retrieve the details for the specified policy template in the specified policy store.

```sql
SELECT
name,
created_date,
description,
last_updated_date,
policy_store_id,
policy_template_id,
statement
FROM aws.verifiedpermissions.policy_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_policy_templates">

Returns a paginated list of all policy templates in the specified policy store.

```sql
SELECT
name,
created_date,
description,
last_updated_date,
policy_store_id,
policy_template_id
FROM aws.verifiedpermissions.policy_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_policy_template"
    values={[
        { label: 'create_policy_template', value: 'create_policy_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_policy_template">

Creates a policy template. A template can use placeholders for the principal and resource. A template must be instantiated into a policy by associating it with specific principals and resources to use for the placeholders. That instantiated policy can then be considered in authorization decisions. The instantiated policy works identically to any other policy, except that it is dynamically linked to the template. If the template changes, then any policies that are linked to that template are immediately updated as well. Verified Permissions is eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.

```sql
INSERT INTO aws.verifiedpermissions.policy_templates (
clientToken,
policyStoreId,
description,
statement,
name,
region
)
SELECT 
'{{ clientToken }}',
'{{ policyStoreId }}' /* required */,
'{{ description }}',
'{{ statement }}' /* required */,
'{{ name }}',
'{{ region }}'
RETURNING
created_date,
last_updated_date,
policy_store_id,
policy_template_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: policy_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the policy_templates resource.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an ConflictException error. Verified Permissions recognizes a ClientToken for eight hours. After eight hours, the next request with the same parameters performs the operation again regardless of the value of ClientToken.
    - name: policyStoreId
      value: "{{ policyStoreId }}"
      description: |
        The ID of the policy store in which to create the policy template. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example: ID: PSEXAMPLEabcdefg111111 Alias name: policy-store-alias/example-policy-store To view aliases, use ListPolicyStoreAliases.
    - name: description
      value: "{{ description }}"
      description: |
        Specifies a description for the policy template.
    - name: statement
      value: "{{ statement }}"
      description: |
        Specifies the content that you want to use for the new policy template, written in the Cedar policy language.
    - name: name
      value: "{{ name }}"
      description: |
        Specifies a name for the policy template that is unique among all policy templates within the policy store. You can use the name in place of the policy template ID in API operations that reference the policy template. The name must be prefixed with name/. If you specify a name that is already associated with another policy template in the policy store, you receive a ConflictException error.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_policy_template"
    values={[
        { label: 'update_policy_template', value: 'update_policy_template' }
    ]}
>
<TabItem value="update_policy_template">

Updates the specified policy template. You can update only the description and the some elements of the policyBody. Changes you make to the policy template content are immediately (within the constraints of eventual consistency) reflected in authorization decisions that involve all template-linked policies instantiated from this template. Verified Permissions is eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.

```sql
UPDATE aws.verifiedpermissions.policy_templates
SET 
policyStoreId = '{{ policyStoreId }}',
policyTemplateId = '{{ policyTemplateId }}',
description = '{{ description }}',
statement = '{{ statement }}',
name = '{{ name }}'
WHERE 
region = '{{ region }}' --required
AND policyStoreId = '{{ policyStoreId }}' --required
AND policyTemplateId = '{{ policyTemplateId }}' --required
AND statement = '{{ statement }}' --required
RETURNING
created_date,
last_updated_date,
policy_store_id,
policy_template_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_policy_template"
    values={[
        { label: 'delete_policy_template', value: 'delete_policy_template' }
    ]}
>
<TabItem value="delete_policy_template">

Deletes the specified policy template from the policy store. This operation also deletes any policies that were created from the specified policy template. Those policies are immediately removed from all future API responses, and are asynchronously deleted from the policy store.

```sql
DELETE FROM aws.verifiedpermissions.policy_templates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
