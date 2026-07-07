--- 
title: addon_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - addon_versions
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

Creates, updates, deletes, gets or lists an <code>addon_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="addon_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.eks.addon_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_addon_versions"
    values={[
        { label: 'describe_addon_versions', value: 'describe_addon_versions' }
    ]}
>
<TabItem value="describe_addon_versions">

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
    <td><CopyableCode code="addonName" /></td>
    <td><code>string</code></td>
    <td>The name of the add-on.</td>
</tr>
<tr>
    <td><CopyableCode code="addonVersions" /></td>
    <td><code>array</code></td>
    <td>An object representing information about available add-on versions and compatible Kubernetes versions.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultNamespace" /></td>
    <td><code>string</code></td>
    <td>The default Kubernetes namespace where this addon is typically installed if no custom namespace is specified.</td>
</tr>
<tr>
    <td><CopyableCode code="marketplaceInformation" /></td>
    <td><code>object</code></td>
    <td>Information about the add-on from the Amazon Web Services Marketplace.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the add-on.</td>
</tr>
<tr>
    <td><CopyableCode code="publisher" /></td>
    <td><code>string</code></td>
    <td>The publisher of the add-on.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the add-on.</td>
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
    <td><a href="#describe_addon_versions"><CopyableCode code="describe_addon_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-kubernetesVersion"><code>kubernetesVersion</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-addonName"><code>addonName</code></a>, <a href="#parameter-types"><code>types</code></a>, <a href="#parameter-publishers"><code>publishers</code></a>, <a href="#parameter-owners"><code>owners</code></a></td>
    <td>Describes the versions for an add-on. Information such as the Kubernetes versions that you can use the add-on with, the owner, publisher, and the type of the add-on are returned.</td>
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
<tr id="parameter-addonName">
    <td><CopyableCode code="addonName" /></td>
    <td><code>string</code></td>
    <td>The name of the add-on. The name must match one of the names returned by ListAddons .</td>
</tr>
<tr id="parameter-kubernetesVersion">
    <td><CopyableCode code="kubernetesVersion" /></td>
    <td><code>string</code></td>
    <td>The Kubernetes versions that you can use the add-on with.</td>
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
<tr id="parameter-owners">
    <td><CopyableCode code="owners" /></td>
    <td><code>array</code></td>
    <td>The owner of the add-on. For valid owners, don't specify a value for this property.</td>
</tr>
<tr id="parameter-publishers">
    <td><CopyableCode code="publishers" /></td>
    <td><code>array</code></td>
    <td>The publisher of the add-on. For valid publishers, don't specify a value for this property.</td>
</tr>
<tr id="parameter-types">
    <td><CopyableCode code="types" /></td>
    <td><code>array</code></td>
    <td>The type of the add-on. For valid types, don't specify a value for this property.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_addon_versions"
    values={[
        { label: 'describe_addon_versions', value: 'describe_addon_versions' }
    ]}
>
<TabItem value="describe_addon_versions">

Describes the versions for an add-on. Information such as the Kubernetes versions that you can use the add-on with, the owner, publisher, and the type of the add-on are returned.

```sql
SELECT
addonName,
addonVersions,
defaultNamespace,
marketplaceInformation,
owner,
publisher,
type_
FROM aws.eks.addon_versions
WHERE region = '{{ region }}' -- required
AND kubernetesVersion = '{{ kubernetesVersion }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND addonName = '{{ addonName }}'
AND types = '{{ types }}'
AND publishers = '{{ publishers }}'
AND owners = '{{ owners }}'
;
```
</TabItem>
</Tabs>
