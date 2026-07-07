--- 
title: addons
hide_title: false
hide_table_of_contents: false
keywords:
  - addons
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

Creates, updates, deletes, gets or lists an <code>addons</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="addons" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.eks.addons" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_addon"
    values={[
        { label: 'describe_addon', value: 'describe_addon' },
        { label: 'list_addons', value: 'list_addons' }
    ]}
>
<TabItem value="describe_addon">

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
    <td><CopyableCode code="addonArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the add-on.</td>
</tr>
<tr>
    <td><CopyableCode code="addonName" /></td>
    <td><code>string</code></td>
    <td>The name of the add-on.</td>
</tr>
<tr>
    <td><CopyableCode code="addonVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the add-on.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td>The name of your cluster. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;&#91;A-Za-z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configurationValues" /></td>
    <td><code>string</code></td>
    <td>The configuration values that you provided.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp at object creation.</td>
</tr>
<tr>
    <td><CopyableCode code="health" /></td>
    <td><code>object</code></td>
    <td>An object that represents the health of the add-on.</td>
</tr>
<tr>
    <td><CopyableCode code="marketplaceInformation" /></td>
    <td><code>object</code></td>
    <td>Information about an Amazon EKS add-on from the Amazon Web Services Marketplace.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp for the last modification to the object.</td>
</tr>
<tr>
    <td><CopyableCode code="namespaceConfig" /></td>
    <td><code>object</code></td>
    <td>The namespace configuration for the addon. This specifies the Kubernetes namespace where the addon is installed.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the add-on.</td>
</tr>
<tr>
    <td><CopyableCode code="podIdentityAssociations" /></td>
    <td><code>array</code></td>
    <td>An array of EKS Pod Identity associations owned by the add-on. Each association maps a role to a service account in a namespace in the cluster. For more information, see Attach an IAM Role to an Amazon EKS add-on using EKS Pod Identity in the Amazon EKS User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="publisher" /></td>
    <td><code>string</code></td>
    <td>The publisher of the add-on.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceAccountRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that's bound to the Kubernetes ServiceAccount object that the add-on uses.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the add-on. (CREATING, ACTIVE, CREATE_FAILED, UPDATING, DELETING, DELETE_FAILED, DEGRADED, UPDATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_addons">

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
    <td><CopyableCode code="addon" /></td>
    <td><code>string</code></td>
    <td>A list of installed add-ons.</td>
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
    <td><a href="#describe_addon"><CopyableCode code="describe_addon" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-addon_name"><code>addon_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an Amazon EKS add-on.</td>
</tr>
<tr>
    <td><a href="#list_addons"><CopyableCode code="list_addons" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the installed add-ons.</td>
</tr>
<tr>
    <td><a href="#create_addon"><CopyableCode code="create_addon" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-addonName"><code>addonName</code></a></td>
    <td></td>
    <td>Creates an Amazon EKS add-on. Amazon EKS add-ons help to automate the provisioning and lifecycle management of common operational software for Amazon EKS clusters. For more information, see Amazon EKS add-ons in the Amazon EKS User Guide.</td>
</tr>
<tr>
    <td><a href="#update_addon"><CopyableCode code="update_addon" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-addon_name"><code>addon_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an Amazon EKS add-on.</td>
</tr>
<tr>
    <td><a href="#delete_addon"><CopyableCode code="delete_addon" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-addon_name"><code>addon_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-preserve"><code>preserve</code></a></td>
    <td>Deletes an Amazon EKS add-on. When you remove an add-on, it's deleted from the cluster. You can always manually start an add-on on the cluster using the Kubernetes API.</td>
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
<tr id="parameter-addon_name">
    <td><CopyableCode code="addon_name" /></td>
    <td><code>string</code></td>
    <td>The name of the add-on. The name must match one of the names returned by ListAddons .</td>
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
<tr id="parameter-preserve">
    <td><CopyableCode code="preserve" /></td>
    <td><code>boolean</code></td>
    <td>Specifying this option preserves the add-on software on your cluster but Amazon EKS stops managing any settings for the add-on. If an IAM account is associated with the add-on, it isn't removed.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_addon"
    values={[
        { label: 'describe_addon', value: 'describe_addon' },
        { label: 'list_addons', value: 'list_addons' }
    ]}
>
<TabItem value="describe_addon">

Describes an Amazon EKS add-on.

```sql
SELECT
addonArn,
addonName,
addonVersion,
clusterName,
configurationValues,
createdAt,
health,
marketplaceInformation,
modifiedAt,
namespaceConfig,
owner,
podIdentityAssociations,
publisher,
serviceAccountRoleArn,
status,
tags
FROM aws.eks.addons
WHERE name = '{{ name }}' -- required
AND addon_name = '{{ addon_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_addons">

Lists the installed add-ons.

```sql
SELECT
addon
FROM aws.eks.addons
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
    defaultValue="create_addon"
    values={[
        { label: 'create_addon', value: 'create_addon' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_addon">

Creates an Amazon EKS add-on. Amazon EKS add-ons help to automate the provisioning and lifecycle management of common operational software for Amazon EKS clusters. For more information, see Amazon EKS add-ons in the Amazon EKS User Guide.

```sql
INSERT INTO aws.eks.addons (
addonName,
addonVersion,
serviceAccountRoleArn,
resolveConflicts,
clientRequestToken,
tags,
configurationValues,
podIdentityAssociations,
namespaceConfig,
name,
region
)
SELECT 
'{{ addonName }}' /* required */,
'{{ addonVersion }}',
'{{ serviceAccountRoleArn }}',
'{{ resolveConflicts }}',
'{{ clientRequestToken }}',
'{{ tags }}',
'{{ configurationValues }}',
'{{ podIdentityAssociations }}',
'{{ namespaceConfig }}',
'{{ name }}',
'{{ region }}'
RETURNING
addon
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: addons
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the addons resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the addons resource.
    - name: addonName
      value: "{{ addonName }}"
    - name: addonVersion
      value: "{{ addonVersion }}"
    - name: serviceAccountRoleArn
      value: "{{ serviceAccountRoleArn }}"
    - name: resolveConflicts
      value: "{{ resolveConflicts }}"
      valid_values: ['OVERWRITE', 'NONE', 'PRESERVE']
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them. The following basic restrictions apply to tags: Maximum number of tags per resource – 50 For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length – 128 Unicode characters in UTF-8 Maximum value length – 256 Unicode characters in UTF-8 If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
    - name: configurationValues
      value: "{{ configurationValues }}"
    - name: podIdentityAssociations
      value:
        - serviceAccount: "{{ serviceAccount }}"
          roleArn: "{{ roleArn }}"
    - name: namespaceConfig
      description: |
        The namespace configuration request object for specifying a custom namespace when creating an addon.
      value:
        namespace: "{{ namespace }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_addon"
    values={[
        { label: 'update_addon', value: 'update_addon' }
    ]}
>
<TabItem value="update_addon">

Updates an Amazon EKS add-on.

```sql
UPDATE aws.eks.addons
SET 
addonVersion = '{{ addonVersion }}',
serviceAccountRoleArn = '{{ serviceAccountRoleArn }}',
resolveConflicts = '{{ resolveConflicts }}',
clientRequestToken = '{{ clientRequestToken }}',
configurationValues = '{{ configurationValues }}',
podIdentityAssociations = '{{ podIdentityAssociations }}'
WHERE 
name = '{{ name }}' --required
AND addon_name = '{{ addon_name }}' --required
AND region = '{{ region }}' --required
RETURNING
update;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_addon"
    values={[
        { label: 'delete_addon', value: 'delete_addon' }
    ]}
>
<TabItem value="delete_addon">

Deletes an Amazon EKS add-on. When you remove an add-on, it's deleted from the cluster. You can always manually start an add-on on the cluster using the Kubernetes API.

```sql
DELETE FROM aws.eks.addons
WHERE name = '{{ name }}' --required
AND addon_name = '{{ addon_name }}' --required
AND region = '{{ region }}' --required
AND preserve = '{{ preserve }}'
;
```
</TabItem>
</Tabs>
