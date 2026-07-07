--- 
title: package_version_dependencies
hide_title: false
hide_table_of_contents: false
keywords:
  - package_version_dependencies
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

Creates, updates, deletes, gets or lists a <code>package_version_dependencies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="package_version_dependencies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeartifact.package_version_dependencies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_package_version_dependencies"
    values={[
        { label: 'list_package_version_dependencies', value: 'list_package_version_dependencies' }
    ]}
>
<TabItem value="list_package_version_dependencies">

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
    <td><CopyableCode code="dependencies" /></td>
    <td><code>array</code></td>
    <td>The returned list of PackageDependency objects.</td>
</tr>
<tr>
    <td><CopyableCode code="format_" /></td>
    <td><code>string</code></td>
    <td>A format that specifies the type of the package that contains the returned dependencies. (npm, pypi, maven, nuget, generic, ruby, swift, cargo)</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the package version that contains the returned dependencies. The package component that specifies its namespace depends on its type. For example: The namespace is required when listing dependencies from package versions of the following formats: Maven The namespace of a Maven package version is its groupId. The namespace of an npm package version is its scope. Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace. (pattern: &lt;code&gt;&#91;^#/\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="package" /></td>
    <td><code>string</code></td>
    <td>The name of the package that contains the returned package versions dependencies. (pattern: &lt;code&gt;&#91;^#/\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the package that is specified in the request. (pattern: &lt;code&gt;&#91;^#/\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="versionRevision" /></td>
    <td><code>string</code></td>
    <td>The current revision associated with the package version. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
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
    <td><a href="#list_package_version_dependencies"><CopyableCode code="list_package_version_dependencies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-package"><code>package</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Returns the direct dependencies for a package version. The dependencies are returned as PackageDependency objects. CodeArtifact extracts the dependencies for a package version from the metadata file for the package format (for example, the package.json file for npm packages and the pom.xml file for Maven). Any package version dependencies that are not listed in the configuration file are not returned.</td>
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
    <td>The name of the domain that contains the repository that contains the requested package version dependencies.</td>
</tr>
<tr id="parameter-format">
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>The format of the package with the requested dependencies.</td>
</tr>
<tr id="parameter-package">
    <td><CopyableCode code="package" /></td>
    <td><code>string</code></td>
    <td>The name of the package versions' package.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-repository">
    <td><CopyableCode code="repository" /></td>
    <td><code>string</code></td>
    <td>The name of the repository that contains the requested package version.</td>
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
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the package version with the requested dependencies. The package component that specifies its namespace depends on its type. For example: The namespace is required when listing dependencies from package versions of the following formats: Maven The namespace of a Maven package version is its groupId. The namespace of an npm package version is its scope. Python and NuGet package versions do not contain a corresponding component, package versions of those formats do not have a namespace.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_package_version_dependencies"
    values={[
        { label: 'list_package_version_dependencies', value: 'list_package_version_dependencies' }
    ]}
>
<TabItem value="list_package_version_dependencies">

Returns the direct dependencies for a package version. The dependencies are returned as PackageDependency objects. CodeArtifact extracts the dependencies for a package version from the metadata file for the package format (for example, the package.json file for npm packages and the pom.xml file for Maven). Any package version dependencies that are not listed in the configuration file are not returned.

```sql
SELECT
dependencies,
format_,
namespace,
nextToken,
package,
version,
versionRevision
FROM aws.codeartifact.package_version_dependencies
WHERE domain = '{{ domain }}' -- required
AND repository = '{{ repository }}' -- required
AND format = '{{ format }}' -- required
AND package = '{{ package }}' -- required
AND version = '{{ version }}' -- required
AND region = '{{ region }}' -- required
AND `domain-owner` = '{{ domain-owner }}'
AND namespace = '{{ namespace }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>
