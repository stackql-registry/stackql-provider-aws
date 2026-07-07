--- 
title: capabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - capabilities
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

Creates, updates, deletes, gets or lists a <code>capabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.eks.capabilities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_capability"
    values={[
        { label: 'describe_capability', value: 'describe_capability' },
        { label: 'list_capabilities', value: 'list_capabilities' }
    ]}
>
<TabItem value="describe_capability">

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
    <td>The Amazon Resource Name (ARN) of the capability.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilityName" /></td>
    <td><code>string</code></td>
    <td>The unique name of the capability within the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon EKS cluster that contains this capability.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration settings for the capability. The structure varies depending on the capability type.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp in seconds for when the capability was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deletePropagationPolicy" /></td>
    <td><code>string</code></td>
    <td>The delete propagation policy for the capability. Currently, the only supported value is RETAIN, which keeps all resources managed by the capability when the capability is deleted. (RETAIN)</td>
</tr>
<tr>
    <td><CopyableCode code="health" /></td>
    <td><code>object</code></td>
    <td>Health information for the capability, including any issues that may be affecting its operation.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp in seconds for when the capability was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that the capability uses to interact with Amazon Web Services services.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the capability. Valid values include: CREATING – The capability is being created. ACTIVE – The capability is running and available. UPDATING – The capability is being updated. DELETING – The capability is being deleted. CREATE_FAILED – The capability creation failed. UPDATE_FAILED – The capability update failed. DELETE_FAILED – The capability deletion failed. (CREATING, CREATE_FAILED, UPDATING, DELETING, DELETE_FAILED, ACTIVE, DEGRADED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of capability. Valid values are ACK, ARGOCD, or KRO. (ACK, KRO, ARGOCD)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the capability software that is currently running.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_capabilities">

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
    <td>The Amazon Resource Name (ARN) of the capability.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilityName" /></td>
    <td><code>string</code></td>
    <td>The unique name of the capability within the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp in seconds for when the capability was created.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp in seconds for when the capability was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the capability. (CREATING, CREATE_FAILED, UPDATING, DELETING, DELETE_FAILED, ACTIVE, DEGRADED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of capability. Valid values are ACK, ARGOCD, or KRO. (ACK, KRO, ARGOCD)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the capability software that is currently running.</td>
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
    <td><a href="#describe_capability"><CopyableCode code="describe_capability" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-capability_name"><code>capability_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed information about a specific managed capability in your Amazon EKS cluster, including its current status, configuration, health information, and any issues that may be affecting its operation.</td>
</tr>
<tr>
    <td><a href="#list_capabilities"><CopyableCode code="list_capabilities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all managed capabilities in your Amazon EKS cluster. You can use this operation to get an overview of all capabilities and their current status.</td>
</tr>
<tr>
    <td><a href="#create_capability"><CopyableCode code="create_capability" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-capabilityName"><code>capabilityName</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-deletePropagationPolicy"><code>deletePropagationPolicy</code></a></td>
    <td></td>
    <td>Creates a managed capability resource for an Amazon EKS cluster. Capabilities provide fully managed capabilities to build and scale with Kubernetes. When you create a capability, Amazon EKSprovisions and manages the infrastructure required to run the capability outside of your cluster. This approach reduces operational overhead and preserves cluster resources. You can only create one Capability of each type on a given Amazon EKS cluster. Valid types are Argo CD for declarative GitOps deployment, Amazon Web Services Controllers for Kubernetes (ACK) for resource management, and Kube Resource Orchestrator (KRO) for Kubernetes custom resource orchestration. For more information, see EKS Capabilities in the Amazon EKS User Guide.</td>
</tr>
<tr>
    <td><a href="#update_capability"><CopyableCode code="update_capability" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-capability_name"><code>capability_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration of a managed capability in your Amazon EKS cluster. You can update the IAM role, configuration settings, and delete propagation policy for a capability. When you update a capability, Amazon EKS applies the changes and may restart capability components as needed. The capability remains available during the update process, but some operations may be temporarily unavailable.</td>
</tr>
<tr>
    <td><a href="#delete_capability"><CopyableCode code="delete_capability" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-capability_name"><code>capability_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a managed capability from your Amazon EKS cluster. When you delete a capability, Amazon EKS removes the capability infrastructure but retains all resources that were managed by the capability. Before deleting a capability, you should delete all Kubernetes resources that were created by the capability. After the capability is deleted, these resources become difficult to manage because the controller that managed them is no longer available. To delete resources before removing the capability, use kubectl delete or remove them through your GitOps workflow.</td>
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
<tr id="parameter-capability_name">
    <td><CopyableCode code="capability_name" /></td>
    <td><code>string</code></td>
    <td>The name of the capability to delete.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon EKS cluster that contains the capability you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned nextToken value. If you don't specify a value, the default is 100 results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_capability"
    values={[
        { label: 'describe_capability', value: 'describe_capability' },
        { label: 'list_capabilities', value: 'list_capabilities' }
    ]}
>
<TabItem value="describe_capability">

Returns detailed information about a specific managed capability in your Amazon EKS cluster, including its current status, configuration, health information, and any issues that may be affecting its operation.

```sql
SELECT
arn,
capabilityName,
clusterName,
configuration,
createdAt,
deletePropagationPolicy,
health,
modifiedAt,
roleArn,
status,
tags,
type_,
version
FROM aws.eks.capabilities
WHERE name = '{{ name }}' -- required
AND capability_name = '{{ capability_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_capabilities">

Lists all managed capabilities in your Amazon EKS cluster. You can use this operation to get an overview of all capabilities and their current status.

```sql
SELECT
arn,
capabilityName,
createdAt,
modifiedAt,
status,
type_,
version
FROM aws.eks.capabilities
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_capability"
    values={[
        { label: 'create_capability', value: 'create_capability' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_capability">

Creates a managed capability resource for an Amazon EKS cluster. Capabilities provide fully managed capabilities to build and scale with Kubernetes. When you create a capability, Amazon EKSprovisions and manages the infrastructure required to run the capability outside of your cluster. This approach reduces operational overhead and preserves cluster resources. You can only create one Capability of each type on a given Amazon EKS cluster. Valid types are Argo CD for declarative GitOps deployment, Amazon Web Services Controllers for Kubernetes (ACK) for resource management, and Kube Resource Orchestrator (KRO) for Kubernetes custom resource orchestration. For more information, see EKS Capabilities in the Amazon EKS User Guide.

```sql
INSERT INTO aws.eks.capabilities (
capabilityName,
clientRequestToken,
type,
roleArn,
configuration,
tags,
deletePropagationPolicy,
name,
region
)
SELECT 
'{{ capabilityName }}' /* required */,
'{{ clientRequestToken }}',
'{{ type }}' /* required */,
'{{ roleArn }}' /* required */,
'{{ configuration }}',
'{{ tags }}',
'{{ deletePropagationPolicy }}' /* required */,
'{{ name }}',
'{{ region }}'
RETURNING
capability
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: capabilities
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the capabilities resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the capabilities resource.
    - name: capabilityName
      value: "{{ capabilityName }}"
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
    - name: type
      value: "{{ type }}"
      valid_values: ['ACK', 'KRO', 'ARGOCD']
    - name: roleArn
      value: "{{ roleArn }}"
    - name: configuration
      description: |
        Configuration settings for a capability. The structure of this object varies depending on the capability type.
      value:
        argoCd:
          namespace: "{{ namespace }}"
          awsIdc:
            idcInstanceArn: "{{ idcInstanceArn }}"
            idcRegion: "{{ idcRegion }}"
          rbacRoleMappings:
            - role: "{{ role }}"
              identities: "{{ identities }}"
          networkAccess:
            vpceIds:
              - "{{ vpceIds }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them. The following basic restrictions apply to tags: Maximum number of tags per resource – 50 For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length – 128 Unicode characters in UTF-8 Maximum value length – 256 Unicode characters in UTF-8 If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
    - name: deletePropagationPolicy
      value: "{{ deletePropagationPolicy }}"
      valid_values: ['RETAIN']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_capability"
    values={[
        { label: 'update_capability', value: 'update_capability' }
    ]}
>
<TabItem value="update_capability">

Updates the configuration of a managed capability in your Amazon EKS cluster. You can update the IAM role, configuration settings, and delete propagation policy for a capability. When you update a capability, Amazon EKS applies the changes and may restart capability components as needed. The capability remains available during the update process, but some operations may be temporarily unavailable.

```sql
UPDATE aws.eks.capabilities
SET 
roleArn = '{{ roleArn }}',
configuration = '{{ configuration }}',
clientRequestToken = '{{ clientRequestToken }}',
deletePropagationPolicy = '{{ deletePropagationPolicy }}'
WHERE 
name = '{{ name }}' --required
AND capability_name = '{{ capability_name }}' --required
AND region = '{{ region }}' --required
RETURNING
update;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_capability"
    values={[
        { label: 'delete_capability', value: 'delete_capability' }
    ]}
>
<TabItem value="delete_capability">

Deletes a managed capability from your Amazon EKS cluster. When you delete a capability, Amazon EKS removes the capability infrastructure but retains all resources that were managed by the capability. Before deleting a capability, you should delete all Kubernetes resources that were created by the capability. After the capability is deleted, these resources become difficult to manage because the controller that managed them is no longer available. To delete resources before removing the capability, use kubectl delete or remove them through your GitOps workflow.

```sql
DELETE FROM aws.eks.capabilities
WHERE name = '{{ name }}' --required
AND capability_name = '{{ capability_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
