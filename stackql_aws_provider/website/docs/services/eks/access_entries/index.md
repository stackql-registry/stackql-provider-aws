--- 
title: access_entries
hide_title: false
hide_table_of_contents: false
keywords:
  - access_entries
  - eks
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

Creates, updates, deletes, gets or lists an <code>access_entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_entries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.eks.access_entries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_access_entry"
    values={[
        { label: 'describe_access_entry', value: 'describe_access_entry' },
        { label: 'list_access_entries', value: 'list_access_entries' }
    ]}
>
<TabItem value="describe_access_entry">

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
    <td><CopyableCode code="accessEntryArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the access entry.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td>The name of your cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp at object creation.</td>
</tr>
<tr>
    <td><CopyableCode code="kubernetesGroups" /></td>
    <td><code>array</code></td>
    <td>A name that you've specified in a Kubernetes RoleBinding or ClusterRoleBinding object so that Kubernetes authorizes the principalARN access to cluster objects.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp for the last modification to the object.</td>
</tr>
<tr>
    <td><CopyableCode code="principalArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM principal for the access entry. If you ever delete the IAM principal with this ARN, the access entry isn't automatically deleted. We recommend that you delete the access entry with an ARN for an IAM principal that you delete. If you don't delete the access entry and ever recreate the IAM principal, even if it has the same ARN, the access entry won't work. This is because even though the ARN is the same for the recreated IAM principal, the roleID or userID (you can see this with the Security Token Service GetCallerIdentity API) is different for the recreated IAM principal than it was for the original IAM principal. Even though you don't see the IAM principal's roleID or userID for an access entry, Amazon EKS stores it with the access entry.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the access entry.</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The name of a user that can authenticate to your cluster.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_access_entries">

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
    <td><CopyableCode code="access_entry" /></td>
    <td><code>string</code></td>
    <td>The list of access entries that exist for the cluster.</td>
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
    <td><a href="#describe_access_entry"><CopyableCode code="describe_access_entry" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-principal_arn"><code>principal_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an access entry.</td>
</tr>
<tr>
    <td><a href="#list_access_entries"><CopyableCode code="list_access_entries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-associatedPolicyArn"><code>associatedPolicyArn</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the access entries for your cluster.</td>
</tr>
<tr>
    <td><a href="#create_access_entry"><CopyableCode code="create_access_entry" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-principalArn"><code>principalArn</code></a></td>
    <td></td>
    <td>Creates an access entry. An access entry allows an IAM principal to access your cluster. Access entries can replace the need to maintain entries in the aws-auth ConfigMap for authentication. You have the following options for authorizing an IAM principal to access Kubernetes objects on your cluster: Kubernetes role-based access control (RBAC), Amazon EKS, or both. Kubernetes RBAC authorization requires you to create and manage Kubernetes Role, ClusterRole, RoleBinding, and ClusterRoleBinding objects, in addition to managing access entries. If you use Amazon EKS authorization exclusively, you don't need to create and manage Kubernetes Role, ClusterRole, RoleBinding, and ClusterRoleBinding objects. For more information about access entries, see Access entries in the Amazon EKS User Guide.</td>
</tr>
<tr>
    <td><a href="#update_access_entry"><CopyableCode code="update_access_entry" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-principal_arn"><code>principal_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an access entry.</td>
</tr>
<tr>
    <td><a href="#delete_access_entry"><CopyableCode code="delete_access_entry" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-principal_arn"><code>principal_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an access entry. Deleting an access entry of a type other than Standard can cause your cluster to function improperly. If you delete an access entry in error, you can recreate it.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of your cluster.</td>
</tr>
<tr id="parameter-principal_arn">
    <td><CopyableCode code="principal_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM principal for the AccessEntry.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-associatedPolicyArn">
    <td><CopyableCode code="associatedPolicyArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of an AccessPolicy. When you specify an access policy ARN, only the access entries associated to that access policy are returned. For a list of available policy ARNs, use ListAccessPolicies.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return. This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_access_entry"
    values={[
        { label: 'describe_access_entry', value: 'describe_access_entry' },
        { label: 'list_access_entries', value: 'list_access_entries' }
    ]}
>
<TabItem value="describe_access_entry">

Describes an access entry.

```sql
SELECT
accessEntryArn,
clusterName,
createdAt,
kubernetesGroups,
modifiedAt,
principalArn,
tags,
type_,
username
FROM aws.eks.access_entries
WHERE name = '{{ name }}' -- required
AND principal_arn = '{{ principal_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_access_entries">

Lists the access entries for your cluster.

```sql
SELECT
access_entry
FROM aws.eks.access_entries
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
AND associatedPolicyArn = '{{ associatedPolicyArn }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_access_entry"
    values={[
        { label: 'create_access_entry', value: 'create_access_entry' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_access_entry">

Creates an access entry. An access entry allows an IAM principal to access your cluster. Access entries can replace the need to maintain entries in the aws-auth ConfigMap for authentication. You have the following options for authorizing an IAM principal to access Kubernetes objects on your cluster: Kubernetes role-based access control (RBAC), Amazon EKS, or both. Kubernetes RBAC authorization requires you to create and manage Kubernetes Role, ClusterRole, RoleBinding, and ClusterRoleBinding objects, in addition to managing access entries. If you use Amazon EKS authorization exclusively, you don't need to create and manage Kubernetes Role, ClusterRole, RoleBinding, and ClusterRoleBinding objects. For more information about access entries, see Access entries in the Amazon EKS User Guide.

```sql
INSERT INTO aws.eks.access_entries (
principalArn,
kubernetesGroups,
tags,
clientRequestToken,
username,
type,
name,
region
)
SELECT 
'{{ principalArn }}' /* required */,
'{{ kubernetesGroups }}',
'{{ tags }}',
'{{ clientRequestToken }}',
'{{ username }}',
'{{ type }}',
'{{ name }}',
'{{ region }}'
RETURNING
accessEntry
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_entries
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the access_entries resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the access_entries resource.
    - name: principalArn
      value: "{{ principalArn }}"
    - name: kubernetesGroups
      value:
        - "{{ kubernetesGroups }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them. The following basic restrictions apply to tags: Maximum number of tags per resource – 50 For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length – 128 Unicode characters in UTF-8 Maximum value length – 256 Unicode characters in UTF-8 If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
    - name: username
      value: "{{ username }}"
    - name: type
      value: "{{ type }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_access_entry"
    values={[
        { label: 'update_access_entry', value: 'update_access_entry' }
    ]}
>
<TabItem value="update_access_entry">

Updates an access entry.

```sql
UPDATE aws.eks.access_entries
SET 
kubernetesGroups = '{{ kubernetesGroups }}',
clientRequestToken = '{{ clientRequestToken }}',
username = '{{ username }}'
WHERE 
name = '{{ name }}' --required
AND principal_arn = '{{ principal_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
accessEntry;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_access_entry"
    values={[
        { label: 'delete_access_entry', value: 'delete_access_entry' }
    ]}
>
<TabItem value="delete_access_entry">

Deletes an access entry. Deleting an access entry of a type other than Standard can cause your cluster to function improperly. If you delete an access entry in error, you can recreate it.

```sql
DELETE FROM aws.eks.access_entries
WHERE name = '{{ name }}' --required
AND principal_arn = '{{ principal_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
