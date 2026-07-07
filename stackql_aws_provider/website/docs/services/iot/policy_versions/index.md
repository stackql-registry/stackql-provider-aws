--- 
title: policy_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_versions
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

Creates, updates, deletes, gets or lists a <code>policy_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policy_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.policy_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_policy_version"
    values={[
        { label: 'get_policy_version', value: 'get_policy_version' },
        { label: 'list_policy_versions', value: 'list_policy_versions' }
    ]}
>
<TabItem value="get_policy_version">

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
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="generationId" /></td>
    <td><code>string</code></td>
    <td>The generation ID of the policy version.</td>
</tr>
<tr>
    <td><CopyableCode code="isDefaultVersion" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the policy version is the default.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the policy was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="policyArn" /></td>
    <td><code>string</code></td>
    <td>The policy ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="policyDocument" /></td>
    <td><code>string</code></td>
    <td>The JSON document that describes the policy. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyName" /></td>
    <td><code>string</code></td>
    <td>The policy name. (pattern: &lt;code&gt;&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyVersionId" /></td>
    <td><code>string</code></td>
    <td>The policy version ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_policy_versions">

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
    <td><CopyableCode code="policyVersions" /></td>
    <td><code>array</code></td>
    <td>The policy versions.</td>
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
    <td><a href="#get_policy_version"><CopyableCode code="get_policy_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_name"><code>policy_name</code></a>, <a href="#parameter-policy_version_id"><code>policy_version_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified policy version. Requires permission to access the GetPolicyVersion action.</td>
</tr>
<tr>
    <td><a href="#list_policy_versions"><CopyableCode code="list_policy_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_name"><code>policy_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the versions of the specified policy and identifies the default version. Requires permission to access the ListPolicyVersions action.</td>
</tr>
<tr>
    <td><a href="#create_policy_version"><CopyableCode code="create_policy_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-policy_name"><code>policy_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyDocument"><code>policyDocument</code></a></td>
    <td><a href="#parameter-setAsDefault"><code>setAsDefault</code></a></td>
    <td>Creates a new version of the specified IoT policy. To update a policy, create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must use DeletePolicyVersion to delete an existing version before you create a new one. Optionally, you can set the new version as the policy's default version. The default version is the operative version (that is, the version that is in effect for the certificates to which the policy is attached). Requires permission to access the CreatePolicyVersion action.</td>
</tr>
<tr>
    <td><a href="#set_default_policy_version"><CopyableCode code="set_default_policy_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-policy_name"><code>policy_name</code></a>, <a href="#parameter-policy_version_id"><code>policy_version_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sets the specified version of the specified policy as the policy's default (operative) version. This action affects all certificates to which the policy is attached. To list the principals the policy is attached to, use the ListPrincipalPolicies action. Requires permission to access the SetDefaultPolicyVersion action.</td>
</tr>
<tr>
    <td><a href="#delete_policy_version"><CopyableCode code="delete_policy_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policy_name"><code>policy_name</code></a>, <a href="#parameter-policy_version_id"><code>policy_version_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified version of the specified policy. You cannot delete the default version of a policy using this action. To delete the default version of a policy, use DeletePolicy. To find out which version of a policy is marked as the default version, use ListPolicyVersions. Requires permission to access the DeletePolicyVersion action.</td>
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
    <td>The name of the policy.</td>
</tr>
<tr id="parameter-policy_version_id">
    <td><CopyableCode code="policy_version_id" /></td>
    <td><code>string</code></td>
    <td>The policy version ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-setAsDefault">
    <td><CopyableCode code="setAsDefault" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the policy version is set as the default. When this parameter is true, the new policy version becomes the operative version (that is, the version that is in effect for the certificates to which the policy is attached).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_policy_version"
    values={[
        { label: 'get_policy_version', value: 'get_policy_version' },
        { label: 'list_policy_versions', value: 'list_policy_versions' }
    ]}
>
<TabItem value="get_policy_version">

Gets information about the specified policy version. Requires permission to access the GetPolicyVersion action.

```sql
SELECT
creationDate,
generationId,
isDefaultVersion,
lastModifiedDate,
policyArn,
policyDocument,
policyName,
policyVersionId
FROM aws.iot.policy_versions
WHERE policy_name = '{{ policy_name }}' -- required
AND policy_version_id = '{{ policy_version_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_policy_versions">

Lists the versions of the specified policy and identifies the default version. Requires permission to access the ListPolicyVersions action.

```sql
SELECT
policyVersions
FROM aws.iot.policy_versions
WHERE policy_name = '{{ policy_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_policy_version"
    values={[
        { label: 'create_policy_version', value: 'create_policy_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_policy_version">

Creates a new version of the specified IoT policy. To update a policy, create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must use DeletePolicyVersion to delete an existing version before you create a new one. Optionally, you can set the new version as the policy's default version. The default version is the operative version (that is, the version that is in effect for the certificates to which the policy is attached). Requires permission to access the CreatePolicyVersion action.

```sql
INSERT INTO aws.iot.policy_versions (
policyDocument,
policy_name,
region,
setAsDefault
)
SELECT 
'{{ policyDocument }}' /* required */,
'{{ policy_name }}',
'{{ region }}',
'{{ setAsDefault }}'
RETURNING
isDefaultVersion,
policyArn,
policyDocument,
policyVersionId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: policy_versions
  props:
    - name: policy_name
      value: "{{ policy_name }}"
      description: Required parameter for the policy_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the policy_versions resource.
    - name: policyDocument
      value: "{{ policyDocument }}"
    - name: setAsDefault
      value: {{ setAsDefault }}
      description: Specifies whether the policy version is set as the default. When this parameter is true, the new policy version becomes the operative version (that is, the version that is in effect for the certificates to which the policy is attached).
      description: Specifies whether the policy version is set as the default. When this parameter is true, the new policy version becomes the operative version (that is, the version that is in effect for the certificates to which the policy is attached).
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_default_policy_version"
    values={[
        { label: 'set_default_policy_version', value: 'set_default_policy_version' }
    ]}
>
<TabItem value="set_default_policy_version">

Sets the specified version of the specified policy as the policy's default (operative) version. This action affects all certificates to which the policy is attached. To list the principals the policy is attached to, use the ListPrincipalPolicies action. Requires permission to access the SetDefaultPolicyVersion action.

```sql
UPDATE aws.iot.policy_versions
SET 
-- No updatable properties
WHERE 
policy_name = '{{ policy_name }}' --required
AND policy_version_id = '{{ policy_version_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_policy_version"
    values={[
        { label: 'delete_policy_version', value: 'delete_policy_version' }
    ]}
>
<TabItem value="delete_policy_version">

Deletes the specified version of the specified policy. You cannot delete the default version of a policy using this action. To delete the default version of a policy, use DeletePolicy. To find out which version of a policy is marked as the default version, use ListPolicyVersions. Requires permission to access the DeletePolicyVersion action.

```sql
DELETE FROM aws.iot.policy_versions
WHERE policy_name = '{{ policy_name }}' --required
AND policy_version_id = '{{ policy_version_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
