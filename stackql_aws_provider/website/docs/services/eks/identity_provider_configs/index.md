--- 
title: identity_provider_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_provider_configs
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

Creates, updates, deletes, gets or lists an <code>identity_provider_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_provider_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.eks.identity_provider_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_identity_provider_config"
    values={[
        { label: 'describe_identity_provider_config', value: 'describe_identity_provider_config' },
        { label: 'list_identity_provider_configs', value: 'list_identity_provider_configs' }
    ]}
>
<TabItem value="describe_identity_provider_config">

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
    <td><CopyableCode code="oidc" /></td>
    <td><code>object</code></td>
    <td>An object representing an OpenID Connect (OIDC) identity provider configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_identity_provider_configs">

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
    <td>The name of the identity provider configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the identity provider configuration. The only type available is oidc.</td>
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
    <td><a href="#describe_identity_provider_config"><CopyableCode code="describe_identity_provider_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an identity provider configuration.</td>
</tr>
<tr>
    <td><a href="#list_identity_provider_configs"><CopyableCode code="list_identity_provider_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the identity provider configurations for your cluster.</td>
</tr>
<tr>
    <td><a href="#associate_identity_provider_config"><CopyableCode code="associate_identity_provider_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-oidc"><code>oidc</code></a></td>
    <td></td>
    <td>Associates an identity provider configuration to a cluster. If you want to authenticate identities using an identity provider, you can create an identity provider configuration and associate it to your cluster. After configuring authentication to your cluster you can create Kubernetes Role and ClusterRole objects, assign permissions to them, and then bind them to the identities using Kubernetes RoleBinding and ClusterRoleBinding objects. For more information see Using RBAC Authorization in the Kubernetes documentation.</td>
</tr>
<tr>
    <td><a href="#disassociate_identity_provider_config"><CopyableCode code="disassociate_identity_provider_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-identityProviderConfig"><code>identityProviderConfig</code></a></td>
    <td></td>
    <td>Disassociates an identity provider configuration from a cluster. If you disassociate an identity provider from your cluster, users included in the provider can no longer access the cluster. However, you can still access the cluster with IAM principals.</td>
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
    defaultValue="describe_identity_provider_config"
    values={[
        { label: 'describe_identity_provider_config', value: 'describe_identity_provider_config' },
        { label: 'list_identity_provider_configs', value: 'list_identity_provider_configs' }
    ]}
>
<TabItem value="describe_identity_provider_config">

Describes an identity provider configuration.

```sql
SELECT
oidc
FROM aws.eks.identity_provider_configs
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_identity_provider_configs">

Lists the identity provider configurations for your cluster.

```sql
SELECT
name,
type_
FROM aws.eks.identity_provider_configs
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_identity_provider_config"
    values={[
        { label: 'associate_identity_provider_config', value: 'associate_identity_provider_config' },
        { label: 'disassociate_identity_provider_config', value: 'disassociate_identity_provider_config' }
    ]}
>
<TabItem value="associate_identity_provider_config">

Associates an identity provider configuration to a cluster. If you want to authenticate identities using an identity provider, you can create an identity provider configuration and associate it to your cluster. After configuring authentication to your cluster you can create Kubernetes Role and ClusterRole objects, assign permissions to them, and then bind them to the identities using Kubernetes RoleBinding and ClusterRoleBinding objects. For more information see Using RBAC Authorization in the Kubernetes documentation.

```sql
UPDATE aws.eks.identity_provider_configs
SET 
oidc = '{{ oidc }}',
tags = '{{ tags }}',
clientRequestToken = '{{ clientRequestToken }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND oidc = '{{ oidc }}' --required
RETURNING
tags,
update;
```
</TabItem>
<TabItem value="disassociate_identity_provider_config">

Disassociates an identity provider configuration from a cluster. If you disassociate an identity provider from your cluster, users included in the provider can no longer access the cluster. However, you can still access the cluster with IAM principals.

```sql
UPDATE aws.eks.identity_provider_configs
SET 
identityProviderConfig = '{{ identityProviderConfig }}',
clientRequestToken = '{{ clientRequestToken }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND identityProviderConfig = '{{ identityProviderConfig }}' --required
RETURNING
update;
```
</TabItem>
</Tabs>
