--- 
title: fargate_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - fargate_profiles
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

Creates, updates, deletes, gets or lists a <code>fargate_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fargate_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.eks.fargate_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fargate_profile"
    values={[
        { label: 'describe_fargate_profile', value: 'describe_fargate_profile' },
        { label: 'list_fargate_profiles', value: 'list_fargate_profiles' }
    ]}
>
<TabItem value="describe_fargate_profile">

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
    <td><CopyableCode code="cluster_name" /></td>
    <td><code>string</code></td>
    <td>The name of your cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp at object creation.</td>
</tr>
<tr>
    <td><CopyableCode code="fargate_profile_arn" /></td>
    <td><code>string</code></td>
    <td>The full Amazon Resource Name (ARN) of the Fargate profile.</td>
</tr>
<tr>
    <td><CopyableCode code="fargate_profile_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Fargate profile.</td>
</tr>
<tr>
    <td><CopyableCode code="health" /></td>
    <td><code>object</code></td>
    <td>The health status of the Fargate profile. If there are issues with your Fargate profile's health, they are listed here.</td>
</tr>
<tr>
    <td><CopyableCode code="pod_execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Pod execution role to use for any Pod that matches the selectors in the Fargate profile. For more information, see Pod execution role in the Amazon EKS User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="selectors" /></td>
    <td><code>array</code></td>
    <td>The selectors to match for a Pod to use this Fargate profile.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Fargate profile. (CREATING, ACTIVE, DELETING, CREATE_FAILED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="subnets" /></td>
    <td><code>array</code></td>
    <td>The IDs of subnets to launch a Pod into.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fargate_profiles">

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
    <td><CopyableCode code="fargate_profile_name" /></td>
    <td><code>string</code></td>
    <td>A list of all of the Fargate profiles associated with the specified cluster.</td>
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
    <td><a href="#describe_fargate_profile"><CopyableCode code="describe_fargate_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-fargate_profile_name"><code>fargate_profile_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an Fargate profile.</td>
</tr>
<tr>
    <td><a href="#list_fargate_profiles"><CopyableCode code="list_fargate_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the Fargate profiles associated with the specified cluster in your Amazon Web Services account in the specified Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#create_fargate_profile"><CopyableCode code="create_fargate_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-fargateProfileName"><code>fargateProfileName</code></a>, <a href="#parameter-podExecutionRoleArn"><code>podExecutionRoleArn</code></a></td>
    <td></td>
    <td>Creates an Fargate profile for your Amazon EKS cluster. You must have at least one Fargate profile in a cluster to be able to run pods on Fargate. The Fargate profile allows an administrator to declare which pods run on Fargate and specify which pods run on which Fargate profile. This declaration is done through the profile's selectors. Each profile can have up to five selectors that contain a namespace and labels. A namespace is required for every selector. The label field consists of multiple optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is run on Fargate. When you create a Fargate profile, you must specify a pod execution role to use with the pods that are scheduled with the profile. This role is added to the cluster's Kubernetes Role Based Access Control (RBAC) for authorization so that the kubelet that is running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can appear in your cluster as a node. The pod execution role also provides IAM permissions to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more information, see Pod Execution Role in the Amazon EKS User Guide. Fargate profiles are immutable. However, you can create a new updated profile to replace an existing profile and then delete the original after the updated profile has finished creating. If any Fargate profiles in a cluster are in the DELETING status, you must wait for that Fargate profile to finish deleting before you can create any other profiles in that cluster. For more information, see Fargate profile in the Amazon EKS User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_fargate_profile"><CopyableCode code="delete_fargate_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-fargate_profile_name"><code>fargate_profile_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Fargate profile. When you delete a Fargate profile, any Pod running on Fargate that was created with the profile is deleted. If the Pod matches another Fargate profile, then it is scheduled on Fargate with that profile. If it no longer matches any Fargate profiles, then it's not scheduled on Fargate and may remain in a pending state. Only one Fargate profile in a cluster can be in the DELETING status at a time. You must wait for a Fargate profile to finish deleting before you can delete any other profiles in that cluster.</td>
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
<tr id="parameter-fargate_profile_name">
    <td><CopyableCode code="fargate_profile_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Fargate profile to delete.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of your cluster.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
    defaultValue="describe_fargate_profile"
    values={[
        { label: 'describe_fargate_profile', value: 'describe_fargate_profile' },
        { label: 'list_fargate_profiles', value: 'list_fargate_profiles' }
    ]}
>
<TabItem value="describe_fargate_profile">

Describes an Fargate profile.

```sql
SELECT
cluster_name,
created_at,
fargate_profile_arn,
fargate_profile_name,
health,
pod_execution_role_arn,
selectors,
status,
subnets,
tags
FROM aws.eks.fargate_profiles
WHERE name = '{{ name }}' -- required
AND fargate_profile_name = '{{ fargate_profile_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_fargate_profiles">

Lists the Fargate profiles associated with the specified cluster in your Amazon Web Services account in the specified Amazon Web Services Region.

```sql
SELECT
fargate_profile_name
FROM aws.eks.fargate_profiles
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_fargate_profile"
    values={[
        { label: 'create_fargate_profile', value: 'create_fargate_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_fargate_profile">

Creates an Fargate profile for your Amazon EKS cluster. You must have at least one Fargate profile in a cluster to be able to run pods on Fargate. The Fargate profile allows an administrator to declare which pods run on Fargate and specify which pods run on which Fargate profile. This declaration is done through the profile's selectors. Each profile can have up to five selectors that contain a namespace and labels. A namespace is required for every selector. The label field consists of multiple optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is run on Fargate. When you create a Fargate profile, you must specify a pod execution role to use with the pods that are scheduled with the profile. This role is added to the cluster's Kubernetes Role Based Access Control (RBAC) for authorization so that the kubelet that is running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can appear in your cluster as a node. The pod execution role also provides IAM permissions to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more information, see Pod Execution Role in the Amazon EKS User Guide. Fargate profiles are immutable. However, you can create a new updated profile to replace an existing profile and then delete the original after the updated profile has finished creating. If any Fargate profiles in a cluster are in the DELETING status, you must wait for that Fargate profile to finish deleting before you can create any other profiles in that cluster. For more information, see Fargate profile in the Amazon EKS User Guide.

```sql
INSERT INTO aws.eks.fargate_profiles (
fargateProfileName,
podExecutionRoleArn,
subnets,
selectors,
clientRequestToken,
tags,
name,
region
)
SELECT 
'{{ fargateProfileName }}' /* required */,
'{{ podExecutionRoleArn }}' /* required */,
'{{ subnets }}',
'{{ selectors }}',
'{{ clientRequestToken }}',
'{{ tags }}',
'{{ name }}',
'{{ region }}'
RETURNING
fargate_profile
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: fargate_profiles
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the fargate_profiles resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the fargate_profiles resource.
    - name: fargateProfileName
      value: "{{ fargateProfileName }}"
    - name: podExecutionRoleArn
      value: "{{ podExecutionRoleArn }}"
    - name: subnets
      value:
        - "{{ subnets }}"
    - name: selectors
      value:
        - namespace: "{{ namespace }}"
          labels: "{{ labels }}"
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them. The following basic restrictions apply to tags: Maximum number of tags per resource – 50 For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length – 128 Unicode characters in UTF-8 Maximum value length – 256 Unicode characters in UTF-8 If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_fargate_profile"
    values={[
        { label: 'delete_fargate_profile', value: 'delete_fargate_profile' }
    ]}
>
<TabItem value="delete_fargate_profile">

Deletes an Fargate profile. When you delete a Fargate profile, any Pod running on Fargate that was created with the profile is deleted. If the Pod matches another Fargate profile, then it is scheduled on Fargate with that profile. If it no longer matches any Fargate profiles, then it's not scheduled on Fargate and may remain in a pending state. Only one Fargate profile in a cluster can be in the DELETING status at a time. You must wait for a Fargate profile to finish deleting before you can delete any other profiles in that cluster.

```sql
DELETE FROM aws.eks.fargate_profiles
WHERE name = '{{ name }}' --required
AND fargate_profile_name = '{{ fargate_profile_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
