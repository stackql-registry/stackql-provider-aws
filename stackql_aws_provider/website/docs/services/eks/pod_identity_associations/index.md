--- 
title: pod_identity_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - pod_identity_associations
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

Creates, updates, deletes, gets or lists a <code>pod_identity_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pod_identity_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.eks.pod_identity_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_pod_identity_association"
    values={[
        { label: 'describe_pod_identity_association', value: 'describe_pod_identity_association' },
        { label: 'list_pod_identity_associations', value: 'list_pod_identity_associations' }
    ]}
>
<TabItem value="describe_pod_identity_association">

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
    <td><CopyableCode code="association_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_name" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster that the association is in.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that the association was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="disable_session_tags" /></td>
    <td><code>boolean</code></td>
    <td>The state of the automatic sessions tags. The value of true disables these tags. EKS Pod Identity adds a pre-defined set of session tags when it assumes the role. You can use these tags to author a single role that can work across resources by allowing access to Amazon Web Services resources based on matching tags. By default, EKS Pod Identity attaches six tags, including tags for cluster name, namespace, and service account name. For the list of tags added by EKS Pod Identity, see List of session tags added by EKS Pod Identity in the Amazon EKS User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="external_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this EKS Pod Identity association for a target IAM role. You put this value in the trust policy of the target role, in a Condition to match the sts.ExternalId. This ensures that the target role can only be assumed by this association. This prevents the confused deputy problem. For more information about the confused deputy problem, see The confused deputy problem in the IAM User Guide. If you want to use the same target role with multiple associations or other roles, use independent statements in the trust policy to allow sts:AssumeRole access from each role.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent timestamp that the association was modified at.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The name of the Kubernetes namespace inside the cluster to create the association in. The service account and the Pods that use the service account must be in this namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_arn" /></td>
    <td><code>string</code></td>
    <td>If defined, the EKS Pod Identity association is owned by an Amazon EKS add-on.</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>An optional IAM policy in JSON format (as an escaped string) that applies additional restrictions to this pod identity association beyond the IAM policies attached to the IAM role. This policy is applied as the intersection of the role's policies and this policy, allowing you to reduce the permissions that applications in the pods can use. Use this policy to enforce least privilege access while still leveraging a shared IAM role across multiple applications.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role to associate with the service account. The EKS Pod Identity agent manages credentials to assume this role for applications in the containers in the Pods that use this service account.</td>
</tr>
<tr>
    <td><CopyableCode code="service_account" /></td>
    <td><code>string</code></td>
    <td>The name of the Kubernetes service account inside the cluster to associate the IAM credentials with.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources. The following basic restrictions apply to tags: Maximum number of tags per resource – 50 For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length – 128 Unicode characters in UTF-8 Maximum value length – 256 Unicode characters in UTF-8 If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.</td>
</tr>
<tr>
    <td><CopyableCode code="target_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the target IAM role to associate with the service account. This role is assumed by using the EKS Pod Identity association role, then the credentials for this role are injected into the Pod.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_pod_identity_associations">

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
    <td><CopyableCode code="association_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_name" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster that the association is in.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The name of the Kubernetes namespace inside the cluster to create the association in. The service account and the Pods that use the service account must be in this namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_arn" /></td>
    <td><code>string</code></td>
    <td>If defined, the association is owned by an Amazon EKS add-on.</td>
</tr>
<tr>
    <td><CopyableCode code="service_account" /></td>
    <td><code>string</code></td>
    <td>The name of the Kubernetes service account inside the cluster to associate the IAM credentials with.</td>
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
    <td><a href="#describe_pod_identity_association"><CopyableCode code="describe_pod_identity_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-association_id"><code>association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns descriptive information about an EKS Pod Identity association. This action requires the ID of the association. You can get the ID from the response to the CreatePodIdentityAssocation for newly created associations. Or, you can list the IDs for associations with ListPodIdentityAssociations and filter the list by namespace or service account.</td>
</tr>
<tr>
    <td><a href="#list_pod_identity_associations"><CopyableCode code="list_pod_identity_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-serviceAccount"><code>serviceAccount</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List the EKS Pod Identity associations in a cluster. You can filter the list by the namespace that the association is in or the service account that the association uses.</td>
</tr>
<tr>
    <td><a href="#create_pod_identity_association"><CopyableCode code="create_pod_identity_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-serviceAccount"><code>serviceAccount</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Creates an EKS Pod Identity association between a service account in an Amazon EKS cluster and an IAM role with EKS Pod Identity. Use EKS Pod Identity to give temporary IAM credentials to Pods and the credentials are rotated automatically. Amazon EKS Pod Identity associations provide the ability to manage credentials for your applications, similar to the way that Amazon EC2 instance profiles provide credentials to Amazon EC2 instances. If a Pod uses a service account that has an association, Amazon EKS sets environment variables in the containers of the Pod. The environment variables configure the Amazon Web Services SDKs, including the Command Line Interface, to use the EKS Pod Identity credentials. EKS Pod Identity is a simpler method than IAM roles for service accounts, as this method doesn't use OIDC identity providers. Additionally, you can configure a role for EKS Pod Identity once, and reuse it across clusters. Similar to Amazon Web Services IAM behavior, EKS Pod Identity associations are eventually consistent, and may take several seconds to be effective after the initial API call returns successfully. You must design your applications to account for these potential delays. We recommend that you don’t include association create/updates in the critical, high-availability code paths of your application. Instead, make changes in a separate initialization or setup routine that you run less frequently. You can set a target IAM role in the same or a different account for advanced scenarios. With a target role, EKS Pod Identity automatically performs two role assumptions in sequence: first assuming the role in the association that is in this account, then using those credentials to assume the target IAM role. This process provides your Pod with temporary credentials that have the permissions defined in the target role, allowing secure access to resources in another Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#update_pod_identity_association"><CopyableCode code="update_pod_identity_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-association_id"><code>association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a EKS Pod Identity association. In an update, you can change the IAM role, the target IAM role, or disableSessionTags. You must change at least one of these in an update. An association can't be moved between clusters, namespaces, or service accounts. If you need to edit the namespace or service account, you need to delete the association and then create a new association with your desired settings. Similar to Amazon Web Services IAM behavior, EKS Pod Identity associations are eventually consistent, and may take several seconds to be effective after the initial API call returns successfully. You must design your applications to account for these potential delays. We recommend that you don’t include association create/updates in the critical, high-availability code paths of your application. Instead, make changes in a separate initialization or setup routine that you run less frequently. You can set a target IAM role in the same or a different account for advanced scenarios. With a target role, EKS Pod Identity automatically performs two role assumptions in sequence: first assuming the role in the association that is in this account, then using those credentials to assume the target IAM role. This process provides your Pod with temporary credentials that have the permissions defined in the target role, allowing secure access to resources in another Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#delete_pod_identity_association"><CopyableCode code="delete_pod_identity_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-association_id"><code>association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a EKS Pod Identity association. The temporary Amazon Web Services credentials from the previous IAM role session might still be valid until the session expiry. If you need to immediately revoke the temporary session credentials, then go to the role in the IAM console.</td>
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
<tr id="parameter-association_id">
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the association to be deleted.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The cluster name that</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of EKS Pod Identity association results returned by ListPodIdentityAssociations in paginated output. When you use this parameter, ListPodIdentityAssociations returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListPodIdentityAssociations request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListPodIdentityAssociations returns up to 100 results and a nextToken value if applicable.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The name of the Kubernetes namespace inside the cluster that the associations are in.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated ListUpdates request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</td>
</tr>
<tr id="parameter-serviceAccount">
    <td><CopyableCode code="serviceAccount" /></td>
    <td><code>string</code></td>
    <td>The name of the Kubernetes service account that the associations use.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_pod_identity_association"
    values={[
        { label: 'describe_pod_identity_association', value: 'describe_pod_identity_association' },
        { label: 'list_pod_identity_associations', value: 'list_pod_identity_associations' }
    ]}
>
<TabItem value="describe_pod_identity_association">

Returns descriptive information about an EKS Pod Identity association. This action requires the ID of the association. You can get the ID from the response to the CreatePodIdentityAssocation for newly created associations. Or, you can list the IDs for associations with ListPodIdentityAssociations and filter the list by namespace or service account.

```sql
SELECT
association_arn,
association_id,
cluster_name,
created_at,
disable_session_tags,
external_id,
modified_at,
namespace,
owner_arn,
policy,
role_arn,
service_account,
tags,
target_role_arn
FROM aws.eks.pod_identity_associations
WHERE name = '{{ name }}' -- required
AND association_id = '{{ association_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_pod_identity_associations">

List the EKS Pod Identity associations in a cluster. You can filter the list by the namespace that the association is in or the service account that the association uses.

```sql
SELECT
association_arn,
association_id,
cluster_name,
namespace,
owner_arn,
service_account
FROM aws.eks.pod_identity_associations
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
AND namespace = '{{ namespace }}'
AND serviceAccount = '{{ serviceAccount }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_pod_identity_association"
    values={[
        { label: 'create_pod_identity_association', value: 'create_pod_identity_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_pod_identity_association">

Creates an EKS Pod Identity association between a service account in an Amazon EKS cluster and an IAM role with EKS Pod Identity. Use EKS Pod Identity to give temporary IAM credentials to Pods and the credentials are rotated automatically. Amazon EKS Pod Identity associations provide the ability to manage credentials for your applications, similar to the way that Amazon EC2 instance profiles provide credentials to Amazon EC2 instances. If a Pod uses a service account that has an association, Amazon EKS sets environment variables in the containers of the Pod. The environment variables configure the Amazon Web Services SDKs, including the Command Line Interface, to use the EKS Pod Identity credentials. EKS Pod Identity is a simpler method than IAM roles for service accounts, as this method doesn't use OIDC identity providers. Additionally, you can configure a role for EKS Pod Identity once, and reuse it across clusters. Similar to Amazon Web Services IAM behavior, EKS Pod Identity associations are eventually consistent, and may take several seconds to be effective after the initial API call returns successfully. You must design your applications to account for these potential delays. We recommend that you don’t include association create/updates in the critical, high-availability code paths of your application. Instead, make changes in a separate initialization or setup routine that you run less frequently. You can set a target IAM role in the same or a different account for advanced scenarios. With a target role, EKS Pod Identity automatically performs two role assumptions in sequence: first assuming the role in the association that is in this account, then using those credentials to assume the target IAM role. This process provides your Pod with temporary credentials that have the permissions defined in the target role, allowing secure access to resources in another Amazon Web Services account.

```sql
INSERT INTO aws.eks.pod_identity_associations (
namespace,
serviceAccount,
roleArn,
clientRequestToken,
tags,
disableSessionTags,
targetRoleArn,
policy,
name,
region
)
SELECT 
'{{ namespace }}' /* required */,
'{{ serviceAccount }}' /* required */,
'{{ roleArn }}' /* required */,
'{{ clientRequestToken }}',
'{{ tags }}',
{{ disableSessionTags }},
'{{ targetRoleArn }}',
'{{ policy }}',
'{{ name }}',
'{{ region }}'
RETURNING
association
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: pod_identity_associations
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the pod_identity_associations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the pod_identity_associations resource.
    - name: namespace
      value: "{{ namespace }}"
    - name: serviceAccount
      value: "{{ serviceAccount }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them. The following basic restrictions apply to tags: Maximum number of tags per resource – 50 For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length – 128 Unicode characters in UTF-8 Maximum value length – 256 Unicode characters in UTF-8 If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
    - name: disableSessionTags
      value: {{ disableSessionTags }}
    - name: targetRoleArn
      value: "{{ targetRoleArn }}"
    - name: policy
      value: "{{ policy }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_pod_identity_association"
    values={[
        { label: 'update_pod_identity_association', value: 'update_pod_identity_association' }
    ]}
>
<TabItem value="update_pod_identity_association">

Updates a EKS Pod Identity association. In an update, you can change the IAM role, the target IAM role, or disableSessionTags. You must change at least one of these in an update. An association can't be moved between clusters, namespaces, or service accounts. If you need to edit the namespace or service account, you need to delete the association and then create a new association with your desired settings. Similar to Amazon Web Services IAM behavior, EKS Pod Identity associations are eventually consistent, and may take several seconds to be effective after the initial API call returns successfully. You must design your applications to account for these potential delays. We recommend that you don’t include association create/updates in the critical, high-availability code paths of your application. Instead, make changes in a separate initialization or setup routine that you run less frequently. You can set a target IAM role in the same or a different account for advanced scenarios. With a target role, EKS Pod Identity automatically performs two role assumptions in sequence: first assuming the role in the association that is in this account, then using those credentials to assume the target IAM role. This process provides your Pod with temporary credentials that have the permissions defined in the target role, allowing secure access to resources in another Amazon Web Services account.

```sql
UPDATE aws.eks.pod_identity_associations
SET 
roleArn = '{{ roleArn }}',
clientRequestToken = '{{ clientRequestToken }}',
disableSessionTags = {{ disableSessionTags }},
targetRoleArn = '{{ targetRoleArn }}',
policy = '{{ policy }}'
WHERE 
name = '{{ name }}' --required
AND association_id = '{{ association_id }}' --required
AND region = '{{ region }}' --required
RETURNING
association;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_pod_identity_association"
    values={[
        { label: 'delete_pod_identity_association', value: 'delete_pod_identity_association' }
    ]}
>
<TabItem value="delete_pod_identity_association">

Deletes a EKS Pod Identity association. The temporary Amazon Web Services credentials from the previous IAM role session might still be valid until the session expiry. If you need to immediately revoke the temporary session credentials, then go to the role in the IAM console.

```sql
DELETE FROM aws.eks.pod_identity_associations
WHERE name = '{{ name }}' --required
AND association_id = '{{ association_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
