--- 
title: package_version_assets
hide_title: false
hide_table_of_contents: false
keywords:
  - package_version_assets
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

Creates, updates, deletes, gets or lists a <code>package_version_assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="package_version_assets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeartifact.package_version_assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_package_version_asset"
    values={[
        { label: 'get_package_version_asset', value: 'get_package_version_asset' },
        { label: 'list_package_version_assets', value: 'list_package_version_assets' }
    ]}
>
<TabItem value="get_package_version_asset">

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
    <td><CopyableCode code="asset" /></td>
    <td><code>string (byte)</code></td>
    <td>The binary file, or asset, that is downloaded.</td>
</tr>
<tr>
    <td><CopyableCode code="assetName" /></td>
    <td><code>string</code></td>
    <td>The name of the asset that is downloaded. (pattern: &lt;code&gt;\P&#123;C&#125;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="packageVersion" /></td>
    <td><code>string</code></td>
    <td>A string that contains the package version (for example, 3.5.2). (pattern: &lt;code&gt;&#91;^#/\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="packageVersionRevision" /></td>
    <td><code>string</code></td>
    <td>The name of the package version revision that contains the downloaded asset. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_package_version_assets">

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
    <td>The name of the asset. (pattern: &lt;code&gt;\P&#123;C&#125;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hashes" /></td>
    <td><code>object</code></td>
    <td>The hashes of the asset.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the asset.</td>
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
    <td><a href="#get_package_version_asset"><CopyableCode code="get_package_version_asset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-package"><code>package</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-asset"><code>asset</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-revision"><code>revision</code></a></td>
    <td>Returns an asset (or file) that is in a package. For example, for a Maven package version, use GetPackageVersionAsset to download a JAR file, a POM file, or any other assets in the package version.</td>
</tr>
<tr>
    <td><a href="#list_package_version_assets"><CopyableCode code="list_package_version_assets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-package"><code>package</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Returns a list of AssetSummary objects for assets in a package version.</td>
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
<tr id="parameter-asset">
    <td><CopyableCode code="asset" /></td>
    <td><code>string</code></td>
    <td>The name of the requested asset.</td>
</tr>
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The name of the domain that contains the repository associated with the package version assets.</td>
</tr>
<tr id="parameter-format">
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>The format of the package that contains the requested package version assets.</td>
</tr>
<tr id="parameter-package">
    <td><CopyableCode code="package" /></td>
    <td><code>string</code></td>
    <td>The name of the package that contains the requested package version assets.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-repository">
    <td><CopyableCode code="repository" /></td>
    <td><code>string</code></td>
    <td>The name of the repository that contains the package that contains the requested package version assets.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>A string that contains the package version (for example, 3.5.2).</td>
</tr>
<tr id="parameter-domain-owner">
    <td><CopyableCode code="domain-owner" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the package version that contains the requested package version assets. The package component that specifies its namespace depends on its type. For example: The namespace is required requesting assets from package versions of the following formats: Maven Swift generic The namespace of a Maven package version is its groupId. The namespace of an npm or Swift package version is its scope. The namespace of a generic package is its namespace. Python, NuGet, Ruby, and Cargo package versions do not contain a corresponding component, package versions of those formats do not have a namespace.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-revision">
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The name of the package version revision that contains the requested asset.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_package_version_asset"
    values={[
        { label: 'get_package_version_asset', value: 'get_package_version_asset' },
        { label: 'list_package_version_assets', value: 'list_package_version_assets' }
    ]}
>
<TabItem value="get_package_version_asset">

Returns an asset (or file) that is in a package. For example, for a Maven package version, use GetPackageVersionAsset to download a JAR file, a POM file, or any other assets in the package version.

```sql
SELECT
asset,
assetName,
packageVersion,
packageVersionRevision
FROM aws.codeartifact.package_version_assets
WHERE domain = '{{ domain }}' -- required
AND repository = '{{ repository }}' -- required
AND format = '{{ format }}' -- required
AND package = '{{ package }}' -- required
AND version = '{{ version }}' -- required
AND asset = '{{ asset }}' -- required
AND region = '{{ region }}' -- required
AND `domain-owner` = '{{ domain-owner }}'
AND namespace = '{{ namespace }}'
AND revision = '{{ revision }}'
;
```
</TabItem>
<TabItem value="list_package_version_assets">

Returns a list of AssetSummary objects for assets in a package version.

```sql
SELECT
name,
hashes,
size
FROM aws.codeartifact.package_version_assets
WHERE domain = '{{ domain }}' -- required
AND repository = '{{ repository }}' -- required
AND format = '{{ format }}' -- required
AND package = '{{ package }}' -- required
AND version = '{{ version }}' -- required
AND region = '{{ region }}' -- required
AND `domain-owner` = '{{ domain-owner }}'
AND namespace = '{{ namespace }}'
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>
