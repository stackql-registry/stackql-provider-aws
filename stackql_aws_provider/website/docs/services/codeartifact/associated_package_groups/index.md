--- 
title: associated_package_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - associated_package_groups
  - codeartifact
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

Creates, updates, deletes, gets or lists an <code>associated_package_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="associated_package_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeartifact.associated_package_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_associated_package_group"
    values={[
        { label: 'get_associated_package_group', value: 'get_associated_package_group' }
    ]}
>
<TabItem value="get_associated_package_group">

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
    <td><CopyableCode code="association_type" /></td>
    <td><code>string</code></td>
    <td>Describes the strength of the association between the package and package group. A strong match is also known as an exact match, and a weak match is known as a relative match. (STRONG, WEAK)</td>
</tr>
<tr>
    <td><CopyableCode code="package_group" /></td>
    <td><code>object</code></td>
    <td>The package group that is associated with the requested package.</td>
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
    <td><a href="#get_associated_package_group"><CopyableCode code="get_associated_package_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-package"><code>package</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-namespace"><code>namespace</code></a></td>
    <td>Returns the most closely associated package group to the specified package. This API does not require that the package exist in any repository in the domain. As such, GetAssociatedPackageGroup can be used to see which package group's origin configuration applies to a package before that package is in a repository. This can be helpful to check if public packages are blocked without ingesting them. For information package group association and matching, see Package group definition syntax and matching behavior in the CodeArtifact User Guide.</td>
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
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The name of the domain that contains the package from which to get the associated package group.</td>
</tr>
<tr id="parameter-format">
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>The format of the package from which to get the associated package group.</td>
</tr>
<tr id="parameter-package">
    <td><CopyableCode code="package" /></td>
    <td><code>string</code></td>
    <td>The package from which to get the associated package group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-domain-owner">
    <td><CopyableCode code="domain-owner" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the package from which to get the associated package group. The package component that specifies its namespace depends on its type. For example: The namespace is required when getting associated package groups from packages of the following formats: Maven Swift generic The namespace of a Maven package version is its groupId. The namespace of an npm or Swift package version is its scope. The namespace of a generic package is its namespace. Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_associated_package_group"
    values={[
        { label: 'get_associated_package_group', value: 'get_associated_package_group' }
    ]}
>
<TabItem value="get_associated_package_group">

Returns the most closely associated package group to the specified package. This API does not require that the package exist in any repository in the domain. As such, GetAssociatedPackageGroup can be used to see which package group's origin configuration applies to a package before that package is in a repository. This can be helpful to check if public packages are blocked without ingesting them. For information package group association and matching, see Package group definition syntax and matching behavior in the CodeArtifact User Guide.

```sql
SELECT
association_type,
package_group
FROM aws.codeartifact.associated_package_groups
WHERE domain = '{{ domain }}' -- required
AND format = '{{ format }}' -- required
AND package = '{{ package }}' -- required
AND region = '{{ region }}' -- required
AND `domain-owner` = '{{ domain-owner }}'
AND namespace = '{{ namespace }}'
;
```
</TabItem>
</Tabs>
